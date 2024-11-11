import clientPromise from "@/lib/mongodb"
import { getAuthRouteData, parseJwt } from "@/lib/utils/api-routes"
import { NextResponse } from "next/server"
import {Stripe}from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);


export const POST = async (req: Request) => {
    const { db, reqBody, token, userId, validatedTokenResult } =
      await getAuthRouteData(clientPromise, req)
    
    const user = token
      ? await db.collection('users').findOne({ email: parseJwt(token).email })
      : null

           
    // Check if the product already exists in the cart
    const cartItems = await db.collection('cart').find({
      userId: user?._id ?? userId,
    }).toArray()

    // console.log({cartItems});

    const products = await Promise.all(
        cartItems.map(item => db.collection("russianbooks").findOne({_id: item.productId}))
    )


    try {
        // Create Checkout Session
        const session = await stripe.checkout.sessions.create({
            line_items: products.map(i => ({
              price_data:{
                  currency:"usd",
                  product_data:{
                      name: i!.name,
                      description:i!.description.slice(0,50)+'...',
                  },
                  unit_amount: i!.price*100,
              },
              quantity: 1,
            })),
          payment_method_types: ['card'],
          mode: 'payment',
          success_url: `${process.env.NEXT_PUBLIC_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: `${process.env.NEXT_PUBLIC_URL}/cancel`,
        });
    
        return NextResponse.json({ sessionId: session.id, url: session.url });
      } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ message: 'Error creating checkout session' });
      }

    

}