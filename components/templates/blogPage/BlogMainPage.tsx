"use client"

import { useLang } from '@/hooks/useLang'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { IAmHomePageSectionProps } from '@/types/homePage'
import styles from '@/styles/blogMainPage/index.module.css'
import ViewAllLink from '@/components/elements/viewAll/ViewAllLink'
import Card from '../../modules/card/Card'
import BlogCard from '../../modules/blog/BlogCard'
import SearchBarFilters from '@/components/elements/searchBarFilters/SearchBarFilters'
import ReactPaginate from 'react-paginate'

export type ArticleItem = {
  _id: string
  category: string
  currentMonth: string
  currentYear: number
  title: string
  bigimage: string
  description: string
}

type BlogAriclesSectionProps  = {
  articles: ArticleItem[]
}

const BlogMainPage = ({ articles }: BlogAriclesSectionProps) => {
  const { lang, translations } = useLang()
  const isMedia1300 = useMediaQuery(1300)

  console.log(articles);
  

return (
    <div className={`container ${styles.blog_container}`}>
        <h1 className='capitalize'>{translations[lang].blog.blog}</h1>
        <div className={styles.blog_content}>
            {!isMedia1300 && <div className={styles.blog_sidebar_container}>
                <SearchBarFilters />
            </div>
}
            <div className={styles.blog_right_container}>
            <ul className={styles.blog_articles_list}>
              {articles.map((item) => (
                <BlogCard key={item._id} blogcard={{...item,date: `${item.currentMonth} ${item.currentYear}`}} />
              ))}
            </ul>
            </div>
        </div>
        {/* <div className={styles.page_pagination_container}>
            <ReactPaginate
                {...paginationProps}
                nextLabel={
                  <span>{translations[lang].catalog.next_page}</span>}
                previousLabel={
                  <span>{translations[lang].catalog.previous_page}</span>
                }
                onPageChange={handlePageChange}
            />
        </div> */}
    </div>
);
};

export default BlogMainPage
