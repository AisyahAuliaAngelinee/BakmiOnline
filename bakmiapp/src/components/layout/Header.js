"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";

const Header = () => {
	const session = useSession();
	console.log(session, "<<<< session");

	return (
		<>
			<header className="flex items-center justify-between">
				<Link className="text-primary font-semibold text-2xl" href={"/"}>
					TC | Bakmi Online
				</Link>
				<nav className="flex items-center gap-4 text-gray-500 font-semibold">
					<Link href={"/"} className="hover:underline hover:text-primary transition-all">
						Home
					</Link>
					<Link href={""} className="hover:underline hover:text-primary transition-all">
						Menu
					</Link>
					<Link href={""} className="hover:underline hover:text-primary transition-all">
						About
					</Link>
					<Link href={""} className="hover:underline hover:text-primary transition-all">
						Contact
					</Link>
				</nav>
				<nav className="flex items-center gap-8 text-gray-500 font-semibold">
					<Link href={"/login"}>Login</Link>
					<Link href={"/register"} className="bg-primary rounded-full text-white px-6 py-2 hover:bg-green-700 transition-all">
						Register
					</Link>
				</nav>
			</header>
		</>
	);
};

export default Header;
