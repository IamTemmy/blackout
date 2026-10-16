# Blackout — current playtest status

2026-10-16; engine v5. Last Lift work paused at user request.

Implemented: varied per-room demand curves; public bounded forecasts; one independently seeded demand event revealed after all offers; no hidden-event access by bots; four-company minimum (bots fill vacant seats), up to six; tighter first hours; 30-second bot negotiation window; persistent promise history; first-seal promise lock; itemized accountability; all-connected-human ready gate; return home on reopening finished/obsolete rooms.

On blackout nobody wins. Each operator pays $40 times the greater of its broken-promise MW and its shortfall below equal demand share, capped at normal capacity. Unsold offered power is not a breach. Receipts do not establish intent or sole causation.

After a surviving six-hour match, a $3,000 pool goes to the most reliable credited supply: no broken promises, >=4 qualifying hours. A qualifying promise is >=70% of midpoint demand share; credit is min(promised, sold), excluding autopilot. Ties split the pool. Score includes bonus/fines.

Validation: 17 engine tests, including hidden information, accounting, timing, event bounds, prize eligibility, and conservation. See BALANCE-V5.md for 2,800 simulations and limitations. Build/type checks recorded in release review. No browser or real-device QA in this development run. Request Claude independent live playtest by published SHA.

Not implemented: investments, private contracts, hidden saboteur, best-of-three, live AI dialogue. Bots are rule-based and react to public information; they are not learning agents. Competition rules still require final verification before submission.
