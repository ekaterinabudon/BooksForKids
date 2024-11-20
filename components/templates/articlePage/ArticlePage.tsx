'use client'
import Image from 'next/image'
import { ArticleItem, BlogAriclesSectionProps } from '../blogPage/BlogMainPage';
import styles from '@/styles/articlePage/index.module.css';
import Link from 'next/link';
import { useLang } from '@/hooks/useLang';

const ArticlePage = ({ data }: {data:ArticleItem}) => {
    const { lang, translations } = useLang()

    return (
        <div className={`container ${styles.blog_article_container}`}>
            <div className={styles.blog_article_page_textcontainer}>
                <h1>{data.title}</h1>
                <div dangerouslySetInnerHTML={{__html: data.description}} />
            </div>
            <Link href='/catalog' className={`black_btn ${styles.blog_article_shopnowlink}`}>
                    <button className={styles.blog_article_shopnow_btn}>{translations[lang].blog.blog_shop_now_btn}</button>
            </Link>
            <div className={styles.blog_article_page_piccontainer}>
                <Image
                    src={data.bigimage}
                    width={657}
                    height={100}
                    alt={data.title}
                    // className={styles.home_slide_product_img}
                />
            </div>
        </div>
    );
};

export default ArticlePage;