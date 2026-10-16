# Engine v5 balance evidence

2026-10-16. Run `node --experimental-strip-types scripts/adaptive-sweep.ts`.
2,800 deterministic simulations: seeds 201–300, 4/6 companies, human first/last seat, seven policies. Bots use public history/forecasts, never current private bids or hidden events. This is not human/browser playtesting or proof of balance.

Policies: follow = last highest accepted rival price minus $1; undercut = lowest minus $1; ceiling = $100; cool70 = 70 MW with peak pricing; cheap = $15; silent = follow without promise; withhold = follow prices, promise capacity, offer 20 MW at peak. Others offer available capacity and promise it. No human policy uses reserve. Wins include ties.

Observed limitations: follow remains strong in four-company matches; six-company bot supply often cushions shortfalls. Full-output policies survived all sampled games. Withhold caused 12–18 blackouts per 100 four-company games and never won. Fine mechanisms cannot prevent a losing human deliberately ending a match. Reliability rewards are an incentive, not a guarantee of honest play.

| Seats | Human seat | Policy | Wins / 100 | Mean profit | Warning+ games | Blackouts |
|---|---|---|---:|---:|---:|---:|
| 4 | 0 | follow | 70 | 22374 | 21 | 0 |
| 4 | 0 | undercut | 1 | 15898 | 21 | 0 |
| 4 | 0 | ceiling | 50 | 27889 | 34 | 0 |
| 4 | 0 | cool70 | 0 | 14447 | 54 | 0 |
| 4 | 0 | cheap | 0 | -11313 | 21 | 0 |
| 4 | 0 | silent | 18 | 20334 | 21 | 0 |
| 4 | 0 | withhold | 0 | 10223 | 100 | 18 |
| 4 | 3 | follow | 75 | 22396 | 16 | 0 |
| 4 | 3 | undercut | 1 | 15692 | 15 | 0 |
| 4 | 3 | ceiling | 61 | 28612 | 25 | 0 |
| 4 | 3 | cool70 | 0 | 14316 | 55 | 0 |
| 4 | 3 | cheap | 0 | -11291 | 17 | 0 |
| 4 | 3 | silent | 21 | 20326 | 16 | 0 |
| 4 | 3 | withhold | 0 | 10696 | 94 | 12 |
| 6 | 0 | follow | 49 | 20006 | 3 | 0 |
| 6 | 0 | undercut | 0 | 14869 | 3 | 0 |
| 6 | 0 | ceiling | 0 | 17608 | 0 | 0 |
| 6 | 0 | cool70 | 0 | 9696 | 8 | 0 |
| 6 | 0 | cheap | 0 | -11135 | 3 | 0 |
| 6 | 0 | silent | 4 | 18566 | 3 | 0 |
| 6 | 0 | withhold | 0 | 11384 | 70 | 0 |
| 6 | 5 | follow | 46 | 19554 | 3 | 0 |
| 6 | 5 | undercut | 0 | 14583 | 3 | 0 |
| 6 | 5 | ceiling | 0 | 17624 | 0 | 0 |
| 6 | 5 | cool70 | 0 | 9627 | 8 | 0 |
| 6 | 5 | cheap | 0 | -11245 | 3 | 0 |
| 6 | 5 | silent | 6 | 18323 | 3 | 0 |
| 6 | 5 | withhold | 0 | 11377 | 69 | 0 |
