import { NextResponse } from 'next/server'
import clientPromise from '@/lib/mongodb'
import {
  findUserByEmail,
  createUserAndGenerateTokens,
  getDbAndReqBody,
//   getUserIdCookie,
} from '@/lib/utils/api-routes'
import { loops } from '@/lib/utils/loops'

export async function POST(req: Request) {
  const { reqBody } = await getDbAndReqBody(clientPromise, req)

  await loops.createContact(reqBody.email, {userGroup:"newsletter"})

  return NextResponse.json({ok:true})
}
