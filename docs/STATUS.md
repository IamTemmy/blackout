# Current: reactor and comprehension repair (engine v7)

See [REACTOR-AUDIT.md](REACTOR-AUDIT.md) for current behavior, final tests, simulation numbers and limits. Server odds passed; misleading dial animation fixed. 30-second choices, 20-second accusations, explained outcomes, default gesture-unlocked sound, contextual deduplicated banter. The following M3 release notes are historical:

# Blackout rebuild — M3 playtest

2026-10-16. User-approved replacement of the economic market with bluff-and-overload. Legacy preserved on GitHub branch legacy-market at 4a030fed0044c2aaeaa30935e799b99de16b95f3. Last Lift remains paused.

M1: new server-authoritative phases, ten fuel, eight rounds, claims/hidden commits, shuffled six-event deck, accusations, escalating reactor spins, elimination, surviving richest wins. Minimum three companies; bots fill. M2: reveal choreography, gauge, city districts, focused reactor spin, meltdown effects, synthesized audio (off until user enables), reduced-motion support. M3: six original SVG portraits, lobby selection, three-step onboarding, deterministic fallback banter plus optional asynchronous server-only OpenAI adapter, final caught/escaped lies and spins recap.

## Deliberate rule resolutions
- Opponents' remaining fuel is hidden: exact public fuel would reveal every secret commitment by subtraction. Own fuel is visible, final fuel is public.
- Demand uses rising urgency constrained by remaining crew fuel per remaining round; ten fuel cannot support 1.6–2.4 per operator for eight rounds. Events modify the displayed pre-event range.
- A vote is secret until verdict. All highest-vote ties expose; all-pass exposes nobody. A false accuser spins once per verdict; blackout spins are additional. Inspection reveals the bid but does not independently impose a spin.
- Timeouts commit zero and claim zero unless already claimed; accusations timeout to pass. Eliminated players retain reactions but cannot vote/commit. Host migration remains supported.
- Early completion accelerates bots, so matches are shorter than the requested 6–9 minutes. No artificial idle padding added.

## Validation and remaining limits
Ten fixed-seed four-bot matches: 72 rounds, 28 failures (38.9%); meltdown in 8/10; mean 182.3s. 1,000 four-bot matches: 7,198 rounds, 2,707 failures (37.6%); meltdown in 827/1,000; mean 176.05s. Run `node --experimental-strip-types scripts/bluff-sweep.ts 10 4` (count, seats). Additional 1,000-match sweeps: three seats failed 41.6% of rounds (slightly above target), six seats failed 37.5%; average durations 156.65s and 204.13s respectively. These are bots, not human playtests.
Ten tests cover secrecy, authority, invalid/duplicate input, reveal staging, ties, elimination, 100 complete seeded games, public-only banter context and hard 1.5-second fallback. TypeScript and production build checked. No browser-control capability available: separate-browser multiplayer, rendered no-scroll layout at 1280×720 / 390×844, and first-time comprehension remain unverified. CSS targets those viewports, not a verified acceptance pass.
No OPENAI_API_KEY exists in hosting configuration. OpenAI Developers plugin is available but not installed; enable it to provision the server secret through its supported flow. Fallback is active, live API untested. Main gameplay never awaits the separate banter request. D1 CAS guards updates and one request per round/phase. Native OpenAI API reference checked: https://developers.openai.com/api/reference/resources/responses/methods/create . No runtime key is stored in source or sent to browser. Final challenge-compliance verification still required before submission.
