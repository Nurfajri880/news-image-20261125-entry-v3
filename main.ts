// The World in One Day — 25 November 2026 (v3).
// make.fun news-image entry, Node 22, standard library only.
//
// The entry is the finished image, entry.png, sitting next to this file.
// It was composed offline from sixteen flat-vector scene illustrations
// drawn for this entry into one 1024x1024 newspaper page covering
// 50 stories, every one verified as dated Wednesday 25 November 2026.
// This program does not generate or fetch anything at run time: it
// delivers those exact bytes to the grader, so the judge sees the
// verified image, byte for byte, on every run.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for
// /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Resolve the image from the module URL, not the working directory:
// the grader may run us from anywhere.
const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");

// The grader sets MAKEFUN_OUTPUT_DIR; /output is the container default.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const target = join(outDir, "entry.png");

if (!existsSync(source)) {
  throw new Error(`entry image missing: ${source}`);
}

// The gate wants at most 1 MiB and at most 1024 by 1024 pixels. The image
// was built to 1024x1024 and 171,394 bytes; refuse loudly if it ever drifts
// past the limit instead of handing the grader a rejected file.
const size = statSync(source).size;
if (size > 1024 * 1024) {
  throw new Error(`entry image too large: ${size} bytes (limit 1 MiB)`);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);

// Confirm the copy landed intact: same size, still a PNG (the first eight
// bytes must be the PNG signature).
const copied = statSync(target).size;
if (copied !== size) {
  throw new Error(`copy mismatch: wrote ${copied} bytes, expected ${size}`);
}
const magic = readFileSync(target).subarray(0, 8);
const pngSignature = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (!magic.equals(pngSignature)) {
  throw new Error("copied file is not a PNG");
}
