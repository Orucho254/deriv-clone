import assert from 'node:assert/strict'
import test from 'node:test'
import { settleRiseFall } from '../src/engine/contracts.ts'
import { checkExecutionReadiness } from '../src/engine/execution.ts'
import { transitionOrder } from '../src/engine/orders.ts'
import { assessRisk } from '../src/engine/risk.ts'

test('rise/fall settlement returns gross payout and net profit in minor units', () => {
  assert.deepEqual(
    settleRiseFall({ direction: 'rise', stakeMinor: 100, potentialPayoutMinor: 185, entryQuote: 10 }, 11),
    { outcome: 'win', grossPayoutMinor: 185, netProfitMinor: 85 },
  )
  assert.deepEqual(
    settleRiseFall({ direction: 'fall', stakeMinor: 100, potentialPayoutMinor: 185, entryQuote: 10 }, 11),
    { outcome: 'loss', grossPayoutMinor: 0, netProfitMinor: -100 },
  )
  assert.deepEqual(
    settleRiseFall({ direction: 'rise', stakeMinor: 100, potentialPayoutMinor: 185, entryQuote: 10 }, 10),
    { outcome: 'tie', grossPayoutMinor: 100, netProfitMinor: 0 },
  )
})

test('settlement rejects invalid monetary inputs', () => {
  assert.throws(
    () => settleRiseFall({ direction: 'rise', stakeMinor: 0, potentialPayoutMinor: 100, entryQuote: 10 }, 11),
    /greater than zero/,
  )
  assert.throws(
    () => settleRiseFall({ direction: 'rise', stakeMinor: 100, potentialPayoutMinor: 99, entryQuote: 10 }, 11),
    /cannot be less/,
  )
})

test('risk checks enforce balance, stake cap and open-order cap', () => {
  const base = {
    stakeMinor: 500,
    availableBalanceMinor: 10_000,
    openOrders: 0,
    limits: { maxStakeMinor: 1_000, maxStakeBps: 1_000, maxOpenOrders: 3 },
  }
  assert.equal(assessRisk(base).code, 'approved')
  assert.equal(assessRisk({ ...base, stakeMinor: 1_001 }).code, 'stake_limit')
  assert.equal(assessRisk({ ...base, stakeMinor: 10_001 }).code, 'insufficient_balance')
  assert.equal(assessRisk({ ...base, openOrders: 3 }).code, 'open_order_limit')
})

test('demo mode is available without a broker connection', () => {
  assert.deepEqual(
    checkExecutionReadiness({
      mode: 'demo',
      providerConnected: false,
      liveTradingEnabled: false,
      userConfirmedLiveRisk: false,
      riskChecksPassed: false,
    }),
    { allowed: true, mode: 'demo', reasons: [] },
  )
})

test('live mode fails closed until every explicit gate is satisfied', () => {
  const config = {
    mode: 'live' as const,
    providerConnected: false,
    liveTradingEnabled: false,
    userConfirmedLiveRisk: false,
    riskChecksPassed: false,
  }
  assert.equal(checkExecutionReadiness(config).allowed, false)
  assert.equal(checkExecutionReadiness(config).reasons.length, 4)
  assert.equal(checkExecutionReadiness({
    ...config,
    providerConnected: true,
    liveTradingEnabled: true,
    userConfirmedLiveRisk: true,
    riskChecksPassed: true,
  }).allowed, true)
})

test('order lifecycle rejects reopening terminal orders', () => {
  const order = { id: 'demo-1', status: 'draft' as const, createdAt: 1, updatedAt: 1 }
  const submitted = transitionOrder(order, 'submitted', 2)
  const opened = transitionOrder(submitted, 'open', 3)
  const won = transitionOrder(opened, 'won', 4)
  assert.equal(won.status, 'won')
  assert.throws(() => transitionOrder(won, 'open', 5), /Invalid order transition/)
  assert.throws(() => transitionOrder(opened, 'lost', 2), /not earlier/)
})
