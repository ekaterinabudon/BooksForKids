// import { useLang } from "@/hooks/useLang"
// import { useMediaQuery } from "@/hooks/useMediaQuery"


// const BlogCard = () => {
//   const { lang, translations } = useLang()
//   const isMedia1100 = useMediaQuery(1300)

//   return (
//     <>
//       <div className={styles.blog_card_item_container}>
//         <li className={styles.blog_card_item}>
//         <div className={styles.card_img_container}>
//               <Image
//                 src={item.images[0]}
//                 alt={item.name}
//                 width={500}
//                 height={500}
//               />
//             </div>
//           <div className={styles.label_container}>
//             <CardLabel
//               inStock={item.inStock}
//               isNew={item.isNew}
//               isBestSeller={item.isBestSeller}
//               isDiscount={item.isDiscount}
//             />
//           </div>
//           <Link
//             href={`/catalog/${item.category}/${item._id}`}
//             className={styles.card_top_link}
//           >
//             <div className={styles.card_top_container}>
//               <Image
//                 src={item.images[0]}
//                 alt={item.name}
//                 width={500}
//                 height={500}
//               />
//             </div>
//             <div className={styles.card_bottom_container}>
//               <h3>{item.name}</h3>
//               <div>
//                 {item.isDiscount ? (
//                   <h4>
//                     <span
//                       className={`line_through ${styles.card_price_discount}`}
//                     >
//                       {formatPrice(+item.price)}
//                     </span>
//                     <span>{`${formatPrice(+item.price * (1 - +item.isDiscount / 100))}`}</span>
//                   </h4>
//                 ) : (
//                   <h4 className={styles.price}>{formatPrice(+item.price)}</h4>
//                 )}
//               </div>
//             </div>
//           </Link>
//           {!isMedia1100 ? (
//             isProductInCart ? (
//               <div className={styles.card_to_cart_btn_container_added}>
//                 <AddToCartBtn
//                   text={
//                     isProductInCart
//                       ? translations[lang].card.in_cart
//                       : translations[lang].card.to_cart
//                   }
//                   className={`${styles.card_cart_btn} ${isProductInCart ? styles.card_cart_btn_added : ''}`}
//                   handleAddToCart={() => addToCart.mutate(item)}
//                   btnDisabled={!getCanAddToCart(item._id)}
//                 />
//               </div>
//             ) : (
//               <div className={styles.card_to_cart_btn_container}>
//                 {+item.inStock ? (
//                   <AddToCartBtn
//                     text={
//                       isProductInCart
//                         ? translations[lang].card.in_cart
//                         : translations[lang].card.to_cart
//                     }
//                     className={`${styles.card_cart_btn} ${isProductInCart ? styles.card_cart_btn_added : ''}`}
//                     handleAddToCart={() => addToCart.mutate(item)}
//                     btnDisabled={!getCanAddToCart(item._id)}
//                   />
//                 ) : (
//                   <NotifyOfDeliveryBtn
//                     text={translations[lang].wishlist.notify_of_delivery}
//                     handleNotifyMe={handleOpenNotifyMeModal}
//                   />
//                 )}
//               </div>
//             )
//           ) : (
//             <div className={styles.card_to_cart_btn_container_small}>
//               <AddToCartBtn
//                 text={
//                   isProductInCart
//                     ? translations[lang].card.in_cart
//                     : translations[lang].card.to_cart
//                 }
//                 className={`${styles.card_cart_btn} ${isProductInCart ? styles.card_cart_btn_added : ''}`}
//                 handleAddToCart={() => addToCart.mutate(item)}
//                 btnDisabled={!getCanAddToCart(item._id)}
//               />
//             </div>
//           )}
//           {!isMedia1100 && (
//             <div className={styles.card_actions}>
//               <CardActionBtn
//                 text={translations[lang].card.add_to_cart}
//                 iconClass='card_action_btn_add_to_cart'
//                 callback={addAndGoToCartActionBtn}
//               />
//               <CardActionBtn
//                 text={translations[lang].card.quick_view}
//                 iconClass='card_action_btn_quick_view'
//                 callback={handleShowQuickViewModal}
//               />

//               <CardActionBtn
//                 text={translations[lang].card.add_to_favorites}
//                 iconClass={`${
//                   isProductInFavorites
//                     ? 'card_action_btn_add_to_favorites_checked'
//                     : 'card_action_btn_add_to_favorites'
//                 }`}
//                 callback={() => addToFavorites.mutate(item)}
//               />
//             </div>
//           )}
//         </li>
//       </div>
//     </>
//   )
// }

// export default BlogCard
