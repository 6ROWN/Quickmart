"use client";
import { ChildrenProps } from "@/types/types";
import React from "react";
import { Provider } from "react-redux";
import { store, persistor } from "@/redux/store";
import { PersistGate } from "redux-persist/integration/react";

const StoreProvider: React.FC<ChildrenProps> = ({ children }) => {
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>{children}</PersistGate>
		</Provider>
	);
};

export default StoreProvider;
