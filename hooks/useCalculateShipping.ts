import { useCart } from './api/useCart'

export const useCalculateShipping = () => {
  const { data: cart } = useCart()
  
  

  const weightGr =
    cart
      ?.map((item) => +item.characteristics.weight * +item.count)
      .reduce((defaultCount, item) => defaultCount + item, 0) ?? 0

      console.log(weightGr);

  const weightPounds = +weightGr * 0.0022046223302272

  console.log(weightPounds);

    let shippingCost = 0

    if (weightPounds <= 1) {
        shippingCost = 4.63
    } else if (weightPounds > 1) {
        shippingCost = (weightPounds-1)* 0.75 + 4.63
    }

  return { shippingCost }
}