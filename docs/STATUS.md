# Blackout v3 playtest update — October 15, 2026

User priorities: understandable first sale, meaningful competitive profit with shared failure, visible heat/reserve consequences, more readable city, full-match comparison.

Implemented: host-only lobby bot removal preserving company assignments; fixed lobby city framing; optional timer-free practice sale; public promises above bidding controls; threshold-colored heat meters; explicit reserve purpose/cost; animated per-company dispatch recap; cumulative revenue/cost/energy/profit report and objective awards. Bots now wait eight seconds, respond to public promises/help requests, forecast candidate prices from the previous public ledger, and cool when modeled headroom permits. Fixed negative-modulo tie rotation. Missing human bids use existing fallback after 15 seconds without heartbeat, with round-start grace and sealed bids retained.

16 tests and TypeScript pass. Extended balance sweep: six policies × five seat counts ×30 seeds =900 matches. No tested constant policy wins every match; two-seat ceiling policy wins11/30, other tested policies0. This is NOT proof of good difficulty: all900 runs had no blackouts, and straightforward policies generally lose against3–6-seat bots. Human adaptation, withholding, more seeds and alternate seating remain review tasks. No claim of solved balance or universal superiority.

Old room version2 is rejected; create a new room. Native screenshot/live HTTP smoke evidence and exact review SHA go in issue #1. Interactive browser/phone QA unavailable in this environment. City route lines remain illustrative, not an electrical network simulation. Imports/scarcity pricing/investor targets were not introduced.
