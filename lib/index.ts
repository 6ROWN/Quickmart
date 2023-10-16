const baseUrl = "https://fakestoreapiserver.reactbd.com/";
export const getProduct = async (urlPath: string) => {
	const response = await fetch(`${baseUrl}${urlPath}`);
	if (!response.ok) {
		throw new Error("Failed to fetch data from the server.");
	}
	const result = await response.json();

	return result;
};

export const getTrendingProducts = async () => {
	const response = await fetch(
		"https://fakestoreapiserver.reactbd.com/smart"
	);
	if (!response.ok) {
		throw new Error("Failed to fetch trending products");
	}
	const result = await response.json();

	return result.slice(0, 4);
};

export const calculateDiscountPercentage = (oldPrice: any, price: any) => {
	return !!parseFloat(price) && !!parseFloat(oldPrice)
		? ((1 - parseFloat(price) / parseFloat(oldPrice)) * 100).toFixed(0)
		: null;
};

export const carouselItems = [
	{
		id: 1,
		title: "Shop the Latest Trends",
		desc: "Discover the latest fashion trends, accessories, and more at our e-commerce shop.",
		image: "/banner1.jpg",
		buttonName: "Shop Now",
	},
	{
		id: 2,
		title: "Find Your Perfect Gifts",
		desc: "Explore a world of gift ideas for every occasion. From birthdays to anniversaries.",
		image: "/banner2.jpg",
		buttonName: "Explore Gifts",
	},
	{
		id: 3,
		title: "Exclusive Deals and Discounts",
		desc: "Enjoy exclusive deals and discounts at our online store. Shop for quality products at unbeatable prices.",
		image: "/banner3.jpg",
		buttonName: "View Discounts",
	},
	{
		id: 4,
		title: "New Arrivals - Fall Collection",
		desc: "Get ready for fall with our latest arrivals. Cozy sweaters, stylish jackets, and more. Stay warm and fashionable.",
		image: "/banner4.jpg",
		buttonName: "Shop Now",
	},
	{
		id: 5,
		title: "Step Up Your Style",
		desc: "Elevate your shoe game with our exclusive collection of sneakers. Find the perfect pair to match your style.",
		image: "/banner5.png",
		buttonName: "Shop Now",
	},

	{
		id: 6,
		title: "Casual and Stylish",
		desc: "Discover casual sneakers that are both stylish and comfortable. Perfect for everyday wear and adding a touch of flair to your outfit.",
		image: "/banner6.jpg",
		buttonName: "View Discounts",
	},
];

export const footerLinks = [
	{
		title: "Shop",
		links: [
			{ name: "New Arrivals", url: "/categories/clothings" },
			{ name: "Clothing", url: "/categories/clothings" },
			{ name: "Devices", url: "/categories/electronics" },
			{ name: "Accessories", url: "/categories/accessories" },
		],
	},
	{
		title: "Customer Service",
		links: [
			{ name: "Contact Us", url: "/contact" },
			{ name: "Shipping & Returns", url: "/shipping-returns" },
			{ name: "FAQ", url: "/faq" },
		],
	},
	{
		title: "Company",
		links: [
			{ name: "About Us", url: "/about-us" },
			{ name: "Careers", url: "/careers" },
			{ name: "Privacy Policy", url: "/privacy-policy" },
		],
	},
];

export const socialLinks = [
	{
		name: "Facebook",
		url: "https://www.facebook.com",
		imgUrl: "/facebook.svg",
	},
	{
		name: "Twitter",
		url: "https://www.twitter.com",
		imgUrl: "/twitterX.svg",
	},
	{
		name: "Instagram",
		url: "https://www.instagram.com",
		imgUrl: "/instagram.svg",
	},
	{
		name: "Github",
		url: "https://www.instagram.com",
		imgUrl: "/githubIcon.svg",
	},
];
