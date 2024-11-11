import { notFound } from 'next/navigation'
import ArticlePage from '@/components/templates/articlePage/ArticlePage';
import { db } from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

export const getArticle = async (id:string) => {
  const d = await db
  const article = await (await d
    .collection('articles')
    .findOne({_id: new ObjectId(id)})
  )

  return {...article?.articles[0], _id: article?._id.toString(), }
}

export default async function Article({
  params,
}: {
  params: { id: string }
}) {
  const data = await getArticle(params.id);

  return <ArticlePage data={data} />
}


