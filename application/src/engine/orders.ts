import type { OrderStatus, TradeOrder } from './domain.ts'

const transitions: Record<OrderStatus, readonly OrderStatus[]> = {
  draft: ['submitted', 'cancelled'],
  submitted: ['open', 'rejected', 'cancelled'],
  open: ['won', 'lost', 'sold'],
  won: [],
  lost: [],
  sold: [],
  cancelled: [],
  rejected: [],
}

/** Enforces the order lifecycle; terminal states cannot be reopened or rewritten. */
export function transitionOrder(
  order: TradeOrder,
  nextStatus: OrderStatus,
  updatedAt: number,
): TradeOrder {
  if (!Number.isFinite(updatedAt) || updatedAt < order.updatedAt) {
    throw new RangeError('updatedAt must be a finite timestamp not earlier than the previous update')
  }
  if (!transitions[order.status].includes(nextStatus)) {
    throw new Error(`Invalid order transition: ${order.status} -> ${nextStatus}`)
  }

  return { ...order, status: nextStatus, updatedAt }
}
