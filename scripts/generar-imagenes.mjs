// Genera los íconos y la imagen para compartir en public/.
// Se corre a mano cuando cambian los datos de la imagen o la foto: `npm run imagenes`.
// El texto se convierte en trazos con las fuentes Geist del paquete `geist`, así que
// el resultado es el mismo en cualquier máquina. El retrato sale de src/data/semitono.ts.
import { readFile, writeFile } from 'node:fs/promises';
import opentype from 'opentype.js';
import sharp from 'sharp';

const FUENTES = 'node_modules/geist/dist/fonts';
const fuente = async (ruta) => opentype.parse((await readFile(`${FUENTES}/${ruta}`)).buffer);
const sansNegrita = await fuente('geist-sans/Geist-Bold.ttf');
const sans = await fuente('geist-sans/Geist-Regular.ttf');
const mono = await fuente('geist-mono/GeistMono-Regular.ttf');
const monoNegrita = await fuente('geist-mono/GeistMono-Bold.ttf');

// Paleta gruvbox oscura, la misma de src/styles/global.css.
const C = {
	fondo: '#1d2021',
	fondo2: '#282828',
	fondo3: '#32302f',
	borde: '#3c3836',
	texto: '#ebdbb2',
	texto2: '#d5c4a1',
	texto3: '#a89984',
	amarillo: '#fabd2f',
	verde: '#b8bb26',
	azul: '#83a598',
	rojo: '#fb4934',
	fotoFondo: '#151113',
	punto: '#e8616e',
	brillo: '#ffb0b6',
	rosa: '#f28b95',
};

// Texto como <path>. `trozos` es una lista de [texto, color] que se escriben seguidos; `espaciado` va en em.
function texto(f, trozos, x, y, tam, espaciado = 0) {
	let cursor = x;
	let salida = '';
	for (const [cadena, color] of trozos) {
		const ruta = f.getPath(cadena, cursor, y, tam, { letterSpacing: espaciado });
		salida += `<path d="${ruta.toPathData(2)}" fill="${color}"/>`;
		cursor += f.getAdvanceWidth(cadena, tam, { letterSpacing: espaciado });
	}
	return salida;
}

// Retrato de puntos: misma grilla hexagonal y mismo radio que el canvas de la página.
async function retrato(x, y, ancho) {
	const fuenteTs = await readFile('src/data/semitono.ts', 'utf8');
	const columnas = Number(fuenteTs.match(/columnas: (\d+)/)[1]);
	const filas = Number(fuenteTs.match(/filas: (\d+)/)[1]);
	const niveles = fuenteTs.match(/niveles: "(\d+)"/)[1];
	const paso = ancho / columnas;
	const radioMax = paso * 0.47;
	const capas = { [C.punto]: '', [C.brillo]: '' };
	for (let f = 0; f < filas; f++) {
		for (let c = 0; c < columnas; c++) {
			const n = niveles.charCodeAt(f * columnas + c) - 48;
			if (n <= 0) continue;
			const cx = x + (c + 0.5 + (f % 2) * 0.5) * paso;
			const cy = y + (f + 0.5) * paso * 0.866;
			const r = radioMax * Math.sqrt(n / 9);
			capas[n === 9 ? C.brillo : C.punto] += `M${(cx - r).toFixed(1)} ${cy.toFixed(1)}a${r.toFixed(2)} ${r.toFixed(2)} 0 1 0 ${(2 * r).toFixed(2)} 0a${r.toFixed(2)} ${r.toFixed(2)} 0 1 0 ${(-2 * r).toFixed(2)} 0`;
		}
	}
	return {
		alto: filas * paso * 0.866,
		svg: Object.entries(capas)
			.map(([color, d]) => `<path d="${d}" fill="${color}"/>`)
			.join(''),
	};
}

// Favicon: el cursor de la marca, «m» y un bloque rosa.
const favicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
	<rect width="64" height="64" rx="14" fill="${C.fondo}"/>
	${texto(monoNegrita, [['m', C.texto]], 9, 45, 40)}
	<rect x="40" y="16" width="14" height="32" rx="1.5" fill="${C.rosa}"/>
</svg>
`;

// Imagen para compartir: 1200×630 (proporción 1,91:1 de LinkedIn, Facebook y X).
const ANCHO = 1200;
const ALTO = 630;
const VENTANA = { x: 790, y: 56, ancho: 350, alto: 518 };
const BARRA = 40;
const foto = await retrato(VENTANA.x + 10, VENTANA.y + BARRA + 14, VENTANA.ancho - 20);

const og = `<svg xmlns="http://www.w3.org/2000/svg" width="${ANCHO}" height="${ALTO}" viewBox="0 0 ${ANCHO} ${ALTO}">
	<defs>
		<pattern id="puntos" width="24" height="24" patternUnits="userSpaceOnUse"><circle cx="12" cy="12" r="1.2" fill="${C.borde}"/></pattern>
		<clipPath id="recorte"><rect x="${VENTANA.x}" y="${VENTANA.y + BARRA}" width="${VENTANA.ancho}" height="${VENTANA.alto - BARRA}"/></clipPath>
		<linearGradient id="desvanecer" x1="0" y1="0" x2="0" y2="1">
			<stop offset="0" stop-color="${C.fotoFondo}" stop-opacity="0"/>
			<stop offset="1" stop-color="${C.fotoFondo}"/>
		</linearGradient>
	</defs>
	<rect width="${ANCHO}" height="${ALTO}" fill="${C.fondo}"/>
	<rect width="${ANCHO}" height="${ALTO}" fill="url(#puntos)"/>

	${texto(mono, [['mario@santa-cruz', C.verde], [':', C.texto3], ['~', C.azul], ['$ ', C.texto3], ['whoami', C.texto]], 72, 132, 26)}
	${texto(sansNegrita, [['Mario Alberto', C.texto]], 68, 230, 80, -0.035)}
	${texto(sansNegrita, [['Pereyra Justiniano', C.texto3]], 68, 318, 80, -0.035)}
	${texto(mono, [['Desarrollador · Estudiante de Ingeniería de Sistemas', C.amarillo]], 72, 384, 22)}
	${texto(sans, [['TypeScript · React · Node.js · SQL · AdvPL · Agentes de IA', C.texto2]], 72, 432, 26)}
	<rect x="72" y="492" width="290" height="46" rx="8" fill="${C.fondo2}" stroke="${C.borde}"/>
	${texto(mono, [['~/', C.azul], ['mario-pereyra.github.io', C.texto]], 90, 522, 19)}

	<rect x="${VENTANA.x}" y="${VENTANA.y}" width="${VENTANA.ancho}" height="${VENTANA.alto}" rx="14" fill="${C.fotoFondo}" stroke="${C.borde}" stroke-width="1.5"/>
	<path d="M${VENTANA.x} ${VENTANA.y + BARRA}h${VENTANA.ancho}" stroke="${C.borde}"/>
	<circle cx="${VENTANA.x + 22}" cy="${VENTANA.y + 20}" r="6" fill="${C.rojo}"/>
	<circle cx="${VENTANA.x + 42}" cy="${VENTANA.y + 20}" r="6" fill="${C.amarillo}"/>
	<circle cx="${VENTANA.x + 62}" cy="${VENTANA.y + 20}" r="6" fill="${C.verde}"/>
	${texto(mono, [['mario.png', C.texto3]], VENTANA.x + 82, VENTANA.y + 26, 15)}
	<g clip-path="url(#recorte)">${foto.svg}</g>
	<rect x="${VENTANA.x + 1}" y="${VENTANA.y + VENTANA.alto - 90}" width="${VENTANA.ancho - 2}" height="76" fill="url(#desvanecer)"/>
	<rect x="${VENTANA.x + 1}" y="${VENTANA.y + VENTANA.alto - 14}" width="${VENTANA.ancho - 2}" height="13" rx="12" fill="${C.fotoFondo}"/>
</svg>
`;

async function png(svg, tamano) {
	return sharp(Buffer.from(svg), { density: 600 }).resize(tamano, tamano).png().toBuffer();
}

// Un ICO puede contener imágenes PNG: cabecera de 6 bytes, 16 bytes por imagen y los datos.
function ico(imagenes) {
	const cabecera = Buffer.alloc(6);
	cabecera.writeUInt16LE(0, 0);
	cabecera.writeUInt16LE(1, 2);
	cabecera.writeUInt16LE(imagenes.length, 4);
	const directorio = Buffer.alloc(16 * imagenes.length);
	let desplazamiento = 6 + directorio.length;
	imagenes.forEach(({ tamano, datos }, i) => {
		const base = i * 16;
		directorio.writeUInt8(tamano, base);
		directorio.writeUInt8(tamano, base + 1);
		directorio.writeUInt16LE(1, base + 4);
		directorio.writeUInt16LE(32, base + 6);
		directorio.writeUInt32LE(datos.length, base + 8);
		directorio.writeUInt32LE(desplazamiento, base + 12);
		desplazamiento += datos.length;
	});
	return Buffer.concat([cabecera, directorio, ...imagenes.map(({ datos }) => datos)]);
}

await writeFile('public/favicon.svg', favicon);
await writeFile('public/favicon-96.png', await png(favicon, 96));
await writeFile('public/apple-touch-icon.png', await png(favicon, 180));
await writeFile(
	'public/favicon.ico',
	ico([
		{ tamano: 32, datos: await png(favicon, 32) },
		{ tamano: 48, datos: await png(favicon, 48) },
	]),
);
await sharp(Buffer.from(og)).png({ compressionLevel: 9, palette: true, quality: 90 }).toFile('public/og.png');

console.log('Imágenes generadas en public/.');
