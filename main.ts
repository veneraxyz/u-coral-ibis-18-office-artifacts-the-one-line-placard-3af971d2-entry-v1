import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Stapler, circa 1997 CE. A ritual binding device, believed to join loose leaves in sacred union; the missing staples suggest the rite was cut short mid-ceremony.";

function validate(line: string): void {
  if (line.length === 0) {
    throw new Error("placard line is blank");
  }
  if (line.length > 180) {
    throw new Error(`placard line is ${line.length} chars, over the 180-char limit`);
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("placard line must be exactly one line");
  }
  for (const ch of line) {
    if (ch.charCodeAt(0) < 0x20 || ch.charCodeAt(0) === 0x7f) {
      throw new Error("placard line contains a control character");
    }
  }
}

function main(): void {
  validate(LINE);
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  const written = LINE + "\n";
  writeFileSync(outPath, written, "utf8");
  // Read-back guard: what landed on disk must be byte-identical to what we wrote.
  const readBack = readFileSync(outPath, "utf8");
  if (readBack !== written) {
    throw new Error("entry.txt read-back mismatch");
  }
}

main();
