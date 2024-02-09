"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import { redirect } from "next/navigation";

const Profile = () => {
	const session = useSession();
	console.log(session, "<<<<< SESSIONNSS");
	const { status } = session;

	if (status === "loading") {
		return "Loading, Please wait for a moment..";
	} else if (status === "unauthenticated") {
		redirect("/login");
	}

	const userImage = session.data?.user.image;

	return (
		<>
			<section className="mt-8">
				<h1 className="text-center text-primary text-4xl font-semibold mb-4">PROFILE</h1>
				<form className="max-w-xs mx-auto border">
					<div>
						<Image src={userImage} width={64} height={64} alt={"profile-image"} />
					</div>
				</form>
			</section>
		</>
	);
};

export default Profile;
