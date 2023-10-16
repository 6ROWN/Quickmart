import React, { forwardRef, InputHTMLAttributes } from "react";

interface InputBoxProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string;
	error: string | undefined;
}

const InputBox: React.ForwardRefRenderFunction<
	HTMLInputElement,
	InputBoxProps
> = ({ label, error, ...props }, ref) => {
	return (
		<div className="mb-6 relative">
			<label className="absolute text-sm text-emerald-600 dark:text-emerald-500 scale-75 -top-2 z-10 bg-white dark:bg-gray-900 px-2 left-1">
				{label}
			</label>

			<input
				{...props}
				className={`w-full rounded-md border bg-gray-50 py-3 px-5 text-base placeholder-gray-400 outline-none block pb-2.5 text-gray-900 border-1 border-emerald-600 focus:outline-none focus:ring-0 focus:border-2 focus:border-emerald-600 ${
					error && "border-red-600"
				}`}
				ref={ref}
			/>
			{error && <p className="text-sm text-red-500 mt-1"> {error}</p>}
		</div>
	);
};

export default forwardRef(InputBox);
