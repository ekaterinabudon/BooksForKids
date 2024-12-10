import { NextResponse } from 'next/server'
// import { sendMail } from '@/service/mailService'

export async function POST(req: Request) {
  const res = await req.json()
  try {
    // await sendMail(
    //   'Books4Kids',
    //   res.email,
    //   `Your password for Books4Kids is: ${res.password}, your login for Books4Kids is: ${res.email}`
    // )
    return NextResponse.json({ message: 'Success' })
  } catch (err) {
    return NextResponse.json({ message: (err as Error).message })
  }
}
