"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	// const [error, setError] = useState(false);
	const [login, setLogin] = useState(false);

	async function handleFormSubmit(e) {
		e.preventDefault();
		setLogin(true);

		await signIn("credentials", { email, password, callbackUrl: "/" });

		setLogin(false);
	}

	return (
		<>
			<section className="mt-8">
				<h1 className="text-center text-primary text-4xl font-semibold mb-4">LOGIN</h1>
				{/* {error && (
					<div className="my-4 text-center font-bold text-red-500">
						Failed to login
						<br />
						Please check your Email or Password
					</div>
				)} */}
				<form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
					<input type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} disabled={login} />
					<input type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} disabled={login} />
					<button type="submit" disabled={login}>
						Login
					</button>
					<div className="my-4 text-center text-gray-500">or Login with other account</div>
					<button className="flex gap-4 justify-center" onClick={() => signIn("google", { callbackUrl: "/" })}>
						<Image src={"/google-icon-signin.png"} alt={"google-login"} width={24} height={24} />
						Login with Google
					</button>
					<div className="text-center my-4 border-t pt-4">
						Don't have an account?{" "}
						<Link href={"/register"} className="text-gray-500 font-semibold hover:text-green-700 hover:underline">
							Register
						</Link>
					</div>
				</form>
			</section>
		</>
	);
};

export default Login;
