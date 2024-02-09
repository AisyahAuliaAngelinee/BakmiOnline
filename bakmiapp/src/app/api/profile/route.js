import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { User } from "@/app/models/User";

export async function PUT(req) {
	mongoose.connect(process.env.MONGO_CONNECTION_STRING);
	const data = await req.json();
	const session = await getServerSession(authOptions);
	// console.log({ session, data }, "<<<<< auth option");

	const email = session.user.email;
	// const user = await User.findOne({ email });

	if ("name" in data) {
		// update the username
		await User.updateOne({ email }, { name: data.name });
	}

	return Response.json(true);
}
