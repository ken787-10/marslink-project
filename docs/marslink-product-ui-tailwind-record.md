# MarsLink Product UI Tailwind Record

Last updated: 2026-06-27

This note records the current Tailwind product screens so they can be reused when the actual product UI is developed.

## Source Of Truth

- Public CabinTime page: `cabintime/index.md`
- Archived Journey AI reference page: `journey-ai/index.md` (`published: false`)
- Flight map geometry/data: `_data/japan_flight_map.yml`

The page HTML/Tailwind is the reference. Screenshots are only visual checks. As of this note, Journey AI is not a separate public page; it is folded back into the CabinTime story and retained as source reference for later product development.

## Product Separation

CabinTime is the initial package for dedicated or communication-constrained spaces. It should feel like a deployable portal package for aircraft, ships, trains, buses, hotels, and regional spaces, while still carrying the broader Journey AI concept.

Journey AI is the broader personal decision intelligence layer. It should show cross-source context, weather, movement, personal intent, avoid/recommend/explain logic, and human-final decision support.

Current public treatment:

- Public site: CabinTime page contains the integrated product story.
- Reference source: Journey AI page remains unpublished so the Tailwind dashboard can be reused later.
- CabinTime layer: portal, package, cache, operator/venue-provided context, offline-aware operation.
- Journey AI layer: personalized decision support, route/weather/context integration, candidate ranking, avoid/recommend/explain.

## Current Tailwind Screens

### CabinTime Hero Dashboard

File: `cabintime/index.md`

Purpose: restore the pre-split CabinTime hero that shows route, weather radar, arrival context, and immediate avoid/recommend/explain decisions.

Key labels:

- `Live journey context`
- `ITM 伊丹空港 -> HND 羽田空港`
- `Route intelligence`
- `Weather radar`
- `Avoid / Recommend / Explain`
- `Fit score`
- `Risk checks`
- `Human choice`

Design intent: a high-level hero dashboard showing the practical value of CabinTime and the broader Journey AI layer in one view.

### CabinTime Operational Dashboard

File: `cabintime/index.md`

Purpose: restore the stronger dashboard from the 2026-06-27 18:47 capture. This is the public product screen for CabinTime: cross-source context, map/weather layer, passenger app, and recommendation/risk monitor in one Tailwind mock.

Key labels:

- `Operational dashboard`
- `情報を集約し、避けるべき選択まで見つける。`
- `Passenger App`
- `HND arrival assistant`
- `Embedded Portal`
- `Context layer for ITM -> HND`
- `Operator Console`
- `Experience risk monitor`
- `静かなラウンジ`
- `ホテルバー`
- `人気居酒屋`

Design intent: CabinTime should not look like a generic portal. It should show that AI aggregates weather, reviews, congestion, operating data, fees, and personal context, then helps people avoid bad choices and select better ones.

### Journey AI Hero Dashboard

File: `journey-ai/index.md` (`published: false`)

Purpose: archived reference for the standalone Journey AI treatment. This is not currently a public page.

Key labels:

- `Live journey intelligence`
- `ITM 伊丹空港 -> HND 羽田空港`
- `Route intelligence`
- `Weather radar`
- `Avoid / Recommend / Explain`
- `Fit score`
- `Risk checks`
- `Human choice`

Design intent: a high-level hero dashboard showing map, weather radar, arrival context, and immediate avoid/recommend/explain decisions.

### Journey AI Product Screen

File: `journey-ai/index.md` (`published: false`)

Purpose: detailed Journey AI screen for later product development. This is not currently a public page.

Key labels:

- `Journey AI product screen`
- `Passenger App`
- `HND arrival assistant`
- `Journey context layer`
- `Decision layer`
- `Experience decision monitor`
- `8 signals`
- `Experience risk`
- `Next best action`

Design intent: three-column dashboard with passenger app, context/map layer, and decision layer. It demonstrates cross-source context such as weather, reviews, congestion, operating hours, transportation, fees, and personal context.

## Product Rules

- Keep CabinTime and Journey AI visually related but conceptually separate.
- CabinTime should not look like the full Journey AI app.
- Journey AI can use richer AI decision language and candidate comparison.
- Keep `Human choice` / human-final decision language.
- Keep `No sponsored rank` or equivalent language when showing recommendations.
- Do not bring back `Operator Console` as a primary product for now.
- Avoid making the interface look like a food discovery or advertising marketplace.
