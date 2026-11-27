import type { RiskDecision, RiskRequest } from './domain.ts'

function isSafeNonNegativeInteger(value: number): boolean {
  return Number.isSafeInteger(value) && value >= 0
}

/** Applies balance, per-trade stake and open-order limits before an order is submitted. */
export function assessRisk(request: RiskRequest): RiskDecision {
  const { stakeMinor, availableBalanceMinor, openOrders, limits } = request

  if (
    !Number.isSafeInteger(stakeMinor) || stakeMinor <= 0 ||
    !isSafeNonNegativeInteger(availableBalanceMinor) ||
    !isSafeNonNegativeInteger(openOrders) ||
    !Number.isSafeInteger(limits.maxStakeMinor) || limits.maxStakeMinor <= 0 ||
    !Number.isSafeInteger(limits.maxStakeBps) || limits.maxStakeBps <= 0 || limits.maxStakeBps > 10_000 ||
    !Number.isSafeInteger(limits.maxOpenOrders) || limits.maxOpenOrders < 0
  ) {
    return { allowed: false, code: 'invalid_amount', maximumStakeMinor: 0 }
  }

  const balanceCap = Number((BigInt(availableBalanceMinor) * BigInt(limits.maxStakeBps)) / 10_000n)
  const maximumStakeMinor = Math.min(limits.maxStakeMinor, balanceCap)

  if (stakeMinor > availableBalanceMinor) {
    return { allowed: false, code: 'insufficient_balance', maximumStakeMinor }
  }
  if (stakeMinor > maximumStakeMinor) {
    return { allowed: false, code: 'stake_limit', maximumStakeMinor }
  }
  if (openOrders >= limits.maxOpenOrders) {
    return { allowed: false, code: 'open_order_limit', maximumStakeMinor }
  }

  return { allowed: true, code: 'approved', maximumStakeMinor }
}
