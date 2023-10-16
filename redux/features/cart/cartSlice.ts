import { createSlice } from "@reduxjs/toolkit";
import { CartState } from "@/types/types";

const initialState: CartState = {
	cartItems: [],
	userInfo: [],
	orderData: [],
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addItemToCart: (state, action) => {
			const item = action.payload;
			const existingItem = state.cartItems.find(
				(x) => x._id === item._id
			);
			if (existingItem) {
				state.cartItems = state.cartItems.map((x) =>
					x._id === existingItem?._id ? item : x
				);
			} else {
				state.cartItems = [...state.cartItems, item];
			}
		},
		deleteItems: (state, action) => {
			// Action to delete items from the cart
			const itemsToDelete = action.payload;
			state.cartItems = state.cartItems.filter(
				(item) => item._id !== itemsToDelete._id
			);
		},
		resetCartItems: (state) => {
			// Action to reset the cart to an empty state
			state.cartItems = [];
		},
		incrementItemByQuantity: (state, action) => {
			const { _id, quantity } = action.payload;
			state.cartItems = state.cartItems.map((item) =>
				item._id === _id
					? { ...item, quantity: (item.quantity || 1) + 1 }
					: item
			);
		},
		decrementItemByQuantity: (state, action) => {
			const { _id, quantity } = action.payload;
			state.cartItems = state.cartItems.map((item) =>
				item._id === _id
					? { ...item, quantity: (item.quantity || 1) - 1 }
					: item
			);
		},

		addUser: (state, action) => {
			state.userInfo = action.payload;
		},
		deleteUser: (state) => {
			state.userInfo = [];
		},
		saveOrder: (state, action) => {
			state.orderData = [...state.orderData, action.payload];
		},
		resetOrder: (state) => {
			state.orderData = [];
		},
	},
});

export default cartSlice.reducer;

export const {
	addItemToCart,
	deleteItems,
	resetCartItems,
	incrementItemByQuantity,
	decrementItemByQuantity,
	addUser,
	deleteUser,
	saveOrder,
	resetOrder,
} = cartSlice.actions;
