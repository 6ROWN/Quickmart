"use client";
import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import SingleProduct from "@/components/SingleProduct";
import { getTrendingProducts } from "@/lib";
import ProductData from "@/components/ProductData";
import { ProductProps } from "@/types/types";
import CategoryItem from "@/components/CategoryItem";

const page = () => {
	const searchParams: URLSearchParams = useSearchParams();
	const productParams = searchParams.get("product");
	const product = productParams ? JSON.parse(productParams) : null;

	const [trendingProducts, setTrendingProducts] = useState<ProductProps[]>(
		[]
	);

	useEffect(() => {
		const fetchTrendingProducts = async () => {
			const products = await getTrendingProducts();
			setTrendingProducts(products);
		};
		fetchTrendingProducts();
	}, []);

	return (
		<div className="w-full">
			<div className="w-[90%] mx-auto">
				<SingleProduct product={product} />

				<div className="pb-8">
					<div className="flex justify-between">
						<h1 className="py-4 font-medium text-xl">
							Recommended
						</h1>
						<CategoryItem />
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 items-center justify-center gap-8">
						{trendingProducts.map((item: ProductProps) => (
							<ProductData key={item?._id} item={item} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default page;
