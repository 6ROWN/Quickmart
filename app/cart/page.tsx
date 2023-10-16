"use client";
import Image from "next/image";
import React, { MouseEventHandler } from "react";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import {
	incrementItemByQuantity,
	decrementItemByQuantity,
	deleteItems,
	resetCartItems,
} from "@/redux/features/cart/cartSlice";
import Link from "next/link";
import PaymentForm from "@/components/PaymentForm";
import { ProductProps } from "@/types/types";

const page = () => {
	const router = useRouter();
	const cartProducts = useSelector(
		(state: RootState) => state.cart.cartItems
	);

	const dispatch = useDispatch();

	const resetCartHandler = () => {
		dispatch(resetCartItems());
		window.location.reload();
	};

	const deleteItemFromCartHandler = (item: ProductProps) => {
		dispatch(deleteItems(item));
		router.refresh();
	};

	return (
		<div className="w-full h-full bg-emerald-50 py-6">
			<div className="w-[90%] mx-auto">
				<div className="py-4">
					<button
						onClick={() => router.back()}
						className="p-2 bg-white rounded-lg hover:bg-emerald-200 flex space-x-2"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							className="w-6 h-6 text-emerald-700"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
							/>
						</svg>
						<span className="text-emerald-800">
							Continue Shopping
						</span>
					</button>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-x-0 gap-y-8 gap lg:gap-8 items-center">
					<div className=" col-span-2 ">
						<div className="p-4">
							<h1 className="font-bold text-lg mb-4">
								Shopping Cart
							</h1>
							<div className="flex items-center justify-between">
								<h3>
									You have {cartProducts.length} items in Cart
								</h3>
								{cartProducts.length !== 0 ? (
									<button
										onClick={resetCartHandler}
										className="px-4 py-2 bg-red-200 rounded text-red-600 flex space-x-2"
									>
										<span> Clear Cart</span>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth="1.5"
											stroke="currentColor"
											className="w-6 h-6 text-red-500"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
											/>
										</svg>
									</button>
								) : null}
							</div>
						</div>

						<div className="shadow-lg bg-emerald-200 rounded-lg w-full overflow-x-scroll scrollbar-hide">
							{cartProducts.length !== 0 ? (
								<table className="w-full">
									<thead>
										<tr>
											<th className="border px-4 py-2 ">
												Product
											</th>
											<th className="border px-4 py-2">
												Quantity
											</th>
											<th className="border px-4 py-2">
												Price
											</th>
											<th className="border px-4 py-2">
												Subtotal
											</th>
										</tr>
									</thead>

									<tbody>
										{cartProducts.map((item, index) => (
											<tr
												key={index}
												className={
													index % 2 === 0
														? "bg-gray-50"
														: "bg-emerald-50"
												}
											>
												<td className="border px-4 py-2">
													<div className="flex items-center space-x-4">
														<div className="relative">
															<Image
																src={
																	item?.image
																}
																width={500}
																height={500}
																alt="product image"
																className="w-28 h-24 rounded-lg"
																loading="lazy"
															/>
															<button
																className="absolute top-1 right-1"
																onClick={() =>
																	deleteItemFromCartHandler(
																		item
																	)
																}
															>
																<svg
																	xmlns="http://www.w3.org/2000/svg"
																	fill="none"
																	viewBox="0 0 24 24"
																	strokeWidth="1.5"
																	stroke="currentColor"
																	className="w-6 h-6 text-red-500"
																>
																	<path
																		strokeLinecap="round"
																		strokeLinejoin="round"
																		d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
																	/>
																</svg>
															</button>
														</div>
														<span>
															{item.title}
														</span>
													</div>
												</td>
												<td className="border px-4 py-2 text-center">
													<div className="flex w-full justify-center space-x-6 items-center">
														<button
															onClick={() =>
																dispatch(
																	decrementItemByQuantity(
																		item
																	)
																)
															}
															className="text-xl p-2 text-gray-400 hover:bg-emerald-100 rounded-lg hover:text-emerald-800 transition-all duration-200 ease-in"
														>
															-
														</button>
														<span>
															{item.quantity || 1}
														</span>
														<button
															onClick={() =>
																dispatch(
																	incrementItemByQuantity(
																		item
																	)
																)
															}
															className="text-xl p-2 text-gray-400 hover:bg-emerald-100 rounded-lg hover:text-emerald-800 transition-all duration-200 ease-in"
														>
															+
														</button>
													</div>
												</td>
												<td className="border px-4 py-2 text-center">
													$ {(item?.price).toFixed(2)}
												</td>
												<td className="border px-4 py-2 text-center">
													${" "}
													{(
														item?.price *
														(item?.quantity || 1)
													).toFixed(2)}
												</td>
											</tr>
										))}
									</tbody>
								</table>
							) : (
								<div className="w-full text-center py-20 flex flex-col space-y-6">
									<div>You have no products in cart.</div>
									<Link href="/">
										<span className="text-white px-4 py-2 rounded-lg bg-emerald-600 justify-center w-fit inline-flex">
											Start Shopping
										</span>
									</Link>
								</div>
							)}
						</div>
					</div>
					<PaymentForm />
				</div>
			</div>
		</div>
	);
};

export default page;
