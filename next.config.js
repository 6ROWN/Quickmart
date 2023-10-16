/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: [
			"lh3.googleusercontent.com",
			"avatars.githubusercontent.com",
			"scontent.facc1-1.fna.fbcdn.net",
			"scontent.facc6-1.fna.fbcdn.net",
			"img.freepik.com",
			"images.pexels.com",
			"i.ibb.co",
		],
	},
	async headers() {
		return [
			{
				// matching all API routes
				source: "/api/:path*",
				headers: [
					{ key: "Access-Control-Allow-Credentials", value: "true" },
					{ key: "Access-Control-Allow-Origin", value: "true" },
					{
						key: "Access-Control-Allow-Methods",
						value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
					},
					{
						key: "Access-Control-Allow-Headers",
						value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
					},
				],
			},
		];
	},
};

module.exports = nextConfig;
