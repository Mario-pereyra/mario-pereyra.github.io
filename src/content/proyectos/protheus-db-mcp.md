---
titulo: Protheus DB MCP
resumen: Servidor MCP que permite a agentes de IA consultar bases de datos de TOTVS Protheus en modo solo lectura.
tipo: personal
periodo: Septiembre de 2026 – actualidad
orden: 2
destacado: true
stack: [TypeScript, Node.js, Model Context Protocol, SQL Server, PostgreSQL, Oracle]
aporte:
  - "Diseñé cinco herramientas para el agente: listar perfiles de conexión sin revelar credenciales, probar la conexión, ejecutar una consulta de solo lectura, describir una tabla y listar tablas."
  - Aseguré el modo solo lectura en capas; la primera es un analizador léxico por dialecto que solo acepta una sentencia que empiece con SELECT o WITH.
  - Enriquecí la descripción de cada tabla con el diccionario SX3 de Protheus de la misma empresa.
  - Cubrí el código con 8 archivos de prueba.
codigoPrivado: true
---

## Contexto

En una implementación de Protheus, varias personas comparten los ambientes del cliente, y un cambio de datos no se puede deshacer. Un agente de IA necesita ver la base de datos para ayudar a investigar un problema, pero nunca debe poder modificarla.

## Decisiones técnicas

- Cada capa del modo solo lectura cubre lo que la anterior puede dejar pasar. La primera es un analizador léxico que conoce cómo SQL Server, PostgreSQL y Oracle delimitan comentarios, cadenas e identificadores.
- Las credenciales viven en un archivo de configuración local. La herramienta que lista los perfiles nunca expone hosts, usuarios ni contraseñas.
- Al probar la conexión, el servidor detecta las tablas de Protheus y avisa si la cuenta configurada tiene permiso de escritura.
- Todas las herramientas llevan la anotación MCP `readOnlyHint`.

## Estado

En desarrollo. El repositorio todavía es privado.
