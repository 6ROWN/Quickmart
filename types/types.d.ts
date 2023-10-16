export interface ProductProps {
	category: string;
	description: string;
	image: string;
	isNew: boolean;
	oldPrice: string;
	price: number;
	quantity: number;
	rating: number;
	title: string;
	_id: number;
}

export interface OrderDataProps {
	cartProducts: ProductProps[];
	id: string;
}

export interface CartState {
	cartItems: ProductProps[];
	userInfo: [];
	orderData: OrderDataProps[];
}

export interface ChildrenProps {
	children: React.ReactNode;
}

export interface ProductsCategoryProps {
	productCategory: string;
	categoryName?: string;
}
