# Rules freeze — 2026-10-16

Requested final four fixes implemented in engine v12.

1. Each fully covered round multiplies suspicion by0.7, including when an exposure exists; no increase is allowed. In shortages, claim<=average multiplies by0.9 (no exposure override). Above-average claims retain weighted suspicion and exposure increases. History recalculation remains deterministic and public-only.
2. Outcome banter chooses each bot's highest available personal suspect using public suspicion + private doubts/grudges. Round-persistent target quotas allow at most one bot line aimed at a seat, except currently exposed seats. Defenses and chip replies also respect the quota. Covered-round model instructions demand relief/needling; accusation vocabulary is rejected. Fallback covered lines remain separate. Bots may stay quiet if no eligible target remains.
3. Bots pass whenever summed claims<=delivered fuel, and cannot bandwagon-switch out of Pass. Humans retain their choice. This is a behavioral rule, not a mathematical proof: aggregate coverage can still mask an individual's shortfall through another plant or Overclock.
4. A verdict penalizing multiple distinct living players uses one simultaneous grid. A two-spin penalty has two numbered dials in its player card; results apply sequentially within that player's card, skipping spin2 if spin1 eliminates them. Cards reveal with600ms stagger; total5000+600*(players-1)<=8000ms. Insurance covers one spin only. One-player penalties retain the prior full-screen sequence. Blackout itself still only adds danger before accusations.

38 automated tests and TypeScript/build checks, including decay, Pass/no-bandwagon, targeting quota, <=8s batches, exactly-once application and skip-on-death. Existing full-game invariants still pass. No new human/browser playtest performed in this environment. Rules frozen after this release; further design changes require an explicit user request.
