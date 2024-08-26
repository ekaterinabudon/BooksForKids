import clientPromise from '@/lib/mongodb'
import { getDataFromDBByCollection } from '@/lib/utils/api-routes'

export const GET = async (req: Request) =>{
  try {
    return getDataFromDBByCollection(clientPromise, req, 'favorites')
  } catch (error) {
    throw new Error((error as Error).message)
  }
}
