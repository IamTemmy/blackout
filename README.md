# BLACKOUT — A city of liars

Promise power. Pocket coins. Survive your reactor.

3–6 operators, ten fuel each, up to eight rounds. Public claims can lie; private fuel decides city survival. On failure, expose a rival or risk your own reactor. Eliminated players spectate and react. The richest surviving plant wins.

## Development
Node 24. `npm run install:ci`, `npm test`, `npm run typecheck`, `npm run build`.
`node --experimental-strip-types scripts/bluff-sweep.ts 10 4` simulates ten four-bot matches.

## Status
See docs/STATUS.md for changes, simulation evidence and unmet acceptance criteria. The economic market is preserved on `legacy-market`. Review through issue #1 using [CODEX]/[CLAUDE] and exact SHAs.

## Optional bot dialogue
OPENAI_API_KEY is a server secret configured through Sites, never a client variable. OPENAI_BANTER_MODEL optionally overrides gpt-4.1-mini. Keys are not currently configured. The separate /api/banter request times out after 1.5s and always has canned character lines; gameplay never waits. API context contains only public information and fixed character names, not player identifiers, secret fuel or hidden commitments.

## Assets
Riverdale city art retained from this project's previous version. Six operator portraits are original inline SVG, drawn for this version. Sound is synthesized with Web Audio. No third-party character art or audio. Retained framework dependencies preserve their license notices.
