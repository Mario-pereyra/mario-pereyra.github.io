// Acciones que comparten la cabecera, la paleta de comandos y la sección de contacto.

type Tema = 'claro' | 'oscuro';
const raiz = document.documentElement;
const oscuroDelSistema = matchMedia('(prefers-color-scheme: dark)');
const quieto = matchMedia('(prefers-reduced-motion: reduce)');

export function temaActual(): Tema {
	const tema = raiz.dataset.tema;
	if (tema === 'claro' || tema === 'oscuro') return tema;
	return oscuroDelSistema.matches ? 'oscuro' : 'claro';
}

/** Cambia el tema. Si hay un origen (el botón), el tema nuevo se abre en círculo desde ahí. */
export function cambiarTema(origen?: HTMLElement) {
	const nuevo: Tema = temaActual() === 'oscuro' ? 'claro' : 'oscuro';
	const aplicar = () => {
		raiz.dataset.tema = nuevo;
		try {
			localStorage.setItem('tema', nuevo);
		} catch {}
		document.dispatchEvent(new CustomEvent('tema', { detail: nuevo }));
	};
	if (!document.startViewTransition || quieto.matches) return aplicar();
	const caja = origen?.getBoundingClientRect();
	raiz.style.setProperty('--tema-x', caja ? `${caja.left + caja.width / 2}px` : '100%');
	raiz.style.setProperty('--tema-y', caja ? `${caja.top + caja.height / 2}px` : '0px');
	raiz.classList.add('cambiando-tema');
	document.startViewTransition(aplicar).finished.finally(() => raiz.classList.remove('cambiando-tema'));
}

let temporizador = 0;
/** Muestra un aviso breve abajo de la pantalla; los lectores de pantalla lo leen. */
export function avisar(texto: string) {
	let aviso = document.querySelector<HTMLElement>('[data-aviso]');
	if (!aviso) {
		aviso = Object.assign(document.createElement('div'), { className: 'aviso' });
		aviso.dataset.aviso = '';
		aviso.setAttribute('role', 'status');
		document.body.append(aviso);
	}
	aviso.textContent = texto;
	aviso.classList.add('visible');
	clearTimeout(temporizador);
	temporizador = window.setTimeout(() => aviso!.classList.remove('visible'), 2400);
}

/** El correo se arma aquí: en el HTML no aparece completo. */
export function correo() {
	const fuente = document.querySelector<HTMLElement>('[data-correo-usuario]');
	if (!fuente) return '';
	return `${fuente.dataset.correoUsuario}@${fuente.dataset.correoDominio}`;
}

export async function copiarCorreo() {
	const direccion = correo();
	try {
		await navigator.clipboard.writeText(direccion);
		avisar(`Correo copiado: ${direccion}`);
	} catch {
		avisar(direccion);
	}
}
