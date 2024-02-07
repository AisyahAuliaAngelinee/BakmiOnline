import Link from "next/link";

const Header = () => {
	return (
		<>
			<header className="flex items-center justify-between">
				<Link className="text-primary font-semibold text-2xl" href={""}>
					TC | Bakmi Online
				</Link>
				<nav className="flex items-center gap-4 text-gray-500 font-semibold">
					<Link href={""}>Home</Link>
					<Link href={""}>Menu</Link>
					<Link href={""}>About</Link>
					<Link href={""}>Contact</Link>
					<Link href={""} className="bg-primary rounded-full text-white px-6 py-2 hover:bg-green-700 transition-all">
						Login
					</Link>
				</nav>
			</header>
		</>
	);
};

export default Header;
