import type { ContractSettlement, RiseFallContract } from './domain.ts'

function assertMinorAmount(value: number, label: string): void {
  if (!Number.isSafeInteger(value) || value < 0) {
    throw new RangeError(`${label} must be a non-negative safe integer in minor units`)
  }
}

/**
 * Settles a fixed-payout rise/fall contract.
 * A tie refunds the stake. A win returns the quoted gross payout; a loss returns zero.
 */
export function settleRiseFall(
  contract: RiseFallContract,
  exitQuote: number,
): ContractSettlement {
  assertMinorAmount(contract.stakeMinor, 'stakeMinor')
  assertMinorAmount(contract.potentialPayoutMinor, 'potentialPayoutMinor')

  if (contract.stakeMinor === 0) {
    throw new RangeError('stakeMinor must be greater than zero')
  }
  if (contract.potentialPayoutMinor < contract.stakeMinor) {
    throw new RangeError('potentialPayoutMinor cannot be less than stakeMinor')
  }
  if (!Number.isFinite(contract.entryQuote) || !Number.isFinite(exitQuote)) {
    throw new RangeError('Entry and exit quotes must be finite numbers')
  }

  const tied = exitQuote === contract.entryQuote
  const won = contract.direction === 'rise'
    ? exitQuote > contract.entryQuote
    : exitQuote < contract.entryQuote

  if (tied) {
    return { outcome: 'tie', grossPayoutMinor: contract.stakeMinor, netProfitMinor: 0 }
  }

  if (won) {
    return {
      outcome: 'win',
      grossPayoutMinor: contract.potentialPayoutMinor,
      netProfitMinor: contract.potentialPayoutMinor - contract.stakeMinor,
    }
  }

  return { outcome: 'loss', grossPayoutMinor: 0, netProfitMinor: -contract.stakeMinor }
}
