import React from "react";

const NoKids: React.FC = () => {
	return (
		<div className="text-center mt-8 mb-12 flex flex-col items-center justify-center space-y-4 px-6">
			<img
				src="https://img.icons8.com/ios/100/no-kids.png"
				alt="No niños"
				className="w-16 h-16 opacity-70"
			/>
			<p className="max-w-md text-[#7A695D] text-lg">
				Amamos a sus niños y queremos que ustedes disfruten y bailen sin parar,
				es por ello que la invitación es solo para adultos.
			</p>
		</div>
	);
};

export default NoKids;
