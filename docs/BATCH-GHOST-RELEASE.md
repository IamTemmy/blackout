# Blackout: simultaneous reactors, risk-aware bots, ghosts — 2026-10-16

Engine v8. Preserve working single-reactor treatment and odds, 30-second commitment, 20-second accusation, explicit reveal text, sound default and lock-button wording.

## Changes
- Blackouts use one batch: all active dials spin on the same four-second timeline, 0.5s hold, results begin at 4.5s and stagger 0.6s. Server duration is 5 + 0.6*(activeCount-1) seconds: at most 8s. Polling is 200ms during reveal/spins, 1s otherwise. Network/background throttling may delay client display; authoritative results apply once. Accusation-triggered reactors stay sequential/full-screen.
- Bot commitments balance remaining fuel with public demand-per-survivor, few-player pressure and their own red segments. No secret commitments/event access. Larger rooms' bots pass unsupported accusations more often. No reactor-odds changes.
- Demand midpoint = floor(0.85 * living plants) + floor(zero-based round / 2), minimum one, range ±1. HEAT +0/+1/+2/+3 is visible. The per-survivor base can drop with eliminations; the heat increment never drops. No hidden remaining-fuel cap.
- Ghost humans/bots vote during ACCUSE; votes count normally, ghost portraits fade. Ghosts cannot claim, spend, or be targeted. False accusations cannot eliminate an already-dead ghost; only living accusers spin. At <=1 survivor match still ends.
- Narration lives in neutral GRID REPORT, not seat chat. Living bots get at most one in-character line per round; ghosts at most one farewell after elimination per match. Generated OpenAI dialogue restored as short first-person reactions, with public-only context and guards rejecting narrator/factual claims; canned fallbacks remain. Case/punctuation-normalized dedup. API still has no configured key; live generation remains unverified/unavailable, fallback works.
- Briefing is exactly the requested three short lines; example removed.

## Final simulations (1,000 per room size, seeds 100–1099)
| Seats | City failures | Blackouts | Reach round 7+ | Meltdowns/match |
|---|---:|---:|---:|---:|
| 3 | 39.83% | 9.60% | 80.3% | 1.553 |
| 4 | 39.38% | 8.43% | 91.7% | 1.887 |
| 5 | 37.62% | 7.44% | 97.2% | 1.752 |
| 6 | 35.15% | 7.21% | 99.8% | 1.957 |

## Held-out seeds (1,000 per size, seeds 10000–10999)
| Seats | City failures | Blackouts | Reach round 7+ | Meltdowns/match |
|---|---:|---:|---:|---:|
| 3 | 39.64% | 9.07% | 80.7% | 1.541 |
| 4 | 38.89% | 8.76% | 90.5% | 1.824 |
| 5 | 37.62% | 7.22% | 97.7% | 1.763 |
| 6 | 34.17% | 7.29% | 99.2% | 1.900 |

Every row meets requested 30–40% failures, <=15% blackouts, >=60% reaching round7, 1–2 average meltdowns. These are bot-only matches, not humans. Reproduce: `node --experimental-strip-types scripts/bluff-sweep.ts 1000 4 10000` (count, seats, starting seed).

Validation: unit tests cover batch duration/stagger/exactly-once results, ghost voting/target restrictions, demand escalation, dialogue attribution/limits, private data, complete match lifecycle. 50,000-spin audit unchanged: 16.75/33.20/49.81/67.02/83.20%. TypeScript and production build gates. No live browser/audio QA capability in this run; request independent mobile/multiplayer review. Legacy market branch remains intact.
