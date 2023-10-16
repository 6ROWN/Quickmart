import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";
import { auth } from "@/config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export const authOptions: NextAuthOptions = {
	// Configure one or more authentication providers
	providers: [
		CredentialsProvider({
			name: "credentials",
			credentials: {
				email: { label: "email", type: "email" },
				password: { label: "password", type: "password" },
			},
			async authorize(credentials): Promise<any> {
				try {
					const userCredential = await signInWithEmailAndPassword(
						auth,
						(credentials as any).email || "",
						(credentials as any).password || ""
					);

					if (userCredential.user) {
						return userCredential.user;
					}
				} catch (error) {
					console.error("Error:", (error as any).message);
				}

				return null;
			},
		}),
		GithubProvider({
			clientId: process.env.GITHUB_ID || "",
			clientSecret: process.env.GITHUB_SECRET || "",
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID || "",
			clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
		}),
		FacebookProvider({
			clientId: process.env.FACEBOOK_CLIENT_ID || "",
			clientSecret: process.env.FACEBOOK_CLIENT_SECRET || "",
		}),
	],
	pages: {
		signIn: "/login",
	},
	session: {
		strategy: "jwt",

		maxAge: 60 * 60,
	},
	jwt: {
		secret: process.env.NEXTAUTH_SECRET,
	},
};
