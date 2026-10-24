export interface Contact {
	phone?: string;
	email?: string;
	address?: string;
	hours?: string;
	instagram?: string;
}

export interface Theme {
	background: string;
	text: string;
	accent: string;
	accentHover: string;
	card: string;
	placeholder: string;
	muted: string;
	fontBody: string;
	fontDisplay: string;
	fontsUrl: string;
}

export interface SiteConfig {
	name: string;
	description: string;
	whatsappNumber: string;
	whatsappLabel: string;
	contact: Contact;
	theme: Theme;
	features: Record<string, boolean>;
}

export interface Categoria {
	slug: string;
	nombre: string;
	color: string;
	modelos: number;
}

export interface Producto {
	slug: string;
	nombre: string;
	categoria: string;
	precio: number;
	specs: string[];
}

export interface TrustItem {
	icon: string;
	title: string;
	description: string;
}

export interface FaqItem {
	question: string;
	answer: string;
}
