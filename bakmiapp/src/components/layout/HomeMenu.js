import Image from "next/legacy/image";
import MenuItem from "../menu/MenuItem";

const HomeMenu = () => {
	return (
		<>
			<section className="">
				<div className="absolute right-0 left-0 w-full justify-start">
					<div className="absolute left-0 -top-[70px] text-left -z-10">
						<Image src={"/sallad1.png"} width={109} height={189} alt={"salad-1"} />
					</div>
					<div className="absolute right-0 -top-[100px] -z-10">
						<Image src={"/sallad2.png"} width={107} height={195} alt={"salad-2"} />
					</div>
				</div>
				<div className="text-center mb-4">
					<h3 className="uppercase text-gray-600 font-semibold leading-5">Check Our</h3>
					<h2 className="text-primary font-bold text-4xl italic">Menu</h2>
				</div>
				<div className="grid grid-cols-3 gap-4">
					<MenuItem />
					<MenuItem />
					<MenuItem />
					<MenuItem />
					<MenuItem />
					<MenuItem />
					<MenuItem />
					<MenuItem />
					<MenuItem />
				</div>
			</section>
		</>
	);
};

export default HomeMenu;
