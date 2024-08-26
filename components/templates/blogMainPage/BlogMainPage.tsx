'use client'
import SearchBarFilters from "@/components/elements/searchBarFilters/SearchBarFilters";
import { useLang } from "@/hooks/useLang";
import styles from '@/styles/blogMainPage/index.module.css'
import { BlogCardProps } from "@/types/modules";
import ReactPaginate from "react-paginate";

const BlogMainPage = () => {
    const { lang, translations } = useLang()

    return (
        <div className={`container ${styles.blog_container}`}>
            <h1>{translations[lang].blog.blog}</h1>
            <div className={styles.blog_content}>
                <div className={styles.blog_sidebar_container}>
                    <SearchBarFilters />
                </div>
                <div className={styles.blog_right_container}>
                    {/* <ul className={styles.blogs_articles_list}>
                        {(products.items || []).map((item) => (
                            <CardSmall key={item._id} item={item}/>
                        ))}
                    </ul>
                    {!products.items?.length && (
                        <div className={styles.catalog_list_empty}>
                            <h1>{translations[lang].other.nothing_found}</h1>
                        </div>
                    )}
                    <div className={styles.page_pagination_container}>
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
            </div>
        </div>
    );
};

export default BlogMainPage;