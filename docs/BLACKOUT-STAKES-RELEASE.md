# Blackout stakes and banter correction — 2026-10-16

## Delivered
- Blackout no longer spins the whole table. It pays no coins and adds one red (cap six) to each living plant at the visible outcome reveal, exactly once, then enters the existing 12-second ACCUSE phase. A caught liar receives two sequential full-screen spins; false accusers receive one each. Dead players skip remaining spins. Insurance protects only the next spin, not both; Scapegoat redirects the two-spin liability to the runner-up under its existing tie rule.
- Missing-fuel suspicion adds `3 * claim² + 6 * max(0, claim - averageClaim)`, then existing public-exposure +35 / covered-round decay -7; clamp0–100. Private commits cannot influence unexposed suspicion.
- Replay explicitly clears queues, defense and dialogue state, all history, per-seat stats, powers and danger; client spend/claim controls reset to1. Recap uses rounds lied (not missing fuel units). Regression plays a dishonest match, resets, then verifies a truthful match has zero lies/caught/spins.

## Banter diagnosis and changes
Production environment was inspected: **no OPENAI_API_KEY configured**. Therefore the previous production build had no real model calls; it always took its missing-key fallback. No historical latency counters existed. It is not possible to report a measured live API success rate before a credential is configured.

The Responses API adapter now requests structured JSON with full one-sentence, characterful lines incorporating public target/claim facts; it never appends a fact sentence. Secret individual commitments never enter model context. Validation rejects hidden-fact assertions, unsupported numbers, multi-sentence lines and repeated normalized five-word phrases. Whole-batch fallback avoids partially generated duplicate phrasing. Deadline2.8s does not block game advancement.

Fallback catalog: six characters × three situations (missing fuel, all claims covered, ghost) × eight complete sentences =144 full lines, with filled name/number slots. Coverage of claims is deliberately distinct from city survival.

Server logs contain HTTP status/null, latency, attempted flag, reason, generated/fallback line counts and fallback fraction, never credentials or raw user/model text. Host-only Banter diagnostics exposes current-match request/API attempt/success/fallback counters plus latest status, latency and reason. With no key, diagnosis is missing_api_key; attempts0; API success N/A; fallback100% of non-empty dialogue batches. Mocked successful API responses, HTTP401, malformed output, timeout, and duplicate rejection are tested; mocked success is not a live success rate.

## Simulations
Production engine, 500ms polling, 1,000 bot-only matches per size (seeds100–1099), plus 1,000 honest-policy matches per size (seeds10000–10999). Raw results: blackout-stakes-simulation.json.

| Seats | Reach round7 | City failures | Meltdowns/match | Honest-policy win | Equal-seat baseline |
|---|---:|---:|---:|---:|---:|
|3|88.4%|38.28%|1.234|47.62%|33.33%|
|4|96.9%|36.82%|1.366|32.83%|25.00%|
|5|99.5%|36.11%|1.227|20.36%|20.00%|
|6|100.0%|32.65%|1.213|18.25%|16.67%|

Honest policy: rotates seat position, uses the existing fuel-budget policy but always claims actual spend, chooses accusations only from public suspicion, uses available sensible powers. Ties receive fractional win credit. Five-player wins are indistinguishable from chance at this sample size; six-player advantage is small. Conditional on survival, honest wins vs uniform surviving-seat baseline are 62.24% vs61.02%, 42.92% vs40.39%, 26.13% vs26.26%, and21.96% vs20.77%. These numbers do not establish universal honest dominance or human enjoyment. Richest survivor remains the explicit win rule; no score rule was changed.

## Verification limits
Automated engine/API-adapter tests and production build only; no real-device browser or multiplayer playtest in this environment. Live model generation remains blocked on a server-side API key. Official API format reference: https://developers.openai.com/api/reference/resources/responses/methods/create
