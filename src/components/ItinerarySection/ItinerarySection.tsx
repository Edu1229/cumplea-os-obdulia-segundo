import React from "react";
import pareja from "../../assets/img/pareja_3.png";

const ItinerarySection: React.FC = () => {
	return (
		<section className="pb-16 font-serif text-gray-800">
			{/* Nosotros */}
			<h2 className="text-center text-4xl mt-24 mb-12 font-cursive text-[#AE7E68]">
				Nosotros
			</h2>
			<div className="flex justify-center">
				<div className="relative mr-6 w-80 origin-bottom-right rotate-3 shadow-lg">
					<img
						src={pareja}
						alt="Pareja"
						className="w-full h-auto object-cover rounded"
					/>
				</div>
			</div>
		</section>
	);
};

export default ItinerarySection;
