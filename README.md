# mario-pereyra.github.io

Página personal de Mario Alberto Pereyra Justiniano, desarrollador y estudiante de Ingeniería de Sistemas. Se publica con GitHub Pages en <https://mario-pereyra.github.io>.

El diseño es una terminal con la paleta gruvbox, en tema claro y oscuro: cada sección es un «archivo» que se abre con un comando y la barra de estado de abajo imita la de vim.

## Stack

- **Astro 7 con TypeScript estricto.** La salida es estática y no usa frameworks de cliente: el JavaScript son scripts chicos por componente.
- **Proyectos como colección de contenido:** archivos Markdown en `src/content/proyectos/`, validados con Zod. Las capturas pasan por `astro:assets` y salen en WebP.
- **Fuentes Geist y Geist Mono** servidas desde el propio sitio.
- **Sitemap** con `@astrojs/sitemap`.
- **Despliegue** con GitHub Actions (`withastro/action`) en cada push a `main`.

## Lo interactivo

- **Retrato de puntos** (`Retrato.astro`): un canvas dibuja la foto como semitono hexagonal y los puntos se apartan del cursor o del dedo. Se pausa fuera de pantalla, queda quieto con «reducir movimiento» y sin JavaScript se ve la foto.
- **Paleta de comandos** (`Paleta.astro`): se abre con Ctrl/⌘ + K o `:`. Lleva a las secciones y a los proyectos, descarga el CV, copia el correo y cambia el tema. Sigue el patrón combobox de WAI-ARIA.
- **Barra de estado** (`Estado.astro`): muestra la sección que se está leyendo, el avance de la página y la hora de Santa Cruz.
- **Transiciones entre páginas:** el título de cada tarjeta viaja hasta la página del proyecto con View Transitions; el cambio de tema se abre en círculo desde el botón.
- **Filtros de proyectos**, cifras que se cuentan al aparecer y secciones que entran con animaciones ligadas al scroll. Todo respeta `prefers-reduced-motion`.

## Comandos

Requiere Node 22.12 o superior.

| Comando | Qué hace |
| --- | --- |
| `npm install` | Instala las dependencias |
| `npm run dev` | Servidor de desarrollo en `http://localhost:4321` |
| `npm run build` | Genera el sitio en `dist/` |
| `npm run preview` | Sirve `dist/` para revisarlo |
| `npm run check` | Revisa tipos y errores de Astro |
| `npm run semitono` | Convierte la foto en la grilla de puntos de `src/data/semitono.ts` |
| `npm run imagenes` | Regenera el favicon y la imagen para compartir (`og.png`) en `public/` |

Si cambias la foto, corre primero `npm run semitono` y después `npm run imagenes`: la imagen para compartir usa la misma grilla.

## Estructura

| Ruta | Contenido |
| --- | --- |
| `src/data/perfil.ts` | Presentación, sobre mí, experiencia con cifras, formación, idiomas y enlaces |
| `src/data/stack.ts` | Tecnologías por área con su nivel, y el ícono de cada una |
| `src/data/semitono.ts` | Grilla del retrato. Se genera; no se edita a mano |
| `src/content/proyectos/` | Un archivo por proyecto: los datos van en el frontmatter y el contexto en el cuerpo |
| `src/content.config.ts` | Esquema de los proyectos |
| `src/pages/` | Inicio, página de cada proyecto y 404 |
| `src/layouts/Base.astro` | `<head>` con SEO, Open Graph, JSON-LD y tema; arma el correo |
| `src/components/` | Cabecera, barra de estado, paleta, retrato, tarjetas, íconos |
| `src/scripts/acciones.ts` | Cambiar tema, copiar el correo y avisos |
| `src/styles/global.css` | Tokens de color de los dos temas y estilos compartidos |
| `src/assets/` | Foto y capturas de los proyectos |
| `public/iconos/` | Íconos del stack en versión clara y oscura (de [skill-icons](https://github.com/tandpfun/skill-icons), con su licencia) |
| `public/fuentes/` | Geist y Geist Mono en woff2 |
| `public/cv/` | CV en PDF, sin teléfono. Se genera fuera de este repo, en el espacio de trabajo privado (`marca-personal/cv/`) |

## Agregar un proyecto

1. Crea `src/content/proyectos/<slug>.md` con los campos que define `src/content.config.ts`. `orden` decide la posición en la grilla.
2. En un proyecto de equipo, completa `equipo` y pon en `aporte` solo la parte propia.
3. Si hay demo, agrega una captura de celular en `src/assets/proyectos/` y apúntala con `captura` y `capturaAlt`. Sin captura, la tarjeta muestra los íconos del stack.
4. Si una tecnología del stack no tiene ícono, agrégala en `iconoDe` de `src/data/stack.ts` y copia sus SVG a `public/iconos/`; si no, se muestra como texto.
