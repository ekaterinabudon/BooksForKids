import Image from 'next/image'
import Link from 'next/link'
import { IAmSlide } from '@/types/homePage'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import styles from '@/styles/home/index.module.css'
import '../../../app/globalStyles/globals.css'

const HomeSlide = ({ slide }: { slide: IAmSlide }) => {
  const isMedia800 = useMediaQuery(800)
  const isMedia850 = useMediaQuery(850)
  const isMedia920 = useMediaQuery(920)
  const isMedia1080 = useMediaQuery(1080)

  const imgSize = isMedia800
    ? 500
    : isMedia850
      ? 200
      : isMedia920
        ? 230
        : isMedia1080
          ? 250
          : 300

  return (
    <div className={styles.home_slide_content}>
      <Image
        src={slide.image}
        alt={slide.title}
        className={styles.home_slide_img}
        loading='eager'
        // fill
      />
      <div className={styles.home_slide_content_left}>
        <div className={styles.home_slide_title}>
          <h1>{slide.title}</h1>
        </div>
        <div className={styles.home_slide_price}>
          <h2 className={styles.price}>{slide.price}</h2>
        </div>
        <Link
          href={slide.href}
        //   href='/catalog/shop_full_width'
          className={styles.home_slide_btn_container}
        >
          <button className={styles.home_slide_btn}>{slide.btn_message}</button>
        </Link>
      </div>
      {slide.product && (
        <div className={styles.home_slide_product_container}>
          <Image
            src={slide.product}
            width={imgSize}
            height={400}
            alt={slide.title}
            className={styles.home_slide_product_img}
          />
        </div>
      )}
    </div>
  )
}

export default HomeSlide
