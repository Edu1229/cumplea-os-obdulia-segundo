import React, {useState, useRef} from "react";
import EventLocations from "../../components/EventLocations/EventLocations";
import MusicControl from "../../components/MusicControl/MusicControl";
import PassesSection from "../../components/Passes/PassesSection";
import OverlayInicial from "../OverlayInicial/OverlayInicial";
import BirthdayInvitation from "../../components/BirthdayInvitation/BirthdayInvitation";
import BirthdayCountdown from "../../components/BirthdayCountdown/BirthdayCountdown";
import BirthdayDate from "../../components/BirthdayDate/BirthdayDate";

const WeddingPage: React.FC = () => {
	const [showOverlay, setShowOverlay] = useState(true);
	const audioRef = useRef<HTMLAudioElement>(null!);

	const handleEnter = () => {
		if (audioRef.current) {
			audioRef.current.currentTime = 0;
			audioRef.current.play().catch(() => {
				console.log("El navegador bloqueó el autoplay incluso con click.");
			});
		}
		setShowOverlay(false);
	};

	return (
		<>
			{/* Audio global controlado por MusicControl */}
			<audio ref={audioRef} src="/music.mp3" loop preload="auto" />

			{showOverlay ? (
				<OverlayInicial onEnter={handleEnter} audioRef={audioRef} />
			) : (
				<div className="bg-[#F7EDFF]">
					<BirthdayInvitation />
					<PassesSection />
					<BirthdayDate />
					<BirthdayCountdown />
					<EventLocations />
					<MusicControl audioRef={audioRef} />
				</div>
			)}
		</>
	);
};

export default WeddingPage;
