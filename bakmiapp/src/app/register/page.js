import Image from "next/image";

const Register = () => {
	return (
		<>
			<section className="mt-8">
				<h1 className="text-center text-primary text-4xl font-semibold mb-4">Register</h1>
				<form className="block max-w-xs mx-auto">
					<input type="text" placeholder="Email" />
					<input type="password" placeholder="Password" />
					<button type="submit">Register</button>
					<div className="my-4 text-center text-gray-500">or Login with other account</div>
					<button className="flex gap-4 justify-center hover:bg-blue-600 hover:text-white transition-all">
						<Image src={"/google-icon-signin.png"} alt={"google-login"} width={24} height={24} />
						Login with Google
					</button>
				</form>
			</section>
		</>
	);
};

export default Register;
