const { Schema } = require("mongoose");

const UserSchema = new Schema({
	email: { type: String, require: true, unique: true },
	password: {
		type: String,
		require: true,
		validate: (pass) => {
			if (!pass?.length || pass?.length < 5) {
			}
		},
	},
});
