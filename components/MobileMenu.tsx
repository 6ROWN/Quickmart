"use client";
import React from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

const MobileMenu = ({
	isOpen,
	closeMenu,
}: {
	isOpen: boolean;
	closeMenu: () => void;
}) => {
	const { status } = useSession();
	return (
		<div className="relative overflow-hidden">
			{isOpen && (
				<div className="relative">
					<ul className=" p-12 text-gray-200 flex flex-col space-y-4 text-center h-[90vh] bg-red-300">
						<Link href="/" onClick={closeMenu}>
							Home
						</Link>
						<Link href="/categories" onClick={closeMenu}>
							New Products
						</Link>
						<Link href="/categories/clothings" onClick={closeMenu}>
							Fashions & Clothes
						</Link>
						<Link
							href="/categories/electronics"
							onClick={closeMenu}
						>
							Computers and Accessories
						</Link>
						<Link
							href="/categories/accessories"
							onClick={closeMenu}
						>
							Appliances
						</Link>
						<Link href="/carts" onClick={closeMenu}>
							Carts
						</Link>
						<Link href="/order" onClick={closeMenu}>
							Orders
						</Link>
					</ul>
					<div className="absolute z-50 bottom-0 right-0 bg-red-400 w-full  px-8 py-12">
						<div className="flex flex-col space-y-6">
							<Link href="/#" className="flex space-x-6">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="1.5"
									stroke="currentColor"
									className="w-6 h-6 text-white"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
									/>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
									/>
								</svg>
								<span className="font-medium text-lg text-white">
									SETTINGS
								</span>
							</Link>
							{status === "authenticated" ? (
								<Link
									onClick={() => {
										signOut();
										closeMenu();
									}}
									href={"/#"}
									className="flex space-x-6"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth="1.5"
										stroke="currentColor"
										className="w-6 h-6 text-white"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
										/>
									</svg>

									<span className="font-medium text-lg text-white tracking-wider">
										LOG OUT
									</span>
								</Link>
							) : (
								<Link
									onClick={closeMenu}
									href={"/login"}
									className="flex space-x-6"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth="1.5"
										stroke="currentColor"
										className="w-6 h-6 text-white"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
										/>
									</svg>

									<span className="font-medium text-lg text-white tracking-wider">
										LOG IN
									</span>
								</Link>
							)}
						</div>
						<div></div>
					</div>
				</div>
			)}
		</div>
	);
};

export default MobileMenu;
