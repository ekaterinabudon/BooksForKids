import Image from 'next/image'
import { useLang } from "@/hooks/useLang"
import styles from '@/styles/blogCard/index.module.css'
import { BlogCardProps } from "@/types/modules"
import Link from 'next/link'
import { useMediaQuery } from "@/hooks/useMediaQuery"


const BlogCard = ({ blogcard }: BlogCardProps) => {
  const { lang, translations } = useLang()
  const isMedia450 = useMediaQuery(450)
const imgWidth = isMedia450 ? 900 : 450
const imgHeight = isMedia450 ? 450 : 233

// console.log({blogcard});


return (
    <>
        <div className={styles.blog_card_item_container}>
            <li className={styles.blog_card_item}>
            <Link
                href={`/blog/${blogcard._id}`}
                // href={`/blog/${articleId}`}
                className={styles.card_top_link}
            >
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
                <div className={styles.blogcard_description} dangerouslySetInnerHTML={{__html: `${blogcard.description?.slice(0, 100)}...`}}/>
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
                </Link>
            </li>
        </div>
    </>
)
}

export default BlogCard
