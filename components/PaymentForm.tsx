"use client";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import Link from "next/link";
import { loadStripe } from "@stripe/stripe-js";
import { useSession } from "next-auth/react";
import { saveOrder, resetCartItems } from "@/redux/features/cart/cartSlice";

const PaymentForm = () => {
	const [amount, setAmount] = useState(0);

	const dispatch = useDispatch();

	const cartProducts = useSelector(
		(state: RootState) => state.cart.cartItems
	);
	const userInfo = useSelector((state: RootState) => state.cart.userInfo);

	useEffect(() => {
		let amount = 0;
		if (cartProducts.length > 0) {
			amount = cartProducts.reduce(
				(acc, item) => acc + item?.price * (item?.quantity || 1),
				0
			);
			amount = parseFloat(amount.toFixed(2));
			setAmount(amount);
		}
	}, [cartProducts]);

	// STRIPE STARTS
	const stripePromise = loadStripe(
		process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? ""
	);
	const { data: session } = useSession();
	const handleCheckout = async () => {
		const stripe = await stripePromise;
		const response = await fetch("http://localhost:3000/api/checkout", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				items: cartProducts,
				email: session?.user?.email,
			}),
		});
		const result = await response.json();

		if (response.ok) {
			console.log(result);
			await dispatch(saveOrder({ cartProducts, id: result.id }));
			stripe?.redirectToCheckout({ sessionId: result.id });
			dispatch(resetCartItems());
		} else {
			throw new Error("Error fetching stripe data");
		}
	};

	//STRIPE ENDS

	return (
		<div>
			<div className="bg-emerald-500 py-6 px-4 rounded-lg">
				<h1 className="font-bold text-lg text-center ">Cart Summary</h1>

				<div className="p-4 flex flex-col space-y-4">
					<div className="flex justify-between items-center">
						<h1>Subtotal:</h1>
						<p>$ {amount}</p>
					</div>
					<div className="flex justify-between items-center">
						<h1>Delivery:</h1>
						<p>{`$0.00`} </p>
					</div>

					<div className="flex justify-between items-center">
						<h1>VAT:</h1>
						<p> {"-"}</p>
					</div>
					<hr />
					<div className="flex justify-between items-center">
						<h1 className="font-semibold">TOTAL</h1>
						<p>{amount.toFixed(2)}</p>
					</div>
					<div className="w-full">
						{userInfo?.length !== 0 ? (
							<button
								onClick={handleCheckout}
								className="text-center flex py-3 hover:bg-gray-50 w-full items-center justify-center rounded-lg font-bold bg-black text-white hover:text-black transition-all duration-200 ease-in "
							>
								GO TO CHECKOUT
							</button>
						) : (
							<button className="text-center flex py-3 hover:bg-gray-50 w-full items-center justify-center rounded-lg font-bold bg-black text-white hover:text-black transition-all duration-200 ease-in ">
								<Link href="/login">LOGIN TO CONTINUE</Link>
							</button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default PaymentForm;
