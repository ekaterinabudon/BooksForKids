'use client'
import { useLang } from '@/hooks/useLang'
import { useTotalPrice } from '@/hooks/useTotalPrice'
import { formatPrice } from '@/lib/utils/common'
import styles from '@/styles/cartPage/index.module.css'
import EmptyPageContent from '@/components/modules/emptyPageContent/EmptyPageContent'
import { useTotalPriceWithDiscount } from '@/hooks/useTotalPriceWithDiscount'
// import { $shouldShowEmpty } from '@/context/cart/state'
import { ky, useCart } from '@/hooks/api/useCart'
import CartList from '@/components/modules/cartPage/CartList'
import { useCalculateShipping } from '@/hooks/useCalculateShipping'
// import { loadStripe } from '@stripe/stripe-js'

// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUB_KEY!)

const CartPage = () => {
  const { data: cart, isLoading: isCartLoading } = useCart()
  const { lang, translations } = useLang()
  const { newTotal } = useTotalPrice()
  const { shippingCost } = useCalculateShipping()
  const { newTotalWithDiscount } = useTotalPriceWithDiscount()
  // const shouldShowEmpty = useUnit($shouldShowEmpty)

  const handleCheckout = async () => {
    try {
      const response = await (
        await ky.post('cart/checkout', { json: { shippingCost } })
      ).json<{ url: string }>()

      if (response?.url) {
        window.open(response.url)
      }
      console.log('TEST', response)

      // const { sessionId } = await response.json();

      // const stripe = await stripePromise;
      // const { error } = await stripe?.redirectToCheckout({
      //   sessionId,
      // }) ?? {};

      // if (error) {
      //   console.error('Error:', error);
      // }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <main>
      {cart?.length ? (
        <section className={styles.shopping_cart}>
          <div className={`container ${styles.shopping_cart_container}`}>
            <h1>{translations[lang].other.shopping_cart}</h1>
            <div className={styles.shopping_cart_content}>
              <div className={styles.shopping_cart_content_left}>
                <ul className={styles.shopping_cart_list}>
                  <CartList />
                </ul>
                {/* <div className={styles.shopping_cart_left_bottom}> */}
                {/* <button
                    className={`uppercase body_large white_btn ${styles.shopping_cart_updateCart_btn}`}
                  >
                    {translations[lang].cart.update_cart}
                  </button> */}
                {/* <div className={styles.cart_apply_coupon_container}>
                    <div className={styles.cart_apply_coupon_content}>
                      <ApplyCouponBlock
                        setIsCorrectCouponCode={setIsCorrectCouponCode}
                      />
                    </div>
                  </div> */}
                {/* </div> */}
              </div>
              <div className={styles.shopping_cart_content_right}>
                <h2 className={styles.cart_totals_title}>
                  {translations[lang].cart.cart_totals}
                </h2>
                <div className={styles.cart_subtotal_container}>
                  <h5 className={`uppercase`}>
                    {translations[lang].other.subtotal}
                  </h5>
                  <h5 className={styles.cart_subtotal_price}>
                    {formatPrice(newTotal)}
                  </h5>
                </div>
                <div className={styles.cart_shipping_calc_container}>
                  <div className={styles.cart_shipping_calc_container_top}>
                    <h5 className={`uppercase`}>
                      {translations[lang].cart.shipping}
                    </h5>
                    <h5 className={styles.cart_shipping_calc_container_top_msg}>
                      {isCartLoading ? '' : `${formatPrice(shippingCost)}`}
                    </h5>
                  </div>
                  {/* <div className={styles.cart_shipping_calc}>
                    <CalcShippingBlock />
                    <UpdateTotalsBtn
                      text={translations[lang].cart.update_totals}
                      className='body_large update_totals_btn white_btn'
                      handleUpdateTotals={() => {}}
                    />
                  </div> */}
                  <div className={styles.cart_shipping_bottom}>
                    <div className={styles.cart_shipping_bottom_total}>
                      <p className={`body_large`}>
                        {(newTotalWithDiscount ?? 0) < newTotal
                          ? `${translations[lang].cart.total_with_discount}`
                          : `${translations[lang].cart.total}`}
                      </p>
                      <p
                        className={`body_large ${styles.cart_shipping_bottom_total_price}`}
                      >
                        {newTotalWithDiscount
                          ? formatPrice(newTotalWithDiscount + shippingCost)
                          : formatPrice(shippingCost)}
                      </p>
                    </div>
                    <button
                      // href={`/checkout`}
                      className={`uppercase body_large black_btn ${styles.cart_shipping_checkout_link} ${
                        !cart?.length ? styles.disabled : ''
                      }`}
                      onClick={handleCheckout}
                    >
                      {translations[lang].cart.proceed_to_checkout}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : isCartLoading ? (
        <section>
          <div className='container'>
            <EmptyPageContent
              title={translations[lang].other.cart_loading}
              description={translations[lang].other.cart_loading_advice}
              btnText={translations[lang].other.shop_now}
              loading
            />
          </div>
        </section>
      ) : (
        <section>
          <div className='container'>
            <EmptyPageContent
              title={translations[lang].other.cart_empty}
              description={translations[lang].other.cart_empty_advice}
              btnText={translations[lang].other.shop_now}
            />
          </div>
        </section>
      )}
    </main>
  )
}

export default CartPage
