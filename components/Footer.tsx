import React from "react";
import Logo from "./Logo";
import { footerLinks, socialLinks } from "@/lib";
import Image from "next/image";

const Footer = () => {
	return (
		<footer className="bg-[#231f20] text-white">
			<div className="w-[90%] mx-auto py-8">
				<div className="grid grid-cols-1  md:grid-cols-2 xl:grid-cols-4 gap-6">
					<div>
						<Logo />
						<p className="text-gray-400 py-4">
							Follow us on social media
						</p>
						<ul className="flex space-x-4 mt-2">
							{socialLinks.map((link, index) => (
								<div
									key={index}
									className="relative group cursor-pointer transition-transform transform-gpu hover:scale-105"
								>
									<Image
										src={link.imgUrl}
										className="w-8 h-8 hover:scale-110"
										width={500}
										height={500}
										alt={link.name}
									/>
									<p className="text-element absolute bottom-4 left-1/2 transform -translate-x-1/2 -translate-y-2/3 text-white bg-black bg-opacity-70 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
										{link.name}
									</p>
								</div>
							))}
						</ul>
					</div>
					{footerLinks.map((section, index) => (
						<div key={index}>
							<h2 className="text-lg font-semibold mb-3">
								{section.title}
							</h2>
							<ul>
								{section.links.map((link, linkIndex) => (
									<li key={linkIndex}>
										<a
											href={link.url}
											className="block text-gray-400 hover:text-white py-1"
										>
											{link.name}
										</a>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</footer>
	);
};

export default Footer;
