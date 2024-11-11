import BlogMainPage from "@/components/templates/blogPage/BlogMainPage";
import { db } from "@/lib/mongodb";
import { getBlogArticles } from "@/lib/utils/api-routes";

 const BlogPage = async ()=> {
  const data = await getBlogArticles(await db) 

    return <main>
      <BlogMainPage articles={data} />
    </main>
  }

  export default BlogPage

// http://localhost:3000/blog/postitem-123123
// http://localhost:3000/blog/:<param_name>