import mongoose from "mongoose";
import NextAuth from "next-auth";
import { User } from "@/app/models/User";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

const handler = NextAuth({
	secret: process.env.SECRET,
	providers: [
		CredentialsProvider({
			name: "Credentials",
			id: "credentials",
			credentials: {
				username: { label: "Email", type: "email", placeholder: "test@example.com" },
				password: { label: "Password", type: "password" },
			},

			async authorize(credentials, req) {
				// console.log({ credentials }, "<<<< user credentials");
				// console.log("masuk sini");
				const email = credentials?.email;
				const password = credentials?.password;

				mongoose.connect(process.env.MONGO_CONNECTION_STRING);
				const user = await User.findOne({ email });

				const passwordOk = user && bcrypt.compareSync(password, user.password);

				if (passwordOk) {
					console.log(user, "<<< user");
					// console.log(passwordOk, "<<<< password");
					return user;
				}

				return null;
			},
		}),
	],
});

export { handler as GET, handler as POST };
