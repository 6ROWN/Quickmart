import React, { ReactNode } from "react";

interface CustomButtonProps {
	children: ReactNode;
	onClick: () => void;
	className?: string;
	variant?: "primary" | "secondary";
}

const CustomButton: React.FC<CustomButtonProps> = ({
	children,
	onClick,
	className,
	variant = "primary", // Default to primary variant if not specified
}) => {
	const isPrimary = variant === "primary";
	const buttonClass = isPrimary
		? "bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300"
		: "bg-gray-200 border border-emerald-800 text-emerald-800 hover:bg-emerald-600 hover:text-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300";

	return (
		<button
			onClick={onClick}
			className={`text-white font-medium rounded-lg text-sm px-4 py-2 ${buttonClass} ${className}`}
		>
			{children}
		</button>
	);
};

export default CustomButton;
