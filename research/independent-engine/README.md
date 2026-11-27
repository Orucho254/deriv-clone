# Independent trading engine: first implementation boundary

This repository is building an independent application. The archived Deriv source trees are research material only; they are not the application runtime, a source of private broker services, or permission to reuse brand assets.

## Current application baseline

- `application/` is a React 19 + TypeScript + Vite application.
- The current screen is a static marketing preview, not a trading terminal.
- There is no live quote feed, account service, order router, persistence layer or broker connection in the application.
- The first engine module lives in `application/src/engine/` and contains pure domain logic only.

## First engine boundaries

1. **Contract settlement** — deterministic fixed-payout rise/fall settlement using integer minor currency units.
2. **Pre-trade risk** — balance, stake and open-order limits before an order can be submitted.
3. **Order lifecycle** — explicit state transitions with terminal states.
4. **Execution readiness** — demo is available locally; live mode fails closed unless an authorized provider is connected, live mode is enabled, risk checks pass and the user explicitly confirms the risk.

These modules do not fetch prices, store accounts, transmit orders, calculate real broker quotes or promise execution. Those capabilities require separately reviewed adapters and service-side controls.

## Build sequence

1. Keep the engine pure and testable; add deterministic unit tests before UI wiring.
2. Add a market-data interface with timestamped source metadata and stale-feed detection.
3. Add a demo quote source and simulated fill ledger; label every simulated price and balance.
4. Add persistence and authenticated server APIs. Never put broker secrets in browser code.
5. Add an authorized live execution adapter behind server-side credentials, idempotency keys, duplicate-order protection, audit events, exposure limits and a kill switch.
6. Add charts, positions, order history and account screens against typed interfaces—not hard-coded broker assumptions.

## REA research workflow

REA is a separate local MCP/CLI research tool. Use its official distribution and current tool catalog; cloning its repository alone does not register its MCP server.

1. Install/register REA in the local agent environment using the official setup instructions at [morluto/rea](https://github.com/morluto/rea).
2. Analyze only publicly observable pages and workflows of the reference site. Start with the landing page, public markets catalogue, public platform navigation, chart interactions and public contract/help explanations.
3. For each observed feature, record: user action, visible state transition, network-visible evidence (if available), inferred domain rule, confidence, and unresolved questions.
4. Distinguish observed behavior from inference. Do not treat undocumented endpoints, private account data, authentication bypasses or reverse-engineered credentials as implementation requirements.
5. Translate findings into independent domain contracts and tests. Do not copy Deriv logos, proprietary text, regulatory claims or the archived site's production authentication/payment flows.

### Suggested investigation prompt

> Inspect the publicly accessible reference website as a user-facing product. Map its navigation and publicly visible trading-terminal workflows. For each workflow, report the user action, UI state changes, inputs/outputs, observable network evidence, and confidence. Do not access private accounts, bypass authentication, probe for credentials, or submit real orders. Produce an evidence-backed feature map suitable for implementing an independently branded demo-first trading application.

## Verification

From `application/` run:

- `npm ci`
- `npm run lint`
- `npm test`
- `npm run build`

A passing local domain test is not proof of live execution, broker compatibility, security or production readiness.
