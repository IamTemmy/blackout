# Deterministic balance sweep — October 15, 2026

480 complete matches: 30 seeds × 4 seat counts × 4 human policies, against the scripted rivals. `node --experimental-strip-types scripts/balance-sweep.ts` reproduces this table. A tied top score counts as a win.

Policies: cheap = full available output at $15; mid = full available at $65; ceiling = full available at $100; cooling = $65 and output capped at 70 when heat reaches 40. No policy spends reserve. These are deliberately simple baselines, not optimal strategies.

| Seats | Strategy | Wins / 30 | Mean profit | Blackouts |
|---|---|---:|---:|---:|
| 2 | cheap | 0 | -13475 | 0 |
| 2 | mid | 18 | 10620 | 0 |
| 2 | ceiling | 0 | 22135 | 0 |
| 2 | cooling | 18 | 10620 | 0 |
| 3 | cheap | 0 | -13475 | 0 |
| 3 | mid | 0 | 9793 | 0 |
| 3 | ceiling | 9 | 17795 | 0 |
| 3 | cooling | 0 | 9723 | 0 |
| 4 | cheap | 0 | -13475 | 0 |
| 4 | mid | 0 | 8123 | 0 |
| 4 | ceiling | 0 | 13935 | 0 |
| 4 | cooling | 0 | 7973 | 0 |
| 6 | cheap | 0 | -13475 | 0 |
| 6 | mid | 0 | 7750 | 0 |
| 6 | ceiling | 0 | 8400 | 0 |
| 6 | cooling | 0 | 7600 | 0 |

The old $15 exploit fails across all tested counts/seeds. No tested constant-price policy wins universally. The ceiling policy wins 9/30 three-seat matches; middle-price wins 18/30 two-seat matches. Four- and six-seat opponents beat all four simple policies in this sweep. That may mean a useful strategic challenge or overly difficult solo balance: it needs playtesting, not a claim of solved balance.

All policies offer substantial output, so all shifts survive. This sweep does not test cooperative negotiation, coordinated withholding, collusion or enjoyment. Engine tests separately verify blackout and timeout outcomes. Optional wear/cooling choices need human feedback to establish whether their consequences are understandable and engaging.
