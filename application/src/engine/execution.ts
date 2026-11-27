import type { ExecutionConfig, ExecutionReadiness } from './domain.ts'

/**
 * This is a guard, not an execution adapter. Live orders remain unavailable until
 * an authorized provider, explicit live-mode switch, user confirmation and risk checks exist.
 */
export function checkExecutionReadiness(config: ExecutionConfig): ExecutionReadiness {
  if (config.mode === 'demo') {
    return { allowed: true, mode: 'demo', reasons: [] }
  }

  const reasons: string[] = []
  if (!config.providerConnected) reasons.push('No authorized live execution provider is connected.')
  if (!config.liveTradingEnabled) reasons.push('Live trading is disabled by configuration.')
  if (!config.userConfirmedLiveRisk) reasons.push('The user has not confirmed live-trading risk.')
  if (!config.riskChecksPassed) reasons.push('Pre-trade risk checks have not passed.')

  return { allowed: reasons.length === 0, mode: 'live', reasons }
}
