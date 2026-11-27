# Independent market-platform implementation plan

## Project direction

Build an independent educational market platform and demo terminal. Use publicly available Deriv.com pages only as a source of high-level product research: understand common market categories, publicly described product types, information architecture and user needs. Do **not** make a page-by-page clone or imitate Deriv's visual identity, exact page layouts, copy, logos, illustrations, trading-platform UI or domain identity.

Deriv's published partner guidance says not to imitate or clone its websites or trading platforms, not to use the same colour scheme or confusingly similar names, and not to copy its content. This project is not an authorized Deriv partner product and must not be presented as Deriv or affiliated with Deriv.

## Research source and tool

- Public product research: https://deriv.com/
- Browser research tool: https://github.com/morluto/rea
- Target repository: https://github.com/Orucho254/deriv-clone

REA is for observing public information only. Record product categories and user-facing concepts, not proprietary implementation details or a pixel-perfect specification.

## Research boundaries

- Inspect only publicly accessible pages.
- Do not log in, create accounts, submit credentials, deposit, withdraw, place trades, bypass access controls or probe private endpoints.
- Do not download or reuse Deriv logos, proprietary images, illustrations, employee photos, full text blocks, source code or exact page styling.
- Do not use a name, domain, colour scheme or design that could make users think this is an official Deriv site.
- Mark findings observed, inferred or unknown and include source URL and capture reference.
- Never represent illustrative quotes, demo balances or simulated orders as live.

## Product areas to research at a high level

- Market categories: forex, derived/synthetic indices, stocks, commodities, crypto and stock indices.
- Public trading concepts: CFDs, options and other publicly described contract types.
- General platform needs: market discovery, charting, watchlists, risk controls, demo practice and activity history.
- Public education and help topics: trading basics, risk education, FAQs and platform guidance.

These are research topics, not a claim that every category or route is available in every jurisdiction.

## Independent design and implementation

1. Create an original visual system: distinct name, logo, palette, typography, page layouts, illustrations and copy.
2. Build a route manifest around the independent product's actual scope, not a copy of Deriv's sitemap.
3. Implement shared navigation, market education pages, risk tools and demo terminal with original components.
4. Keep account, payment and live trading actions disabled unless separately authorized and securely implemented.
5. Test desktop/mobile behaviour, keyboard access, validation and all internal navigation.
6. Clearly label all simulated data and demo actions.

## REA prompt

> Research https://deriv.com/ only to understand the broad categories of retail trading products, publicly described market types, educational topics and user needs. Do not clone the website or trading platforms, reproduce their visual design, copy text or assets, or inspect private systems. Produce a concise factual inventory of publicly described product categories and user-facing concepts with source URLs, and distinguish observed facts from inference. Do not change code. Our implementation must use an original brand, visual identity, layout, wording and components.

## Acceptance checklist

- Original product name, domain, visual identity, layout and copy.
- No copied Deriv branding, logos, assets, full text or pixel-perfect UI.
- Market education and product explanations are factually grounded and jurisdiction-aware.
- Demo prices, balances and order outcomes are clearly simulated.
- No real credentials, deposits, withdrawals or live orders are processed.
- No implication of Deriv affiliation, authorization or official status.
