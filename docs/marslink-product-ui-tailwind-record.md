# MarsLink Product UI Tailwind Record

Last updated: 2026-06-27

This note records the current Tailwind product screens so they can be reused when the actual product UI is developed.

## Source Of Truth

- Public CabinTime page: `cabintime/index.md`
- Flight map geometry/data: `_data/japan_flight_map.yml`

The page HTML/Tailwind is the reference. Screenshots are only visual checks. As of this note, Journey AI is not a separate public page; it is folded back into the CabinTime story as `cabintime/index.md#journey-ai`.

## Product Separation

CabinTime is the initial package for dedicated or communication-constrained spaces. It should feel like a deployable portal package for aircraft, ships, trains, buses, hotels, and regional spaces, while still carrying the broader Journey AI concept.

Journey AI is the broader personal decision intelligence layer. It should show cross-source context, weather, movement, personal intent, avoid/recommend/explain logic, and human-final decision support.

Current public treatment:

- Public site: CabinTime page contains the integrated product story and the `Powered by Journey AI` section.
- Reference source: the Journey AI section now lives in CabinTime instead of an independent `journey-ai` page.
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

### Powered by Journey AI Section

File: `cabintime/index.md`

Purpose: explain Journey AI as the brain inside CabinTime, not as an independent public product page.

Key labels:

- `Powered by Journey AI`
- `CabinTimeの頭脳は、Journey AI。`
- `Journey AIは、広告枠の順位ではありません。`
- `決めるのは、つねに人間です。`
- `Weather`
- `Mobility`
- `Reviews`
- `Assurance`

Design intent: show that CabinTime is the deployable package and Journey AI is its intelligence layer. It must communicate cross-source context, explainable recommendation, and human-final decision support without making Journey AI look like a second equal product.

## Product Rules

- Keep CabinTime as the primary public product and Journey AI as the brain inside CabinTime.
- Do not bring back a public standalone Journey AI page until Journey AI operates beyond CabinTime.
- Journey AI can use richer AI decision language and candidate comparison inside the CabinTime story.
- Keep `Human choice` / human-final decision language.
- Keep `No sponsored rank` or equivalent language when showing recommendations.
- Do not bring back `Operator Console` as a primary product for now.
- Avoid making the interface look like a food discovery or advertising marketplace.
