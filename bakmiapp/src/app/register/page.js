"use client";

import { create } from "domain";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Register = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [createUser, setCreateUser] = useState(false);
	const [userCreated, setUserCreated] = useState(false);
	const [error, setError] = useState(false);

	async function handleSubmitForm(e) {
		e.preventDefault();
		setCreateUser(true);
		setError(false);
		const response = await fetch("/api/register", {
			method: "POST",
			body: JSON.stringify({ email, password }),
			headers: {
				"Content-Type": "application/json",
			},
		});
		// console.log(response, "<<< response");

		if (!response.ok) {
			setError(true);
		} else {
			setUserCreated(true);
		}

		setCreateUser(false);
	}

	return (
		<>
			<section className="mt-8">
				<h1 className="text-center text-primary text-4xl font-semibold mb-4">REGISTER</h1>
				{userCreated && (
					<div className="my-4 text-center">
						User Created. <br /> Now you can{" "}
						<Link href={"/login"} className="hover:font-semibold hover:text-green-700 hover:underline transition-all">
							LOGIN &raquo;
						</Link>
					</div>
				)}
				{error && (
					<div className="my-4 text-center font-bold text-red-500">
						Failed create new user, Please try again <br />
						(Email maybe already been used)
					</div>
				)}
				<form className="block max-w-xs mx-auto" onSubmit={handleSubmitForm}>
					<input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} disabled={createUser} />
					<input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} disabled={createUser} />
					<button type="submit" disabled={createUser}>
						Register
					</button>
					<div className="my-4 text-center text-gray-500">or Login with other account</div>
					<button className="flex gap-4 justify-center">
						<Image src={"/google-icon-signin.png"} alt={"google-login"} width={24} height={24} />
						Login with Google
					</button>
					<div className="text-center my-4 border-t pt-4">
						Already have an account?{" "}
						<Link href={"/login"} className="text-gray-500 font-semibold hover:text-green-700 hover:underline">
							Login
						</Link>
					</div>
				</form>
			</section>
		</>
	);
};

export default Register;
