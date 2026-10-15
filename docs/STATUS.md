# Riverdale Heatwave — playtest update, October 15, 2026

Entertainment-first redesign authorized by Temmy after his low-price/full-output playtest. Live URL: https://blackout-temmy.iamtemmy.chatgpt.site.

## Implemented
- Original city illustration with animated power routes, district status overlays and dimming/blackout states. Responsive operator control desk, public radio, forecast and itemized ledger.
- Explicit pay-as-bid market replaces the prototype's uniform clearing price. Accepted quantities earn their own asking price. Bid range $0–100; warning cap $75; emergency cost reimbursement plus 10%; blackout zero round profit and no winner.
- Equal starting plants: 100 MW and $30/MWh base fuel cost. Marginal wear adds $25/MWh above 70 dispatched MW. Heat rises 25 above 80 MW, 10 at 71–80, otherwise falls 25. At 40 heat fuel rises $5; at 60 capacity becomes 85 MW. One-time +20 MW reserve adds marginal cost and heat.
- Public six-hour demand forecasts, private bids, promises, bounded preset radio requests, rotating equal-price priority, adaptive bots with three strategies. Solo lobby clearly offers three bot rivals, with up to six total seats.
- Live projected revenue/cost/profit before bidding and actual ledger after dispatch. Explicit team failure suppresses winner ranking even if a player was rich.
- Host failover, guarded any-human Continue, debrief timeout, persistent seat recovery and CAS-safe polling. Idle operators offer full available capacity at maximum regular marginal cost (base fuel + $25); fallback is not a stale previous bid. This differs intentionally from the earlier constant-cost proposal because costs are now nonlinear.

## Verification
12 engine tests, TypeScript and production build passed before publication. Tests cover projections, sealed bids, merit order and own-bid payment, failure outcome, timeouts, host loss, stale advancement, heat, reserve exhaustion, rotating ties, the user's exploit and bounded radio.

A 480-match deterministic sweep (30 seeds, 4 player counts, 4 simple strategies) is in BALANCE.md. It rejects the original exploit, but is not proof of human fun or a solved economy. Bot-only results do not measure negotiation.

Browser preview QA is unavailable because the managed environment's required control-browser capability is absent. Phone/browser usability needs a real playtest. Request Claude review of the new SHA; previous prototype review is not approval of these changes.
