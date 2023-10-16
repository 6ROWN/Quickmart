import { calculateDiscountPercentage } from "@/lib";
import { ProductProps } from "@/types/types";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const ProductData = ({ item }: { item: ProductProps }) => {
	const starArray = Array.from({ length: item?.rating }, (_, index) => (
		<span key={index} className="flex">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				className="w-5 h-5 text-yellow-400"
			>
				<path
					fillRule="evenodd"
					d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
					clipRule="evenodd"
				/>
			</svg>
		</span>
	));

	return (
		<div className="bg-red-200 w-full rounded-lg overflow-hidden shadow-md group">
			<Link
				href={{
					pathname: "/productPage",
					query: { product: JSON.stringify(item) },
				}}
			>
				<div className="w-full h-72 relative ">
					<Image
						src={item?.image}
						alt="product image"
						width={500}
						height={500}
						className="w-full h-full object-cover group-hover:scale-110 duration-200 ease-in cursor-pointer"
					/>
					{item?.isNew && (
						<span className="absolute top-4 right-4 px-2 py-1 text-sm font-medium bg-gray-50 group-hover:bg-emerald-600 rounded-full group-hover:text-gray-50 transition-all duration-200 ease-in">
							New Arrivals
						</span>
					)}
				</div>
				<div className="flex flex-col space-y-4 p-4">
					<p className="uppercase font-bold text-center tracking-wider">
						{item?.title}
					</p>
					<div className="flex justify-between items-center">
						<span className="text-sm rounded-full py-2 px-4 border border-gray-50 italic">
							{calculateDiscountPercentage(
								item?.oldPrice,
								item?.price
							)}
							% OFF
						</span>
						<span className=" flex space-x-2">
							<span className="line-through text-sm text-gray-800">
								$ {parseInt(item?.oldPrice).toFixed(2)}
							</span>
							<span className="font-semibold text-base">
								$ {(item?.price).toFixed(2)}
							</span>
						</span>
					</div>
					<div className="flex justify-between items-center">
						<button className="px-4 py-2 bg-gray-50 rounded-full hover:bg-emerald-600 hover:text-gray-50 duration-200 transition-all ease-in">
							PURCHASE
						</button>
						{/* Satr icons */}
						<div className="flex">{starArray}</div>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default ProductData;
