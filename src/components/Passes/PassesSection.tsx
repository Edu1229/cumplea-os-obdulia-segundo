import React from "react";

const PassesSection: React.FC = () => {
	return (
		<section className="bg-[#725E50] text-white text-center py-12 px-6 relative section-wave-top section-wave-bottom">
			<h3 className="text-lg md:text-4xl font-dancing mb-2 ">
				Su presencia es el regalo más valioso que podemos recibir:
			</h3>
			<div className="flex justify-center items-center gap-4 mt-4">
				<div className="w-1/5 border-t border-white"></div>
				<span className="text-yellow-400 text-2xl">♥</span>
				<div className="w-1/5 border-t border-white"></div>
			</div>
		</section>
	);
};

export default PassesSection;
