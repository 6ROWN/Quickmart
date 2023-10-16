"use client";

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { resetOrder } from "@/redux/features/cart/cartSlice";
import { RootState } from "@/redux/store";
import Link from "next/link";
import Image from "next/image";

const OrderDetails = () => {
	const orders = useSelector((state: RootState) => state?.cart?.orderData);
	const dispatch = useDispatch();

	const resetOrderHandler = () => {
		dispatch(resetOrder());
		window.location.reload();
	};

	const orderedItems = orders.map((item) => item?.cartProducts);

	const calculateTotalAmount = () => {
		return orderedItems
			.flatMap((x) => x.map((item) => item.price * (item?.quantity || 1)))
			.reduce((acc, total) => acc + total, 0)
			.toFixed(2);
	};

	return (
		<div className="w-full h-full bg-emerald-100 py-8">
			<div className="w-[90%] mx-auto">
				<div>
					<h1 className="font-bold text-2xl">Orders</h1>
					<p className="py-4 text-lg">
						{orders.length === 1
							? `You have 1 Order`
							: `You have ${orders.length} Orders`}
					</p>
				</div>
				<div className="shadow-lg bg-emerald-200 rounded-lg w-full overflow-x-scroll scrollbar-hide">
					{orders.length !== 0 ? (
						<table className="w-full">
							<thead>
								<tr>
									<th className="border px-4 py-2">
										Order #
									</th>
									<th className="border px-4 py-2">
										Product
									</th>
									<th className="border px-4 py-2">
										Quantity
									</th>
									<th className="border px-4 py-2">
										Unit Price ($)
									</th>
									<th className="border px-4 py-2">
										Amount ($)
									</th>
								</tr>
							</thead>
							<tbody className="text-gray-800">
								{orderedItems.map((x, xIndex) => (
									<React.Fragment key={xIndex}>
										{x.map((item, index) => (
											<tr
												key={index}
												className={`${
													index % 2
														? "bg-emerald-100"
														: "bg-gray-50"
												}`}
											>
												<td className="border px-4 py-2 text-center">
													{xIndex + 1}
												</td>
												<td className="border px-4 py-2">
													<div className="flex items-center space-x-6">
														<div className="relative">
															<Image
																src={
																	item?.image
																}
																width={500}
																height={500}
																alt="product image"
																className="w-28 h-20 rounded-lg"
																loading="lazy"
															/>
														</div>
														<div>
															<h1 className="font-bold">
																{item.title}
															</h1>
															<p>
																{item?.description
																	.split(" ")
																	.slice(
																		0,
																		10
																	)
																	.join(" ")}
															</p>
														</div>
													</div>
												</td>
												<td className="border px-4 py-2 text-center">
													<div className="flex w-full justify-center space-x-6 items-center">
														<span>
															{item?.quantity ||
																1}
														</span>
													</div>
												</td>
												<td className="border px-4 py-2 text-center">
													{item.price.toFixed(2)}
												</td>
												<td className="border px-4 py-2 text-center">
													{(
														item.price *
														(item?.quantity || 1)
													).toFixed(2)}
												</td>
											</tr>
										))}
									</React.Fragment>
								))}
							</tbody>
						</table>
					) : (
						<div className="w-full text-center py-20 flex flex-col space-y-6">
							<h1 className="font-bold text-lg">
								No orders found.
							</h1>
							<Link href="/">
								<span className="text-white px-4 py-2 rounded-lg bg-emerald-600 justify-center w-fit inline-flex">
									Browse Shop
								</span>
							</Link>
						</div>
					)}
				</div>
				<div className="flex items-center justify-between py-6">
					<div>
						<button
							onClick={resetOrderHandler}
							className="py-2 px-4 bg-red-600 text-gray-200 rounded-md hover:bg-red-800"
						>
							Delete Orders
						</button>
					</div>
					<div className="">
						<h1 className="font-bold">
							Total Payment: ${calculateTotalAmount()}
						</h1>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OrderDetails;
