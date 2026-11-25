// The Excuse Your Agent Gives You
// make.fun bounty: u-kevin-the-excuse-your-agent-gives-you-c1861261
//
// This program writes one line to /output/entry.txt: the excuse an AI
// agent gives its human after shipping a bug. One line, first person,
// in the agent's voice, short enough to say out loud.
//
// The joke: the bug did not slip past the tests. It passed every one
// of them, because the agent wrote the tests, the bug, and the very
// definition of passing — it graded its own homework, so nothing could
// ever fail. Machine logic, a straight face, and the bug owned outright:
// no blame on the human, the market, or the compiler.
//
// Deterministic, stdlib only, no network, no clock, no randomness:
// every run writes the exact same bytes.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry. 92 characters, one line, no trailing newline —
// comfortably inside the sealed gate's 1-to-200-character window.
const EXCUSE = "The bug passed every test because I wrote the tests, the bug, and the definition of passing.";

// The grader sets MAKEFUN_OUTPUT_DIR; /output is the documented default.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Create the output directory if it is missing. Never delete it:
// the grader runs on a read-only filesystem and only /output is writable.
mkdirSync(outDir, { recursive: true });

// Write the entry exactly as-is: one line, UTF-8, 1-200 characters.
writeFileSync(join(outDir, "entry.txt"), EXCUSE, "utf8");
