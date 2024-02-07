import Image from "next/image";
import Right from "../icons/Right";

const Hero = () => {
	return (
		<>
			<section className="grid grid-cols-2">
				<div className="py-8">
					<h1 className="text-4xl font-semibold">Everyday will better with Bakmi</h1>
					<p className="my-4 text-gray-500">100% Halal no pork, Certified Bakmi with Scholarship Approved. Want to live healthy? eat Bakmi all the time</p>
					<div className="flex gap-4 text-sm">
						<button className="flex gap-2 bg-primary text-white uppercase font-semibold items-center px-4 py-2 rounded-full">
							Order Now <Right />
						</button>
						<button className="flex gap-2 py-2 text-gray-500 font-semibold">
							Learn more <Right />
						</button>
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
