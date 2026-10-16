# Reactor and comprehension repair — 2026-10-16

## Audit conclusion
The prior server formula already sampled floor(random*6) and melted down iff segment < red-before-spin. No statistical odds defect was reproduced. A visual defect WAS found: the needle animated to a fixed angle and jumped to the actual result. It now decelerates into the actual server-selected segment; outcomes apply after a four-second spin and a server-timed half-second hold. No change to intended reactor odds or demand tuning.

`node --experimental-strip-types scripts/reactor-audit.ts` — actual shared server draw, 10,000 spins per danger level; all within ±1.5 percentage points:

| Red before spin | Meltdowns / 10,000 | Actual | Expected | Error (pp) |
|---|---:|---:|---:|---:|
| 1/6 | 1675 | 16.75% | 16.67% | 0.08 |
| 2/6 | 3320 | 33.20% | 33.33% | 0.13 |
| 3/6 | 4981 | 49.81% | 50.00% | 0.19 |
| 4/6 | 6702 | 67.02% | 66.67% | 0.35 |
| 5/6 | 8320 | 83.20% | 83.33% | 0.13 |

## Final simulation
`node --experimental-strip-types scripts/bluff-sweep.ts 10 4`:

```
Match 1: 8 rounds, 2 failures, 1 meltdowns, seat 1 survived, 204.5s
Match 2: 5 rounds, 3 failures, 3 meltdowns, seat 1 survived, 187.5s
Match 3: 8 rounds, 3 failures, 2 meltdowns, seat 1 survived, 254.5s
Match 4: 8 rounds, 3 failures, 0 meltdowns, seat 1 survived, 215s
Match 5: 8 rounds, 3 failures, 2 meltdowns, seat 1 survived, 247.5s
Match 6: 8 rounds, 2 failures, 1 meltdowns, seat 1 survived, 221.5s
Match 7: 6 rounds, 3 failures, 3 meltdowns, seat 1 eliminated round 6, 238s
Match 8: 8 rounds, 5 failures, 3 meltdowns, seat 1 eliminated round 8, 297.5s
Match 9: 8 rounds, 1 failures, 0 meltdowns, seat 1 survived, 211.5s
Match 10: 5 rounds, 3 failures, 3 meltdowns, seat 1 eliminated round 3, 225s
{"matches":10,"seats":4,"rounds":72,"failedRounds":28,"failureRate":0.3888888888888889,"matchesWithMeltdown":8,"meltdownsPerMatch":1.8,"reachedRound6":0.8,"reachedRound8":0.7,"seat1EliminatedMatches":3,"seat1MeanEliminationRoundAmongEliminated":5.666666666666667,"seat1SurvivalRate":0.7,"meanSeconds":230.25}
```

1,000 matches each, fixed seeds 100–1099:

| Seats | Failed rounds | Meltdowns/match | Reach round 6 | Reach round 8 | Seat 1 eliminated | Seat 1 mean elimination round (conditional) |
|---|---:|---:|---:|---:|---:|---:|
| 3 | 41.62% | 1.495 | 73.3% | 52.9% | 59.5% | 4.68 |
| 4 | 37.61% | 1.873 | 85.1% | 72.9% | 51.5% | 4.83 |
| 6 | 37.53% | 2.800 | 93.7% | 86.2% | 49.5% | 4.92 |

Seat 1 is a designated bot proxy for the human seat, not a real human. Survivor matches are excluded from the conditional elimination-round average and reported separately. Four-seat targets met; three-seat failures are slightly high and six-seat absolute meltdowns exceed 1–2. Those limits remain for future human balance testing, not hidden as passes. Bot means are 3.23 / 3.66 / 4.34 minutes; humans have longer decision opportunities.

## Changes
- 30s commitment; 20s accusation. All locked still proceeds early. Reveal expanded to 8s.
- Explicit CITY GOT / NEEDED and corrected post-event copy; actual-spend / public-claim controls; coin/fuel consequence preview; new-version onboarding example.
- Before EACH spin, a 2s reason banner (blackout / caught lie / false accusation). Verdict includes claim and actual. Larger dial shows pre-spin odds; safe adds one red, meltdown eliminates. Result held 2.5s.
- Default sound unlocked by the briefing/start/join click; explicit mute remembered; master audio bus muted for final hold.
- Banter uses current public outcome, exposures, verdicts and completed spins. Stale in-flight lines discarded. Optional model selects from fact-checked contextual lines instead of generating unchecked claims. Invalid/duplicate selection falls back; per-round dedup applies to bot claims and reactions. API remains unconfigured; canned lines active.

14 unit tests, 50,000-spin audit, TypeScript/build gates. Screenshots supplied by user inspected. No live browser-control capability: rendered animation/audio and multiplayer browser acceptance still require independent playtest. Legacy market branch preserved.
