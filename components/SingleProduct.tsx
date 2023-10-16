import { ProductProps } from "@/types/types";
import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "@/redux/features/cart/cartSlice";
import { Toaster, toast } from "sonner";

const SingleProduct = ({ product }: { product: ProductProps }) => {
	const dispatch = useDispatch();
	return (
		<div className="w-full py-8">
			<div className="">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-emerald-50 p-4 rounded-lg">
					<div className="h-80">
						<Image
							src={product.image}
							width={500}
							height={500}
							alt="product image"
							className="w-full h-full rounded-lg"
							loading="lazy"
						/>
					</div>
					<div className="flex flex-col space-y-5 py-2">
						<h1 className="font-bold uppercase text-4xl">
							{product.title}
						</h1>
						<h3 className="text-lg font-medium">
							$ {(product?.price).toFixed(2)}
						</h3>
						<p>{product?.description}</p>
						<div>
							<span>Category : </span>
							<span className="text-gray-800">
								{product?.category}
							</span>
						</div>
						<div className="flex space-x-6">
							<button
								onClick={() =>
									dispatch(addItemToCart(product)) &&
									toast.success(
										`${product?.title} added successfully`
									)
								}
								className="flex space-x-4 bg-emerald-700 p-3 items-center justify-center rounded-lg text-gray-50 hover:bg-emerald-800"
							>
								<span>
									{" "}
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth="1.5"
										stroke="currentColor"
										className="w-6 h-6"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
										/>
									</svg>
								</span>
								<span className="font-medium">ADD TO CART</span>
							</button>
							<button className="flex items-center justify-center shadow-md space-x-4 text-emerald-700 p-3 rounded-lg bg-gray-100 hover:bg-emerald-100">
								<span>
									{" "}
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth="1.5"
										stroke="currentColor"
										className="w-6 h-6"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
										/>
									</svg>
								</span>
								<span className="font-medium">
									SAVE TO WISHLIST
								</span>
							</button>
						</div>
					</div>
				</div>
			</div>
			<Toaster position="top-right" />
		</div>
	);
};

export default SingleProduct;
