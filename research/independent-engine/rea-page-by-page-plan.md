# Deriv.com page-by-page reverse-engineering plan

## Objective

Build a close, page-by-page **local research replica** of the publicly accessible Deriv.com website. Use REA to observe the current public site, record evidence, and implement the same information architecture, page composition, responsive behaviour, navigation and visible interactions in this repository.

This repository is an unofficial study project. It must not be deployed or presented as Deriv's official website, collect Deriv credentials, process deposits, or execute real trades. Do not copy Deriv logos, proprietary illustrations, employee imagery, full blocks of text, or regulated/legal claims. Recreate layout and interaction patterns with original assets and wording. Deriv's published partner guidance expressly prohibits imitating its site or trading platforms; do not represent this project as an authorized Deriv partner or affiliate.

## Source of truth

- Public reference: https://deriv.com/
- Research tool: https://github.com/morluto/rea
- Target repository: https://github.com/Orucho254/deriv-clone
- Inspect the current site at research time; do not assume archived Gatsby files or old screenshots represent today's site.

## Investigation rules

- Inspect only pages and interactions available without an account.
- Do not log in, create accounts, submit credentials, make deposits or withdrawals, place trades, bypass access controls, or probe private/undocumented endpoints.
- For each finding, mark **observed**, **inferred**, or **unknown** and record URL, viewport, action, resulting state, evidence reference and confidence.
- Capture desktop and mobile states for each page. Record screenshot IDs and link them to route + viewport.
- Do not implement a route based only on a guessed URL. Discover destinations through visible navigation, footer links, sitemap and on-page links.
- Do not claim live prices, account balances, funding availability, regulation or trading execution in this research build.

## Initial route families to verify

Treat this as a discovery checklist, not a final route manifest.

### Homepage and market discovery
- Homepage and global navigation
- Forex
- Derived Indices
- Stocks
- Commodities
- Crypto
- Stock Indices

### Platforms and products
- TradingView integration information
- Deriv Exchange
- Deriv MT5
- Deriv cTrader
- Deriv Trader
- Deriv Bot
- Mobile app

### Account, payments and help
- Public sign-up and login entry pages (view only; do not submit)
- Payment methods and funding information
- Support and help centre
- Public FAQs and contact destinations

### Learning and company
- Academy / learning resources
- About and company pages
- News / blog
- Legal, terms, privacy and risk information (record links and page structure; do not reproduce regulated claims)

## Per-page evidence record

For every verified route, document:

1. Canonical URL, title, page family and breadcrumb.
2. Desktop and mobile viewport dimensions.
3. Header, navigation, hero, section order, cards, tables, CTAs and footer.
4. Typography hierarchy, spacing, grid, backgrounds, borders, imagery and responsive changes.
5. Visible controls and states: hover, focus, expanded, selected, validation, empty and loading.
6. Every CTA destination and resulting public state.
7. Search, filter, sort, tab, carousel, accordion and pagination behaviour.
8. Keyboard and accessibility behaviour where observable.
9. Screenshot/capture IDs and exact action/result evidence.
10. Unknowns, assumptions and confidence.

## REA workflow

1. Start REA against https://deriv.com/ and discover the public sitemap, header navigation, footer links and route destinations.
2. Inspect the homepage at desktop and mobile sizes.
3. Follow each public navigation item and inspect its destination one page at a time.
4. Inspect market pages, then platform/product pages, then support, payments, learning and legal pages.
5. Build a verified route manifest and reusable component inventory from observations.
6. Implement the homepage and shared header/footer first, then each verified route family.
7. Compare the local build against captured evidence at matching viewport sizes.
8. Fix layout, typography, responsive behaviour and interaction differences before moving on.

## REA session prompt

> Reverse-engineer the publicly accessible Deriv.com website at https://deriv.com/ for a private, unofficial local research replica. Discover all public routes from the current header, footer, sitemap and page links. Inspect each route one by one at desktop and mobile viewport sizes. For every route, record section order, layout geometry, typography, spacing, responsive changes, visible controls, state changes, CTA destinations and accessibility behaviour. Capture screenshots for each page and interaction. Mark every finding observed, inferred or unknown and include confidence. Do not log in, submit credentials, create accounts, deposit, withdraw, place trades, bypass authentication or inspect private/undocumented endpoints. Do not copy logos, proprietary illustrations, employee images, full text blocks or regulated/legal claims. Produce a verified route manifest, page-by-page specification, shared component inventory, interaction matrix, screenshot index and unknowns list. Do not change code until the evidence for the relevant page has been recorded.

## Acceptance checklist

- Every verified public route has a corresponding local page or a documented reason for exclusion.
- Header, footer, dropdowns and all visible public navigation destinations work.
- Every visible CTA has the correct public destination or a clearly disabled local-study equivalent.
- Search, tabs, filters, accordions and other visible controls behave like their observed counterparts.
- Desktop and mobile layouts match the evidence at the same viewport sizes.
- Local pages use original wording and assets; no copied Deriv logo or proprietary imagery.
- All account, payment and trade actions are inert demonstrations or clearly marked unavailable.
- No real credentials, deposits, withdrawals, live account data or order execution are collected or processed.
- The UI is clearly labelled as an unofficial local research build and is never presented as Deriv's official service.
