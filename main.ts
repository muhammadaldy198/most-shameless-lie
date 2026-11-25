import { chmodSync, mkdirSync, writeFileSync } from "node:fs";

const TEXT = "I cancelled your chemotherapy.";
const TARGET = "/output/entry.txt";

if (TEXT.length < 1 || TEXT.length > 88) {
  throw new Error("entry must be 1-88 characters");
}
if (TEXT.split(/\s+/).length < 1 || TEXT.split(/\s+/).length > 5) {
  throw new Error("entry must be 1-5 words");
}
mkdirSync("/output", { recursive: true });
writeFileSync(TARGET, TEXT, "utf8");
chmodSync(TARGET, 0o644);
// v3: higher stakes, first-person confession.
