# mario-pereyra.github.io

Página personal de Mario Alberto Pereyra Justiniano, desarrollador y estudiante de Ingeniería de Sistemas. Se publica con GitHub Pages en <https://mario-pereyra.github.io>.

## Stack

- **Astro 7 con TypeScript estricto.** La salida es estática y no usa frameworks de cliente: el único JavaScript cambia el tema y arma el correo.
- **Proyectos como colección de contenido:** archivos Markdown en `src/content/proyectos/`, validados con Zod.
- **Sitemap** con `@astrojs/sitemap`.
- **Despliegue** con GitHub Actions (`withastro/action`) en cada push a `main`.

## Comandos

Requiere Node 22.12 o superior.

| Comando | Qué hace |
| --- | --- |
| `npm install` | Instala las dependencias |
| `npm run dev` | Servidor de desarrollo en `http://localhost:4321` |
| `npm run build` | Genera el sitio en `dist/` |
| `npm run preview` | Sirve `dist/` para revisarlo |
| `npm run check` | Revisa tipos y errores de Astro |
| `npm run imagenes` | Regenera los íconos y la imagen para compartir en `public/` |

## Estructura

| Ruta | Contenido |
| --- | --- |
| `src/data/perfil.ts` | Presentación, experiencia, formación, habilidades y enlaces |
| `src/content/proyectos/` | Un archivo por proyecto: los datos van en el frontmatter y el caso de estudio en el cuerpo |
| `src/content.config.ts` | Esquema de los proyectos |
| `src/pages/` | Inicio, página de cada proyecto y 404 |
| `src/layouts/Base.astro` | `<head>` con SEO, Open Graph, JSON-LD y tema |
| `src/styles/global.css` | Tokens de color de los dos temas y estilos |
| `scripts/generar-imagenes.mjs` | Genera los íconos y `og.png` |
| `public/cv/` | CV en PDF, sin teléfono. Se genera fuera de este repo, en el espacio de trabajo privado (`marca-personal/cv/`) |

## Agregar un proyecto

1. Crea `src/content/proyectos/<slug>.md` con los campos que define `src/content.config.ts`.
2. Con `destacado: true` aparece como tarjeta; sin eso, va en «Otros proyectos».
3. En un proyecto de equipo, completa `equipo` y pon en `aporte` solo la parte propia.

## Publicar por primera vez

1. Crea el repo público `mario-pereyra/mario-pereyra.github.io`. GitHub exige el nombre en minúsculas.
2. Sube el código a `main`, incluido `package-lock.json`: la acción lo usa para detectar el gestor de paquetes.
3. En Settings → Pages → Source, elige «GitHub Actions».
