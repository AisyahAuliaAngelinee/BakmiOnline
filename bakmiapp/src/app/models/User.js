const { Schema, models, model } = require("mongoose");
// const { hashPassword } = require("../../helpers/bcrypt");
import bcrypt from "bcryptjs";

const UserSchema = new Schema(
	{
		email: { type: String, require: true, unique: true },
		password: {
			type: String,
			require: true,
			validate: (pass) => {
				if (!pass?.length || pass?.length < 5) {
					new Error("Password must be at least 5 characters");
				}
			},
		},
	},
	{
		timestamps: true,
	}
);

UserSchema.post("validate", function (user) {
	console.log(user.password, "<<< user");

	const password = user.password;
	const salt = bcrypt.genSaltSync(10);
	user.password = bcrypt.hashSync(password, salt);

	// console.log({ arguments }, "<<<< USERRRRR");
});

export const User = models?.User || model("User", UserSchema);
