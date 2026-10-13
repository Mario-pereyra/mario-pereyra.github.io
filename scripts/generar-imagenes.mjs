// Genera los íconos y la imagen para compartir en public/.
// Se corre a mano cuando cambian los datos de la imagen: `npm run imagenes`.
// Las fuentes del texto salen del sistema (Segoe UI en Windows), así que el
// resultado se sube al repo en vez de generarse en CI.
import { writeFile } from 'node:fs/promises';
import sharp from 'sharp';

const ACENTO = '#0e6f68';
const ACENTO_OSCURO = '#5fd4c4';
const FONDO_OSCURO = '#0f1214';
const TEXTO_OSCURO = '#e6e8ea';
const TEXTO_SUAVE_OSCURO = '#a2aab2';
const SANS = "'Segoe UI', Arial, sans-serif";
const MONO = "'Cascadia Code', Consolas, monospace";

const favicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
	<rect width="64" height="64" rx="14" fill="${ACENTO}"/>
	<text x="32" y="42" text-anchor="middle" font-family="${SANS}" font-size="28" font-weight="700" fill="#ffffff">MP</text>
</svg>
`;

// LinkedIn pide al menos 1200×627 px; WhatsApp, menos de 600 KB.
const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="627" viewBox="0 0 1200 627">
	<rect width="1200" height="627" fill="${FONDO_OSCURO}"/>
	<rect width="1200" height="10" fill="${ACENTO_OSCURO}"/>
	<text x="80" y="140" font-family="${MONO}" font-size="26" fill="${TEXTO_SUAVE_OSCURO}">Santa Cruz de la Sierra, Bolivia</text>
	<text x="80" y="262" font-family="${SANS}" font-size="70" font-weight="700" fill="${TEXTO_OSCURO}">Mario Alberto</text>
	<text x="80" y="346" font-family="${SANS}" font-size="70" font-weight="700" fill="${TEXTO_OSCURO}">Pereyra Justiniano</text>
	<text x="80" y="430" font-family="${SANS}" font-size="30" fill="${TEXTO_OSCURO}">Desarrollador · Estudiante de Ingeniería de Sistemas</text>
	<text x="80" y="478" font-family="${SANS}" font-size="30" fill="${ACENTO_OSCURO}">TypeScript · React · Node.js · SQL · IA aplicada</text>
	<text x="80" y="560" font-family="${MONO}" font-size="24" fill="${TEXTO_SUAVE_OSCURO}">mario-pereyra.github.io</text>
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
await sharp(Buffer.from(og)).png({ compressionLevel: 9 }).toFile('public/og.png');

console.log('Imágenes generadas en public/.');
