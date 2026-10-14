// Datos del perfil. La fuente de verdad es el espacio de trabajo privado
// `marca-personal/docs/` (perfil.md y proyectos.md): no se agrega nada que no esté ahí.

export const perfil = {
	nombre: 'Mario Alberto Pereyra Justiniano',
	nombreCorto: 'Mario Pereyra',
	rol: 'Desarrollador · Estudiante de Ingeniería de Sistemas',
	ubicacion: 'Santa Cruz de la Sierra, Bolivia',
	presentacion:
		'Construyo aplicaciones web con TypeScript, React y Node.js, programo en AdvPL y SQL para empresas cliente de un ERP y desarrollo herramientas de IA aplicada.',
	descripcion:
		'Desarrollador y estudiante de Ingeniería de Sistemas en Santa Cruz de la Sierra, Bolivia. Proyectos con TypeScript, React, Node.js, SQL e IA aplicada.',
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

export const pilares = [
	{
		titulo: 'Desarrollo',
		texto:
			'Construyo aplicaciones web con TypeScript, React, Node.js y PostgreSQL, con pruebas automatizadas y despliegue en la nube.',
	},
	{
		titulo: 'Software empresarial con clientes reales',
		texto:
			'Programo en AdvPL y SQL personalizaciones de TOTVS Protheus para empresas cliente y relevo sus procesos con los usuarios.',
	},
	{
		titulo: 'IA aplicada',
		texto:
			'Trabajo con agentes de codificación y desarrollo servidores MCP que conectan agentes de IA con datos empresariales en modo solo lectura.',
	},
];

export const experiencia = [
	{
		organizacion: 'Resultar Soluciones SRL',
		puesto: 'Consultor TOTVS Protheus',
		lugar: 'Santa Cruz de la Sierra, Bolivia',
		periodo: 'Octubre de 2025 – actualidad',
		contexto:
			'Resultar implementa Protheus, el ERP de la empresa brasileña TOTVS, en empresas de Bolivia y del exterior.',
		logros: [
			'Programo en AdvPL y SQL personalizaciones del ERP para 4 empresas cliente: 8 programas nuevos y cambios en otros 20 archivos fuente (reportes, puntos de entrada y rutinas), la mayoría de Facturación.',
			'Corrijo errores de facturación, cobranza y compras en 3 empresas cliente: 10 correcciones sobre 9 archivos fuente, entre ellas el flujo de facturación con cobranza automática.',
			'Parametricé el pedido de venta en Facturación (SIGAFAT) y participé en 1 salida en vivo (go-live).',
			'Relevo requerimientos con usuarios de las empresas cliente y traduzco sus procesos a la configuración del sistema, en equipo con consultores senior.',
		],
	},
];

export const formacion = [
	{
		institucion: 'Universidad NUR',
		titulo: 'Ingeniería de Sistemas, estudiante de 7.º semestre',
		lugar: 'Santa Cruz de la Sierra, Bolivia',
		periodo: 'Egreso estimado: septiembre de 2027',
		detalle:
			'Proyecto de grado en curso: agente de IA para consultores TOTVS Protheus, en modalidad de Trabajo Dirigido en Resultar Soluciones SRL.',
	},
];

// Niveles declarados por Mario en `marca-personal/docs/autoevaluacion.md` (2026-10-13).
export const habilidades = [
	{
		grupo: 'Lenguajes',
		niveles: [
			{ nivel: 'Avanzado', items: ['HTML', 'CSS'] },
			{ nivel: 'Intermedio', items: ['JavaScript', 'TypeScript', 'SQL', 'AdvPL', 'Java'] },
			{ nivel: 'Básico', items: ['Python', 'Go', 'Rust', 'Kotlin'] },
		],
	},
	{
		grupo: 'Backend',
		niveles: [
			{ nivel: 'Intermedio', items: ['Node.js', 'Express', 'Sequelize', 'TypeORM'] },
			{ nivel: 'Básico', items: ['NestJS', 'Prisma'] },
		],
	},
	{
		grupo: 'Frontend',
		niveles: [
			{ nivel: 'Intermedio', items: ['React', 'React Router'] },
			{ nivel: 'Básico', items: ['Angular', 'Next.js', 'Tailwind CSS'] },
		],
	},
	{
		grupo: 'Bases de datos',
		niveles: [
			{ nivel: 'Intermedio', items: ['PostgreSQL', 'SQL Server'] },
			{ nivel: 'Básico', items: ['MySQL', 'Redis'] },
		],
	},
	{
		grupo: 'Herramientas y nube',
		niveles: [
			{ nivel: 'Intermedio', items: ['Git', 'Docker', 'Cloudflare Workers y R2', 'Vercel'] },
			{ nivel: 'Básico', items: ['GitHub Actions', 'Vitest', 'Jest'] },
		],
	},
	{
		grupo: 'IA aplicada',
		niveles: [
			{ nivel: 'Avanzado', items: ['Claude Code', 'Codex', 'OpenCode', 'Pi agent', 'APIs de DeepSeek y GLM'] },
			{ nivel: 'Intermedio', items: ['Servidores MCP'] },
		],
	},
	{
		grupo: 'ERP',
		niveles: [
			{ nivel: 'Intermedio', items: ['TOTVS Protheus: Facturación (SIGAFAT)'] },
			{ nivel: 'Básico', items: ['TOTVS Protheus: Compras (SIGACOM)'] },
		],
	},
	{
		grupo: 'Idiomas',
		niveles: [
			{ nivel: 'Nativo', items: ['Español'] },
			{ nivel: 'Básico', items: ['Inglés: A1–A2, lectura B1 (autoevaluación MCER)'] },
		],
	},
];

export const tiposDeProyecto = {
	personal: 'Proyecto personal',
	familiar: 'Emprendimiento familiar',
	universidad: 'Proyecto universitario',
} as const;
