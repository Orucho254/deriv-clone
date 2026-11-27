# Deriv.com public UI reconnaissance — 27 November 2026

## Scope and method

This is the first documented reconnaissance pass for the Deriv Clone project. It uses pages publicly accessible without an account. The public site was opened in a browser research session and visible navigation destinations were followed. This is not a claim that REA has been executed: REA is not connected to this ChatGPT session, so this pass is a manually observed baseline. Continue with REA in the local development environment for viewport screenshots, responsive measurements, hover/focus states and repeatable interaction capture.

Reference origin: https://deriv.com/

## Verified route inventory

| Route | Page family | Observation status | Evidence |
|---|---|---|---|
| / | Homepage | Observed | https://deriv.com/ |
| /markets/forex | Market detail | Observed | https://deriv.com/markets/forex |
| /markets/derived-indices/synthetic-indices | Market detail | Observed | https://deriv.com/markets/derived-indices/synthetic-indices |
| /trading-platforms/tradingview | Platform detail | Observed | https://deriv.com/trading-platforms/tradingview |
| /trade/cfds | Product detail | Observed | https://deriv.com/trade/cfds |
| /payment-methods | Payments information | Observed | https://deriv.com/payment-methods |
| https://traders-academy.deriv.com/ | Learning sub-site | Observed | https://traders-academy.deriv.com/ |

The homepage footer also exposes routes/destinations for Options, trading specifications, Stocks, Stock Indices, Commodities, Cryptocurrencies, ETFs, Deriv App, MT5, cTrader, Deriv Trader, Deriv Bot, SmartTrader, Deriv P2P, promotions, trading calculator, MT5 signals, API, company/about, glossary, help centre, contact, community, status, regulatory information, terms, privacy, responsible trading and fraud prevention. These are discovered destinations, not yet individually audited.

## Homepage — observed structure

Source: https://deriv.com/

1. Utility/app promotion area with QR/app download content.
2. Hero with a short three-line positioning headline, supporting line and two primary actions (account opening and trade now); supporting lifestyle imagery.
3. Trust/credibility section with company history, award mentions and large activity/customer/volume figures.
4. Market directory containing six cards: Forex, Derived Indices, Stocks, Commodities, Crypto and Stock Indices.
5. Availability/24-7 message for crypto and synthetic indices.
6. Platform/product showcase with five distinct tiles: TradingView, MT5, cTrader, Deriv Trader and Deriv Bot.
7. Payments/deposits/withdrawals information section.
8. Customer review/testimonial area.
9. Three-step onboarding section (sign up, deposit, trade).
10. Dense footer grouped by Trade, Markets, Payments, Platforms, Promotions, Tools, Developer tools, About, Learn, Partners, Support and Legal, followed by app promotion and legal/risk disclosures.

## Homepage — visible navigation groups

- Trade: CFDs, Options, Trading specifications
- Markets: Forex, Derived Indices, Stocks, Stock Indices, Commodities, Cryptocurrencies, ETFs
- Payments: Payment methods
- Platforms: Deriv App, TradingView, Deriv MT5, Deriv cTrader, Deriv Trader, Deriv Bot, SmartTrader, Deriv P2P
- Promotions: Trading competitions, Spread advantage hours, Promotions
- Tools: MT5 signals, Trading calculator, TradersView
- Developer tools: Deriv API
- About: Who we are, Why choose us, Our principles, Careers, Deriv<ed>, Deriv Life, Newsroom
- Learn: Deriv Academy, Expert Insights, Deriv Blog, Glossary
- Partner with us: Partners, API Partnerships
- Support: Help centre, Contact us, Community, Status page
- Legal: Regulatory information, Terms & conditions, Privacy policy, Secure & responsible trading, Fraud prevention

## Forex detail page — observed structure

Source: https://deriv.com/markets/forex

1. Hero: currency-market headline, supporting description and demo/trade calls to action.
2. Supporting lifestyle/trading image.
3. Market-benefit section and currency pair categories: major, minor, exotic and micro pairs.
4. Searchable instrument/specifications directory. Visible columns include instrument, contract size, base currency, minimum size, volume limit, minimum spread, target spread %, maximum effective leverage, margin requirement, long/short swap and GMT trading hours.
5. CFD and options product routes, followed by platform links.
6. FAQ accordion section. Observed questions cover forex benefits, reading a quote, trading costs, pair categories and exchange-rate factors.
7. CTA and shared grouped footer.

The directory exposes a search input and paginated results (10 instruments per page in the captured public page). The exact values can change with trading conditions; do not hardcode them as current data.

## Derived/Synthetic Indices detail page — observed structure

Sources: https://deriv.com/markets/derived-indices and https://deriv.com/markets/derived-indices/synthetic-indices

1. Hero: Synthetic Indices headline and explanation of generated market behaviour; demo/trade calls to action.
2. Three benefit blocks: 24/7 availability, separation from real-world news and selected-instrument leverage information.
3. Product family catalogue observed on the page: Crash/Boom, Volatility, Skew Step, DEX, Jump, Daily Reset, Range Break and Multi Step. The current page's full family set also includes Hybrid, Volatility Switch, Step, Drift Switching and Trek; keep the inventory current as the public page changes.
4. Searchable instrument/specifications directory. Visible columns include instrument, contract size, base currency, minimum size, volume limit, minimum spread, target spread %, maximum effective leverage, margin requirement, long/short swap and GMT trading hours.
5. CFD and Options product routes, followed by TradingView, MT5 and cTrader platform links.
6. FAQ accordion section. Observed questions cover swap-free availability, indicator suitability and external news impact.
7. Directory pagination and legal/risk footer.

The directory exposes a search input and paginated results (10 instruments per page in the captured public page). Values may change; do not hardcode as live quotes or current contract conditions.

## Additional routes opened

- https://deriv.com/trading-platforms/tradingview — TradingView platform detail page opened; content/interaction audit pending.
- https://deriv.com/trade/cfds — CFDs product page opened; content/interaction audit pending.
- https://deriv.com/payment-methods — payment methods page opened; content/interaction audit pending.
- https://traders-academy.deriv.com/ — Academy sub-site opened; content/interaction audit pending.

## Corrections required in current application

- Existing local route /markets/synthetic-indices does not match the observed canonical public route /markets/derived-indices/synthetic-indices.
- Current homepage is a generic market-learning landing page. It does not yet reproduce the observed section order or density: trust metrics, six market cards, 24/7 panel, five-platform showcase, payments, testimonials, three-step onboarding and grouped footer.
- Forex and Synthetic Indices now have dedicated local page templates, category explanations, searchable instrument directories with the observed 12-column specification structure and expandable FAQs. The data cells are explicitly marked as not connected rather than fabricating contract conditions.
- The local specification table still needs pagination, sortable columns and verified responsive interaction capture.
- Existing footer/navigation is a simplified generic navigation and needs a route manifest based on the verified public link inventory.
- Existing chart and prices are demo placeholders. Keep them labelled simulated unless a lawful market-data feed is integrated.

## Next REA capture tasks

1. Launch REA locally and attach a browser session to https://deriv.com/.
2. Capture homepage desktop at 1440×900 and mobile at 390×844; include full-page screenshots.
3. Record header menus in closed/open/hover/focus states and inspect mobile navigation.
4. Capture every homepage section boundary and CTA destination.
5. For each route in the verified inventory, record full-page desktop/mobile screenshots, section order, content width, spacing, font hierarchy, card geometry, responsive breakpoints, interactive states and link destinations.
6. Inspect the Forex search field/table sorting/pagination and FAQ expand/collapse behaviour.
7. Inspect the Synthetic Indices category links, directory search/table behaviour and FAQ controls.
8. Continue through TradingView, CFDs, payment methods and Academy, then expand route inventory from their own navigation/footer links.
9. Export screenshots and structured observations into `research/deriv-public-audit/captures/` and link each capture in the route manifest.

## Safety and product boundaries

- Public pages only. Do not log in, submit credentials, make deposits/withdrawals, place live trades, bypass controls or probe private endpoints.
- Do not reuse Deriv's logo, proprietary images, or large blocks of text. Use the observations to reproduce the page architecture and behaviour with project-owned branding/assets and original wording.
- Never imply the project is operated, endorsed or authorized by Deriv.
- Do not copy regulatory claims or payment availability as if they apply to this project.
- No real execution or payment integration is enabled by this audit.


## Current public-source cross-check

- Forex public page: https://deriv.com/markets/forex
- Synthetic Indices public page: https://deriv.com/markets/derived-indices/synthetic-indices
- Derived Indices overview: https://deriv.com/markets/derived-indices
- TradingView platform page: https://deriv.com/trading-platforms/tradingview

A web content snapshot retrieved on 27 November 2026 confirms the instrument-directory column headings and product families described above. Always re-check the live public page before implementing exact data or copy; trading specifications are subject to change.