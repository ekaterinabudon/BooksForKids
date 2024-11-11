import { IAmBlogPageProps } from '@/types/blog';
import { ArticleItem, BlogAriclesSectionProps } from '../blogPage/BlogMainPage';
import styles from '@/styles/articlePage/index.module.css';

const ArticlePage = ({ data }: {data:ArticleItem}) => {
    return (
        <div className={`container ${styles.blog_article_container}`}>
            <h1>Article Page</h1>
            <p>{data.title}</p>
            <p>{data.description}</p>
        </div>
    );
};

export default ArticlePage;