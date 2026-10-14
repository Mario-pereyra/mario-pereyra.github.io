import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const proyectos = defineCollection({
	loader: glob({ base: './src/content/proyectos', pattern: '**/*.md' }),
	schema: ({ image }) =>
		z.object({
			titulo: z.string(),
			resumen: z.string(),
			tipo: z.enum(['personal', 'familiar', 'universidad']),
			// Solo en proyectos de equipo, por ejemplo «en equipo de 4».
			equipo: z.string().optional(),
			periodo: z.string(),
			orden: z.number(),
			stack: z.array(z.string()),
			// Lo que hizo Mario. En los proyectos de equipo, solo su parte.
			aporte: z.array(z.string()),
			demo: z.url().optional(),
			codigo: z.array(z.object({ etiqueta: z.string(), url: z.url() })).default([]),
			codigoPrivado: z.boolean().default(false),
			// Captura de la demo en un celular (390 px de ancho), con su texto alternativo.
			captura: image().optional(),
			capturaAlt: z.string().optional(),
		}),
});

export const collections = { proyectos };
