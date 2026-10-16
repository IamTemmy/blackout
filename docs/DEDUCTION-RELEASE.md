# Deduction release — 2026-10-16

Published in three requested stages: v12 evidence/live accusations, v13 targeted conversation, final powers/pressure release.

## Rules and privacy

- ACCUSE lasts the full 12 seconds. Human and ghost votes are public, changeable, and counted only at the deadline. Arrows are faded for ghosts. Bots stagger votes at 2–9 seconds and can switch once; a unique vote leader gets one defense opportunity while at least four seconds remain.
- Suspicion uses only public claims, missing city fuel and public exposures. Missing fuel adds up to 18 points per round depending on claim size; proven lies add 35; fully covered rounds subtract 7. Bounded 0–100. Line-fault loss is called out: this meter is evidence, not proof. Private Audit knowledge affects its owner's bot vote only.
- Six targeted chips require selecting a living rival. Three reactions per sender per round; one reply per bot per round, plus a defense and one outcome reaction. Hostility and trust change that bot's private grudge/doubt of the sender. Eliminated bots get one farewell per match.
- Living bot outcome lines name an alive human when available and attach server-verified public evidence. An optional OpenAI emotional prefix cannot replace those facts. No OpenAI API key is configured; deterministic contextual dialogue is active. API failure/timeout cannot block a phase.
- One independently random private card per seat at match start/rematch. Activate before sealing during LOCK IN. Activation is public only at the reveal; unused card types never enter rival projections.
- Audit exposes the target's actual spend only to its owner after the reveal. Overclock doubles city contribution, not fuel cost or truthful-claim threshold. Scapegoat redirects a caught-lie penalty to the highest-voted other living seat; runner-up ties use seat order, no runner-up means normal penalty. Insurance persists until the next spin, guarantees survival and adds one red (capped at six), then expires. Uninsured reactor odds remain exactly pre-spin red/6.
- LOCK IN is now 18 seconds. Existing reveal, verdict and single/batch reactor sequences remain unchanged. All-blackout sequence is still at most eight seconds.
- Successful-bluff smug expression is private to the bluffer: showing that to rivals would leak a secret. Nervousness uses public suspicion/red only.

## Verification

29 automated tests: blocked-storage resilience, rival coin privacy, current round/projection secrecy, mutable/ghost votes, power privacy, once-only activation, audit timing, overclock accounting, scapegoat runner-up/fallback, insurance expiry, 100 full-game invariants, original reactor timing.

50,000 uninsured spins: red 1–5 observed 16.75%, 33.20%, 49.81%, 67.02%, 83.20%; all within 1.5 percentage points of red/6.

1,000 bot-only matches per size, seeds 100–1099, 500ms headless polling, production engine/AI. Results are model balance checks, not human playtest evidence. Raw metrics: deduction-simulation.json.

| Seats | Failed city rounds | Blackout rounds | Meltdowns/match | Reach round 7 | Dealt powers used |
|---|---:|---:|---:|---:|---:|
| 3 | 38.00% | 9.58% | 1.424 | 86.6% | 87.50% |
| 4 | 36.97% | 8.53% | 1.684 | 93.9% | 87.73% |
| 5 | 36.24% | 7.57% | 1.602 | 98.5% | 91.10% |
| 6 | 32.57% | 6.94% | 1.678 | 99.5% | 91.02% |

No browser visual or real multiplayer playtest was available in this development environment. Client compile/build and server tests pass; mobile layout and subjective pacing need a real-device review. Portrait target hit areas explicitly override the seat overlay's inherited pointer-events:none.

Claude review #6211375073 (34f1163): N1 storage crash and H1 payout inference fixed; L1 district names match seats. H2 payout/audit redesign and G1 conditional ghost votes explicitly deferred because the current user request preserves existing rules/reactor/ghost behavior.
