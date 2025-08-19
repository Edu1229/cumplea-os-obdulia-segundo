import React, {useMemo, useState} from "react";

interface Props {
	onClose: () => void;
}

/** CONFIG */
const WEB_APP_URL =
	"https://script.google.com/macros/s/AKfycbxBZkDcIuI3CCowkJCrgfEDaVDvYnhl_HSyskdp2hz0KN18JawGhfxXJws2QGNDHC3J/exec";
const TOKEN = "rsvp-secreto-123";

const AttendanceModal: React.FC<Props> = ({onClose}) => {
	const [nombre, setNombre] = useState("");
	const [celular, setCelular] = useState(""); // guardamos solo dígitos
	const [asistencia, setAsistencia] = useState("");
	const [mensaje, setMensaje] = useState("");
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);
	const [errorMsg, setErrorMsg] = useState("");

	// Honeypot anti-spam
	const [company, setCompany] = useState("");

	// === Validaciones ===
	const isPhoneValid = useMemo(() => /^9\d{8}$/.test(celular), [celular]); // Perú: 9 dígitos y comienza en 9
	const isFormValid = useMemo(
		() => nombre.trim().length >= 3 && isPhoneValid && !!asistencia,
		[nombre, isPhoneValid, asistencia]
	);

	const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		// Solo dígitos y máx 9
		const digits = e.target.value.replace(/\D/g, "").slice(0, 9);
		setCelular(digits);
	};

	const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		// Normaliza espacios
		setNombre(e.target.value.replace(/\s+/g, " "));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (loading) return;
		if (company.trim()) return; // honeypot
		if (!isFormValid) {
			setErrorMsg(
				"Revisa los campos: celular debe tener 9 dígitos y empezar en 9."
			);
			return;
		}

		setLoading(true);
		setErrorMsg("");

		try {
			const body = new URLSearchParams({
				Nombre: nombre.trim(),
				Celular: celular, // solo dígitos
				Asistencia: asistencia,
				Mensaje: mensaje.trim(),
				token: TOKEN,
			});

			const res = await fetch(WEB_APP_URL, {
				method: "POST",
				headers: {
					"Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
				},
				body: body.toString(),
			});

			let data;
			try {
				data = await res.json();
			} catch {
				throw new Error(
					"Respuesta inválida del servidor. No se pudo parsear JSON."
				);
			}
			if (!res.ok || data?.ok === false) {
				throw new Error(data?.error || "No se pudo guardar la respuesta");
			}

			setSuccess(true);
			setNombre("");
			setCelular("");
			setAsistencia("");
			setMensaje("");
		} catch (err) {
			console.error("Error al enviar:", err);
			if (err instanceof Error) {
				setErrorMsg(
					err.message === "Failed to fetch"
						? "No se pudo conectar. Verifica tu URL /exec y permisos del Web App."
						: err.message || "Ocurrió un error al guardar."
				);
			} else {
				setErrorMsg("Ocurrió un error al guardar.");
			}
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50 p-4">
			<div className="bg-white rounded-2xl w-full max-w-lg text-[#7A695D] shadow-2xl">
				{success ? (
					<div className="p-8 text-center space-y-5">
						<div className="text-4xl">🥂</div>
						<h3 className="text-xl">¡Gracias por confirmar!</h3>
						<button
							onClick={onClose}
							className="btn btn-primary rounded-full bg-[#AE7E68] border-[#AE7E68] text-white"
						>
							Cerrar
						</button>
					</div>
				) : (
					<form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
						<div className="flex w-full justify-between ">
							<h2 className="text-3xl font-playfair space-y-5">
								Confirmar Asistencia
							</h2>
							<button
								type="button"
								onClick={onClose}
								className="btn btn-ghost btn-sm text-2xl leading-none"
								aria-label="Cerrar"
							>
								×
							</button>
						</div>

						{/* Honeypot oculto */}
						<input
							type="text"
							name="company"
							value={company}
							onChange={(e) => setCompany(e.target.value)}
							className="hidden"
							tabIndex={-1}
							autoComplete="off"
						/>

						<div className="flex flex-col gap-2 form-control ">
							<label className="label">
								<span className="label-text">Nombre completo</span>
							</label>
							<input
								type="text"
								placeholder="Ej. Juan Pérez"
								className="input input-bordered px-4 w-full h-10 rounded-md border-[#7A695D]/80 focus:border-[#AE7E68]"
								value={nombre}
								onChange={handleNameChange}
								required
							/>
						</div>

						<div className="flex flex-col gap-2 form-control">
							<label className="label">
								<span className="label-text">Celular (Perú)</span>
							</label>
							<input
								type="tel"
								inputMode="numeric"
								placeholder="9XXXXXXXX"
								maxLength={9}
								className={`input input-bordered px-4 w-full h-10 rounded-md border-[#7A695D]/50 focus:border-[#AE7E68] ${
									celular && !isPhoneValid ? "input-error" : ""
								}`}
								value={celular}
								onChange={handlePhoneChange}
								autoComplete="tel"
								required
								aria-invalid={celular ? !isPhoneValid : undefined}
							/>
							{celular && !isPhoneValid && (
								<span className="text-error text-xs mt-1">
									Ingresa un celular válido de 9 dígitos que comience en 9.
								</span>
							)}
						</div>

						<div className="flex flex-col gap-2 form-control">
							<label className="label">
								<span className="label-text">¿Confirmas tu asistencia?</span>
							</label>
							<div className="w-full mx-auto">
								<select
									className="select select-bordered w-full h-10 rounded-md border-[#7A695D]/50 focus:border-[#AE7E68] text-sm"
									value={asistencia}
									onChange={(e) => setAsistencia(e.target.value)}
									required
								>
									<option value="">Selecciona una opción</option>
									<option value="Sí confirmo asistencia">
										Sí confirmo asistencia
									</option>
									<option value="No puedo asistir">No puedo asistir</option>
								</select>
							</div>
						</div>

						<div className="flex flex-col gap-2 form-control">
							<label className="label">
								<span className="label-text">Mensaje para los novios</span>
							</label>
							<textarea
								placeholder="Tu mensaje"
								className="textarea textarea-bordered px-4 py-2 w-full rounded-md border-[#7A695D]/50 focus:border-[#AE7E68] min-h-24"
								value={mensaje}
								onChange={(e) => setMensaje(e.target.value)}
							/>
						</div>

						{errorMsg && <div className="text-error text-sm">{errorMsg}</div>}

						<button
							type="submit"
							className="btn btn-primary h-12 w-full rounded-full bg-[#AE7E68] border-[#AE7E68] text-white hover:brightness-110 disabled:opacity-60"
							disabled={loading || !isFormValid}
						>
							{loading && <span className="loading loading-spinner mr-2" />}
							{loading ? "Enviando..." : "Enviar"}
						</button>
					</form>
				)}
			</div>
		</div>
	);
};

export default AttendanceModal;
