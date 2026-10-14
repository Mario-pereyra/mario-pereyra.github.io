// Stack con un ícono por tecnología, el mismo del README de perfil de GitHub.
// Los íconos están en public/iconos/<id>-<oscuro|claro>.svg; los genera el repo mario-pereyra/mario-pereyra.
// Niveles declarados por Mario el 2026-10-13 (marca-personal/docs/perfil.md, «Stack técnico»).

export type Nivel = 'avanzado' | 'intermedio' | 'básico';
export interface Tecnologia {
	id: string;
	nombre: string;
	nivel: Nivel;
}

const t = (id: string, nombre: string, nivel: Nivel): Tecnologia => ({ id, nombre, nivel });

export const areas: { area: string; items: Tecnologia[]; conceptos?: string[] }[] = [
	{
		area: 'lenguajes',
		items: [
			t('ts', 'TypeScript', 'intermedio'),
			t('js', 'JavaScript', 'intermedio'),
			t('html', 'HTML', 'avanzado'),
			t('css', 'CSS', 'avanzado'),
			t('sql', 'SQL', 'intermedio'),
			t('advpl', 'AdvPL', 'intermedio'),
			t('java', 'Java', 'intermedio'),
			t('python', 'Python', 'básico'),
			t('go', 'Go', 'básico'),
			t('rust', 'Rust', 'básico'),
			t('kotlin', 'Kotlin', 'básico'),
		],
	},
	{
		area: 'backend',
		items: [
			t('nodejs', 'Node.js', 'intermedio'),
			t('express', 'Express', 'intermedio'),
			t('sequelize', 'Sequelize', 'intermedio'),
			t('typeorm', 'TypeORM', 'intermedio'),
			t('nestjs', 'NestJS', 'básico'),
			t('prisma', 'Prisma', 'básico'),
		],
	},
	{
		area: 'frontend',
		items: [
			t('react', 'React', 'intermedio'),
			t('reactrouter', 'React Router', 'intermedio'),
			t('nextjs', 'Next.js', 'básico'),
			t('angular', 'Angular', 'básico'),
			t('tailwind', 'Tailwind CSS', 'básico'),
		],
	},
	{
		area: 'datos',
		items: [
			t('postgres', 'PostgreSQL', 'intermedio'),
			t('sqlserver', 'SQL Server', 'intermedio'),
			t('mysql', 'MySQL', 'básico'),
			t('redis', 'Redis', 'básico'),
		],
	},
	{
		area: 'devops_y_pruebas',
		items: [
			t('git', 'Git', 'intermedio'),
			t('docker', 'Docker', 'intermedio'),
			t('cloudflare', 'Cloudflare Workers y R2', 'intermedio'),
			t('vercel', 'Vercel', 'intermedio'),
			t('githubactions', 'GitHub Actions', 'básico'),
			t('vitest', 'Vitest', 'básico'),
			t('jest', 'Jest', 'básico'),
		],
	},
	{
		area: 'ia',
		items: [
			t('claude', 'Claude Code', 'avanzado'),
			t('codex', 'Codex', 'avanzado'),
			t('opencode', 'OpenCode', 'avanzado'),
			t('pi', 'Pi', 'avanzado'),
			t('deepseek', 'API de DeepSeek', 'avanzado'),
			t('glm', 'API de GLM', 'avanzado'),
			t('mcp', 'Servidores MCP', 'intermedio'),
		],
		// Lo que se está aprendiendo y no es una herramienta.
		conceptos: ['ingeniería de contexto', 'harness', 'pruebas de agentes'],
	},
	{
		area: 'erp',
		items: [
			t('totvs', 'TOTVS Protheus', 'intermedio'),
			t('sigafat', 'Facturación (SIGAFAT)', 'intermedio'),
			t('sigacom', 'Compras (SIGACOM)', 'básico'),
		],
	},
];

// «Ya manejo» es avanzado o intermedio; «aprendiendo» es básico.
export const yaManejo = (items: Tecnologia[]) => items.filter((i) => i.nivel !== 'básico');
export const enAprendizaje = (items: Tecnologia[]) => items.filter((i) => i.nivel === 'básico');

// Para las fichas de proyecto: nombre que usa el proyecto → id del ícono.
const porNombre: Record<string, string> = {
	TypeScript: 'ts',
	JavaScript: 'js',
	'Node.js': 'nodejs',
	Express: 'express',
	NestJS: 'nestjs',
	Sequelize: 'sequelize',
	TypeORM: 'typeorm',
	Prisma: 'prisma',
	React: 'react',
	'React Router': 'reactrouter',
	PostgreSQL: 'postgres',
	'SQL Server': 'sqlserver',
	MySQL: 'mysql',
	Redis: 'redis',
	Docker: 'docker',
	'Cloudflare Workers': 'cloudflare',
	'GitHub Actions': 'githubactions',
	Vitest: 'vitest',
	Jest: 'jest',
	'Model Context Protocol': 'mcp',
};
export const iconoDe = (nombre: string) => porNombre[nombre];
