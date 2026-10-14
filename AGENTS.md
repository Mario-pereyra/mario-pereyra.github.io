# Página personal de Mario Pereyra

Sitio estático en Astro 7 que se publica en GitHub Pages. Comandos y estructura en `README.md`.

## Contenido

- La fuente de verdad del contenido está fuera de este repo, en el espacio de trabajo privado `marca-personal/docs/` (`perfil.md` y `proyectos.md`). No agregues logros, cifras, cargos ni niveles que no estén ahí; si falta un dato, pregunta.
- Mario es estudiante de Ingeniería de Sistemas, no «Ingeniero», hasta que tenga el título.
- En los proyectos de equipo, `aporte` lleva solo la parte de Mario.
- No publiques el teléfono ni la edad. El correo no va completo en el HTML: lo arma el script de `src/layouts/Base.astro`.
- El CV de `public/cv/` se genera en `marca-personal/cv/generar-cv.mjs` (versión `salida/web/`, sin teléfono). No lo edites aquí: regenéralo allá y cópialo.
- No muestres como personales los proyectos de Resultar.
- Escribe en español, con tildes.

## Desarrollo

Inicia el servidor de desarrollo en segundo plano:

```
astro dev --background
```

Se maneja con `astro dev stop`, `astro dev status` y `astro dev logs`.

Antes de dar por terminado un cambio:

- Corre `npm run check` y `npm run build`.
- Mantén un contraste de 4,5:1 para el texto en los dos temas (WCAG 2.2), el foco visible y objetivos táctiles de al menos 24×24 px.
- Si cambias la foto, corre `npm run semitono` y después `npm run imagenes`. Si cambias los datos de la imagen para compartir, basta con `npm run imagenes`.
- Revisa los dos temas, el celular (390 px) y el escritorio, y que todo lo animado respete `prefers-reduced-motion`.
- Los colores van como tokens en `src/styles/global.css`; no pongas colores sueltos en los componentes, salvo el marco del retrato, que es oscuro en los dos temas.

## Documentación de Astro

<https://docs.astro.build>. Consulta la guía que corresponda antes de tocar:

- [Rutas y páginas](https://docs.astro.build/en/guides/routing/)
- [Componentes de Astro](https://docs.astro.build/en/basics/astro-components/)
- [Colecciones de contenido](https://docs.astro.build/en/guides/content-collections/)
- [Estilos](https://docs.astro.build/en/guides/styling/)
- [Varios idiomas](https://docs.astro.build/en/guides/internationalization/)
- [Despliegue en GitHub Pages](https://docs.astro.build/en/guides/deploy/github/)
