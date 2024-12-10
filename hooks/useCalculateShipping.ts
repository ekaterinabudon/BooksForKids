import { useCart } from './api/useCart'

export const useCalculateShipping = () => {
  const { data: cart } = useCart()

  const weightGr =
    cart
      ?.map((item) => +item.characteristics.weight * +item.count)
      .reduce((defaultCount, item) => defaultCount + item, 0) ?? 0

  console.log(weightGr)

  const weightPounds = +weightGr * 0.0022046223302272

  console.log(weightPounds)

  let shippingCost = 0

  if (weightPounds <= 1) {
    shippingCost = 4.63
  } else if (weightPounds > 1 && weightPounds <= 2) {
    shippingCost = 5.38
  } else if (weightPounds > 2 && weightPounds <= 3) {
    shippingCost = 6.13
  } else if (weightPounds > 3 && weightPounds <= 4) {
    shippingCost = 6.88
  } else if (weightPounds > 4 && weightPounds <= 5) {
    shippingCost = 7.63
  } else {
    shippingCost = 8.38
  }

  return { shippingCost }
}
