// Convierte la foto en una grilla hexagonal de niveles de brillo (0-9) para el retrato de puntos.
// Se corre a mano cuando cambia la foto: `npm run semitono`. Escribe src/data/semitono.ts.
import { writeFile } from 'node:fs/promises';
import sharp from 'sharp';

const FOTO = 'src/assets/fotos/mario-github.png';
const SALIDA = 'src/data/semitono.ts';
const COLUMNAS = 96;
// Recorte en proporción 4:5, centrado en la cara.
const RECORTE = { left: 120, top: 0, width: 1014, height: 1254 };

// En una grilla hexagonal las filas están a 0,866 veces la separación entre columnas.
const paso = RECORTE.width / COLUMNAS;
const filas = Math.floor(RECORTE.height / (paso * 0.866));

// Se reduce a un píxel por punto (con media de área) y se lee en escala de grises.
const { data, info } = await sharp(FOTO)
	.extract(RECORTE)
	.resize(COLUMNAS * 2, filas, { fit: 'fill', kernel: 'cubic' })
	.greyscale()
	.raw()
	.toBuffer({ resolveWithObject: true });

// Más contraste: el fondo oscuro queda en 0 y la piel y el borde rosa, arriba.
const nivel = (luz) => Math.round(9 * Math.pow(Math.min(1, Math.max(0, (luz - 0.06) / 0.74)), 1.35));

const lineas = [];
for (let f = 0; f < filas; f++) {
	let linea = '';
	for (let c = 0; c < COLUMNAS; c++) {
		// Las filas impares están corridas medio paso a la derecha.
		const x = Math.min(info.width - 1, c * 2 + (f % 2));
		linea += nivel(data[f * info.width + x] / 255);
	}
	lineas.push(linea);
}

const ts = `// Generado por scripts/semitono.mjs a partir de ${FOTO}. No editar a mano.
// Un dígito por punto (0 = sin punto, 9 = el más grande); una cadena por fila de la grilla hexagonal.
export const semitono = {
	columnas: ${COLUMNAS},
	filas: ${filas},
	niveles: ${JSON.stringify(lineas.join(''))},
};
`;
await writeFile(SALIDA, ts);
console.log(`${SALIDA}: ${COLUMNAS}×${filas} puntos, ${(ts.length / 1024).toFixed(1)} KB`);
