const MenuItem = () => {
	return (
		<>
			<div className="bg-gray-200 p-4 rounded-lg text-center hover:bg-white transition-all hover:shadow-2xl hover:shadow-black/50">
				<img src="/kategori-1.png" alt="bakmi" />
				<h4 className="font-semibold text-xl my-3">Bakmi</h4>
				<p className="text-gray-500 text-sm">Lorem ipsum bakmi sit amet</p>
				<button className="mt-4 bg-primary text-white rounded-full px-8 py-2 hover:bg-red-500 transition-all">Add to cart Rp.15.000,00</button>
			</div>
		</>
	);
};

export default MenuItem;
