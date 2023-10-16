"use client";
import React, { useState } from "react";
import InputBox from "./InputBox";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { signIn } from "next-auth/react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/config/firebase";

const Login: React.FC = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [passwordHasValue, setPasswordHasValue] = useState(false);

	const togglePassword = () => {
		setShowPassword((prev) => !prev);
	};

	const router = useRouter();

	const onSubmit = async (data: Record<string, any>) => {
		console.log("Form data:", data);
		await signIn("credentials", {
			email: data.email,
			password: data.password,
			callbackUrl: "/",
		});
	};

	const validationSchema = yup.object({
		email: yup
			.string()
			.email("Invalid email")
			.required("Email is required"),
		password: yup
			.string()
			.required("Password is required")
			.min(8, "Password must be at least 8 characters")
			.matches(
				/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
				"Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
			),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			email: "",
			password: "",
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
				<div className="absolute right-2 top-2">
					<Image
						src={"/pattern.svg"}
						alt="arrow back"
						width={100}
						height={100}
						className="w-6 h-6"
					/>
				</div>
				<div className="absolute left-1 bottom-1">
					<Image
						src={"/pattern.svg"}
						alt="arrow back"
						width={100}
						height={100}
						className="w-8 h-8"
					/>
				</div>
				<h2 className="text-2xl font-semibold mb-8 text-center text-emerald-700">
					Login
				</h2>

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
					<div className="relative mb-4">
						<InputBox
							type={showPassword ? "text" : "password"}
							label="Password"
							placeholder="Password"
							{...register("password")}
							error={errors?.password?.message}
							onChange={(e) =>
								setPasswordHasValue(e.target.value.length > 0)
							}
						/>
						{passwordHasValue && (
							<span
								className="absolute right-2 top-0 p-3"
								onClick={togglePassword}
							>
								<Image
									src={
										showPassword
											? "/password-hide.svg"
											: "/password-show.svg"
									}
									alt="password icon"
									width={100}
									height={100}
									className="w-6 h-6"
								/>
							</span>
						)}
					</div>

					<button
						className="bg-emerald-700 text-white w-full py-2 rounded-md hover:bg-emerald-800"
						type="submit"
					>
						Login
					</button>
				</form>
				<div className="flex items-center my-6">
					<div className="flex-1 border-t border-gray-300"></div>
					<div className="mx-4 text-gray-500">or continue with</div>
					<div className="flex-1 border-t border-gray-300"></div>
				</div>
				<div className="my-4 flex space-x-4">
					<Link
						href=""
						className="w-full py-2 items-center justify-center flex rounded-md bg-gray-100"
						onClick={() => signIn("google", { callbackUrl: "/" })}
					>
						<Image
							src={"/googleIcon.svg"}
							alt="google icon"
							width={100}
							height={100}
							className="w-8 h-8"
						/>
					</Link>
					<Link
						href=""
						className="w-full bg-gray-100 py-2 items-center justify-center flex rounded-md"
						onClick={() => signIn("github", { callbackUrl: "/" })}
					>
						<Image
							src={"/githubIcon.svg"}
							alt="google icon"
							width={100}
							height={100}
							className="w-8 h-8"
						/>
					</Link>
					<Link
						href=""
						className="w-full bg-gray-100 py-2 items-center justify-center flex rounded-md"
						onClick={() => signIn("facebook", { callbackUrl: "/" })}
					>
						<Image
							src={"/facebook.svg"}
							alt="google icon"
							width={100}
							height={100}
							className="w-8 h-8"
						/>
					</Link>
				</div>
				<div className="flex flex-col space-y-4 pt-4">
					<Link
						href="/resetPassword"
						className="text-gray-400 text-center hover:text-blue-500"
					>
						Forgot password?
					</Link>
					<Link
						href="/signUp"
						className="text-gray-400 text-center hover:text-blue-500"
					>
						Don't have an account? Register
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;
