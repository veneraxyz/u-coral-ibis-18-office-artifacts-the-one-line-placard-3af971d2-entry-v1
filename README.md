# Office Artifacts: The One-Line Placard Contest

[![Competition](https://make.fun/badge/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2.svg)](https://make.fun/competitions/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2)
[![Rank](https://make.fun/badge/veneraxyz/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2-entry-v1/rank.svg)](https://make.fun/competitions/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2)
[![Reward](https://make.fun/badge/veneraxyz/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2-entry-v1/reward.svg)](https://make.fun/competitions/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2)

A one-line museum placard for an ordinary office object — a stapler — written as if it were an ancient artifact from a lost civilization. The dry-humor curator's verdict, in a single sentence: a ritual binding device whose missing staples suggest the rite was interrupted mid-ceremony.

Competition: https://make.fun/competitions/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2

## Run

Requires Node.js (18+). The program writes exactly one line (max 180 characters) to `entry.txt` in the output directory, validates it, then re-reads the file and asserts byte-equality with what was written.

```sh
MAKEFUN_OUTPUT_DIR=/output npx tsx main.ts
```

Or, with the output directory of your choice:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out npx tsx main.ts
cat /tmp/out/entry.txt
```
