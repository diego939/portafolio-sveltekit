<script lang="ts">
	import { onMount } from 'svelte';
	import { contactModalOpen } from '$lib/stores/contactModal';
	import ImageModal from '$lib/ImageModal.svelte';

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
				return 'text-purple-900';
			case 'green':
				return 'text-emerald-700';
			case 'purple':
				return 'text-purple-700';
			case 'indigo':
				return 'text-indigo-700';
		}
	}

	function accentCardRing(a: DestacadoAccent): string {
		switch (a) {
			case 'blue':
				return 'hover:border-purple-300/60 focus-visible:ring-purple-500';
			case 'green':
				return 'hover:border-emerald-300/60 focus-visible:ring-emerald-500';
			case 'purple':
				return 'hover:border-purple-400/50 focus-visible:ring-purple-600';
			case 'indigo':
				return 'hover:border-indigo-300/60 focus-visible:ring-indigo-500';
		}
	}

	function accentIconBg(a: DestacadoAccent): string {
		switch (a) {
			case 'blue':
				return 'from-purple-100 to-indigo-100 ring-purple-200/80';
			case 'green':
				return 'from-emerald-50 to-teal-100 ring-emerald-200/80';
			case 'purple':
				return 'from-purple-50 to-violet-100 ring-purple-200/80';
			case 'indigo':
				return 'from-indigo-50 to-blue-100 ring-indigo-200/80';
		}
	}

	function accentLinkClass(a: DestacadoAccent): string {
		switch (a) {
			case 'blue':
				return 'text-purple-900 group-hover:text-purple-700';
			case 'green':
				return 'text-emerald-700 group-hover:text-emerald-800';
			case 'purple':
				return 'text-purple-700 group-hover:text-purple-900';
			case 'indigo':
				return 'text-indigo-700 group-hover:text-indigo-900';
		}
	}

	onMount(() => {
		document.title = 'Inicio - Diego David Almirón';
	});
</script>

<div class="space-y-10 sm:space-y-14 md:space-y-20 pb-4">
	<!-- Hero -->
	<section
		class="relative mx-4 sm:mx-6 overflow-hidden rounded-2xl sm:rounded-3xl border border-purple-900/10 shadow-xl shadow-purple-900/10"
		aria-labelledby="hero-heading"
	>
		<div
			class="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-100/90"
		></div>
		<div
			class="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-purple-400/20 blur-3xl"
		></div>
		<div
			class="pointer-events-none absolute -bottom-28 -left-16 h-80 w-80 rounded-full bg-indigo-400/15 blur-3xl"
		></div>
		<div
			class="pointer-events-none absolute top-1/2 left-1/2 h-px w-[min(90%,48rem)] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-purple-300/40 to-transparent"
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
						class="relative block overflow-hidden rounded-full border-4 border-white shadow-2xl ring-2 ring-purple-900/10 transition duration-300 group-hover:scale-[1.03] group-active:scale-[0.98]"
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
					class="mb-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl xl:text-6xl xl:leading-tight"
				>
					Hola, soy
					<span
						class="bg-gradient-to-r from-purple-900 via-violet-800 to-indigo-700 bg-clip-text text-transparent"
					>
						{nombre}
					</span>
				</h1>
				<p
					class="mb-5 max-w-3xl text-base font-medium text-gray-700 sm:text-lg md:text-xl md:leading-snug"
				>
					{titulo}
				</p>

				<div
					class="mb-6 flex max-w-4xl flex-wrap justify-center gap-2"
					aria-label="Tecnologías y áreas"
				>
					{#each tecnologias as tecnologia}
						<span
							class="rounded-full border border-purple-200/80 bg-white/80 px-2.5 py-1 text-xs font-medium text-purple-900 shadow-sm backdrop-blur-sm transition hover:border-purple-300 hover:bg-purple-50/90 sm:px-3 sm:text-sm"
						>
							{tecnologia}
						</span>
					{/each}
				</div>

				<p
					class="mx-auto mb-8 max-w-4xl px-2 text-center text-sm leading-relaxed text-gray-600 sm:px-4 sm:text-base"
				>
					{descripcion}
				</p>

				<div
					class="flex w-full max-w-md flex-col items-stretch justify-center gap-3 sm:mx-auto sm:max-w-none sm:flex-row sm:justify-center"
				>
					<a
						href="/proyectos"
						class="inline-flex items-center justify-center gap-2 rounded-xl bg-purple-900 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-900/25 transition hover:bg-purple-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 sm:px-6"
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
					</a>
					<button
						type="button"
						class="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-purple-900/25 bg-white/80 px-5 py-3 text-sm font-semibold text-purple-900 backdrop-blur-sm transition hover:border-purple-900/40 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 sm:px-6"
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
				</div>
			</div>
		</div>
	</section>

	<!-- Explorá el portafolio -->
	<section class="px-4 sm:px-6" aria-labelledby="explorar-heading">
		<div class="mx-auto mb-8 max-w-2xl text-center md:mb-10">
			<h2 id="explorar-heading" class="text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
				Explorá el portafolio
			</h2>
			<p class="mt-2 text-sm text-gray-600 sm:text-base">
				Navegá por cada sección para conocer mi formación, experiencia y trabajo.
			</p>
		</div>

		<div class="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
			{#each destacados as destacado (destacado.link)}
				<a
					href={destacado.link}
					class="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200/80 bg-white/90 p-6 shadow-md backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 {accentCardRing(
						destacado.accent
					)}"
				>
					<div
						class="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r opacity-90 {destacado.accent ===
						'blue'
							? 'from-purple-600 to-indigo-500'
							: destacado.accent === 'green'
								? 'from-emerald-500 to-teal-500'
								: destacado.accent === 'purple'
									? 'from-purple-500 to-violet-600'
									: 'from-indigo-500 to-blue-600'}"
					></div>

					<div
						class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br shadow-inner ring-1 {accentIconBg(
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

					<h3 class="mb-2 text-lg font-bold text-gray-900 sm:text-xl">{destacado.titulo}</h3>
					<p class="mb-5 flex-grow text-sm leading-relaxed text-gray-600 sm:text-base">
						{destacado.descripcion}
					</p>
					<span
						class="mt-auto inline-flex items-center gap-1 text-sm font-semibold transition group-hover:gap-2 {accentLinkClass(
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
		class="relative mx-4 sm:mx-6 overflow-hidden rounded-2xl border border-purple-900/10 px-5 py-10 shadow-xl sm:rounded-3xl sm:px-8 sm:py-12 md:py-14"
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
					href="https://www.linkedin.com/in/diegodavidalmiron"
					target="_blank"
					rel="noopener noreferrer"
					class="contact-btn contact-btn-linkedin inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-bold text-white shadow-lg transition active:scale-[0.98] focus:outline-none"
				>
					<svg class="h-4 w-4 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
						<path
							d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"
						/>
					</svg>
					LinkedIn
				</a>
				<a
					href="mailto:diegodavidalmiron17@gmail.com"
					class="contact-btn contact-btn-mail inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-bold text-white shadow-lg transition active:scale-[0.98] focus:outline-none"
				>
					<svg class="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
						<path
							stroke-linecap="round"
							stroke-width="2"
							d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
						/>
					</svg>
					Email
				</a>
				<a
					href="https://wa.me/+543795315483?text=Hola Diego, vi tu portafolio y me gustaría conversar sobre una posible vacante..."
					target="_blank"
					rel="noopener noreferrer"
					class="contact-btn contact-btn-wa inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-bold text-white shadow-lg transition active:scale-[0.98] focus:outline-none"
				>
					<svg class="h-4 w-4 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
						<path
							d="M20.52 3.48A12.07 12.07 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.12.55 4.19 1.6 6.01L0 24l6.18-1.62A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.21-1.25-6.23-3.48-8.52zM12 22c-1.85 0-3.66-.5-5.23-1.44l-.37-.22-3.67.96.98-3.58-.24-.37A9.94 9.94 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.8c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.41-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.62-.47-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.34-.26.27-1 1-.98 2.43.02 1.43 1.03 2.81 1.18 3 .15.19 2.03 3.1 4.93 4.23.69.3 1.23.48 1.65.61.69.22 1.32.19 1.81.12.55-.08 1.65-.67 1.89-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z"
						/>
					</svg>
					WhatsApp
				</a>
				<button
					type="button"
					class="contact-btn contact-btn-cta inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-bold shadow-lg transition active:scale-[0.98] focus:outline-none sm:min-w-[11rem]"
					on:click={() => contactModalOpen.set(true)}
				>
					<svg class="h-4 w-4 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
						<path d="M21 10.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4.5" />
						<path d="M16 3v4" />
						<path d="M8 3v4" />
						<path d="M3 10h18" />
					</svg>
					Contactame
				</button>
			</div>
		</div>
	</section>
</div>

<style>
	.contact-btn {
		position: relative;
	}
	.contact-btn-linkedin {
		background: linear-gradient(135deg, #0a66c2 0%, #004182 100%);
		box-shadow:
			0 10px 25px -5px rgba(10, 102, 194, 0.55),
			0 0 0 1px rgba(255, 255, 255, 0.12) inset;
	}
	.contact-btn-linkedin:hover {
		filter: brightness(1.12);
		box-shadow:
			0 14px 32px -4px rgba(56, 189, 248, 0.45),
			0 0 0 1px rgba(255, 255, 255, 0.2) inset;
	}
	.contact-btn-linkedin:focus-visible {
		box-shadow:
			0 0 0 2px #1e1b4b,
			0 0 0 4px #38bdf8,
			0 14px 32px -4px rgba(56, 189, 248, 0.45);
	}
	.contact-btn-mail {
		background: linear-gradient(135deg, #f43f5e 0%, #ec4899 45%, #a855f7 100%);
		box-shadow:
			0 10px 25px -5px rgba(236, 72, 153, 0.55),
			0 0 0 1px rgba(255, 255, 255, 0.12) inset;
	}
	.contact-btn-mail:hover {
		filter: brightness(1.1);
		box-shadow:
			0 14px 32px -4px rgba(244, 114, 182, 0.5),
			0 0 0 1px rgba(255, 255, 255, 0.2) inset;
	}
	.contact-btn-mail:focus-visible {
		box-shadow:
			0 0 0 2px #1e1b4b,
			0 0 0 4px #f472b6,
			0 14px 32px -4px rgba(244, 114, 182, 0.5);
	}
	.contact-btn-wa {
		background: linear-gradient(135deg, #25d366 0%, #128c7e 100%);
		box-shadow:
			0 10px 25px -5px rgba(37, 211, 102, 0.55),
			0 0 0 1px rgba(255, 255, 255, 0.12) inset;
	}
	.contact-btn-wa:hover {
		filter: brightness(1.1);
		box-shadow:
			0 14px 32px -4px rgba(52, 211, 153, 0.5),
			0 0 0 1px rgba(255, 255, 255, 0.2) inset;
	}
	.contact-btn-wa:focus-visible {
		box-shadow:
			0 0 0 2px #1e1b4b,
			0 0 0 4px #34d399,
			0 14px 32px -4px rgba(52, 211, 153, 0.5);
	}
	.contact-btn-cta {
		color: #1c1917;
		background: linear-gradient(135deg, #fde047 0%, #fbbf24 50%, #f59e0b 100%);
		box-shadow:
			0 10px 28px -5px rgba(251, 191, 36, 0.65),
			0 0 0 1px rgba(255, 255, 255, 0.35) inset;
	}
	.contact-btn-cta:hover {
		filter: brightness(1.08);
		box-shadow:
			0 16px 36px -4px rgba(253, 224, 71, 0.55),
			0 0 0 1px rgba(255, 255, 255, 0.45) inset;
	}
	.contact-btn-cta:focus-visible {
		box-shadow:
			0 0 0 2px #1e1b4b,
			0 0 0 4px #fde047,
			0 16px 36px -4px rgba(253, 224, 71, 0.55);
	}
	.contact-btn-cta :global(svg) {
		stroke: #1c1917;
	}
</style>

<ImageModal
	isOpen={imageModalOpen}
	imageSrc="/images/profile.jpg"
	imageAlt="Diego David Almirón"
	on:close={() => (imageModalOpen = false)}
/>
