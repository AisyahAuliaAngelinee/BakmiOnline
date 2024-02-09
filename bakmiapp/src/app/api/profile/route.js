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

	console.log(data, "<<< data");
	if ("name" in data) {
		// update the username
		const user = await User.findOne({ email });
		console.log(user, "<<<<<NANEMEMEM");
		user.name = data.name;
		await user.save();
		console.log({ email, update: { name: data.name } }, "<<< email");

		// const result = await User.updateOne({ email }, { name: data.name });
		// console.log(result, "<<< resultttt");
	}

	return Response.json(true);
}
