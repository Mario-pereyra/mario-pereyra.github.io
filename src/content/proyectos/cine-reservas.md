---
titulo: Cine Reservas
resumen: Sistema de reserva de entradas de cine que evita que dos personas reserven el mismo asiento.
tipo: universidad
periodo: Junio de 2026
orden: 5
stack: [NestJS, TypeORM, PostgreSQL, React, Vite, TypeScript, Docker]
aporte:
  - Desarrollé el backend en NestJS y el frontend en React dentro de un monorepo.
  - Controlé la concurrencia en la base de datos para evitar la doble reserva de asientos.
  - Escribí 8 archivos de prueba.
codigo:
  - etiqueta: Código
    url: https://github.com/Mario-pereyra/practico4
---

## Contexto

Sistema web para reservar entradas de cine, organizado como monorepo con un backend en NestJS y un frontend en React con Vite.

## Decisiones técnicas

- La integridad transaccional en la base de datos evita que dos solicitudes simultáneas reserven el mismo asiento.
- PostgreSQL corre en un contenedor de Docker para el desarrollo local.
