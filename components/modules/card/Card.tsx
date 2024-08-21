import Link from 'next/link'
import Image from 'next/image'
import { IAmCardProps } from '@/types/modules'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import CardLabel from './CardLabel'
import CardActionBtn from '@/components/elements/cardActions/CardActionBtn'
import {
  addOverflowHiddenToBody,
  formatPrice,
  isItemInList,
  isItemInListOfFavorites,
} from '@/lib/utils/common'
import AddToCartBtn from '@/components/elements/addToCart/AddToCartBtn'
import { useCartAction } from '@/hooks/useCartAction'
<<<<<<< HEAD
// import { useFavoritesAction } from '@/hooks/useFavoritesAction'
=======
import { useFavoritesAction } from '@/hooks/useFavoritesAction'
>>>>>>> 3fa0bfdc0e80713bfc7d5c130f2b42781be631e5
import { setIsAddToFavorites } from '@/context/favorites'
import styles from '@/styles/card/index.module.css'
import { setCurrentProduct } from '@/context/goods'
import { openNotifyMeModal, showQuickViewModal } from '@/context/modals'
import { useLang } from '@/hooks/useLang'
import NotifyOfDeliveryBtn from '@/components/elements/notifyOfDelivery/NotifyOfDeliveryBtn'
import { useAddToCart, useCart } from '@/hooks/api/useCart'
<<<<<<< HEAD
import { useAddToFavorites, useFavorites } from '@/hooks/api/useFavorites'
=======
>>>>>>> 3fa0bfdc0e80713bfc7d5c130f2b42781be631e5

const Card = ({ item }: IAmCardProps) => {
  const { lang, translations } = useLang()
  const isMedia1100 = useMediaQuery(1100)
  const { getCanAddToCart } = useCartAction()
<<<<<<< HEAD

  const { data: cart } = useCart()
  const isProductInCart = isItemInList(cart, item._id)

  const { data: favorites } = useFavorites()
  const isProductInFavorites = isItemInListOfFavorites(favorites, item._id)
  // const { handleAddProductToFavorites, isProductInFavorites } =
  //   useFavoritesAction(item)

  const addToCart = useAddToCart()
  const addToFavorites = useAddToFavorites()
=======

  const { data: cart } = useCart()
  const isProductInCart = isItemInList(cart, item._id)
  const { handleAddProductToFavorites, isProductInFavorites } =
    useFavoritesAction(item)

  const addToCard = useAddToCart()
>>>>>>> 3fa0bfdc0e80713bfc7d5c130f2b42781be631e5

  const handleShowQuickViewModal = () => {
    addOverflowHiddenToBody()
    showQuickViewModal()
    setCurrentProduct(item)
  }

  const handleOpenNotifyMeModal = () => {
    addOverflowHiddenToBody()
    openNotifyMeModal()
    setCurrentProduct(item)
  }

  const addAndGoToCartActionBtn = () => {
    setIsAddToFavorites(false)
<<<<<<< HEAD
    addToCart.mutate(item)
=======
    addToCard.mutate(item)
>>>>>>> 3fa0bfdc0e80713bfc7d5c130f2b42781be631e5
    document.location.href = '/cart'
  }

  return (
    <>
      <div className={styles.list_item_container}>
        <li className={styles.list_item}>
          <div className={styles.label_container}>
            <CardLabel
              inStock={item.inStock}
              isNew={item.isNew}
              isBestSeller={item.isBestSeller}
              isDiscount={item.isDiscount}
            />
          </div>
          <Link
            href={`/catalog/${item.category}/${item._id}`}
            className={styles.card_top_link}
          >
            <div className={styles.card_top_container}>
              <Image
                src={item.images[0]}
                alt={item.name}
                width={500}
                height={500}
              />
            </div>
            <div className={styles.card_bottom_container}>
              <h3>{item.name}</h3>
              <div>
                {item.isDiscount ? (
                  <h4>
                    <span
                      className={`line_through ${styles.card_price_discount}`}
                    >
                      {formatPrice(+item.price)}
                    </span>
                    <span>{`${formatPrice(+item.price * (1 - +item.isDiscount / 100))}`}</span>
                  </h4>
                ) : (
                  <h4 className={styles.price}>{formatPrice(+item.price)}</h4>
                )}
              </div>
            </div>
          </Link>
          {!isMedia1100 ? (
            isProductInCart ? (
              <div className={styles.card_to_cart_btn_container_added}>
                <AddToCartBtn
                  text={
                    isProductInCart
                      ? translations[lang].card.in_cart
                      : translations[lang].card.to_cart
                  }
                  className={`${styles.card_cart_btn} ${isProductInCart ? styles.card_cart_btn_added : ''}`}
<<<<<<< HEAD
                  handleAddToCart={() => addToCart.mutate(item)}
=======
                  handleAddToCart={() => addToCard.mutate(item)}
>>>>>>> 3fa0bfdc0e80713bfc7d5c130f2b42781be631e5
                  btnDisabled={!getCanAddToCart(item._id)}
                />
              </div>
            ) : (
              <div className={styles.card_to_cart_btn_container}>
                {+item.inStock ? (
                  <AddToCartBtn
                    text={
                      isProductInCart
                        ? translations[lang].card.in_cart
                        : translations[lang].card.to_cart
                    }
                    className={`${styles.card_cart_btn} ${isProductInCart ? styles.card_cart_btn_added : ''}`}
<<<<<<< HEAD
                    handleAddToCart={() => addToCart.mutate(item)}
=======
                    handleAddToCart={() => addToCard.mutate(item)}
>>>>>>> 3fa0bfdc0e80713bfc7d5c130f2b42781be631e5
                    btnDisabled={!getCanAddToCart(item._id)}
                  />
                ) : (
                  <NotifyOfDeliveryBtn
                    text={translations[lang].wishlist.notify_of_delivery}
                    handleNotifyMe={handleOpenNotifyMeModal}
                  />
                )}
              </div>
            )
          ) : (
            <div className={styles.card_to_cart_btn_container_small}>
              <AddToCartBtn
                text={
                  isProductInCart
                    ? translations[lang].card.in_cart
                    : translations[lang].card.to_cart
                }
                className={`${styles.card_cart_btn} ${isProductInCart ? styles.card_cart_btn_added : ''}`}
<<<<<<< HEAD
                handleAddToCart={() => addToCart.mutate(item)}
=======
                handleAddToCart={() => addToCard.mutate(item)}
>>>>>>> 3fa0bfdc0e80713bfc7d5c130f2b42781be631e5
                btnDisabled={!getCanAddToCart(item._id)}
              />
            </div>
          )}
          {!isMedia1100 && (
            <div className={styles.card_actions}>
              <CardActionBtn
                text={translations[lang].card.add_to_cart}
                iconClass='card_action_btn_add_to_cart'
                callback={addAndGoToCartActionBtn}
              />
              <CardActionBtn
                text={translations[lang].card.quick_view}
                iconClass='card_action_btn_quick_view'
                callback={handleShowQuickViewModal}
              />

              <CardActionBtn
                text={translations[lang].card.add_to_favorites}
                iconClass={`${
                  isProductInFavorites
                    ? 'card_action_btn_add_to_favorites_checked'
                    : 'card_action_btn_add_to_favorites'
                }`}
                callback={() => addToFavorites.mutate(item)}
              />
            </div>
          )}
        </li>
      </div>
    </>
  )
}

export default Card
