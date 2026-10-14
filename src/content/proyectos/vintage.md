---
titulo: Vintage Secret's
resumen: Catálogo público y panel de inventario para el emprendimiento de carteras de segunda mano de mi madre.
tipo: familiar
periodo: Septiembre de 2026
orden: 1
destacado: true
stack: [TypeScript, React Router, Cloudflare Workers, PostgreSQL, Prisma, Cloudflare R2, Vitest, GitHub Actions]
aporte:
  - Desarrollé el catálogo público y el panel de inventario, que se instala como PWA, y los puse en producción en Cloudflare Workers.
  - Implementé las consultas de inventario y de compradoras, y la rentabilidad por lote, por proveedor y con desglose.
  - Aislé la lógica de negocio en un módulo de dominio con 16 archivos de prueba en Vitest.
  - Configuré la integración continua en GitHub Actions y documenté las decisiones de arquitectura en ADR.
demo: https://vintage.marioelprogamer710.workers.dev
codigo:
  - etiqueta: Código
    url: https://github.com/mario-pereyra/vintage
---

## Contexto

El emprendimiento vende carteras de segunda mano seleccionadas. La venta se cierra por WhatsApp y el pago se verifica a mano, así que no hay carrito de compras. La página tiene que darle a la compradora la información suficiente para que confíe y escriba decidida a comprar. Por dentro, tiene que mostrar qué se vende, a qué precio y con qué margen, por lote y por proveedor.

## Decisiones técnicas

- Una sola aplicación con React Router en modo framework sobre Cloudflare Workers: el catálogo público y el panel `/admin`.
- PostgreSQL en Neon con Prisma, y las fotos en Cloudflare R2.
- Toda la lógica del negocio vive en un módulo de dominio. Las rutas solo validan la entrada, llaman al dominio y muestran el resultado.
- Las pruebas corren sobre PGlite, un Postgres en memoria, con las mismas migraciones que producción, así que no necesitan una base externa.
- Cada decisión de arquitectura queda registrada en un ADR.

## Estado

La primera etapa está en producción desde septiembre de 2026.
