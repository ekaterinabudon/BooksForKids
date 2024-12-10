import clientPromise from '@/lib/mongodb'
import { getDbAndReqBody } from '@/lib/utils/api-routes'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { db, reqBody } = await getDbAndReqBody(clientPromise, req)

    const getFilteredGoods = async (field: string, collection: string) => {
      const goods = await db
        .collection(collection)
        .find({
          ...(reqBody.search && {
            [field]: {
              $regex: `(s+${reqBody.search}|^${reqBody.search})`,
              $options: 'i',
            },
          }),
        })
        .toArray()

      return goods
    }

    const getGoodsByCollection = async (collection: string) => {
      const [goodsByName, goodsByAuthor] =
        await Promise.allSettled([
          getFilteredGoods('name', collection),
          getFilteredGoods('characteristics.author', collection),
        ])

      if (
        goodsByName.status !== 'fulfilled' ||
        goodsByAuthor.status !== 'fulfilled'
      ) {
        return []
      }

      return [
        ...goodsByName.value,
        ...goodsByAuthor.value,
      ]
    }

    const [russianbooks] = await Promise.allSettled([
      getGoodsByCollection('russianbooks'),
    ])

    if (
        russianbooks.status !== 'fulfilled'
    ) {
      return NextResponse.json({
        count: 0,
        items: [],
      })
    }

    const allGoods = [
      ...russianbooks.value,
    ]

    return NextResponse.json({
      count: allGoods.length,
      items: allGoods,
    })
  } catch (error) {
    throw new Error((error as Error).message)
  }
}
