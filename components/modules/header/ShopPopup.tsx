import Link from 'next/link'
import { forwardRef } from 'react'
import { useUnit } from 'effector-react'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { withClickOutside } from '@/components/hocs/withClickOutside'
import { IAmWrappedComponentProps } from '@/types/hocs'
import { useLang } from '@/hooks/useLang'
import ShopPopupLinkItem from './ShopPopupLinkItem'
import { $isAuth } from '@/context/auth/state'
import { useFavorites } from '@/hooks/api/useFavorites'

const ShopPopup = forwardRef<HTMLDivElement, IAmWrappedComponentProps>(
  ({ open, setOpen }, ref) => {
    const { lang, translations } = useLang()
    const handleShowPopup = () => setOpen(true)
    const handleHidePopup = () => setOpen(false)
    const { data: favorites } = useFavorites()
    const isAuth = useUnit($isAuth)
    const isMedia1300 = useMediaQuery(1300)

    // const shopTypesLinks = [
    //   {
    //     id: 30,
    //     text: translations[lang].shop_popup.shop_full_width,
    //     href: '/catalog/shop_full_width',
    //   },
    //   {
    //     id: 31,
    //     text: translations[lang].shop_popup.shop_with_sidebar,
    //     href: '/catalog/shop_with_sidebar',
    //   },
    //   {
    //     id: 32,
    //     text: '',
    //     href: '',
    //   },
    //   {
    //     id: 33,
    //     text: '',
    //     href: '',
    //   },
    // ]

    const singleProduct = [
      {
        id: 34,
        text: translations[lang].shop_popup.bestseller,
        href: '/catalog/shop_full_width?sort=bestseller',
      },
      {
        id: 35,
        text: translations[lang].shop_popup.on_sale,
        href: '/catalog/shop_full_width?isDiscount=true',
      },
      {
        id: 37,
        text: translations[lang].shop_popup.new,
        href: '/catalog/shop_full_width?sort=new',
      },
    ]

    const shopPages = [
      {
        id: 38,
        text: translations[lang].shop_popup.cart,
        href: '/cart',
      },
      {
        id: 40,
        text: translations[lang].auth_popup.my_account,
        href: `${isAuth ? '/my-account/dashboard' : '/login'}`,
      },
      {
        id: 41,
        text: `${translations[lang].my_account.wishlist} ${
          !!favorites?.length ? favorites.length : ''
        }`,
        href: '/wishlist',
      },
    ]

    return (
      <div className='shop_popup' ref={ref}>
        <Link
          className='link_nav'
          href='/catalog/shop_full_width'
          onMouseEnter={handleShowPopup}
        >
          {translations[lang].header.shop_link}
        </Link>
        {!isMedia1300 && open && (
          <div className='shop_popup_wrapper' onMouseLeave={handleHidePopup}>
            {/* <ul className='shop_popup_columns body_medium'>
              <p className='shop_popup_headings uppercase'>
                {translations[lang].shop_popup.shop_types}
              </p>
              {shopTypesLinks.map((item) => (
                <ShopPopupLinkItem key={item.text} item={item} />
              ))}
            </ul> */}
            <ul className='shop_popup_columns body_medium with_left_border'>
              <p className='shop_popup_headings uppercase'>
                {translations[lang].shop_popup.single_product}
              </p>
              {singleProduct.map((item) => (
                <ShopPopupLinkItem key={item.text} item={item} />
              ))}
            </ul>
            <ul className='shop_popup_columns body_medium with_left_border'>
              <p className='shop_popup_headings uppercase'>
                {translations[lang].shop_popup.shop_pages}
              </p>
              {shopPages.map((item) => (
                <ShopPopupLinkItem key={item.text} item={item} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
)

ShopPopup.displayName = 'ShopPopup'

export default withClickOutside(ShopPopup)
