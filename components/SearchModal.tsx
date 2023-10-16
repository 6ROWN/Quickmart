"use client";
import React, { useState, useEffect, useRef } from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";
import Link from "next/link";

interface SearchModalProps {
	isOpen: boolean;
	onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
	const inputRef = useRef<HTMLInputElement | null>(null);

	useEffect(() => {
		// Add an event listener to the window when the modal opens
		if (isOpen && inputRef.current) {
			const handleEscapeKey = (event: KeyboardEvent) => {
				if (event.key === "Escape") {
					onClose(); // Call the onClose function when the "Escape" key is pressed
				}
			};

			window.addEventListener("keydown", handleEscapeKey);
			//Hanle focus ref
			inputRef.current.focus();

			// Remove the event listener when the modal is closed
			return () => {
				window.removeEventListener("keydown", handleEscapeKey);
			};
		}
	}, [isOpen]);

	// useEffect(() => {
	// 	if (isOpen && inputRef.current) {
	// 		inputRef.current.focus();
	// 	}
	// }, [isOpen]);

	return (
		isOpen && (
			<div className="fixed inset-0 flex items-center justify-center z-50 w-4/5 md:w-1/2 mx-auto">
				<div
					className="fixed inset-0 bg-gray-200 opacity-95"
					onClick={onClose}
				></div>
				<div className="bg-white py-4 px-8 rounded-lg shadow-lg z-50 relative w-full">
					<div className="relative shadow-lg">
						<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
							<Image
								src={"/searchIcon.svg"}
								className="w-4 h-4 text-gray-500 dark:text-gray-400"
								width={100}
								height={100}
								alt="search-icon"
							/>
						</div>
						<input
							ref={inputRef}
							type="search"
							className="block w-full p-4 pl-10 text-sm text-gray-700 border border-gray-300 rounded-lg bg-gray-50 focus:ring-emerald-200 focus:border-none"
							placeholder="Search products..."
							required
						/>

						<CustomButton
							className="absolute right-2.5 bottom-2.5"
							onClick={() => ""}
						>
							Search
						</CustomButton>
					</div>
					<div className="py-4 flex space-x-4 overflow-x-scroll scrollbar-hide">
						<Link
							onClick={onClose}
							href={"/"}
							className="border py-2 px-4 rounded-lg text-sm hover:bg-emerald-200"
						>
							New Arrivals
						</Link>
						<Link
							onClick={onClose}
							href="/categories/clothings"
							className="border py-2 px-4 rounded-lg text-sm hover:bg-emerald-200"
						>
							Fashion
						</Link>
						<Link
							onClick={onClose}
							href="/categories/accessories"
							className="border py-2 px-4 rounded-lg text-sm hover:bg-emerald-200"
						>
							Accessories
						</Link>
						<Link
							onClick={onClose}
							href="/categories/electronics"
							className="border py-2 px-4 rounded-lg text-sm hover:bg-emerald-200"
						>
							Laptops & Devices
						</Link>
						<Link
							onClick={onClose}
							href="/categories/electronics"
							className="border py-2 px-4 rounded-lg text-sm hover:bg-emerald-200"
						>
							Electronics
						</Link>
					</div>
				</div>
			</div>
		)
	);
};

export default SearchModal;
