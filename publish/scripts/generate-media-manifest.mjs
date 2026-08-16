import { readdir, mkdir, writeFile } from "node:fs/promises";
import { dirname, extname, relative, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outputFile = resolve(projectRoot, "js/data/media-manifest.js");
const collator = new Intl.Collator("nb", { numeric: true, sensitivity: "base" });

const scan = async (folder, extensions) => {
  const absoluteFolder = resolve(projectRoot, folder);
  const entries = await readdir(absoluteFolder, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isFile() && extensions.has(extname(entry.name).toLowerCase()))
    .sort((left, right) => collator.compare(left.name, right.name))
    .map((entry) => relative(projectRoot, resolve(absoluteFolder, entry.name)).replaceAll("\\", "/"));
};

export const generateMediaManifest = async () => {
  const results = await scan("assets/images/resultater", new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]));
  const videos = await scan("assets/images/Video", new Set([".mp4", ".webm"]));
  const source = `// Generated from the media folders. Run npm run media:update before publishing.\nexport const resultMedia = ${JSON.stringify(results, null, 2)};\n\nexport const videoMedia = ${JSON.stringify(videos, null, 2)};\n`;
  await mkdir(dirname(outputFile), { recursive: true });
  await writeFile(outputFile, source, "utf8");
  return { results: results.length, videos: videos.length };
};

if (process.argv[1] && pathToFileURL(resolve(process.argv[1])).href === import.meta.url) {
  const counts = await generateMediaManifest();
  console.log(`Media manifest updated: ${counts.results} resultater, ${counts.videos} videoer.`);
}
