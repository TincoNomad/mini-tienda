export const WA_DEMO_KEY = 'wa-demo-num';

const MIN_DIGITS = 8;
const MAX_DIGITS = 15;

export function sanitizarNumero(raw: string): string {
	const limpio = raw.replace(/\D/g, '');
	if (limpio.length < MIN_DIGITS || limpio.length > MAX_DIGITS) return '';
	return limpio;
}

export function buildWaHref(numero: string, mensaje: string): string {
	return `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
}
