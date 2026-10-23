# Add-ons

Cada carpeta es un add-on autocontenido. El proyecto cliente solo contiene los add-ons que usa; el resto vive en la base y se copia cuando hace falta.

## Instalar un add-on

1. Copia la carpeta desde la base a `src/addons/<nombre>/`.
2. Agrega la clave en `siteConfig.features` de `src/data/site.ts`, en la posición donde quieres que se renderice.
3. Edita los datos del add-on en `src/data/site.ts`.

`Addons.astro` lo detecta automáticamente. No hay que tocar `index.astro`.

## Desactivar o quitar

- Desactivar: `nombre: false`.
- Quitar: borra la carpeta y deja el flag en `false` o elimínalo.
- Recuperar: copia la carpeta desde la base y vuelve a poner el flag en `true`.

## Contrato

- El add-on es un componente Astro estático. No usa Vue ni JavaScript de cliente.
- Lee sus datos desde `src/data/site.ts`.
- Usa las variables CSS del tema (`--bg`, `--text`, `--accent`, `--muted`, etc.).
- No hardcodea colores, fuentes ni datos de la marca.
- El orden de las claves en `features` es el orden en que se renderizan.
