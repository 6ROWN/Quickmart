import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "@/components/Header";
import AuthContext from "../context/AuthContext";
import Footer from "@/components/Footer";
import StoreProvider from "@/context/StoreProvider";

const myFont = localFont({
	src: "../fonts/sfpRegular.ttf",
});

export const metadata: Metadata = {
	title: "Quickmart",
	description: "Ecommerce application",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning={true}>
			<body className={myFont.className}>
				<StoreProvider>
					<AuthContext>
						<Header />
						{children}
						<Footer />
					</AuthContext>
				</StoreProvider>
			</body>
		</html>
	);
}
