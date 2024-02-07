import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
	return (
		<>
			<Header />
			<Hero />
			<HomeMenu />
			<section className="text-center my-16">
				<SectionHeaders subHeader={"Our Story"} mainHeader={"About Us"} />
				<div className="text-gray-500 max-w-2xl mx-auto mt-4 flex flex-col gap-4">
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris accumsan elit at mi gravida blandit. Nulla sit amet ipsum vel magna lacinia pharetra. Phasellus nec faucibus libero. Vestibulum facilisis eleifend euismod. Sed interdum molestie placerat. Nulla vel orci ex. Proin ultricies vestibulum congue. Donec tincidunt felis justo, vitae mollis nisl posuere in. Vestibulum pellentesque justo vel tincidunt blandit. Vestibulum faucibus lobortis magna, vel varius tellus vehicula eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
				</div>
			</section>
			<section className="text-center my-8">
				<SectionHeaders subHeader={"Wanna Order?"} mainHeader={"Contact us"} />
				<div className="mt-8">
					<a href="https://gofood.link/a/KReL9jh" className="text-4xl text-gray-500 hover:underline hover:text-red-500 font-semibold">
						GoFood : Bakmi Online, Total Carwash
					</a>
				</div>
			</section>
			<footer className="border-t p-8 text-center text-gray-500 mt-16">&copy; 2024 All rights reserved</footer>
		</>
	);
}
