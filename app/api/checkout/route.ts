import { ProductProps } from "@/types/types";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export const POST = async (request: NextRequest) => {
	//@ts-ignore
	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
		typescript: true,
	});
	try {
		const requestBody = await request.json();

		const { items, email } = requestBody;

		const extractingItems = items.map((item: any) => ({
			quantity: item.quantity || 1,
			price_data: {
				currency: "usd",
				unit_amount: item.price * 100,
				product_data: {
					name: item.title,
					description: item.description,
					images: [item.image],
				},
			},
		}));

		// extractingItems.map((x: any) => console.log(x.price_data));

		const session = await stripe.checkout.sessions.create({
			payment_method_types: ["card"],
			line_items: extractingItems,
			mode: "payment",
			success_url: `https://quickmarts.vercel.app/success`,
			cancel_url: `https://quickmarts.vercel.app/cancel`,
			metadata: {
				email,
			},
		});

		return NextResponse.json({
			message: "Connection is active",
			success: true,
			id: session.id,
		});
	} catch (error: any) {
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
};
