'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import React, { CSSProperties } from 'react'
import { Pagination, Autoplay, FreeMode, Thumbs } from 'swiper/modules'
// import { Swiper as SwiperType } from 'swiper/types'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import 'swiper/css/thumbs'
import { useLang } from '@/hooks/useLang'
import img1 from '@/public/img/home_slider/slider_books1.jpg'
import img2 from '@/public/img/home_slider/slider_books2.jpg'
import img3 from '@/public/img/home_slider/slider_books3.jpg'
import img4 from '@/public/img/home_slider/home_slider_mob1.jpg'
import img5 from '@/public/img/home_slider/home_slider_mob2.jpg'
import img6 from '@/public/img/home_slider/home_slider_mob3.jpg'
import HomeSlide from './HomeSlide'
import product from '@/public/img/home_slider/skazki101.png'
import styles from '@/styles/home/index.module.css'
import { useMediaQuery } from '@/hooks/useMediaQuery'

const HomeSlider = () => {
  const { lang, translations } = useLang()
  // const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const isMedia800 = useMediaQuery(800)

  const slides = [
    {
      _id: 1,
      image: img1,
      title: `${translations[lang].home.title1}`,
      product: product,
      price: '$18.00',
      btn_message: `${translations[lang].home.btn_message1}`,
      href: '/catalog/russianbooks/66db7be4c35579d2bbd9d7d5',
    },
    {
      _id: 2,
      image: img2,
      title: `${translations[lang].home.title2}`,
      // "product": product,
      price: '',
      btn_message: `${translations[lang].home.btn_message2}`,
      href: '/catalog/shop_full_width',
    },
    {
      _id: 3,
      image: img3,
      title: `${translations[lang].home.title3}`,
      // "product": product,
      price: '',
      btn_message: `${translations[lang].home.btn_message3}`,
      href: '/catalog/shop_full_width?isDiscount=true',
    },
  ]

  const slidesMob = [
    {
      _id: 4,
      image: img4,
      title: `${translations[lang].home.title1}`,
      product: product,
      price: '$18.00',
      btn_message: `${translations[lang].home.btn_message1}`,
      href: '/catalog/russianbooks/66db7be4c35579d2bbd9d7d5',
    },
    {
      _id: 5,
      image: img5,
      title: `${translations[lang].home.title2}`,
      // "product": product,
      price: '',
      btn_message: `${translations[lang].home.btn_message2}`,
      href: '/catalog/shop_full_width',
    },
    {
      _id: 6,
      image: img6,
      title: `${translations[lang].home.title3}`,
      // "product": product,
      price: '',
      btn_message: `${translations[lang].home.btn_message3}`,
      href: '/catalog/shop_full_width?isDiscount=true',
    },
  ]

  return (
    <section className={styles.home_slider}>
      <div className={`container ${styles.home_slider_container}`}>
        <Swiper
          modules={[Pagination, Autoplay, FreeMode, Thumbs]}
          className={styles.home_swiper_slider}
          loop={true}
          // thumbs={{ swiper: thumbsSwiper }}
          autoplay={{
            delay: 10000,
          }}
          pagination={{
            clickable: true,
            // bulletActiveClass: '{styles.home_slider_bullet_active}'
          }}
          speed={800}
          slidesPerView='auto'
          initialSlide={0}
          slideToClickedSlide={true}
          style={
            {
              '--swiper-pagination-color': 'var(--color-White)',
              '--swiper-pagination-bullet-inactive-color': 'var(--color-White)',
              '--swiper-pagination-bullet-inactive-opacity': '1',
              '--swiper-pagination-bullet-horizontal-gap': '13.71px',
            } as CSSProperties
          }
        >
          {!isMedia800 &&
            slides.map((slide) => (
              <SwiperSlide className={styles.home_slider_slide} key={slide._id}>
                <HomeSlide slide={slide} />
              </SwiperSlide>
            ))}
          {isMedia800 &&
            slidesMob.map((slide) => (
              <SwiperSlide className={styles.home_slider_slide} key={slide._id}>
                <HomeSlide slide={slide} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  )
}

export default HomeSlider
