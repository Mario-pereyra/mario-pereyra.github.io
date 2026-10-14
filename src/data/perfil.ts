// Datos del perfil. La fuente de verdad es el espacio de trabajo privado
// `marca-personal/docs/` (perfil.md y proyectos.md): no se agrega nada que no esté ahí.

export const perfil = {
	nombre: 'Mario Alberto Pereyra Justiniano',
	nombreCorto: 'Mario Pereyra',
	rol: 'Desarrollador · Estudiante de Ingeniería de Sistemas',
	ubicacion: 'Santa Cruz de la Sierra, Bolivia',
	presentacion:
		'Programo para empresas cliente de un ERP y construyo aplicaciones web y herramientas para agentes de IA. Lo que más me gusta es entender la lógica de negocio que hay detrás de cada proceso.',
	descripcion:
		'Desarrollador y estudiante de Ingeniería de Sistemas en Santa Cruz de la Sierra, Bolivia. TypeScript, Node.js, SQL, AdvPL en TOTVS Protheus y agentes de IA.',
	// Lo que se escribe solo en la portada.
	ahora: 'aprendiendo ingeniería de harness',
	// El correo se arma en el navegador para frenar la recolección automática.
	correo: { usuario: 'mario1w3p.j', dominio: 'gmail.com' },
	enlaces: {
		github: 'https://github.com/mario-pereyra',
		linkedin: 'https://www.linkedin.com/in/mario-pereyra-justiniano',
		repositorio: 'https://github.com/mario-pereyra/mario-pereyra.github.io',
	},
	// Versión sin teléfono; se genera en `marca-personal/cv/` y se copia a public/cv/.
	cv: '/cv/CV_Mario_Pereyra_Justiniano.pdf',
	actualizado: '2026-10-13',
};

// El mario.yml de la portada: [clave, valor, comentario opcional].
export const ficha: [string, string, string?][] = [
	['base', 'Santa Cruz de la Sierra, Bolivia'],
	['trabajo', 'consultor TOTVS Protheus', 'desde oct. 2025'],
	['estudio', 'Ingeniería de Sistemas, NUR', '7.º semestre'],
	['rumbo', 'backend · forward deployed engineering'],
];

export const sobreMi = [
	'Soy Mario, desarrollador de Santa Cruz de la Sierra, Bolivia. Estudio **Ingeniería de Sistemas** en la Universidad NUR y voy en 7.º semestre.',
	'Desde octubre de 2025 trabajo como **consultor TOTVS Protheus** en TOTVS Bolivia. Me toca estar cerca del cliente: entender cómo trabaja su empresa, configurar el ERP y programar en AdvPL y SQL lo que el sistema no trae de fábrica.',
	'Lo que más me gusta de ese trabajo es entender **la lógica de negocio** que hay detrás de cada proceso. Y fuera del ERP, lo que hoy más me entusiasma es la **ingeniería de IA**.',
];

export const aprendiendo = [
	{ titulo: 'Ingeniería de contexto y de harness', texto: 'cómo darle a un agente lo que necesita para trabajar bien.' },
	{ titulo: 'Ingeniería de agentes', texto: 'guardrails, y cómo probar a los agentes para saber si de verdad hacen lo que deben.' },
	{
		titulo: 'Dirigir agentes con buenas prácticas',
		texto:
			'patrones de arquitectura y de diseño, fundamentos de ingeniería de software y las convenciones de cada lenguaje: TypeScript, JavaScript, Python, Rust y Go.',
	},
	{ titulo: 'Usar agentes para aprender', texto: 'y seguir aprendiendo.' },
	{ titulo: 'Construir herramientas', texto: 'servidores MCP y APIs.' },
];

export const ahoraMismo = 'Estoy aprendiendo a llevar un harness al proceso de una empresa cliente.';

export const rumbo =
	'Quiero crecer hacia backend y Forward Deployed Engineering: trabajar cerca del cliente y construir el software que resuelve su problema. Me interesa aprender en equipos que cuiden las buenas prácticas, las convenciones y los estándares.';

export const experiencia = [
	{
		organizacion: 'TOTVS Bolivia',
		razonSocial: 'Resultar Soluciones SRL',
		puesto: 'Consultor TOTVS Protheus',
		lugar: 'Santa Cruz de la Sierra, Bolivia',
		periodo: 'Octubre de 2025 – actualidad',
		inicio: '2025-10',
		contexto:
			'TOTVS Bolivia (Resultar Soluciones SRL) implementa TOTVS Protheus, el ERP de la empresa brasileña TOTVS, en empresas de Bolivia y del exterior.',
		// Sin cantidades: Mario pidió no publicar cifras de clientes, programas, archivos ni correcciones (2026-10-14).
		modulos: [
			{ codigo: 'SIGAFAT', nombre: 'Facturación' },
			{ codigo: 'SIGACOM', nombre: 'Compras' },
		],
		herramientas: [
			{ id: 'totvs', nombre: 'TOTVS Protheus' },
			{ id: 'advpl', nombre: 'AdvPL' },
			{ id: 'sqlserver', nombre: 'SQL Server' },
			{ id: 'postgres', nombre: 'PostgreSQL' },
		],
		logros: [
			'Programo en AdvPL y SQL personalizaciones del ERP para empresas cliente: programas nuevos, reportes, puntos de entrada y rutinas, sobre todo de Facturación.',
			'Diagnostico y corrijo errores de facturación, cobranza y compras, algunos frente al cliente; entre ellos, el flujo de facturación con cobranza automática.',
			'Parametrizo Protheus durante la implementación, sobre todo Facturación (SIGAFAT), donde me encargo del pedido de venta, y en menor medida Compras (SIGACOM). Participé en una salida en vivo (go-live).',
			'Relevo requerimientos con usuarios de las empresas cliente y traduzco sus procesos a la configuración del sistema, en equipo con consultores senior.',
		],
	},
];

export const formacion = {
	institucion: 'Universidad NUR',
	titulo: 'Ingeniería de Sistemas',
	estado: 'Estudiante de 7.º semestre',
	lugar: 'Santa Cruz de la Sierra, Bolivia',
	egreso: 'Egreso estimado: septiembre de 2027',
	proyectoDeGrado:
		'Agente de IA para consultores TOTVS Protheus, en modalidad de Trabajo Dirigido en Resultar Soluciones SRL. Hoy está en la etapa del documento académico.',
};

export const idiomas = [
	{ idioma: 'Español', nivel: 'Nativo' },
	{ idioma: 'Inglés', nivel: 'Básico: A1–A2, lectura B1 (autoevaluación MCER)' },
];

export const tiposDeProyecto = {
	personal: 'Personal',
	familiar: 'Emprendimiento familiar',
	universidad: 'Universidad',
} as const;
