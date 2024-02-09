import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export async function PUT(req) {
	mongoose.connect(process.env.MONGO_CONNECTION_STRING);
	const data = await req.json();
	const session = await getServerSession(authOptions);
	console.log(session, "<<<<< auth option");

	if ("name" in data) {
		// update the username
	}

	return Response.json(true);
}
