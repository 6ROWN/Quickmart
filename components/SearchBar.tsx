import React, { useState } from "react";
import CustomButton from "./CustomButton";
import SearchModal from "./SearchModal";
import Image from "next/image";

const SearchBar = () => {
	const [isSearchModalOpen, setSearchModalOpen] = useState(false);

	const handleSearchInputClick = () => {
		setSearchModalOpen(true);
	};

	const closeSearchModal = () => {
		setSearchModalOpen(false);
	};
	return (
		<form className="w-3/5 md:w-2/5">
			<div className="relative">
				<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
					<Image
						src={"/searchIcon.svg"}
						className="w-4 h-4 text-gray-500 dark:text-gray-400"
						width={100}
						height={100}
						alt="search-icon"
						priority
					/>
				</div>
				<input
					type="search"
					className="block w-full p-4 pl-10 text-sm text-gray-700 border border-gray-300 rounded-lg bg-gray-50 focus:ring-emerald-200 focus:border-none cursor-pointer"
					placeholder="Quick search"
					onClick={handleSearchInputClick}
				/>
			</div>
			<SearchModal
				isOpen={isSearchModalOpen}
				onClose={closeSearchModal}
			/>
		</form>
	);
};

export default SearchBar;
