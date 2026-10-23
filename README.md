# Marketplace de audífonos

Demo de portafolio: catálogo estático, buscador con filtros y pedidos por WhatsApp.

## Estructura

```text
src/
├── data/
│   ├── productos.json       # 15 productos de relleno
│   └── categorias.json      # 5 categorías del bento
├── components/
│   ├── Header.astro
│   ├── Hero.astro
│   ├── Bento.astro
│   ├── ComoPedir.astro
│   ├── Footer.astro
│   ├── BotonWhatsApp.astro
│   └── Catalogo.vue         # island: chips, búsqueda, tarjetas
├── layouts/
│   └── Base.astro
├── lib/
│   └── whatsapp.ts          # arma enlaces wa.me
├── pages/
│   ├── index.astro
│   ├── producto/[slug].astro
│   ├── como-esta-hecho.astro
│   └── 404.astro
├── styles/
│   └── global.css
└── types.ts
```

## Configuración

Crea un archivo `.env` en la raíz con el número de WhatsApp de pedidos:

```sh
PUBLIC_WHATSAPP_NUMBER=51999999999
```

Sin este número los botones de WhatsApp no abrirán conversación.

## Comandos

```sh
pnpm install      # instalar dependencias
pnpm dev          # servidor de desarrollo
pnpm build        # build de producción en ./dist
pnpm preview      # previsualizar el build
```

## Notas

- Los productos son datos de relleno. Reemplázalos por modelos reales antes de mostrarlo a clientes.
- Las fotos son placeholders grises. Agrégalas en `src/assets/productos/` y actualiza los JSON.
- El catálogo es un island de Vue hidratado con `client:load` para leer los filtros de la URL.
