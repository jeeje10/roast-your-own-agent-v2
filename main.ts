// Roast Your Own Agent, v2 (Node 22, standard library only). The entry is
// one line, at most 200 characters: a single-line roast of the entrant's own
// AI agent, funny, playful, never hateful. This program writes that line to
// /output/entry.txt, where the gate and the judge read it.
//
// Run outside the grader's container:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My agent writes a todo list before saying good morning, then asks if I'd like the morning as a PDF.";

// Guard: the gate refuses any entry over 200 characters, so fail loudly here
// instead of shipping an invalid line.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line is ${LINE.length} characters; must be 1-200 and non-blank`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE);
