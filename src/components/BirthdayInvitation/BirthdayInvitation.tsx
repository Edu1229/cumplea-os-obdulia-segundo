import React from "react";
import people from "../../assets/img/obdulia-segundo.png";

const BirthdayInvitation: React.FC = () => {
	return (
		<div className="w-full flex flex-col md:flex-row min-h-screen">
			{/* Definición del SVG clip-path */}
			<svg className="absolute w-0 h-0">
				<defs>
					<clipPath id="curve" clipPathUnits="objectBoundingBox">
						<path d="M 0,0 L 0,1 L 0.95,1 C 0.70,0.50 1.20,0.50 0.90,0 Z" />
					</clipPath>
				</defs>
			</svg>

			{/* Columna de la Imagen */}
			<div className="w-full md:w-1/2 order-1 md:order-none relative">
				{/* Mobile: imagen normal */}
				<div className="block md:hidden">
					<img
						src={people}
						alt="Obdulia y Segundo"
						className="w-full h-auto max-h-[40vh] object-contain"
					/>
				</div>

				{/* Desktop: imagen con curva */}
				<div
					className="hidden md:block w-full h-full bg-center bg-cover z-50"
					style={{
						backgroundImage: `url(${people})`,
						clipPath: "url(#curve)",
						backgroundPosition: "50% center",
						backgroundSize: "cover",
					}}
				/>
			</div>

			{/* Columna del Contenido */}
			<div className="w-full md:w-1/2 flex flex-col justify-center items-center pt-16 pb-6 px-8 lg:p-2 sm:p-12 relative">
				<div className="text-center max-w-[100%]">
					<div className="w-full lg:w-[85%] flex flex-col items-center">
						{/* Nombres */}
						<h1 className="font-marck-script text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-amber-800">
							Obdulia Mendoza
						</h1>
						<span className="font-marck-script text-5xl sm:text-6xl xl:text-7xl text-[#A16F1F] font-extralight block">
							y
						</span>
						<h1 className="font-marck-script text-5xl sm:text-6xl lg:text-7xl xl:text-8xl my-8 text-amber-800">
							Segundo Mendoza
						</h1>
					</div>

					<div className="w-full lg:w-[85%] flex flex-col items-center">
						{/* Subtítulo */}
						<p className="font-radley mt-6 text-lg sm:text-xl tracking-[0.2em] uppercase text-stone-600 font-medium">
							¡Celebran su cumpleaños!
						</p>

						{/* Mensaje */}
						<p className="font-radley mt-6 text-stone-500 leading-relaxed text-base sm:text-2xl">
							Nos llena de alegría compartir este día especial contigo.
							Acompáñanos a celebrar un nuevo año de vida y agradezcamos juntos
							por todas las bendiciones. ¡Será un momento para disfrutar en
							familia y con amigos!
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BirthdayInvitation;
