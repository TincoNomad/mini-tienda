# Headphone Catalog with WhatsApp Orders

A single-brand catalog demo built with Astro and Vue. Visitors browse products,
filter by category, and start an order through WhatsApp. No cart, no checkout.

## What this is

This is a template for small businesses that want a fast, static catalog and
prefer to take orders over WhatsApp instead of running a full e-commerce stack.
It is intentionally simple: one landing page, product detail pages, and a
"how it's made" page.

## Stack

- [Astro](https://astro.build) — static site generator
- [Vue](https://vuejs.org) — interactive catalog island (`client:load`)
- CSS custom properties — theming without a CSS framework
- Google Fonts — DM Sans + Oleo Script Swash Caps

## Features

- Mobile-first landing page with a neon poster aesthetic
- Full-screen desktop hero with bento category grid
- Animated hummingbird and decorative flowers
- Catalog search, category chips, and URL-based filters
- 15 placeholder products across 5 categories
- Individual product pages with a pre-filled WhatsApp message
- Floating WhatsApp button that appears after leaving the hero
- Add-on system for optional sections (trust badges, FAQ, and future i18n)

## Project structure

```text
src/
├── addons/                 # Self-contained add-ons (trust, faq, ...)
│   ├── faq/
│   └── trust/
├── components/
│   ├── Addons.astro        # Add-on connector
│   ├── Header.astro
│   ├── Hero.astro
│   ├── Bento.astro
│   ├── Catalogo.vue        # Catalog island
│   ├── ComoPedir.astro
│   ├── Footer.astro
│   └── BotonWhatsApp.astro
├── data/
│   └── site.ts             # Brand, contact, theme, features, products
├── types/
│   └── index.ts            # Shared TypeScript types
├── layouts/
│   └── Base.astro
├── pages/
│   ├── index.astro
│   ├── producto/[slug].astro
│   ├── como-esta-hecho.astro
│   └── 404.astro
└── styles/
    └── global.css          # Neon styles, hero, bento, animations
```

## Configuration

Create a `.env` file at the root with the WhatsApp number used for orders:

```sh
PUBLIC_WHATSAPP_NUMBER=51999999999
```

Without this number, WhatsApp links fall back to `#` and will not open a chat.

Brand, contact, theme, feature flags, products, and FAQ items are all defined
in `src/data/site.ts`. In most cases, editing that file is enough to adapt the
template for a client without touching components.

```ts
siteConfig = {
  name: '[MARCA]',
  description: 'Compara modelos y pídelos por WhatsApp.',
  whatsappNumber: import.meta.env.PUBLIC_WHATSAPP_NUMBER ?? '',
  whatsappLabel: 'Hablar con un vendedor',
  contact: { phone, email, address, hours, instagram },
  theme: { background, text, accent, accentHover, card, placeholder, muted,
           fontBody, fontDisplay, fontsUrl },
  features: { trust: true, faq: true },
};
```

## Add-ons

Each folder under `src/addons/` is a self-contained add-on. To enable one:

1. Copy the add-on folder from the base template into the project.
2. Add the matching key in `siteConfig.features` in the order you want it to
   appear.
3. Edit its data in `src/data/site.ts` if it needs content.

`Addons.astro` detects and renders enabled add-ons automatically. Built-in
add-ons:

- `trust` — trust badges / selling points
- `faq` — frequently asked questions with a flower decoration

Future add-ons, such as i18n, follow the same folder-and-flag pattern.

## Commands

```sh
pnpm install      # install dependencies
pnpm dev          # start dev server
pnpm build        # production build in ./dist
pnpm preview      # preview the production build
```

## Deployment

`astro build` produces a static site in `./dist`. Deploy it to any static host:

- [Vercel](https://vercel.com)
- [Netlify](https://netlify.com)
- [Cloudflare Pages](https://pages.cloudflare.com)
- GitHub Pages

## Customization checklist for a new client

- [ ] Replace `[MARCA]` in `src/data/site.ts`
- [ ] Fill in contact details and Instagram handle
- [ ] Set `PUBLIC_WHATSAPP_NUMBER` in `.env`
- [ ] Replace placeholder products and categories in `site.ts`
- [ ] Add real product images to `public/images/productos/` and update paths
- [ ] Replace or remove decorative images in `public/images/hero/`
- [ ] Adjust theme colors if the client has a different brand
- [ ] Enable or disable add-ons via `features`

## License

This project is licensed under the **GNU Affero General Public License v3.0**.
See [LICENSE](./LICENSE).

Because this is a website that users interact with over a network, the AGPL
source-sharing requirements apply to any public deployment of a modified
version. If you need a commercial license, contact the author.

## Notes

- Products, prices, and specs are placeholder data. Replace them before showing
  the site to a client.
- Product images are gray placeholders. Add real images to
  `public/images/productos/` and reference them in `site.ts`.
- Decorative images (`headphones_hero.webp`, `flawer_decorator.webp`, hero bento
  images) should also be replaced with client-owned assets before delivery.
