---
titulo: Quiniela Mundial 2026
resumen: Aplicación web para pronosticar los partidos del Mundial 2026 en grupos privados, con ranking por grupo.
tipo: universidad
equipo: en equipo de 2
periodo: Julio de 2026
orden: 3
destacado: true
stack: [NestJS, TypeScript, Sequelize, PostgreSQL, Zod, React, Vite, Leaflet, Docker]
aporte:
  - Integré la API de TheSportsDB para sincronizar los resultados y cargué 78 partidos reales como datos iniciales.
  - Agregué los endpoints de equipos y estadios, y la configuración de Docker del backend.
  - Hice la primera versión completa del frontend en React (41 archivos) y después la consulta y edición del perfil, la corrección del mapa de sedes y la traducción al español.
demo: https://quinela-mundialera-frontend.vercel.app
codigo:
  - etiqueta: Backend
    url: https://github.com/PabloArauzCaballero/QuinelaMundialeraBackend
  - etiqueta: Frontend
    url: https://github.com/PabloArauzCaballero/QuinelaMundialeraFrontend
---

## Contexto

Proyecto universitario en equipo de 2. Cada usuario se une a grupos privados, pronostica los marcadores de los partidos del Mundial y compite en un ranking por grupo.

## El proyecto completo

- Backend en NestJS con TypeScript, Sequelize y PostgreSQL, organizado en módulos: autenticación, usuarios, grupos, partidos, pronósticos, ranking, panel, sincronización y auditoría.
- Validación de entrada con Zod, autenticación con JWT y documentación de la API con Swagger.
- Frontend en React con Vite, con un mapa de sedes hecho con Leaflet y OpenStreetMap.

## Estado

El frontend está publicado en Vercel.
