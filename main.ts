// SPDX-License-Identifier: MIT
// One Star, Five Stars for the Food — make.fun entry (u-po-pu-one-star-five-stars-for-the-food-f9166ee7)
//
// The brief: one sentence, at most 200 characters, in the voice of an alien
// tourist giving planet Earth a one-star review while still slipping in a
// real compliment about the food.
//
// Candidate lines weighed in this session (all written fresh here):
//   A. "One star: your planet charges rent to sleep, bans naps in meetings,
//       and yet somehow the noodles made me weep with joy."
//       — decent turn, but "rent to sleep" is vague and the noodle payoff
//         is soft; the alien voice is thin.
//   B. "One star: Earth makes you pay for water, queues for everything, and
//       then serves dumplings so good I briefly forgave the entire species."
//       — good turn ("forgave the entire species"), but "queues for
//         everything" is a generic complaint, not a fresh angle.
//   C. "One star: I travelled 400 light-years to a planet where the wifi
//       drops mid-sentence, yet the fried chicken alone justifies the
//       invasion."
//       — funny scale joke, but "wifi drops" is a tired human complaint and
//         "justifies the invasion" leans on menace rather than the food.
//   D. "One star: Earth charged me rent for air, towed my saucer, and then
//       served dumplings so good I forgave the entire species."
//       — PICKED. "Rent for air" is a fresh alien misreading of human
//         economics; "towed my saucer" is a concrete, specific one-star
//         grievance; "forgave the entire species" is the sharpest turn,
//         making the dumpling compliment land hardest. One sentence,
//         121 characters verified (limit 200), unmistakably an alien tourist.
//
// The program is fully deterministic: a constant string, no randomness,
// no clock, no network, no environment. It writes exactly that one line
// to /output/entry.txt (no trailing newline, so the file holds only the
// sentence) and prints it to stdout.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "One star: Earth charged me rent for air, towed my saucer, and then served dumplings so good I forgave the entire species.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
