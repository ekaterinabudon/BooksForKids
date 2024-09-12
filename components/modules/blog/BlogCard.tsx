import Image from 'next/image'
import { useLang } from "@/hooks/useLang"
import styles from '@/styles/blogCard/index.module.css'
import { BlogCardProps } from "@/types/modules"
// import React from 'react'
// import { useMediaQuery } from "@/hooks/useMediaQuery"


const BlogCard = ({ blogcard }: BlogCardProps) => {
  const { lang, translations } = useLang()
//   const [open, setOpen] = React.useState(false)
//   const isMedia1100 = useMediaQuery(1300)

return (
    <>
        <div className={styles.blog_card_item_container}>
            <li className={styles.blog_card_item}>
                <div className={styles.card_img_container}>
                    <Image
                        src={blogcard.bigimage}
                        alt={blogcard.title}
                        width={450}
                        height={233}
                    />
                </div>
                <p className={`body_medium ${styles.blogcard_date}`}>{blogcard.date}</p>
                <h3>{blogcard.title}</h3>
                <p className={styles.blogcard_description}>{blogcard.description?.slice(0, 100)}...</p>
                <p className={`body_large capitalize ${styles.read_more_description_btn}`}>{translations[lang].blog.read_more}</p>
                {/* <div
                    className={styles.read_more_description_container}
                    onClick={() => setOpen(!open)}
                    >
                    <div className={`dark_gray ${styles.read_more_description}`}>
                        {open ? blogcard.description : `${blogcard.description?.slice(0, 100)}...`}
                    </div>
                    <div className={styles.description_btn_container}>
                        <button className={`body_small ${styles.read_more_description_btn}`}>
                        {!open ? (
                            <span>{translations[lang].blog.read_more}</span>
                        ) : (
                            <span>{translations[lang].blog.read_more}</span>
                        )}
                        <span className={`${styles.description_btn_container_arrow} ${open ? styles.description_btn_container_arrow_open : ''}`}></span>
                        </button>
                    </div>
                </div> */}
            </li>
        </div>
    </>
)
}

export default BlogCard
