"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

const Profile = () => {
	const session = useSession();
	console.log(session, "<<<<< SESSIONNSS");

	const [userName, setUserName] = useState("");
	const { status } = session;

	if (status === "loading") {
		return "Loading, Please wait for a moment..";
	} else if (status === "unauthenticated") {
		redirect("/login");
	}

	const userImage = session.data?.user.image;

	async function handleProfileInfoUpdate(e) {
		e.preventDefault();
		const response = await fetch("/api/profile", {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ name: userName }),
		});
	}

	useEffect(() => {
		if (status === "authenticated") {
			setUserName(session.data.user.name);
		}
	}, [session, status]);

	return (
		<>
			<section className="mt-8">
				<h1 className="text-center text-primary text-4xl font-semibold mb-4">PROFILE</h1>
				<div className="max-w-md mx-auto">
					<div className="flex gap-4 items-center">
						<div>
							<div className="p-2 rounded-lg relative">
								<Image className="rounded-lg w-full h-full mb-1" src={userImage} width={250} height={250} alt={"profile-image"} />
								<button type="button">Edit Image</button>
							</div>
						</div>
						<form className="grow" onSubmit={handleProfileInfoUpdate}>
							<input type="text" placeholder="Firstname and Lastname" value={userName} onChange={(e) => setUserName(e.target.value)} />
							<input type="email" value={session.data.user.email} disabled={true} />
							<button type="submit">Save</button>
						</form>
					</div>
				</div>
			</section>
		</>
	);
};

export default Profile;
