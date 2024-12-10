import { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe'
import { clearCartAfterPurchase } from '../../../lib/db'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-10-28.acacia',
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const sig = req.headers['stripe-signature']

    try {
      const event = stripe.webhooks.constructEvent(
        req.body,
        sig as string,
        process.env.STRIPE_WEBHOOK_SECRET!
      )

      // Handle the checkout.session.completed event
      if (event.type === 'checkout.session.completed') {
        const session = event.data.object as Stripe.Checkout.Session

        // Extract user ID from metadata (assuming you set this during checkout)
        const userId = session.metadata?.userId

        if (userId) {
          // Clear the cart for this user
          await clearCartAfterPurchase(userId)
        }

        res.status(200).json({ received: true })
      } else {
        res.status(400).end()
      }
    } catch (err) {
      console.error(err)
      res
        .status(400)
        .send(
          `Webhook Error: ${err instanceof Error ? err.message : 'Unknown error'}`
        )
    }
  } else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method Not Allowed')
  }
}
