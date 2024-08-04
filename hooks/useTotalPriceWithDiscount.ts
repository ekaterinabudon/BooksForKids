import { useCart } from './api/useCart'

export const useTotalPriceWithDiscount = () => {
  const { data: cart } = useCart()

  const getNewTotalWithDiscount = () =>
    cart
      ?.map((item) =>
        +item.isDiscount
          ? +item.price * +item.count * (1 - +(item?.isDiscount ?? 0) / 100)
          : +item.price * +item.count
      )
      .reduce((defaultCount, item) => defaultCount + item, 0) ?? 0

  const newTotalWithDiscount = getNewTotalWithDiscount()

  return { newTotalWithDiscount }
}
