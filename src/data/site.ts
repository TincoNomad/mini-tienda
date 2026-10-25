import type { Categoria, FaqItem, Producto, SiteConfig, TrustItem } from '../types';

export const siteConfig: SiteConfig = {
	name: '[MARCA]',
	description: 'Compara modelos y pídelos por WhatsApp.',
	whatsappNumber: import.meta.env.PUBLIC_WHATSAPP_NUMBER ?? '',
	whatsappLabel: 'Hablar con un vendedor',
	contact: {
		phone: '',
		email: '',
		address: '',
		hours: '',
		instagram: '',
	},
	theme: {
		background: '#F2EEE3',
		text: '#141414',
		accent: '#FF2E93',
		accentHover: '#B6FF00',
		card: '#FFFFFF',
		placeholder: '#D9D3C3',
		muted: '#4A4A4A',
		fontBody: "'DM Sans', system-ui, sans-serif",
		fontDisplay: "'Oleo Script Swash Caps', cursive",
		fontsUrl:
			'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Oleo+Script+Swash+Caps:wght@400;700&display=swap',
	},
	features: {
		trust: true,
		faq: true,
	},
};

export function waLink(message: string) {
	const numero = siteConfig.whatsappNumber;
	if (!numero) return '#';
	return `https://wa.me/${numero}?text=${encodeURIComponent(message)}`;
}

export const waMessages = {
	general: 'Hola, quiero información sobre audífonos.',
	vendedor: 'Hola, quiero hablar con un vendedor sobre audífonos.',
	producto: (nombre: string) => `Hola, quiero pedir el ${nombre}.`,
} as const;

export const categorias: Categoria[] = [
	{
		slug: 'inalambricos',
		nombre: 'Inalámbricos',
		color: '#FF2E93',
		modelos: 3,
	},
	{
		slug: 'gaming',
		nombre: 'Gaming',
		color: '#B6FF00',
		modelos: 3,
	},
	{
		slug: 'deportivos',
		nombre: 'Deportivos',
		color: '#FF7A00',
		modelos: 3,
	},
	{
		slug: 'economicos',
		nombre: 'Económicos',
		color: '#FFF200',
		modelos: 3,
	},
	{
		slug: 'estudio',
		nombre: 'Estudio',
		color: '#35B6FF',
		modelos: 3,
	},
];

export const productos: Producto[] = [
	{
		slug: 'modelo-a1-bluetooth',
		nombre: 'Modelo A1 Bluetooth',
		categoria: 'inalambricos',
		imagen: '/images/headphones/a1-bluetooth.webp',
		precio: 199,
		specs: ['Bluetooth 5.3', '30 horas de batería', 'Cancelación pasiva'],
	},
	{
		slug: 'modelo-a2-tws',
		nombre: 'Modelo A2 TWS',
		categoria: 'inalambricos',
		imagen: '/images/headphones/a2-tws.webp',
		precio: 249,
		specs: ['Emparejamiento automático', 'Estuche con carga', 'Resistente al sudor'],
	},
	{
		slug: 'modelo-a3-over-ear',
		nombre: 'Modelo A3 Over-ear',
		categoria: 'inalambricos',
		imagen: '/images/headphones/a3-over-ear.webp',
		precio: 299,
		specs: ['Control táctil', 'Micrófono integrado', 'Plegables'],
	},
	{
		slug: 'modelo-g1-rgb',
		nombre: 'Modelo G1 RGB',
		categoria: 'gaming',
		imagen: '/images/headphones/g1-rgb.webp',
		precio: 229,
		specs: ['Sonido 7.1 virtual', 'Micrófono flexible', 'Iluminación RGB'],
	},
	{
		slug: 'modelo-g2-wireless',
		nombre: 'Modelo G2 Wireless',
		categoria: 'gaming',
		imagen: '/images/headphones/g2-wireless.webp',
		precio: 279,
		specs: ['Baja latencia', '50 mm drivers', '12 horas de juego'],
	},
	{
		slug: 'modelo-g3-pro',
		nombre: 'Modelo G3 Pro',
		categoria: 'gaming',
		imagen: '/images/headphones/g3-pro.webp',
		precio: 349,
		specs: ['Conexión 2.4 GHz', 'Almohadillas de gel', 'Control de chat'],
	},
	{
		slug: 'modelo-d1-running',
		nombre: 'Modelo D1 Running',
		categoria: 'deportivos',
		imagen: '/images/headphones/d1-running.webp',
		precio: 149,
		specs: ['Ganchos de oreja', 'IPX5 resistente al agua', '8 horas de uso'],
	},
	{
		slug: 'modelo-d2-neckband',
		nombre: 'Modelo D2 Neckband',
		categoria: 'deportivos',
		imagen: '/images/headphones/d2-neckband.webp',
		precio: 129,
		specs: ['Cuello flexible', 'Imanes para guardar', 'Botón de deporte'],
	},
	{
		slug: 'modelo-d3-swim',
		nombre: 'Modelo D3 Swim',
		categoria: 'deportivos',
		imagen: '/images/headphones/d3-swim.webp',
		precio: 189,
		specs: ['IPX7 sumergible', 'Memoria interna 4 GB', 'Ajuste firme'],
	},
	{
		slug: 'modelo-s1-monitor',
		nombre: 'Modelo S1 Monitor',
		categoria: 'estudio',
		imagen: '/images/headphones/s1-monitor.webp',
		precio: 329,
		specs: ['Respuesta plana', 'Cable desmontable', 'Jack 3.5 mm'],
	},
	{
		slug: 'modelo-s2-closed-back',
		nombre: 'Modelo S2 Closed-back',
		categoria: 'estudio',
		imagen: '/images/headphones/s2-closed-back.webp',
		precio: 289,
		specs: ['Aislamiento externo', 'Diadema acolchada', 'Adaptador 6.3 mm'],
	},
	{
		slug: 'modelo-s3-reference',
		nombre: 'Modelo S3 Reference',
		categoria: 'estudio',
		imagen: '/images/headphones/s3-reference.webp',
		precio: 399,
		specs: ['Drivers 40 mm', 'Fabricación ligera', 'Cable de 3 m'],
	},
	{
		slug: 'modelo-e1-basic',
		nombre: 'Modelo E1 Basic',
		categoria: 'economicos',
		imagen: '/images/headphones/e1-basic.webp',
		precio: 79,
		specs: ['Cable 1.2 m', 'Control de volumen', 'Compatible con celular'],
	},
	{
		slug: 'modelo-e2-stereo',
		nombre: 'Modelo E2 Stereo',
		categoria: 'economicos',
		imagen: '/images/headphones/e2-stereo.webp',
		precio: 99,
		specs: ['Diadema ajustable', 'Sonido estéreo', 'Micrófono integrado'],
	},
	{
		slug: 'modelo-e3-on-ear',
		nombre: 'Modelo E3 On-ear',
		categoria: 'economicos',
		imagen: '/images/headphones/e3-on-ear.webp',
		precio: 119,
		specs: ['Ligeros', 'Conector universal', 'Diseño plegable'],
	},
];

export const trustItems: TrustItem[] = [
	{
		icon: '🛡️',
		title: 'Garantía incluida',
		description: 'Todos los modelos tienen garantía. Consulta la cobertura por WhatsApp.',
	},
	{
		icon: '📦',
		title: 'Envíos a todo el Perú',
		description: 'Entrega en 24 a 72 horas según tu ciudad. El costo se confirma por WhatsApp.',
	},
	{
		icon: '💳',
		title: 'Pago fácil',
		description: 'Yape, Plin, transferencia bancaria o pago contra entrega.',
	},
	{
		icon: '↩️',
		title: 'Cambios sin vueltas',
		description: 'Tienes 7 días para solicitar un cambio si el producto está sin uso.',
	},
];

export const faqs: FaqItem[] = [
	{
		question: '¿Cómo hago un pedido?',
		answer:
			'Elige el modelo, entra a su ficha y toca Pedir por WhatsApp. El mensaje se abre con el producto ya escrito.',
	},
	{
		question: '¿Hacen envíos a todo el país?',
		answer:
			'Sí, enviamos a todo el Perú. El costo y el tiempo se confirman por WhatsApp según tu ciudad.',
	},
	{
		question: '¿Qué formas de pago aceptan?',
		answer:
			'Yape, Plin, transferencia bancaria y pago contra entrega en las zonas disponibles.',
	},
	{
		question: '¿Los productos tienen garantía?',
		answer:
			'Sí. La cobertura y el plazo se detallan en la ficha de cada modelo antes de comprar.',
	},
	{
		question: '¿Puedo cambiar o devolver un producto?',
		answer:
			'Sí. Tienes 7 días para solicitar un cambio si el producto está sin uso y en su empaque original.',
	},
];
