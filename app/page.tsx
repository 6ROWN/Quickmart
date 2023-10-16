import Banner from "@/components/Banner";

import Products from "@/components/Products";
export default function Home() {
	return (
		<main className="">
			<Banner />
			<Products productCategory="products" categoryName="Trending" />
		</main>
	);
}
