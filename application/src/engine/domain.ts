export type ContractDirection = 'rise' | 'fall'

export type ContractOutcome = 'win' | 'loss' | 'tie'

export type OrderStatus =
  | 'draft'
  | 'submitted'
  | 'open'
  | 'won'
  | 'lost'
  | 'sold'
  | 'cancelled'
  | 'rejected'

export type ExecutionMode = 'demo' | 'live'

/** Monetary values are integer minor units (for example, cents). */
export interface RiseFallContract {
  direction: ContractDirection
  stakeMinor: number
  /** Total amount returned on a win, including the original stake. */
  potentialPayoutMinor: number
  entryQuote: number
}

export interface ContractSettlement {
  outcome: ContractOutcome
  grossPayoutMinor: number
  netProfitMinor: number
}

export interface RiskLimits {
  maxStakeMinor: number
  /** Maximum share of available balance, expressed in basis points (1% = 100). */
  maxStakeBps: number
  maxOpenOrders: number
}

export interface RiskRequest {
  stakeMinor: number
  availableBalanceMinor: number
  openOrders: number
  limits: RiskLimits
}

export interface RiskDecision {
  allowed: boolean
  code: 'approved' | 'invalid_amount' | 'insufficient_balance' | 'stake_limit' | 'open_order_limit'
  maximumStakeMinor: number
}

export interface ExecutionConfig {
  mode: ExecutionMode
  providerConnected: boolean
  liveTradingEnabled: boolean
  userConfirmedLiveRisk: boolean
  riskChecksPassed: boolean
}

export interface ExecutionReadiness {
  allowed: boolean
  mode: ExecutionMode
  reasons: string[]
}

export interface TradeOrder {
  id: string
  status: OrderStatus
  createdAt: number
  updatedAt: number
}
