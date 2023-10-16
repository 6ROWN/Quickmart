import React from "react";
import Link from "next/link";

const CategoryItem = () => {
	return (
		<div className="py-4 flex items-center justify-center space-x-4 overflow-x-scroll scrollbar-hide">
			<Link
				href={"/"}
				className="border py-2 px-4 rounded-lg text-sm hover:bg-emerald-200 bg-emerald-50"
			>
				New Arrivals
			</Link>
			<Link
				href="/categories/clothings"
				className="border py-2 px-4 rounded-lg text-sm hover:bg-emerald-200 bg-emerald-50"
			>
				Fashion
			</Link>
			<Link
				href="/categories/accessories"
				className="border py-2 px-4 rounded-lg text-sm hover:bg-emerald-200 bg-emerald-50"
			>
				Accessories
			</Link>

			<Link
				href="/categories/electronics"
				className="border py-2 px-4 rounded-lg text-sm hover:bg-emerald-200 bg-emerald-50"
			>
				Electronics
			</Link>
		</div>
	);
};

export default CategoryItem;
