import { MongoClient } from 'mongodb'

const clientPromise = MongoClient.connect(
    process.env.NEXT_PUBLIC_DB_URL as string,
    {
        maxPoolSize: 10,
    }
)
export const db = MongoClient.connect(
    process.env.NEXT_PUBLIC_DB_URL as string,
    {
        maxPoolSize: 10,
    }
).then(r => r.db(process.env.NEXT_PUBLIC_DB_NAME))

export default clientPromise