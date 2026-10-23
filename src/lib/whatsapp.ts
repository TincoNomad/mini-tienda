export function armarWhatsApp(mensaje: string) {
	const numero = import.meta.env.PUBLIC_WHATSAPP_NUMBER;
	if (!numero) return '#';

	const texto = encodeURIComponent(mensaje);
	return `https://wa.me/${numero}?text=${texto}`;
}
