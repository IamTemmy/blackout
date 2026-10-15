# V4 adaptive sweep — October 15, 2026

900 games: seeds201–230, 2/4/6 seats, first/last human, five policies. Monotonic time, heartbeat, bots seal before human bids. Values below are diagnostic, not a submission approval or a universal strategy ranking. Follow uses highest rival dispatched price minus1; undercut uses lowest minus1. Round-one price55. See scripts/adaptive-sweep.ts.

| Seats | Human seat | Policy | Wins / 30 | Mean profit | Warning+ games | Blackouts |
|---|---|---|---:|---:|---:|---:|
| 2 | 0 | follow | 22 | 22257 | 0 | 0 |
| 2 | 0 | undercut | 22 | 22257 | 0 | 0 |
| 2 | 0 | ceiling | 0 | 25022 | 0 | 0 |
| 2 | 0 | cool70 | 0 | 16345 | 30 | 0 |
| 2 | 0 | cheap | 0 | -13475 | 0 | 0 |
| 2 | 1 | follow | 22 | 22257 | 0 | 0 |
| 2 | 1 | undercut | 22 | 22257 | 0 | 0 |
| 2 | 1 | ceiling | 0 | 25022 | 0 | 0 |
| 2 | 1 | cool70 | 0 | 16345 | 30 | 0 |
| 2 | 1 | cheap | 0 | -13475 | 0 | 0 |
| 4 | 0 | follow | 13 | 19728 | 10 | 0 |
| 4 | 0 | undercut | 0 | 12446 | 10 | 0 |
| 4 | 0 | ceiling | 0 | 20070 | 20 | 0 |
| 4 | 0 | cool70 | 0 | 16193 | 5 | 0 |
| 4 | 0 | cheap | 0 | -13475 | 10 | 0 |
| 4 | 3 | follow | 14 | 19605 | 10 | 0 |
| 4 | 3 | undercut | 0 | 12511 | 10 | 0 |
| 4 | 3 | ceiling | 0 | 20070 | 20 | 0 |
| 4 | 3 | cool70 | 0 | 16233 | 5 | 0 |
| 4 | 3 | cheap | 0 | -13475 | 10 | 0 |
| 6 | 0 | follow | 11 | 17812 | 8 | 0 |
| 6 | 0 | undercut | 0 | 11677 | 8 | 0 |
| 6 | 0 | ceiling | 0 | 18262 | 9 | 0 |
| 6 | 0 | cool70 | 0 | 14483 | 2 | 0 |
| 6 | 0 | cheap | 0 | -13475 | 0 | 0 |
| 6 | 5 | follow | 4 | 16830 | 6 | 0 |
| 6 | 5 | undercut | 0 | 11350 | 6 | 0 |
| 6 | 5 | ceiling | 0 | 18481 | 5 | 0 |
| 6 | 5 | cool70 | 0 | 14107 | 2 | 0 |
| 6 | 5 | cheap | 0 | -13475 | 6 | 0 |

Remaining issues: two-seat follow wins22/30 exceed the proposed60% threshold; four-seat undercut wins0/30; six-seat first/last follow differs11/30 vs4/30; zero blackouts. Four-seat follow13–14/30 and Warning+10/30 are encouraging but do not prove human fun. Bot personalities, seed effects and initial public-pledge ordering remain review topics. No one tested policy wins every configuration. Do not claim no exploitable strategy exists.

---
Archived v3 evidence (superseded by v4 above)

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
