# Marketplace de audífonos

Demo de portafolio: catálogo estático, buscador con filtros y pedidos por WhatsApp.

## Estructura

```text
src/
├── addons/                 # add-ons autocontenidos (trust, faq, ...)
├── data/
│   └── site.ts             # marca, contacto, tema, features y datos
├── types/
│   └── index.ts            # tipos compartidos
├── components/
│   ├── Addons.astro        # conector de add-ons
│   ├── Header.astro
│   ├── Hero.astro
│   ├── Bento.astro
│   ├── ComoPedir.astro
│   ├── Footer.astro
│   ├── BotonWhatsApp.astro
│   └── Catalogo.vue        # island: chips, búsqueda, tarjetas
├── layouts/
│   └── Base.astro
├── pages/
│   ├── index.astro
│   ├── producto/[slug].astro
│   ├── como-esta-hecho.astro
│   └── 404.astro
└── styles/
    └── global.css
```

## Configuración

Crea un archivo `.env` en la raíz con el número de WhatsApp de pedidos:

```sh
PUBLIC_WHATSAPP_NUMBER=51999999999
```

Sin este número los botones de WhatsApp no abrirán conversación.

La marca, el contacto y el tema se definen en `src/data/site.ts`:

```ts
siteConfig = {
  name: '[MARCA]',
  contact: { phone, email, address, hours, instagram },
  theme: { background, text, accent, accentHover, card, placeholder, muted, fontBody, fontDisplay, fontsUrl },
  features: { trust: true, faq: true },
};
```

Cambiar esos valores es suficiente para personalizar un cliente. No hay que tocar componentes.

## Add-ons

Cada carpeta en `src/addons/` es un add-on autocontenido. Para instalarlo:

1. Copia la carpeta desde la base.
2. Agrega la clave en `siteConfig.features`, en la posición deseada.
3. Edita sus datos en `src/data/site.ts`.

`Addons.astro` lo detecta automáticamente. Ver `src/addons/README.md`.

## Comandos

```sh
pnpm install      # instalar dependencias
pnpm dev          # servidor de desarrollo
pnpm build        # build de producción en ./dist
pnpm preview      # previsualizar el build
```

## Notas

- Los productos son datos de relleno. Reemplázalos por modelos reales antes de mostrarlo a clientes.
- Las fotos son placeholders grises. Agrégalas en `src/assets/productos/` y actualiza los datos en `site.ts`.
- El catálogo es un island de Vue hidratado con `client:load` para leer los filtros de la URL.
