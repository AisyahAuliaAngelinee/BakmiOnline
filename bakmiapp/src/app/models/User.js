const { Schema, models, model } = require("mongoose");

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

export const User = models?.User || model("User", UserSchema);
