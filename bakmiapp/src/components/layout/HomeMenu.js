import Image from "next/legacy/image";
import MenuItem from "../menu/MenuItem";
import SectionHeaders from "./SectionHeaders";

const HomeMenu = () => {
	return (
		<>
			<section className="">
				<div className="absolute right-0 left-0 w-full justify-start">
					<div className="absolute left-[10rem] -top-[70px] text-left -z-10 scale-[5]">
						<Image src={"/sallad1.png"} width={109} height={189} alt={"salad-1"} />
					</div>
					<div className="absolute right-[13rem] -top-[100px] -z-10 scale-[5]">
						<Image src={"/sallad2.png"} width={107} height={195} alt={"salad-2"} />
					</div>
				</div>
				<div className="text-center mb-4">
					<SectionHeaders subHeader={"Check Out"} mainHeader={"Menu"} />
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
