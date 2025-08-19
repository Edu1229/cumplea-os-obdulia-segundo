import React from "react";
import type {RefObject} from "react";
import globo from "../../assets/img/globo.png";
import {motion} from "framer-motion";

interface Props {
	onEnter: () => void;
	audioRef: RefObject<HTMLAudioElement>;
}

const OverlayInicial: React.FC<Props> = ({onEnter, audioRef}) => {
	const handleClick = () => {
		if (audioRef.current) {
			audioRef.current.currentTime = 0;
			audioRef.current.play().catch(() => {
				console.log("El navegador bloqueó el autoplay aunque hubo click.");
			});
		}
		onEnter();
	};

	return (
		<div className="fixed inset-0 bg-white grid place-items-center z-[100]">
			<div
				className="relative w-[100vw] max-w-[1440px]
          h-[100svh] sm:h-[100svh]
          bg-white rounded-2xl shadow-2xl overflow-hidden"
			>
				{/* Globo superior */}
				<motion.img
					src={globo}
					alt=""
					aria-hidden="true"
					initial={{y: -10, opacity: 0}}
					animate={{y: 0, opacity: 1}}
					transition={{duration: 0.8}}
					className="
            pointer-events-none select-none
            absolute left-[40%] sm:left-[40%] -translate-x-1/2
            top-[0vh] sm:top-[-8vh] lg:top-[-12vh] xl:top-[-2vh]
            w-[120%] sm:w-[110%] md:w-[80%] lg:w-[90%] max-w-[900px] h-auto
          "
				/>
				{/* Contenido */}
				<div
					className="
           relative z-10 h-full w-full
            flex flex-col items-center justify-center
            px-4 sm:px-6
          "
				>
					<div
						className="
              bg-white/65 backdrop-blur-[2px]
              rounded-2xl shadow-[0_12px_28px_-12px_rgba(0,0,0,0.25)]
              px-4 py-3 sm:px-6 sm:py-4
              text-center
            "
					>
						<motion.h1
							initial={{opacity: 0, y: -10}}
							animate={{opacity: 1, y: 0}}
							transition={{duration: 0.7}}
							className="
                font-playfair text-[#7A695D]
                leading-tight
                text-[clamp(28px,6vw,48px)]
              "
						>
							Nuestro Cumpleaños
						</motion.h1>

						<motion.h2
							initial={{opacity: 0, y: 10}}
							animate={{opacity: 1, y: 0}}
							transition={{duration: 0.7, delay: 0.1}}
							className="
                font-marck-script text-[#F54927]
                mt-1
                text-[clamp(22px,4.2vw,40px)]
              "
						>
							Obdulia &amp; Segundo
						</motion.h2>
					</div>

					<motion.button
						whileHover={{scale: 1.06}}
						whileTap={{scale: 0.96}}
						onClick={handleClick}
						className="
              mt-4 sm:mt-5
              bg-[#AE7E68] hover:bg-[#7A695D]
              text-white px-6 py-3 md:px-8 md:py-3
              rounded-full font-semibold shadow-md
              transition-colors duration-300
            "
					>
						Abrir Invitación
					</motion.button>
				</div>
			</div>
		</div>
	);
};

export default OverlayInicial;
