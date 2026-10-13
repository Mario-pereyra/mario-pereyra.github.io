import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const proyectos = defineCollection({
	loader: glob({ base: './src/content/proyectos', pattern: '**/*.md' }),
	schema: z.object({
		titulo: z.string(),
		resumen: z.string(),
		tipo: z.enum(['personal', 'familiar', 'universidad']),
		// Solo en proyectos de equipo, por ejemplo «en equipo de 4».
		equipo: z.string().optional(),
		periodo: z.string(),
		orden: z.number(),
		destacado: z.boolean().default(false),
		stack: z.array(z.string()),
		// Lo que hizo Mario. En los proyectos de equipo, solo su parte.
		aporte: z.array(z.string()),
		demo: z.url().optional(),
		codigo: z.array(z.object({ etiqueta: z.string(), url: z.url() })).default([]),
		codigoPrivado: z.boolean().default(false),
	}),
});

export const collections = { proyectos };
