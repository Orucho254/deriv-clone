# Deriv.com reverse-engineering execution plan

## Objective

Reverse-engineer the publicly accessible Deriv.com website page by page, using browser observation and REA to document its information architecture, page layouts, visual hierarchy, responsive behaviour, navigation and visible interactions. Use the findings to build the Deriv Clone project in this repository.

Reference site: https://deriv.com/
Research tool: https://github.com/morluto/rea
Repository: https://github.com/Orucho254/deriv-clone

The project is an independent implementation and is not affiliated with Deriv. Recreate the observed UI patterns and user flows using project-owned branding, original copy and original or licensed assets. Do not collect Deriv credentials, impersonate Deriv, reuse proprietary assets, or interact with real accounts/trading/payment flows.

## Working method

1. Inspect the live public site in a browser with REA.
2. Discover routes from the current header, footer, sitemaps and page links.
3. Audit one route at a time. Capture desktop and mobile screenshots.
4. Record every section, layout measurement, visible control, interaction state and destination.
5. Implement the page in the repository.
6. Compare local screenshots with the reference at identical viewport dimensions.
7. Fix differences and repeat before moving to the next page.
8. Keep an evidence ledger: observed / inferred / unknown, source URL, capture ID, viewport and confidence.

## Initial observed route inventory (27 November 2026)

- `/` — homepage
- `/markets/forex` — forex
- `/markets/derived-indices/synthetic-indices` — synthetic indices
- `/trading-platforms/tradingview` — TradingView platform
- `/trade/cfds` — CFDs
- `/payment-methods` — payment methods
- `https://traders-academy.deriv.com/` — Academy

The full first-pass notes are in `research/deriv-public-audit/2026-11-27-first-pass.md`. This route list is a starting point, not a complete inventory.

## Page audit template

For each route capture:

- Canonical URL, page title, page family, parent navigation group.
- Viewport size, browser zoom, date/time and capture ID.
- Header state: default, hover, focused, expanded, mobile menu.
- Hero: text hierarchy, alignment, image/illustration, background, CTA labels and destinations.
- Every content section in exact order, including card counts and grid structure.
- Typography, content width, gutters, vertical spacing, radii, borders, shadows and colours.
- Tables: columns, sorting, search, pagination, tooltips and empty/loading states.
- Tabs, accordions, carousels, filters, dropdowns, modals and their state transitions.
- Footer groups and every destination.
- Mobile reflow, hidden/visible elements, sticky behaviour and touch interactions.
- Keyboard focus and accessibility labels where observable.
- Evidence screenshots and confidence for each observation.

## REA session prompt

> Reverse-engineer the publicly accessible Deriv.com website page by page for the Deriv Clone project. Start at https://deriv.com/. Discover routes through the visible header, footer, sitemap and page links. For each route, capture full-page desktop and mobile screenshots, then inspect all visible interactive elements and their states. Record section order, dimensions, typography, spacing, colour values, card/table geometry, navigation destinations, responsive breakpoints and interaction behaviour. Mark every observation as observed, inferred or unknown; include URL, viewport, screenshot ID and confidence. Work through one page at a time and produce a verified route manifest plus page specifications. Do not log in, submit credentials, create accounts, deposit, withdraw, place trades, bypass authentication or probe private endpoints. Do not reuse Deriv logos, proprietary images or copied blocks of text; use project-owned branding, original copy and assets in the implementation. Do not modify code during the observation pass; first produce the evidence for the page under inspection.

## Page implementation order

1. Homepage and shared header/footer.
2. Market landing page and market category pages.
3. Forex detail: hero, benefits, pair categories, searchable specification table, product/platform links, FAQs.
4. Derived/Synthetic Indices: hero, benefits, product-family catalogue, searchable specification table, FAQs.
5. Product pages: CFDs, Options, Trading specifications.
6. Platform pages: TradingView, MT5, cTrader, Deriv Trader, Deriv Bot, mobile app.
7. Payments page.
8. Learning pages and Academy.
9. Tools, support, company/about and legal information pages.

## Initial homepage evidence

Observed homepage sequence:

1. App/QR promotion.
2. Hero with headline, supporting copy, account and trade CTAs, lifestyle imagery.
3. Trust/awards/metrics.
4. Six market category cards.
5. 24/7 market availability message.
6. Five platform/product showcase cards.
7. Payments section.
8. Testimonials.
9. Three-step onboarding.
10. Grouped footer, app promotion and risk/legal disclosure.

## Initial implementation gaps

- Current homepage is a generic landing page and needs to be rebuilt to match the observed section sequence.
- Existing market category route for synthetic indices must use the observed canonical route `/markets/derived-indices/synthetic-indices`.
- Forex and synthetic-indices pages are generic templates; they need dedicated sections and directory table interactions.
- Footer and header need the full discovered navigation hierarchy.
- Platform, payment and learning pages have only partial/generic coverage.
- Terminal data and outcomes are illustrative; do not label them live.

## Boundaries

- Public pages only. Do not log in, submit credentials, make deposits/withdrawals, place live trades, bypass controls or probe private endpoints.
- Use public pages as UI/interaction reference. Do not copy logos, proprietary illustrations, photos or large text passages.
- Clearly identify the project as independent and unofficial.
- Do not reproduce Deriv's legal or regulatory statements as claims about this project.
- Keep real-money trading and payment execution disabled unless separately and lawfully integrated.
