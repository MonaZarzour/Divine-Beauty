import { createReadStream, statSync, watch } from "node:fs";
import { stat } from "node:fs/promises";
import { dirname, extname, resolve, sep } from "node:path";
import { createServer } from "node:http";
import { fileURLToPath } from "node:url";
import { generateMediaManifest } from "./generate-media-manifest.mjs";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const port = Number(process.argv[2]) || Number(process.env.PORT) || 4177;
const mimeTypes = { ".html": "text/html; charset=utf-8", ".css": "text/css; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".json": "application/json; charset=utf-8", ".svg": "image/svg+xml", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".png": "image/png", ".webp": "image/webp", ".avif": "image/avif", ".ico": "image/x-icon", ".mp4": "video/mp4", ".webm": "video/webm" };

const refreshManifest = async () => {
  try {
    const counts = await generateMediaManifest();
    console.log(`Media updated: ${counts.results} resultater, ${counts.videos} videoer.`);
  } catch (error) {
    console.error("Could not update media manifest:", error.message);
  }
};

await refreshManifest();
let refreshTimer;
["assets/images/resultater", "assets/images/Video"].forEach((folder) => {
  watch(resolve(projectRoot, folder), () => {
    clearTimeout(refreshTimer);
    refreshTimer = setTimeout(refreshManifest, 150);
  });
});

createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url, "http://localhost").pathname);
    const requested = resolve(projectRoot, pathname === "/" ? "index.html" : pathname.slice(1));
    if (requested !== projectRoot && !requested.startsWith(`${projectRoot}${sep}`)) {
      response.writeHead(403).end("Forbidden");
      return;
    }
    const info = await stat(requested);
    const file = info.isDirectory() ? resolve(requested, "index.html") : requested;
    const fileInfo = statSync(file);
    const type = mimeTypes[extname(file).toLowerCase()] || "application/octet-stream";
    const range = request.headers.range;
    if (range) {
      const match = /bytes=(\d*)-(\d*)/.exec(range);
      const start = match?.[1] ? Number(match[1]) : 0;
      const end = match?.[2] ? Number(match[2]) : fileInfo.size - 1;
      response.writeHead(206, { "Content-Type": type, "Content-Length": end - start + 1, "Content-Range": `bytes ${start}-${end}/${fileInfo.size}`, "Accept-Ranges": "bytes" });
      createReadStream(file, { start, end }).pipe(response);
      return;
    }
    response.writeHead(200, { "Content-Type": type, "Content-Length": fileInfo.size, "Accept-Ranges": "bytes" });
    if (request.method === "HEAD") response.end(); else createReadStream(file).pipe(response);
  } catch {
    response.writeHead(404).end("Not found");
  }
}).listen(port, "127.0.0.1", () => console.log(`Divine Beauty: http://127.0.0.1:${port}`));
