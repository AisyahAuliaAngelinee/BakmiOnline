"use client";

import Image from "next/image";
import { useState } from "react";

const Register = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	function handleSubmitForm(e) {
		e.preventDefault();
		fetch("/api/register", {
			method: "POST",
			body: JSON.stringify({ email, password }),
			headers: {
				"Content-Type": "application/json",
			},
		});
	}

	return (
		<>
			<section className="mt-8">
				<h1 className="text-center text-primary text-4xl font-semibold mb-4">Register</h1>
				<form className="block max-w-xs mx-auto" onSubmit={handleSubmitForm}>
					<input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
					<input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
					<button type="submit">Register</button>
					<div className="my-4 text-center text-gray-500">or Login with other account</div>
					<button className="flex gap-4 justify-center">
						<Image src={"/google-icon-signin.png"} alt={"google-login"} width={24} height={24} />
						Login with Google
					</button>
				</form>
			</section>
		</>
	);
};

export default Register;
