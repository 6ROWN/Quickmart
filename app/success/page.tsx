import Link from "next/link";
import React from "react";

const page = () => {
	return (
		<div className="w-full bg-emerald-100 h-full">
			<div className="w-[90%] mx-auto flex h-[60vh] flex-col justify-center items-center space-y-6">
				<div className="">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="#047857"
						className="w-12 h-12"
					>
						<path
							fillRule="evenodd"
							d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
							clipRule="evenodd"
						/>
					</svg>
				</div>
				<h1 className="text-2xl font-bold">Success</h1>
				<h3 className="text-lg font-medium">
					Your request has been processed successfully.
				</h3>
				<div className="flex space-x-8 items-center">
					<div>
						<Link href={"/order"}>
							<button className="text-center flex  hover:bg-gray-50 w-full items-center justify-center rounded-lg font-medium bg-black text-white hover:text-emerald-800 transition-all duration-200 ease-in py-3 px-4">
								View Order
							</button>
						</Link>
					</div>
					<div>
						<Link href={"/"}>
							<button className="text-center flex  hover:bg-gray-50 w-full items-center justify-center rounded-lg font-medium bg-black text-white hover:text-emerald-800 transition-all duration-200 ease-in py-3 px-4">
								Continue Shopping
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default page;
