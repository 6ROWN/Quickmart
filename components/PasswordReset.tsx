"use client";
import React, { useState } from "react";
import InputBox from "./InputBox";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const PasswordReset: React.FC = () => {
	const router = useRouter();

	const onSubmit = (data: Record<string, any>) => {
		console.log("Form data:", data);
	};

	const validationSchema = yup.object({
		email: yup
			.string()
			.email("Invalid email")
			.required("Email is required"),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			email: "",
		},
		resolver: yupResolver(validationSchema),
	});

	return (
		<div className="flex items-center justify-center min-h-screen bg-red-100">
			<div
				className="absolute top-8 left-8 cursor-pointer"
				onClick={() => router.back()}
			>
				<Image
					src={"/arrow-left.svg"}
					alt="arrow back"
					width={100}
					height={100}
					className="w-6 h-6"
				/>
			</div>
			<div className="bg-white py-12 px-8 rounded-md border border-gray-100 shadow-xl w-10/12 md:w-2/4 lg:w-1/3 relative">
				<div className="absolute left-2 top-2">
					<Image
						src={"/pattern.svg"}
						alt="arrow back"
						width={100}
						height={100}
						className="w-6 h-6"
					/>
				</div>
				<div className="absolute right-1 bottom-1">
					<Image
						src={"/pattern.svg"}
						alt="arrow back"
						width={100}
						height={100}
						className="w-8 h-8"
					/>
				</div>
				<h2 className="text-2xl font-semibold text-center text-emerald-700">
					Password Recovery
				</h2>
				<p className="text-gray-500 my-4 text-sm">
					Please provide your email address, and we'll promptly send
					you a recovery email containing instructions for resetting
					your password.
				</p>

				<form onSubmit={handleSubmit(onSubmit)} noValidate>
					<div className="mb-4">
						<InputBox
							type="email"
							label="Email"
							placeholder="Email"
							error={errors?.email?.message}
							{...register("email")}
						/>
					</div>

					<button
						className="bg-emerald-700 text-white w-full py-2 rounded-md hover:bg-emerald-800"
						type="submit"
					>
						Reset
					</button>
				</form>
			</div>
		</div>
	);
};

export default PasswordReset;
