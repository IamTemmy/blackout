# Blackout v3 balance sweep

Run: `node --experimental-strip-types scripts/balance-sweep.ts`. Seeds1–30, human in first seat. Wins include tied first. These are limited policy probes, not human win-rate forecasts.

| Seats | Strategy | Wins / 30 | Mean profit | Blackouts |
|---|---|---:|---:|---:|
| 2 | cheap | 0 | -13475 | 0 |
| 2 | mid | 0 | 14275 | 0 |
| 2 | ceiling | 11 | 29335 | 0 |
| 2 | cooling | 0 | 11490 | 0 |
| 2 | cool70 | 0 | 16590 | 0 |
| 2 | peakcap | 0 | 17740 | 0 |
| 3 | cheap | 0 | -13475 | 0 |
| 3 | mid | 0 | 12975 | 0 |
| 3 | ceiling | 0 | 28150 | 0 |
| 3 | cooling | 0 | 13325 | 0 |
| 3 | cool70 | 0 | 17290 | 0 |
| 3 | peakcap | 0 | 17800 | 0 |
| 4 | cheap | 0 | -13475 | 0 |
| 4 | mid | 0 | 12100 | 0 |
| 4 | ceiling | 0 | 25198 | 0 |
| 4 | cooling | 0 | 12450 | 0 |
| 4 | cool70 | 0 | 18172 | 0 |
| 4 | peakcap | 0 | 18600 | 0 |
| 5 | cheap | 0 | -13475 | 0 |
| 5 | mid | 0 | 12100 | 0 |
| 5 | ceiling | 0 | 23450 | 0 |
| 5 | cooling | 0 | 10595 | 0 |
| 5 | cool70 | 0 | 17430 | 0 |
| 5 | peakcap | 0 | 17045 | 0 |
| 6 | cheap | 0 | -13475 | 0 |
| 6 | mid | 0 | 12100 | 0 |
| 6 | ceiling | 0 | 22890 | 0 |
| 6 | cooling | 0 | 12450 | 0 |
| 6 | cool70 | 0 | 16730 | 0 |
| 6 | peakcap | 0 | 18173 | 0 |

The previous cool70 exploit is closed in this set. However bot difficulty may be excessive, and no tested policy caused a blackout. Do not force losses or introduce hidden luck to satisfy a numerical target. Next review should cover adaptive humans, intentional withholding, public promises, seating permutations and unseen seeds.
