'use client'
import Image from 'next/image'
import { useLang } from '@/hooks/useLang';
import styles from '@/styles/aboutUs/index.module.css';
import image from '@/public/img/aboutus/aboutus.jpg'

const AboutUs = () => {
    const { lang, translations } = useLang()

    return (
        <div className={`container ${styles.aboutus_page_container}`}>
            <h1>{translations[lang].about_us.about_us}</h1>
            <div className={styles.aboutus_page_textcontainer}>
                <p>{translations[lang].about_us.text1}</p>
                <p>{translations[lang].about_us.text2}</p>
                <p>{translations[lang].about_us.text3}</p>
                <p>{translations[lang].about_us.text4}</p>
                <p>{translations[lang].about_us.text5}</p>
            </div>
            <div className={styles.aboutus_page_piccontainer}>
                <Image
                    src={image}
                    alt="Picture of the Happy Family"
                    // width={100}
                    // height={100}
                    // fill={true}
                    className={styles.wishlist_item_image}
                />
            </div>
        </div>
    );
};

export default AboutUs;