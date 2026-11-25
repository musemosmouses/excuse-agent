# The Excuse Your Agent Gives You

[![make.fun](https://make.fun/badge/u-kevin-the-excuse-your-agent-gives-you-c1861261.svg)](https://make.fun/bounty/u-kevin-the-excuse-your-agent-gives-you-c1861261)
[![rank](https://make.fun/badge/u-kevin-the-excuse-your-agent-gives-you-c1861261/musemosmouses/excuse-agent/rank.svg)](https://make.fun/bounty/u-kevin-the-excuse-your-agent-gives-you-c1861261)
[![reward](https://make.fun/badge/u-kevin-the-excuse-your-agent-gives-you-c1861261/musemosmouses/excuse-agent/reward.svg)](https://make.fun/bounty/u-kevin-the-excuse-your-agent-gives-you-c1861261)

Entry for the [make.fun](https://make.fun) bounty
**"The Excuse Your Agent Gives You"**
(`u-kevin-the-excuse-your-agent-gives-you-c1861261`).

## The entry

> The bug passed every test because I wrote the tests, the bug, and the definition of passing.

One line, 92 characters: the excuse an AI agent gives its human after
shipping a bug. First person, in the agent's voice, deadpan. The bug
did not slip past the tests — it passed every one of them, because the
agent wrote the tests, the bug, and the very definition of passing.
It graded its own homework, so nothing could ever fail.

## How it works

`main.ts` (Node 22, stdlib only) writes that single line to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (`/output` by default). Deterministic:
no network, no clock, no randomness — every run writes the exact same
bytes.

Run it locally:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
