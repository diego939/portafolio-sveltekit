<script lang="ts">
	import { onMount } from 'svelte';
	import { initFlowbite } from 'flowbite';
	import { contactModalOpen } from '$lib/stores/contactModal';
	import ImageModal from '$lib/ImageModal.svelte';
    import Swal from 'sweetalert2';
	import { goto } from '$app/navigation';

	const nombre = 'Diego David Almirón';
	const titulo = 'Analista Programador Universitario';
	const descripcion =
		'Analista Programador Universitario graduado de la Universidad Nacional Del Nordeste (UNNE). Certificado como Desarrollador Fullstack con Java, Desarrollador Web y Programador Web Fullstack Junior. Manejo tecnologías como Java, Spring Boot, Angular, Node.js, JavaScript, TypeScript, PHP, HTML5, CSS3, SQL (MySQL y SQL Server), .NET, JSON. Experiencia en frameworks como ReactJS, VueJS, Bootstrap, Codeigniter, NestJS, SvelteKit, Tailwind CSS. Control de versiones con Git, GitHub y Azure DevOps. Conocimientos en metodologías ágiles (Scrum, Kanban, XP) y tradicionales. Busco aportar mi experiencia técnica y pasión por el desarrollo para crear soluciones innovadoras que impulsen el crecimiento de su empresa.';

	const tecnologias = [
		'Web',
		'Front End',
		'Back End',
		'Java',
		'Spring Boot',
		'Sveltekit',
		'NodeJs',
		'NestJs',
		'Angular',
		'Javascript',
		'Typescript',
		'SQL',
		'Tailwind CSS'
	];

	type DestacadoAccent = 'blue' | 'green' | 'purple' | 'indigo';

	const destacados: {
		titulo: string;
		descripcion: string;
		link: string;
		accent: DestacadoAccent;
	}[] = [
		{
			titulo: 'Educación',
			descripcion: 'Formación académica y certificaciones que respaldan mi experiencia técnica.',
			link: '/educacion',
			accent: 'blue'
		},
		{
			titulo: 'Experiencia',
			descripcion: 'Trayectoria profesional y proyectos destacados en diferentes empresas.',
			link: '/experiencia',
			accent: 'green'
		},
		{
			titulo: 'Habilidades',
			descripcion: 'Tecnologías, herramientas y competencias técnicas que domino.',
			link: '/habilidades',
			accent: 'purple'
		},
		{
			titulo: 'Proyectos',
			descripcion: 'Algunos de los proyectos más relevantes en los que he trabajado como desarrollador.',
			link: '/proyectos',
			accent: 'indigo'
		}
	];

	let imageModalOpen = false;

	function accentIconClasses(a: DestacadoAccent): string {
		switch (a) {
			case 'blue':
				return 'text-violet-700 dark:text-violet-300';
			case 'green':
				return 'text-emerald-600 dark:text-emerald-400';
			case 'purple':
				return 'text-fuchsia-700 dark:text-fuchsia-300';
			case 'indigo':
				return 'text-sky-700 dark:text-sky-300';
		}
	}

	function accentCardRing(a: DestacadoAccent): string {
		switch (a) {
			case 'blue':
				return 'hover:border-fuchsia-400 focus-visible:ring-fuchsia-500 dark:hover:border-fuchsia-500 dark:focus-visible:ring-fuchsia-400';
			case 'green':
				return 'hover:border-emerald-400 focus-visible:ring-emerald-500 dark:hover:border-emerald-500 dark:focus-visible:ring-emerald-400';
			case 'purple':
				return 'hover:border-fuchsia-500 focus-visible:ring-fuchsia-600 dark:hover:border-fuchsia-400 dark:focus-visible:ring-fuchsia-400';
			case 'indigo':
				return 'hover:border-sky-400 focus-visible:ring-sky-500 dark:hover:border-sky-500 dark:focus-visible:ring-sky-400';
		}
	}

	function accentCardSurface(a: DestacadoAccent): string {
		/* En móvil: tintes y sombras más marcados, sin depender del hover (blur desactivado en el markup). */
		switch (a) {
			case 'blue':
				return 'border-violet-300/90 bg-gradient-to-br from-white via-violet-50/90 to-indigo-100/95 shadow-lg shadow-violet-500/15 hover:shadow-violet-500/25 max-md:border-violet-500 max-md:from-violet-50 max-md:via-violet-100 max-md:to-indigo-100 max-md:shadow-md max-md:shadow-violet-600/40 dark:border-violet-600/50 dark:from-gray-900 dark:via-violet-950/70 dark:to-indigo-950 dark:shadow-violet-900/25 max-md:dark:border-violet-500 max-md:dark:from-violet-950 max-md:dark:via-violet-900 max-md:dark:to-indigo-950';
			case 'green':
				return 'border-emerald-300/90 bg-gradient-to-br from-white via-emerald-50/90 to-teal-100/95 shadow-lg shadow-emerald-500/15 hover:shadow-emerald-500/25 max-md:border-emerald-500 max-md:from-emerald-50 max-md:via-emerald-100 max-md:to-teal-100 max-md:shadow-md max-md:shadow-emerald-600/40 dark:border-emerald-600/50 dark:from-gray-900 dark:via-emerald-950/70 dark:to-teal-950 dark:shadow-emerald-900/25 max-md:dark:border-emerald-500 max-md:dark:from-emerald-950 max-md:dark:via-emerald-900 max-md:dark:to-teal-950';
			case 'purple':
				return 'border-fuchsia-300/90 bg-gradient-to-br from-white via-fuchsia-50/85 to-violet-100/95 shadow-lg shadow-fuchsia-500/15 hover:shadow-fuchsia-500/25 max-md:border-fuchsia-500 max-md:from-fuchsia-50 max-md:via-fuchsia-100 max-md:to-violet-100 max-md:shadow-md max-md:shadow-fuchsia-600/40 dark:border-fuchsia-600/50 dark:from-gray-900 dark:via-fuchsia-950/70 dark:to-violet-950 dark:shadow-fuchsia-900/25 max-md:dark:border-fuchsia-500 max-md:dark:from-fuchsia-950 max-md:dark:via-fuchsia-900 max-md:dark:to-violet-950';
			case 'indigo':
				return 'border-sky-300/90 bg-gradient-to-br from-white via-sky-50/85 to-indigo-100/95 shadow-lg shadow-sky-500/15 hover:shadow-sky-500/25 max-md:border-sky-500 max-md:from-sky-50 max-md:via-sky-100 max-md:to-indigo-100 max-md:shadow-md max-md:shadow-sky-600/40 dark:border-sky-600/50 dark:from-gray-900 dark:via-sky-950/70 dark:to-indigo-950 dark:shadow-sky-900/25 max-md:dark:border-sky-500 max-md:dark:from-sky-950 max-md:dark:via-sky-900 max-md:dark:to-indigo-950';
		}
	}

	function accentIconBg(a: DestacadoAccent): string {
		switch (a) {
			case 'blue':
				return 'from-violet-200 to-indigo-200 ring-violet-400/70 dark:from-violet-800 dark:to-indigo-900 dark:ring-violet-500/50';
			case 'green':
				return 'from-emerald-200 to-teal-200 ring-emerald-400/70 dark:from-emerald-800 dark:to-teal-900 dark:ring-emerald-500/50';
			case 'purple':
				return 'from-fuchsia-200 to-violet-300 ring-fuchsia-400/70 dark:from-fuchsia-800 dark:to-violet-900 dark:ring-fuchsia-500/50';
			case 'indigo':
				return 'from-sky-200 to-indigo-200 ring-sky-400/70 dark:from-sky-800 dark:to-indigo-900 dark:ring-sky-500/50';
		}
	}

	function accentLinkClass(a: DestacadoAccent): string {
		/* Base muy legible en móvil; group-hover a partir de sm (donde el hover es fiable). */
		switch (a) {
			case 'blue':
				return 'text-fuchsia-800 sm:group-hover:text-violet-900 dark:text-fuchsia-300 dark:sm:group-hover:text-violet-200';
			case 'green':
				return 'text-teal-700 sm:group-hover:text-emerald-900 dark:text-emerald-300 dark:sm:group-hover:text-emerald-200';
			case 'purple':
				return 'text-fuchsia-800 sm:group-hover:text-violet-900 dark:text-fuchsia-300 dark:sm:group-hover:text-violet-200';
			case 'indigo':
				return 'text-indigo-800 sm:group-hover:text-sky-800 dark:text-sky-300 dark:sm:group-hover:text-indigo-200';
		}
	}

	function copiarTexto(texto: string) {
	navigator.clipboard.writeText(texto)
		.then(() => {
		Swal.fire({
			icon: 'success',
			toast: true,
			position: 'top',
			text: 'Correo copiado exitosamente.',
			timer: 2000,
			showConfirmButton: false
		});
		})
		.catch((err) => {
		console.error("Error al copiar: ", err);
		});
	}

	onMount(() => {
		document.title = 'Inicio - Diego David Almirón';
		//initFlowbite();
		if (window.innerWidth >= 640) {
			import("flowbite").then(({ initTooltips }) => {
				initTooltips();
			});
		}
	});
</script>

<div class="space-y-10 sm:space-y-14 md:space-y-20 pb-4">
	<!-- Hero -->
	<section
		class="relative mx-4 sm:mx-6 overflow-hidden rounded-2xl sm:rounded-3xl border border-purple-900/10 shadow-xl shadow-purple-900/10 dark:border-purple-500/20 dark:shadow-black/30"
		aria-labelledby="hero-heading"
	>
		<div
			class="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-100/90 dark:from-gray-900 dark:via-gray-900 dark:to-purple-950/90"
		></div>
		<div
			class="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-purple-400/20 blur-3xl"
		></div>
		<div
			class="pointer-events-none absolute -bottom-28 -left-16 h-80 w-80 rounded-full bg-indigo-400/15 blur-3xl"
		></div>
		<div
			class="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-8 px-5 py-10 text-center sm:px-8 sm:py-12 md:gap-10 md:px-10 md:py-16"
		>
			<div class="flex w-full flex-col items-center">
				<button
					type="button"
					class="group relative mx-auto rounded-full focus:outline-none focus-visible:ring-4 focus-visible:ring-purple-500 focus-visible:ring-offset-2"
					on:click={() => (imageModalOpen = true)}
					aria-label="Ampliar foto de perfil"
				>
					<span
						class="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 opacity-75 blur-md transition group-hover:opacity-100"
					></span>
					<span
						class="relative block overflow-hidden rounded-full border-4 border-white shadow-2xl ring-2 ring-purple-900/10 transition duration-300 group-hover:scale-[1.03] group-active:scale-[0.98] dark:border-gray-700 dark:ring-purple-500/30"
					>
						<img
							src="/images/profile.jpg"
							alt=""
							class="h-28 w-28 object-cover sm:h-32 sm:w-32 md:h-36 md:w-36 lg:h-40 lg:w-40"
							width="160"
							height="160"
						/>
					</span>
				</button>
			</div>

			<div class="w-full flex flex-col items-center">
				<h1
					id="hero-heading"
					class="mb-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl xl:text-6xl xl:leading-tight dark:text-gray-100"
				>
					Hola, soy
					<span
						class="bg-gradient-to-r from-purple-900 via-violet-800 to-indigo-700 bg-clip-text text-transparent"
					>
						{nombre}
					</span>
				</h1>
				<p
					class="mb-5 max-w-3xl text-base font-medium text-gray-700 sm:text-lg md:text-xl md:leading-snug dark:text-gray-300"
				>
					{titulo}
				</p>

				<div
					class="mb-6 flex max-w-4xl flex-wrap justify-center gap-2"
					aria-label="Tecnologías y áreas"
				>
					{#each tecnologias as tecnologia}
						<span
							class="rounded-full border border-purple-200/80 bg-white/80 px-2.5 py-1 text-xs font-medium text-purple-900 shadow-sm backdrop-blur-sm transition hover:border-purple-300 hover:bg-purple-50/90 sm:px-3 sm:text-sm dark:border-purple-600/50 dark:bg-gray-800/90 dark:text-purple-200 dark:hover:border-purple-500 dark:hover:bg-gray-700"
						>
							{tecnologia}
						</span>
					{/each}
				</div>

				<p
					class="mx-auto mb-8 max-w-4xl px-2 text-center text-sm leading-relaxed text-gray-600 sm:px-4 sm:text-base dark:text-gray-400"
				>
					{descripcion}
				</p>

				<div
					class="flex w-full max-w-md flex-col items-stretch justify-center gap-3 sm:mx-auto sm:max-w-none sm:flex-row sm:justify-center"
				>
					<button
						data-tooltip-target="tooltip-proyectos"
						data-tooltip-placement="bottom"
						on:click={() => goto('/proyectos')}
						class="inline-flex items-center justify-center gap-2 rounded-xl bg-purple-900 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-900/25 transition hover:bg-purple-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900 sm:px-6"
					>
						Ver proyectos
						<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M17 8l4 4m0 0l-4 4m4-4H3"
							/>
						</svg>
					</button>
						<div id="tooltip-proyectos" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-800 rounded-lg shadow-xs opacity-0 tooltip">
							Explorá algunos de mis proyectos destacados
							<div class="tooltip-arrow" data-popper-arrow></div>
						</div>
					<button
						data-tooltip-target="tooltip-contacto-cta"
						data-tooltip-placement="bottom"
						type="button"
						class="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-purple-900/25 bg-white/80 px-5 py-3 text-sm font-semibold text-purple-900 backdrop-blur-sm transition hover:border-purple-900/40 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 dark:border-purple-400/40 dark:bg-gray-800/90 dark:text-purple-200 dark:hover:border-purple-300 dark:hover:bg-gray-700 sm:px-6 dark:focus-visible:ring-offset-gray-900"
						on:click={() => contactModalOpen.set(true)}
					>
						<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
							/>
						</svg>
						Contacto
					</button>
					<div id="tooltip-contacto-cta" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-800 rounded-lg shadow-xs opacity-0 tooltip">
						Abrí el formulario de contacto
						<div class="tooltip-arrow" data-popper-arrow></div>
					</div>

				</div>
			</div>
		</div>
	</section>

	<!-- Explorá el portafolio -->
	<section class="px-4 sm:px-6" aria-labelledby="explorar-heading">
		<div class="mx-auto mb-8 max-w-2xl text-center md:mb-10">
			<h2 id="explorar-heading" class="text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl dark:text-gray-100">
				Explorá el portafolio
			</h2>
			<p class="mt-2 text-sm text-gray-600 sm:text-base dark:text-gray-400">
				Navegá por cada sección para conocer mi formación, experiencia y trabajo.
			</p>
		</div>

		<div class="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
			{#each destacados as destacado (destacado.link)}
				<a
					href={destacado.link}
					class="group relative flex h-full flex-col overflow-hidden rounded-2xl border-2 p-6 shadow-lg transition-shadow duration-150 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-950 md:backdrop-blur-sm md:transition-[transform,box-shadow] md:duration-300 md:hover:-translate-y-1 md:hover:shadow-2xl {accentCardSurface(
						destacado.accent
					)} {accentCardRing(destacado.accent)}"
				>
					<div
						class="pointer-events-none absolute inset-x-0 top-0 h-2 bg-gradient-to-r opacity-100 sm:h-1.5 {destacado.accent ===
						'blue'
							? 'from-fuchsia-500 via-violet-600 to-indigo-600'
							: destacado.accent === 'green'
								? 'from-lime-400 via-emerald-500 to-teal-600'
								: destacado.accent === 'purple'
									? 'from-pink-500 via-fuchsia-600 to-violet-700'
									: 'from-cyan-400 via-sky-500 to-indigo-700'}"
					></div>

					<div
						class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ring-1 max-md:shadow-sm md:shadow-inner {accentIconBg(
							destacado.accent
						)}"
					>
						{#if destacado.accent === 'blue'}
							<svg
								class="h-6 w-6 {accentIconClasses(destacado.accent)}"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								aria-hidden="true"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
								/>
							</svg>
						{:else if destacado.accent === 'green'}
							<svg
								class="h-6 w-6 {accentIconClasses(destacado.accent)}"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								aria-hidden="true"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6"
								/>
							</svg>
						{:else if destacado.accent === 'purple'}
							<svg
								class="h-6 w-6 {accentIconClasses(destacado.accent)}"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								aria-hidden="true"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
								/>
							</svg>
						{:else}
							<svg
								class="h-6 w-6 {accentIconClasses(destacado.accent)}"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								aria-hidden="true"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M12 4v16m8-8H4"
								/>
							</svg>
						{/if}
					</div>

					<h3 class="mb-2 text-lg font-bold text-gray-900 sm:text-xl dark:text-gray-100">{destacado.titulo}</h3>
					<p class="mb-5 flex-grow text-sm leading-relaxed text-gray-600 sm:text-base dark:text-gray-400">
						{destacado.descripcion}
					</p>
					<span
						class="mt-auto inline-flex items-center gap-2 text-sm font-semibold transition-[gap] duration-150 sm:gap-1 sm:duration-300 sm:group-hover:gap-2 {accentLinkClass(
							destacado.accent
						)}"
					>
						Ver más
						<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M17 8l4 4m0 0l-4 4m4-4H3"
							/>
						</svg>
					</span>
				</a>
			{/each}
		</div>
	</section>

	<!-- Contacto -->
	<section
		id="contacto"
		class="relative mx-4 sm:mx-6 overflow-hidden rounded-2xl border border-purple-900/10 px-5 py-10 shadow-xl sm:rounded-3xl sm:px-8 sm:py-12 md:py-14 dark:border-purple-500/20"
		aria-labelledby="contacto-heading"
	>
		<div class="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-900 to-indigo-900"></div>
		<div
			class="pointer-events-none absolute -right-16 top-0 h-64 w-64 rounded-full bg-white/10 blur-3xl"
		></div>
		<div
			class="pointer-events-none absolute -bottom-20 left-0 h-56 w-56 rounded-full bg-indigo-500/20 blur-3xl"
		></div>

		<div class="relative z-10 mx-auto max-w-3xl text-center">
			<h2
				id="contacto-heading"
				class="mb-3 text-2xl font-bold text-white sm:text-3xl md:text-4xl"
			>
				¿Trabajamos juntos?
			</h2>
			<p class="mb-8 text-sm leading-relaxed text-purple-100/95 sm:text-base md:text-lg">
				Estoy en búsqueda activa: freelance, contractor o relación de dependencia. Si algo de mi perfil encaja,
				escribime.
			</p>

			<div
				class="flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-3 md:gap-4"
			>
				<a
					data-tooltip-target="tooltip-linkedin"
					data-tooltip-placement="bottom"
					href="https://www.linkedin.com/in/diegodavidalmiron"
					target="_blank"
					rel="noopener noreferrer"
					class="contact-btn contact-btn-linkedin inline-flex h-12 items-center justify-center gap-2 rounded-xl px-5 text-sm font-bold text-white shadow-lg transition active:scale-[0.98] focus:outline-none sm:min-w-[11rem]"
				>
					<i class="fa-brands fa-linkedin-in fa-lg"></i>
					LinkedIn
				</a>
				<div id="tooltip-linkedin" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-800 rounded-lg shadow-xs opacity-0 tooltip">
					Visita mi perfil de LinkedIn
					<div class="tooltip-arrow" data-popper-arrow></div>
				</div>
				<a
					data-tooltip-target="tooltip-wa"
					data-tooltip-placement="bottom"
					href="https://wa.me/+543795315483?text=Hola Diego, vi tu portafolio y me gustaría conversar sobre una posible vacante..."
					target="_blank"
					rel="noopener noreferrer"
					class="contact-btn contact-btn-wa inline-flex h-12 items-center justify-center gap-2 rounded-xl px-5 text-sm font-bold text-white shadow-lg transition active:scale-[0.98] focus:outline-none sm:min-w-[11rem]"
				>
					<i class="fa-brands fa-whatsapp fa-lg"></i>
					WhatsApp
				</a>
				<div id="tooltip-wa" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-800 rounded-lg shadow-xs opacity-0 tooltip">
					Iniciar una conversación por WhatsApp
					<div class="tooltip-arrow" data-popper-arrow></div>
				</div>
				<button
					data-tooltip-target="tooltip-contacto-cta-modal"
					data-tooltip-placement="bottom"
					type="button"
					class="contact-btn contact-btn-cta inline-flex h-12 items-center justify-center gap-2 rounded-xl px-5 text-sm font-bold text-white shadow-lg transition active:scale-[0.98] focus:outline-none sm:min-w-[11rem]"
					on:click={() => contactModalOpen.set(true)}
				>
					<i class="fa-regular fa-envelope fa-lg"></i>
					Contacto
				</button>
				<div id="tooltip-contacto-cta-modal" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-800 rounded-lg shadow-xs opacity-0 tooltip">
					Abrir el formulario de contacto
					<div class="tooltip-arrow" data-popper-arrow></div>
				</div>
			</div>
			<div class="">
				<button data-tooltip-target="tooltip-correo" data-tooltip-placement="bottom" class="mt-6 text-xs sm:text-sm font-mono text-purple-200" on:click={() => copiarTexto("diegodavidalmiron17@gmail.com")}>
						diegodavidalmiron17@gmail.com <i class="fa-regular fa-copy"></i>
				</button>
				<div id="tooltip-correo" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-800 rounded-lg shadow-xs opacity-0 tooltip whitespace-nowrap">
					Copiar al portapapeles
					<div class="tooltip-arrow" data-popper-arrow></div>
				</div>
			</div>
		</div>
	</section>
</div>

<style>
	.contact-btn {
		position: relative;
	}
	.contact-btn-linkedin {
		background: linear-gradient(135deg, #064a8f 0%, #002d56 100%);
		box-shadow:
			0 10px 25px -5px rgba(6, 42, 88, 0.6),
			0 0 0 1px rgba(255, 255, 255, 0.1) inset;
	}
	.contact-btn-linkedin:hover {
		filter: brightness(1.1);
		box-shadow:
			0 14px 32px -4px rgba(14, 116, 184, 0.4),
			0 0 0 1px rgba(255, 255, 255, 0.16) inset;
	}
	.contact-btn-linkedin:focus-visible {
		box-shadow:
			0 0 0 2px #1e1b4b,
			0 0 0 4px #0ea5e9,
			0 14px 32px -4px rgba(14, 116, 184, 0.4);
	}
	.contact-btn-mail {
		background: linear-gradient(135deg, #c81e42 0%, #b91c7c 45%, #6d28d9 100%);
		box-shadow:
			0 10px 25px -5px rgba(157, 23, 77, 0.55),
			0 0 0 1px rgba(255, 255, 255, 0.1) inset;
	}
	.contact-btn-mail:hover {
		filter: brightness(1.08);
		box-shadow:
			0 14px 32px -4px rgba(190, 24, 93, 0.48),
			0 0 0 1px rgba(255, 255, 255, 0.16) inset;
	}
	.contact-btn-mail:focus-visible {
		box-shadow:
			0 0 0 2px #1e1b4b,
			0 0 0 4px #db2777,
			0 14px 32px -4px rgba(190, 24, 93, 0.48);
	}
	.contact-btn-wa {
		background: linear-gradient(135deg, #1a9e52 0%, #0d6b5e 100%);
		box-shadow:
			0 10px 25px -5px rgba(13, 107, 94, 0.55),
			0 0 0 1px rgba(255, 255, 255, 0.1) inset;
	}
	.contact-btn-wa:hover {
		filter: brightness(1.08);
		box-shadow:
			0 14px 32px -4px rgba(22, 163, 74, 0.45),
			0 0 0 1px rgba(255, 255, 255, 0.16) inset;
	}
	.contact-btn-wa:focus-visible {
		box-shadow:
			0 0 0 2px #1e1b4b,
			0 0 0 4px #16a34a,
			0 14px 32px -4px rgba(22, 163, 74, 0.45);
	}
	.contact-btn-cta {
		color: #ffffff;
		background: linear-gradient(135deg, #404040 0%, #292929 40%, #141414 100%);
		box-shadow:
			0 10px 28px -5px rgba(0, 0, 0, 0.5),
			0 0 0 1px rgba(255, 255, 255, 0.1) inset;
	}
	.contact-btn-cta:hover {
		filter: brightness(1.08);
		box-shadow:
			0 16px 36px -4px rgba(0, 0, 0, 0.45),
			0 0 0 1px rgba(255, 255, 255, 0.14) inset;
	}
	.contact-btn-cta:focus-visible {
		box-shadow:
			0 0 0 2px #fafafa,
			0 0 0 4px #2d2d2d,
			0 16px 36px -4px rgba(0, 0, 0, 0.4);
	}
	.contact-btn-cta :global(svg) {
		stroke: #ffffff;
	}
</style>

<ImageModal
	isOpen={imageModalOpen}
	imageSrc="/images/profile.jpg"
	imageAlt="Diego David Almirón"
	on:close={() => (imageModalOpen = false)}
/>
