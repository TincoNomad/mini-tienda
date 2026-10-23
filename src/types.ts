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
