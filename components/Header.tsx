"use client";
import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import Logo from "./Logo";
import CustomButton from "./CustomButton";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import MobileMenu from "./MobileMenu";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { addUser, deleteUser } from "@/redux/features/cart/cartSlice";
import Link from "next/link";

const Header = () => {
	const router = useRouter();
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [isUserProfileExpanded, setUserProfileExpanded] = useState(false);
	const [amount, setAmount] = useState(0);
	const { data: session } = useSession();

	const dispatch = useDispatch();

	const cartProducts = useSelector(
		(state: RootState) => state.cart.cartItems
	);

	const orders = useSelector((state: RootState) => state.cart.orderData);

	useEffect(() => {
		if (session) {
			dispatch(
				addUser({
					name: session?.user?.name,
					email: session?.user?.email,
					image: session?.user?.image,
				})
			);
		} else {
			dispatch(deleteUser());
		}
	}, [session, dispatch]);

	useEffect(() => {
		let amount = 0;
		if (cartProducts.length > 0) {
			amount = cartProducts.reduce(
				(acc, item) => acc + item?.price * (item?.quantity || 1), // Set default quantity to 1
				0
			);
			amount = parseFloat(amount.toFixed(2));
			setAmount(amount);
		}
	}, [cartProducts]);

	const toggleMenu = () => {
		setIsOpen((prev) => !prev);
	};

	const closeMenu = () => {
		setIsOpen(false);
	};

	const expandUserProfile = () => {
		setUserProfileExpanded(!isUserProfileExpanded);
	};

	return (
		<nav className="w-full bg-red-400 shadow-xl top-0 sticky z-10">
			<div className="p-4 mx-auto w-11/12 flex justify-between items-center">
				<Logo />
				<SearchBar />
				<div
					onClick={() => router.push("/cart")}
					className="block md:hidden relative cursor-pointer"
				>
					<Image
						src={"/cart.svg"}
						width={100}
						height={100}
						alt=""
						className="w-6 h-6 group-hover:text-gray-200"
					/>
					<span className="p-1 text-sm w-4 h-4 rounded-full bg-emerald-50 absolute items-center justify-center flex -right-1 -top-1 shadow-xl shadow-black text-emerald-800">
						{cartProducts.length}
					</span>
				</div>
				<div onClick={toggleMenu} className="flex md:hidden">
					{!isOpen ? (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							className="w-6 h-8 text-emerald-800"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
							/>
						</svg>
					) : (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							className="w-6 h-8 text-emerald-800"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					)}
				</div>

				<div className="hidden md:flex space-x-8 items-center">
					<CustomButton
						className="flex space-x-2 items-center relative group"
						variant="secondary"
						onClick={() => router.push("/cart")}
					>
						<Image
							src={"/cart.svg"}
							width={100}
							height={100}
							alt=""
							className="w-6 h-6 group-hover:text-gray-200"
						/>
						<p className="text-emerald-800 group-hover:text-gray-200">
							$ {amount.toFixed(2)}
						</p>
						<span className="p-1 w-6 h-6 rounded-full bg-slate-50 absolute items-center justify-center flex -right-3 -top-2 shadow-xl shadow-black text-emerald-800">
							{cartProducts.length}
						</span>
					</CustomButton>
					<div>
						{orders.length > 0 && (
							<Link href="/order">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="1.5"
									stroke="currentColor"
									className="w-8 h-8 text-emerald-100 hover:text-emerald-700"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
									/>
								</svg>
							</Link>
						)}
					</div>
					{session?.user ? (
						<div className="flex items-center  relative">
							{session?.user?.image ? (
								<Image
									src={session?.user?.image as string}
									alt="user profile"
									width={100}
									height={100}
									className="w-10 h-10 rounded-full object-cover border-2 border-gray-100 cursor-pointer"
									onClick={expandUserProfile}
								/>
							) : (
								<Image
									src={"/user.svg"}
									alt="user profile"
									width={100}
									height={100}
									className="w-6 h-6 rounded-full object-cover border-2 border-gray-100 cursor-pointer"
									onClick={expandUserProfile}
								/>
							)}

							{isUserProfileExpanded && (
								<div className="absolute top-14 -left-20 z-10 px-4 py-2 bg-gray-300 rounded-xl flex space-y-2 flex-col">
									<span className="flex text-sm">
										{session?.user?.email}
									</span>
									<span
										className="cursor-pointer text-sm hover:text-blue-500 flex space-x-2 items-center"
										onClick={() => signOut()}
									>
										<Image
											src={"/logout.svg"}
											width={1000}
											height={100}
											alt="logout"
											className="w-4 h-4"
										/>

										<span>Log Out</span>
									</span>
								</div>
							)}
						</div>
					) : (
						<CustomButton
							className="flex space-x-2 items-center"
							onClick={() => router.push("/login")}
						>
							<Image
								src={"/user.svg"}
								width={100}
								height={100}
								alt=""
								className="w-6 h-6 text-gray-200"
							/>
							<p>Sign In</p>
						</CustomButton>
					)}
				</div>
			</div>
			{/* Mobile menu */}
			<MobileMenu isOpen={isOpen} closeMenu={closeMenu} />
		</nav>
	);
};

export default Header;
