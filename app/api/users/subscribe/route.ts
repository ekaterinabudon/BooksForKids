import { NextResponse } from 'next/server'
import clientPromise from '@/lib/mongodb'
import {
  findUserByEmailSubscribtion,
  createSubscription,
  getDbAndReqBody,
  getUserIdCookie,
} from '@/lib/utils/api-routes'
import { Db, Document, WithId } from 'mongodb'
import { loops } from '@/lib/utils/loops'

export async function POST(req: Request) {
  const { db, reqBody } = await getDbAndReqBody(clientPromise, req)

  const userId = getUserIdCookie()
  let user = await findUserByEmailSubscribtion(db, reqBody.email)

  if (user) {
    return NextResponse.json({
      warningMessage: 'You have been subscribed',
    })
  }

  const tokens = await createSubscription (db, reqBody)
  user = await findUserByEmailSubscribtion(db, reqBody.email)

  if (user) {
    await loops.createContact(user.email);
  }

  return NextResponse.json(tokens)
}
