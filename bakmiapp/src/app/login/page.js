"use client";

import Image from "next/image";
import Link from "next/link";

const Login = () => {
	return (
		<>
			<section className="mt-8">
				<h1 className="text-center text-primary text-4xl font-semibold mb-4">LOGIN</h1>
				<form className="block max-w-xs mx-auto">
					<input
						type="email"
						placeholder="Email"
						//  value={email} onChange={(e) => setEmail(e.target.value)} disabled={false}
					/>
					<input
						type="password"
						placeholder="Password"
						//  value={password} onChange={(e) => setPassword(e.target.value)} disabled={false}
					/>
					<button
						type="submit"
						// disabled={false}
					>
						Login
					</button>
					<div className="my-4 text-center text-gray-500">or Login with other account</div>
					<button className="flex gap-4 justify-center">
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
