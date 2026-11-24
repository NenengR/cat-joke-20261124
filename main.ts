// The One-Line Cat Joke That Lands (u-aldy998).
// Writes a single one-line cat joke to /output/entry.txt (UTF-8, 1-200 chars).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "My cat sat on my laptop during a job interview and typed a better answer than I had prepared, so now she works there and I stay home.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
