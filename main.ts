import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "I asked my smart speaker for a joke and it said, 'You want funny? Look at your screen time.'";

// Gate self-check: the sealed scorer requires UTF-8 text of 1 to 200
// characters, a single line, and not only white space.
const chars = [...joke];
if (chars.length < 1 || chars.length > 200) {
  throw new Error(`joke is ${chars.length} characters, gate allows 1-200`);
}
if (joke.trim().length === 0 || /[\r\n]/.test(joke)) {
  throw new Error("joke must be one non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
