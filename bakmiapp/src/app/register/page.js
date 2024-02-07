const Register = () => {
	return (
		<>
			<section className="mt-8">
				<h1 className="text-center text-primary text-4xl font-semibold">Register</h1>
				<form>
					<input type="text" placeholder="Email" />
					<input type="password" placeholder="Password" />
					<button type="submit">Register</button>
				</form>
			</section>
		</>
	);
};

export default Register;
