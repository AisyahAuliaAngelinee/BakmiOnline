import Image from "next/image";

const HomeMenu = () => {
	return (
		<>
			<section className="">
				<div className="absolute right-0 left-0">
					<div className="h-48 w-48 left-0 absolute">
						<Image src={"/kategori-1.png"} layout={"fill"} objectFit={"contain"} alt={"kategori-1"} />
					</div>
					<div className="h-48 w-48 right-0 absolute">
						<Image src={"/kategori-2.png"} layout={"fill"} objectFit={"contain"} alt={"kategori-2"} />
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
