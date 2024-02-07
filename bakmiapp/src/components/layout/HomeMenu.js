import Image from "next/image";

const HomeMenu = () => {
	return (
		<>
			<section className="">
				<div className="absolute h-full right-0 left-0 w-full justify-start">
					<div className="absolute left-0 -top-12 text-left">
						<Image src={"/sallad1.png"} width={109} height={189} alt={"salad-1"} />
					</div>
					<div className="absolute right-0 -top-24 -z-10">
						<Image src={"/sallad2.png"} width={107} height={195} alt={"salad-2"} />
					</div>
				</div>
				<div className="text-center">
					<h3 className="uppercase text-gray-600 font-semibold leading-5">Check Our</h3>
					<h2 className="text-primary font-bold text-4xl italic">Menu</h2>
				</div>
			</section>
		</>
	);
};

export default HomeMenu;
