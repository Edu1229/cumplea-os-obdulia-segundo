import React from "react";

const BirthdayDate: React.FC = () => {
	return (
		<div className="flex items-center justify-center gap-6 my-10">
			{/* Línea + Sábado */}
			<div className="flex flex-col items-center text-center gap-1 md:gap-2 ">
				<div className="w-20 md:w-40 xl:w-52 2xl:w-56 h-0.5 sm:h-1 bg-[color:#DBB1A7]"></div>
				<span className="text-xl md:text-4xl xl:text-5xl 2xl:text-6xl font-serif text-[#7A695D]">
					Martes
				</span>
				<div className="w-20 md:w-40 xl:w-52 2xl:w-56 h-0.5 sm:h-1 bg-[color:#DBB1A7]"></div>
			</div>

			{/* Círculo vertical */}
			<div
				className="flex flex-col w-24 sm:w-28 md:w-32 lg:w-36 xl:w-40 2xl:w-52 h-24 sm:h-28 md:h-32 lg:h-36 xl:h-40 2xl:h-52 items-center justify-center
			 border-3 border-[#7A695D] rounded-full md:px-6 py-5 md:py-4 "
			>
				<span className="text-md xl:text-2xl 2xl:text-3xl font-playfair text-[#7A695D]">
					LOVE
				</span>
				<span className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl leading-9 sm:leading-10 md:leading-11 xl:leading-16 2xl:leading-20 mb-0.5 sm:mb-2 md:mb-3 2xl:mb-4 font-playfair text-[#7A695D]">
					19
				</span>
				<span className="text-sm xl:text-xl 2xl:text-2xl font-playfair text-rose-300">
					2025
				</span>
			</div>

			{/* Línea + Sept */}
			<div className="flex flex-col items-center justify-center text-center gap-1 md:gap-2">
				<div className="w-20  md:w-40 xl:w-52 2xl:w-56 h-0.5 sm:h-1 bg-[color:#DBB1A7]"></div>
				<span className="text-xl md:text-4xl xl:text-5xl 2xl:text-6xl font-serif text-[#7A695D]">
					AGOSTO
				</span>
				<div className="w-20 md:w-40 xl:w-52 2xl:w-56 h-0.5 sm:h-1 bg-[color:#DBB1A7]"></div>
			</div>
		</div>
	);
};

export default BirthdayDate;
