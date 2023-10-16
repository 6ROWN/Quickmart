import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
	return (
		<div className="flex items-center justify-center h-screen bg-gray-100">
			<div className="hidden lg:block flex-1 p-6">
				<Image
					src="/notFound.jpg"
					alt="not-found"
					width={500}
					height={500}
					className="w-full h-screen"
					loading="lazy"
				/>
			</div>
			<div className="flex-1 p-6 text-center">
				<h2 className="text-4xl xl:text-7xl text-blue-950 font-semibold mb-4">
					404
				</h2>
				<p className="text-2xl xl:text-4xl text-gray-600 mb-8">
					Could not find the requested resource.
				</p>
				<p className="text-xl text-gray-600 mb-8">
					Page might have been moved or deleted.
				</p>
				<Link href="/">
					<span className="text-gray-50 text-lg hover:underline px-4 py-2  bg-blue-950 rounded-full ">
						Return Home
					</span>
				</Link>
			</div>
		</div>
	);
}
