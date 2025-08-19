import local from "../../assets/img/casa.png";

const EventLocations = () => {
	return (
		<div className="flex flex-col md:flex-row items-center justify-center gap-12 mt-12 pb-10">
			<div className="flex flex-col items-center">
				<div className="w-[90%] h-52 overflow-hidden rounded-3xl">
					<img
						src={local}
						alt="Recepción"
						className="object-cover w-full h-full bg-[#725E50]"
					/>
				</div>
				<h3 className="mt-4 font-serif uppercase tracking-wider text-[#725E50]">
					Recepción
				</h3>
				<p className="mt-2 text-[#725E50]">
					<span className="font-bold text-[#725E50]">8:00 PM</span>{" "}
					<span className="text-yellow-400">| </span>Casa Sra. Pilar
				</p>
				<a
					href="https://maps.app.goo.gl/jpgmPkdtDkMEXQFTA"
					target="_blank"
					className="mt-2 border px-4 py-1 rounded hover:bg-[#725E50] transition text-[#725E50] hover:text-white	"
				>
					Ver Ubicación
				</a>
			</div>
		</div>
	);
};

export default EventLocations;
