import { readdir, mkdir, readFile, writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import { dirname, extname, relative, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outputFile = resolve(projectRoot, "js/data/media-manifest.js");
const collator = new Intl.Collator("nb", { numeric: true, sensitivity: "base" });
const imageExtensions = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);

const scan = async (folder, extensions) => {
  const absoluteFolder = resolve(projectRoot, folder);
  const entries = await readdir(absoluteFolder, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isFile() && extensions.has(extname(entry.name).toLowerCase()))
    .sort((left, right) => collator.compare(left.name, right.name))
    .map((entry) => relative(projectRoot, resolve(absoluteFolder, entry.name)).replaceAll("\\", "/"));
};

const scanRecursively = async (folder) => {
  const entries = await readdir(resolve(projectRoot, folder), { withFileTypes: true });
  const files = await Promise.all(entries.map(async (entry) => {
    const path = `${folder}/${entry.name}`;
    return entry.isDirectory() ? scanRecursively(path) : [path];
  }));
  return files.flat().sort((left, right) => collator.compare(left, right));
};

const createAssetVersions = async () => {
  const files = [...await scanRecursively("assets"), ...await scanRecursively("SVG")];
  const pairs = await Promise.all(files.map(async (path) => {
    const content = await readFile(resolve(projectRoot, path));
    return [path, createHash("sha256").update(content).digest("hex").slice(0, 12)];
  }));
  return Object.fromEntries(pairs);
};

const createComparisonPairs = (paths, type, label, version) => {
  const groups = new Map();
  paths.forEach((path) => {
    const file = path.split("/").at(-1);
    const extension = extname(file);
    const match = file.slice(0, -extension.length).match(/^(.+)-([12])$/);
    if (!match) return;
    const [, key, position] = match;
    const group = groups.get(key) || { id: `${type}-${key}`, label };
    group[position === "1" ? "before" : "after"] = version(path);
    groups.set(key, group);
  });
  return [...groups.values()]
    .filter((pair) => pair.before && pair.after)
    .sort((left, right) => collator.compare(left.id, right.id));
};

export const generateMediaManifest = async () => {
  const results = await scan("assets/images/resultater", imageExtensions);
  const videos = await scan("assets/images/Video", new Set([".mp4", ".webm"]));
  const eyebrowMedia = await scan("assets/images/øyebryn", imageExtensions);
  const eyelashMedia = await scan("assets/images/øyevipper", imageExtensions);
  const assetVersions = await createAssetVersions();
  const version = (path) => `${path}?v=${assetVersions[path]}`;
  const comparisonPairs = [
    ...createComparisonPairs(eyebrowMedia, "bryn", "Brynbehandling", version),
    ...createComparisonPairs(eyelashMedia, "vipper", "Vippeløft", version),
  ];
  const source = `// Generated from the media folders. Run npm run media:update before publishing.\nexport const assetVersions = ${JSON.stringify(assetVersions, null, 2)};\n\nexport const comparisonPairs = ${JSON.stringify(comparisonPairs, null, 2)};\n\nexport const resultMedia = ${JSON.stringify(results.map(version), null, 2)};\n\nexport const videoMedia = ${JSON.stringify(videos.map(version), null, 2)};\n`;
  await mkdir(dirname(outputFile), { recursive: true });
  await writeFile(outputFile, source, "utf8");
  return { results: results.length, videos: videos.length, comparisons: comparisonPairs.length };
};

if (process.argv[1] && pathToFileURL(resolve(process.argv[1])).href === import.meta.url) {
  const counts = await generateMediaManifest();
  console.log(`Media manifest updated: ${counts.results} resultater, ${counts.videos} videoer, ${counts.comparisons} før/etter-par.`);
}
