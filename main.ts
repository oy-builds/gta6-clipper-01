// Entry program for the make.fun bounty gta6-clipper-01 (Node 22,
// standard library only). The entry itself is a public YouTube video;
// this program's single job is to hand the video's address to the
// grader by copying VIDEO.json from the repository root into the
// output directory, where the house reads it and then fetches the
// video's public view counts through the YouTube Data API.
//
// Outside the grader, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in
// for the repository and output directories:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync, renameSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const source = join(botDir, "VIDEO.json");
if (!existsSync(source)) {
  console.error(`VIDEO.json is missing from ${botDir}; nothing to hand in`);
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
// Copy via a scratch name and rename, so the grader never sees a
// half-written VIDEO.json even if a run is interrupted mid-copy.
const staged = join(outputDir, "VIDEO.json.part");
try {
  copyFileSync(source, staged);
  renameSync(staged, join(outputDir, "VIDEO.json"));
} catch (err) {
  console.error(`could not copy VIDEO.json into ${outputDir}: ${(err as Error).message}`);
  process.exit(1);
}
