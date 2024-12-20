import { Effect, sample } from 'effector'
import {
  HomePageGate,
  getProductsFirstPageFx,
  loadOneProduct,
  loadOneProductFx,
  loadProductBySearch,
  loadProductBySearchFx,
  loadProductsByFilter,
  loadProductsByFilterFx,
  loadViewedItems,
  loadViewedItemsFx,
} from '.'
import { $currentProduct, $products, $productsBySearch, $viewedItems } from './state'
import { Gate } from 'effector-react'

const goodsSampleInstance = (
  effect: Effect<void, [], Error>,
  gate: Gate<unknown>
) =>
  sample({
    clock: gate.open,
    target: effect,
  })

goodsSampleInstance(getProductsFirstPageFx, HomePageGate)

sample({
  clock: loadOneProduct,
  source: $currentProduct,
  fn: (_, data) => data,
  target: loadOneProductFx,
})

sample({
  clock: loadProductsByFilter,
  source: $products,
  fn: (_, data) => data,
  target: loadProductsByFilterFx,
})

sample({
  clock: loadViewedItems,
  source: $viewedItems,
  fn: (_, data) => data,
  target: loadViewedItemsFx,
})

sample({
  clock: loadProductBySearch,
  source: $productsBySearch,
  fn: (_, data) => data,
  target: loadProductBySearchFx,
})