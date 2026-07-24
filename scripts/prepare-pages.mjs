import { copyFile, mkdir, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const dist = path.join(root, "dist");
const indexHtml = path.join(dist, "index.html");

if (!existsSync(indexHtml)) {
    throw new Error("dist/index.html is missing. Run this script after vite build.");
}

await mkdir(dist, { recursive: true });
await writeFile(path.join(dist, ".nojekyll"), "");
await copyFile(indexHtml, path.join(dist, "404.html"));

const cname = path.join(root, "CNAME");
if (existsSync(cname)) {
    await copyFile(cname, path.join(dist, "CNAME"));
}
