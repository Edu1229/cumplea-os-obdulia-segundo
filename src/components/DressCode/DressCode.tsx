// import React from "react";
import moño from "../../assets/img/moño.png";

const DressCode = () => {
	return (
		<div className="flex flex-col items-center my-12">
			<img src={moño} alt="Dress Code" className="w-16 mb-4" />
			<h4 className="font-serif uppercase tracking-wider text-[#725E50]">
				Código de vestimenta
			</h4>
			<p className="text-lg mt-1 text-[#725E50]">Sport-Elegante</p>
		</div>
	);
};

export default DressCode;
