import Image from "next/image";

const HomeMenu = () => {
	return (
		<>
			<section className="">
				<div className="absolute h-full right-0 left-0 w-full justify-start">
					<div className="absolute left-0 -top-[70px] text-left -z-10">
						<Image src={"/sallad1.png"} width={109} height={189} alt={"salad-1"} />
					</div>
					<div className="absolute right-0 -top-[100px] -z-10">
						<Image src={"/sallad2.png"} width={107} height={195} alt={"salad-2"} />
					</div>
				</div>
				<div className="text-center">
					<h3 className="uppercase text-gray-600 font-semibold leading-5">Check Our</h3>
					<h2 className="text-primary font-bold text-4xl italic">Menu</h2>
				</div>
				<div className="grid grid-cols-3 gap-4">
					<div className="bg-gray-300 p-4 rounded-lg text-center">
						<img src="" alt="bakmi" />
						<h4 className="font-semibold my-2">Bakmi</h4>
						<p className="text-gray-500 text-sm">Lorem ipsum bakmi sit amet</p>
						<button className="bg-primary text-white rounded-full px-4 py-2 hover:bg-green-800">Add to cart Rp.15.000,00</button>
					</div>
				</div>
			</section>
		</>
	);
};

export default HomeMenu;
