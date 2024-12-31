import { NextResponse } from 'next/server';
import stripe from '@/lib/stripe';
import { headers } from 'next/headers';

export async function POST(request: Request) {
  const body = await request.text();
  const signature = headers().get('stripe-signature')!;

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (error) {
    console.error('Webhook signature verification failed:', error);
    return NextResponse.json(
      { error: 'Invalid signature' },
      { status: 400 }
    );
  }

  switch (event.type) {
    case 'checkout.session.completed':
      const session = event.data.object;
      // Handle successful subscription (e.g., update user in database)
      console.log('Checkout session completed:', session);
      break;
    case 'customer.subscription.updated':
      const subscription = event.data.object;
      // Handle subscription updates (e.g., renewals, cancellations)
      console.log('Subscription updated:', subscription);
      break;
    default:
      console.log(`Unhandled event type: ${event.type}`);
  }

  return NextResponse.json({ received: true });
}