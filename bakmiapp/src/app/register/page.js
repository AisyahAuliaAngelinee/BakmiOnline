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
					<button>Login with Google</button>
				</form>
			</section>
		</>
	);
};

export default Register;
