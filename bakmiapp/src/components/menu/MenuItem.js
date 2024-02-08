const MenuItem = () => {
	return (
		<>
			<div className="bg-gray-200 p-4 rounded-lg text-center hover:bg-white transition-all hover:shadow-md hover:shadow-black/25">
				<div className="text-center">
					<img src="/kategori-1.png" alt="bakmi" className="max-h-auto max-h-50 block mx-auto" />
				</div>
				<h4 className="font-semibold text-xl my-3">Bakmi</h4>
				<p className="text-gray-500 text-sm">Lorem ipsum bakmi sit amet</p>
				<button className="mt-4 bg-primary text-white rounded-full px-6 py-2 hover:bg-red-500 transition-all">Add to cart Rp.15.000,00</button>
			</div>
		</>
	);
};

export default MenuItem;
