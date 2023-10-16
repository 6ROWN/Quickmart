import CategoryItem from "@/components/CategoryItem";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const gridItems = [
	{
		id: 1,
		category: "Accessories",
		linkUrl: "/categories/accessories",
		color: "red-500",
		img: "https://i.ibb.co/WFWKQWZ/shoes-1.webp",
	},
	{
		id: 2,
		category: "Accessories",
		linkUrl: "/categories/accessories",
		color: "red-500",
		img: "https://i.ibb.co/qkspnNy/cosmetics-1.webp",
	},
	{
		id: 3,
		category: "Clothings",
		linkUrl: "/categories/clothings",
		color: "red-500",
		img: "https://i.ibb.co/BLCDw7v/3.webp",
	},
	{
		id: 4,
		category: "Accessories",
		linkUrl: "/categories/accessories",
		color: "green-700",
		img: "https://i.ibb.co/xgZWmdq/8.jpg",
	},
	{
		id: 5,
		category: "Accessories",
		linkUrl: "/categories/accessories",
		color: "purple-200",
		img: "https://i.ibb.co/5F3nWv6/7.webp",
	},
	{
		id: 6,
		category: "Fashion",
		linkUrl: "/categories/accessories",
		color: "orange-200",
		img: "https://images.pexels.com/photos/1485031/pexels-photo-1485031.jpeg?auto=compress&cs=tinysrgb&w=600",
	},
	{
		id: 7,
		category: "Accessories",
		linkUrl: "/categories/accessories",
		color: "red-200",
		img: "/banner1.jpg",
	},
	{
		id: 8,
		category: "Accessories",
		linkUrl: "/categories/accessories",
		color: "red-500",
		img: "https://i.ibb.co/xDqmwGW/headphone-8.webp",
	},
	{
		id: 9,
		category: "Accessories",
		linkUrl: "/categories/accessories",
		color: "red-500",
		img: "https://i.ibb.co/2vwS6HR/nextamazon2.jpg",
	},
];

const GridItem = ({ item, index }: { item: any; index: number }) => (
	<div
		className={`rounded-md shadow-md bg-${item.color} ${
			index % 3 === 0 ? "col-span-2 row-span-3" : ""
		}`}
	>
		<Link href={item.linkUrl}>
			<div>
				<div
					className={`h-44  w-full relative border-2 border-${item.color}`}
				>
					<Image
						src={item.img}
						alt="image"
						width={500}
						height={500}
						className="w-full h-full object-fill"
					/>

					<div
						className={` absolute top-2 right-2 bg-emerald-50 rounded-lg p-2
						`}
					>
						<h2 className="text-base font-medium">
							{item.category}
						</h2>
					</div>
				</div>
			</div>
		</Link>
	</div>
);

const Grid = () => {
	return (
		<div className="p-12">
			<h1 className="text-center font-semibold text-xl">
				Explore Categories
			</h1>
			<div>
				<CategoryItem />
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
				{gridItems.map((item, index) => (
					<GridItem key={index} item={item} index={index} />
				))}
			</div>
		</div>
	);
};

export default Grid;
