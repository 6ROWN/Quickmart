import { getProduct } from "@/lib";
import { ProductProps, ProductsCategoryProps } from "@/types/types";
import React from "react";
import ProductData from "./ProductData";
import Link from "next/link";
import CategoryItem from "./CategoryItem";

const Products: React.FC<ProductsCategoryProps> = async ({
	productCategory,
	categoryName,
}) => {
	console.log;
	const products = await getProduct(productCategory);

	return (
		<div className="py-12 w-full">
			<section className="w-[90%] mx-auto">
				<div className="flex justify-between items-center mb-8">
					<h1 className=" uppercase font-bold ">{categoryName}</h1>

					<CategoryItem />
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 items-center justify-center gap-8">
					{products.map((item: ProductProps) => (
						<ProductData key={item?._id} item={item} />
					))}
				</div>
			</section>
		</div>
	);
};

export default Products;
