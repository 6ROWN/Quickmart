"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import CustomButton from "./CustomButton";
import { carouselItems as banners } from "@/lib";

const PrevArrow: React.FC<{
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
}> = ({ onClick }) => (
	<button
		onClick={onClick}
		className="z-0 md:z-10 absolute rounded-full bg-gray-50 flex items-center justify-center w-9 h-9 left-5 top-1/2 transform -translate-y-1/2 hover:bg-gray-400 hover:border-2 hover:border-white hover:p-2"
	>
		<Image
			src="/chevron-left.svg"
			alt="prev-arrow"
			width={100}
			height={100}
			className="w-6 h-6 bg-transparent"
		/>
	</button>
);

const NextArrow: React.FC<{
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
}> = ({ onClick }) => (
	<button
		onClick={onClick}
		className="absolute rounded-full bg-gray-50 flex items-center justify-center w-9 h-9 right-5 top-1/2 transform -translate-y-1/2 hover:bg-gray-400 hover:border-2 hover:border-white hover:p-2"
	>
		<Image
			src="/chevron-right.svg"
			alt="prev-arrow"
			width={100}
			height={100}
			className="w-6 h-6 bg-transparent"
		/>
	</button>
);

const Banner = () => {
	const settings = {
		infinite: true,
		speed: 3000,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		prevArrow: <PrevArrow />,
		nextArrow: <NextArrow />,
	};
	return (
		<div className="w-full relative">
			<Slider {...settings}>
				{banners.map((item) => (
					<div className="relative" key={item.id}>
						<Image
							src={item?.image}
							className=" w-full h-[70vh] object-center"
							width={800}
							height={800}
							priority
							alt={item.image}
						/>
						<div className="bg-gray-700 bg-opacity-50 absolute top-0 left-0 h-full w-full"></div>
						<div className="absolute top-0 left-0 h-full w-full flex flex-col items-center justify-center space-y-12  px-8">
							<h1 className="text-3xl lg:text-5xl font-bold text-white">
								{item.title}
							</h1>
							<h3 className="text-xl font-medium text-gray-100">
								{item.desc}
							</h3>
							<div>
								<CustomButton
									onClick={() => ""}
									className="flex space-x-4 items-center text-"
									variant="secondary"
								>
									<span className="text-emerald-800">
										{item.buttonName}
									</span>
									<Image
										src="/arrow-right.svg"
										width={100}
										height={100}
										className="w-4 h-4"
										alt="Arrow "
									/>
								</CustomButton>
							</div>
						</div>
					</div>
				))}
			</Slider>
			<div className="absolute bottom-0 left-0 h-28 w-full bg-gradient-to-t from-emerald-100 to-transparent"></div>
		</div>
	);
};

export default Banner;
