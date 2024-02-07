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
				<div className="text-gray-500 max-w-2xl mx-auto">
					<p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris accumsan elit at mi gravida blandit. Nulla sit amet ipsum vel magna lacinia pharetra. Phasellus nec faucibus libero. Vestibulum facilisis eleifend euismod. Sed interdum molestie placerat. Nulla vel orci ex. Proin ultricies vestibulum congue. Donec tincidunt felis justo, vitae mollis nisl posuere in. Vestibulum pellentesque justo vel tincidunt blandit. Vestibulum faucibus lobortis magna, vel varius tellus vehicula eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
				</div>
			</section>
		</>
	);
}
