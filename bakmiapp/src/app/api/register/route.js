import mongoose from "mongoose";
import { User } from "../../models/User";

export async function POST(req) {
	const body = await req.json();
	mongoose.connect(process.env.MONGO_CONNECTION_STRING);
	const user = await User.create(body);
	return Response.json(user);
}
