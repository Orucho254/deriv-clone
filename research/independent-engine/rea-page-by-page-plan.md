# Page-by-page public product investigation plan

## Goal

Use REA to build an evidence-backed map of the publicly accessible Deriv website and then implement an independently branded NovaTrade experience. The target is the public website's information architecture, page composition and observable user interactions—not private broker infrastructure.

## Investigation rules

- Inspect only pages and interactions available without an account.
- Do not log in, create accounts, submit deposits or withdrawals, place real orders, bypass access controls, or probe undocumented/private endpoints.
- Do not copy logos, proprietary illustrations, text, brand styling, or regulated claims. Record general layout patterns and user-visible capabilities.
- For every finding, label it as **observed**, **inferred**, or **unknown**. Include URL, viewport, action, resulting state, evidence reference and confidence.
- Save screenshots/captures only where permitted and keep a page index so each capture maps to a route and viewport.
- Do not invent functionality when the public site hides it behind authentication.

## Route inventory to verify against the live public navigation

### Public homepage and discovery
- Home page
- Markets directory / market discovery
- Search, market cards and category navigation

### Market categories
- Forex
- Derived / Synthetic indices
- Stocks
- Commodities
- Cryptocurrencies
- Stock indices

### Trading products and concepts
- CFDs
- Options
- Multipliers or other publicly described contract types, if currently exposed
- Contract explanations and public risk information

### Platforms and tools
- Trading platforms
- Web terminal / charting product pages
- Mobile and desktop product pages
- Trading tools, calculators and market research

### Account, payments and help
- Public account-registration and login entry pages (do not submit credentials)
- Payment method information
- Deposit and withdrawal information pages (public content only)
- Help centre, FAQs, contact and support pages

### Learning and company
- Learning centre / academy / tutorials
- About, careers, news and company information
- Legal, terms, privacy, risk disclosures and regional notices

This list is a starting checklist, not a claim that every route currently exists. Discover the actual navigation, footer links, sitemap and page links before finalizing the route manifest.

## Per-page evidence template

For each route, record:

1. Canonical URL, page title, page family and breadcrumb.
2. Desktop and mobile viewport dimensions used.
3. Header, navigation, hero, content sections, sidebars, cards, tables, CTAs and footer.
4. Typography hierarchy, spacing rhythm, grid columns, background/surface treatment and responsive changes.
5. Visible controls and their states: hover, focus, expanded, selected, validation, empty and loading.
6. Every CTA destination and the resulting public page/state.
7. Search/filter/table behavior, sort behavior and pagination, if present.
8. Accessibility clues: semantic headings, labels, keyboard operation and focus visibility.
9. Evidence: screenshot/capture IDs and the observed action/result.
10. Unknowns, assumptions and confidence.

## Suggested REA session sequence

1. Discover public sitemap, global header and footer destinations.
2. Inspect homepage at desktop and mobile sizes; follow every first-level nav group.
3. Inspect one page at a time. Do not jump to implementation until that page's evidence record is complete.
4. Inspect all market category pages and compare shared versus unique sections.
5. Inspect product/platform pages and public tools.
6. Inspect public help, learning, payment information and legal pages.
7. Produce a route manifest and a component inventory, with shared components separated from page-specific content.
8. Compare NovaTrade routes against the manifest; create missing pages in small batches.
9. Validate responsive behavior and interactions against the evidence records.

## Prompt to run with REA

> Use REA to investigate the publicly accessible pages of https://deriv.com/ for an independent product-research project. Start by discovering the public sitemap, navigation tree, footer links and all publicly reachable routes. Then inspect every discovered page one by one, at desktop and mobile viewport sizes where possible. For each page, produce the complete per-page evidence template from this file: page sections and their order, layout and responsive behavior, shared components, visible controls and their state changes, CTA destinations, search/filter behavior, and accessible interaction states. Capture evidence for each observation and mark every conclusion observed, inferred or unknown with a confidence level. Do not log in, create an account, submit credentials, make deposits or withdrawals, place trades, bypass authentication, or probe private/undocumented endpoints. Do not copy logos, proprietary text, illustrations or brand identity. The final output must include a verified route manifest, page-by-page UI specification, reusable component inventory, interaction matrix, evidence references and a list of unknowns. Then compare the manifest with the current NovaTrade application and propose an implementation sequence, without changing code until the page evidence has been reviewed.

## Implementation acceptance checklist

- Every verified public route has a corresponding independently branded page or an explicitly documented out-of-scope reason.
- Shared navigation and footer destinations work.
- Each visible CTA leads somewhere meaningful.
- Search, tabs, filters, accordions and other controls actually work.
- Mobile layouts are intentionally designed, not just squeezed desktop layouts.
- Tables clearly distinguish live, stale, demo and illustrative data.
- No fabricated market feed, broker integration, account balance or payment capability is presented as real.
- All live execution stays disabled until a provider is authorized and server-side security/risk controls are reviewed.
