import {useEffect, useState} from "react";
import flecha from "../../assets/img/flecha.svg"; // Asegúrate de que la ruta sea correcta
// import {div} from "framer-motion/client";

const BirthdayCountdown = () => {
	const calculateTimeLeft = () => {
		const targetDate = new Date("2025-08-19T20:00:00"); // tu fecha y hora
		const now = new Date();
		const difference = targetDate.getTime() - now.getTime();

		let timeLeft = {
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 0,
		};

		if (difference > 0) {
			timeLeft = {
				days: Math.floor(difference / (1000 * 60 * 60 * 24)),
				hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
				minutes: Math.floor((difference / 1000 / 60) % 60),
				seconds: Math.floor((difference / 1000) % 60),
			};
		}
		return timeLeft;
	};

	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

	useEffect(() => {
		const timer = setInterval(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);

		return () => clearInterval(timer);
	}, []);

	return (
		<div className="flex flex-col items-center justify-center mt-12">
			<img
				className="mx-8 w-[300px] sm:w-[60%] md:w-[55%] lg:w-[50%]"
				src={flecha}
				alt=""
			/>
			<div className="flex items-center justify-center gap-4 text-brown-700 text-xl font-serif">
				<div className="flex flex-col items-center">
					<span className="text-3xl sm:text-4xl md:text-5xl text-[#7A695D] font-bold">
						{timeLeft.days}
					</span>
					<span className="text-xl md:text-2xl text-[color:#DBB1A7]">Días</span>
				</div>
				<div className="flex flex-col items-center">
					<span className="text-3xl sm:text-4xl md:text-5xl text-[#7A695D] font-bold">
						{timeLeft.hours}
					</span>
					<span className="text-xl md:text-2xl text-[color:#DBB1A7]">
						Horas
					</span>
				</div>
				<div className="flex flex-col items-center">
					<span className="text-3xl sm:text-4xl md:text-5xl text-[#7A695D] font-bold">
						{timeLeft.minutes}
					</span>
					<span className="text-xl md:text-2xl text-[color:#DBB1A7]">Min.</span>
				</div>
				<div className="flex flex-col items-center">
					<span className="text-3xl sm:text-4xl md:text-5xl text-[#7A695D] font-bold">
						{timeLeft.seconds}
					</span>
					<span className="text-xl md:text-2xl text-[color:#DBB1A7]">Seg.</span>
				</div>
			</div>
			<img
				className="mx-8 w-[300px] sm:w-[60%] md:w-[55%] lg:w-[50%]"
				src={flecha}
				alt=""
			/>
		</div>
	);
};

export default BirthdayCountdown;
