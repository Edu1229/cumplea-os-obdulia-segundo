const ParentsSection: React.FC = () => {
	return (
		<section className="text-center py-12 px-6 text-[#725E50] ">
			<h3 className="uppercase font-serif text-md tracking-wider mb-10">
				Con la bendición de Dios y de nuestros padres
			</h3>
			<div className="flex flex-col md:flex-row justify-center gap-16 text-sm md:text-lg">
				<div>
					<p className="uppercase font-semibold mb-2">Padres del Novio</p>
					<p>José Pacherrez Herrera</p>
					<p>Obdulia María Mendoza Agurto</p>
				</div>
				<div>
					<p className="uppercase font-semibold mb-2">Padres de la Novia</p>
					<p>Isidro Tocto Rivera</p>
					<p>Ana Isabel Brenis Coronel</p>
				</div>
			</div>
		</section>
	);
};
export default ParentsSection;
