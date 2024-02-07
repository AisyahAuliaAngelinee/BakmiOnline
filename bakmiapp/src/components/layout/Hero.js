import Image from "next/image";
import Right from "../icons/Right";

const Hero = () => {
	return (
		<>
			<section className="grid grid-cols-2">
				<div>
					<h1 className="text-4xl font-semibold">Everyday will better with Bakmi</h1>
					<p className="my-4 text-gray-500">100% Halal no pork, Certified Bakmi with Scholarship Approved. Want to live healthy? eat Bakmi all the time</p>
					<div className="flex gap-4">
						<button className="bg-primary text-white px-8 py-2 rounded-full">
							Order Now <Right />
						</button>
						<button>Learn more</button>
					</div>
				</div>
				<div className="relative">
					<Image src={"/Bihun_Bakso-removebg.png"} layout={"fill"} objectFit={"contain"} alt={"bakmi"} />
				</div>
			</section>
		</>
	);
};

export default Hero;
