
<script lang="ts">
	import { onMount, tick } from 'svelte';
	import AOS from 'aos';
	import 'aos/dist/aos.css';

	const experiencia = [
	{
		cargo: "Desarrollador Web",
		empresa: "Freelance",
		fecha: "2026 - Actualidad",
		descripcion:
			"Actualmente me desempeño como desarrollador web freelance, creando software a medida para clientes reales. Desarrollo aplicaciones modernas y escalables utilizando Angular y Tailwind CSS en el frontend, junto con Node.js, NestJS y .NET en el backend. Me enfoco en la construcción de APIs RESTful, integración de sistemas y soluciones orientadas a mejorar procesos de negocio.",
		tecnologias: [
			"Angular",
			"Tailwind CSS",
			"Node.js",
			"NestJS",
			".NET",
			"SQL Server",
			"MySQL",
			"Git",
			"GitHub"
		],
		icono: `<i class="fa-solid fa-globe text-blue-500"></i>`
	},
	{
		cargo: "Desarrollador Frontend",
		empresa: "Tob Group",
		fecha: "2025 - 2025",
		descripcion: `Desarrollador frontend enfocado en la construcción de interfaces modernas, responsivas y optimizadas. Participé activamente aportando en proyectos reales de alto impacto como 
			<a
				href="https://tobgroup.io"
				target="_blank"
				rel="noopener noreferrer"
				class="mx-0.5 my-0.5 inline-block rounded-full bg-gray-900 px-1.5 py-0.5 text-[10px] font-medium leading-tight text-white sm:px-2 sm:text-xs md:px-3 md:text-sm dark:bg-gray-700"
			>
				Tob Group
			</a>, 
			<a
				href="https://deportivo-colon.tobgroup.io"
				target="_blank"
				rel="noopener noreferrer"
				class="mx-0.5 my-0.5 inline-block rounded-full bg-purple-500 px-1.5 py-0.5 text-[10px] font-medium leading-tight text-white sm:px-2 sm:text-xs md:px-3 md:text-sm dark:bg-purple-600"
			>
				Club Deportivo Colón
			</a>, 
			<a
				href="https://sps-salud.vercel.app"
				target="_blank"
				rel="noopener noreferrer"
				class="mx-0.5 my-0.5 inline-block rounded-full bg-gray-500 px-1.5 py-0.5 text-[10px] font-medium leading-tight text-white sm:px-2 sm:text-xs md:px-3 md:text-sm dark:bg-gray-600"
			>
				SPS Salud
			</a>,
			<a
				disabled
				rel="noopener noreferrer"
				class="mx-0.5 my-0.5 inline-block rounded-full bg-green-500 px-1.5 py-0.5 text-[10px] font-medium leading-tight text-white sm:px-2 sm:text-xs md:px-3 md:text-sm dark:bg-green-700"
			>
				Caja Municipal de Préstamos
			</a>, 
			trabajando con Angular, SvelteKit y Tailwind CSS en una etapa de especialización <span class="font-bold">frontend</span>, creando experiencias de usuario fluidas y responsivas. Integración con APIs, validación de formularios y maquetación avanzada. En paralelo, mantuve participación activa en backend implementando endpoints con Node.js y NestJS, consolidando un perfil fullstack. Uso de Azure DevOps y Git Flow para la gestión y versionado del proyecto.`,
		tecnologias: [
			"Angular",
			"SvelteKit",
			"Tailwind CSS",
			"JavaScript",
			"TypeScript",
			"Node.js",
			"NestJS",
			"Azure DevOps",
			"Git Flow"
		],
		icono: `<i class="fa-solid fa-palette text-purple-500"></i>`
	},
	{
		cargo: "Desarrollador Fullstack",
		empresa: "Tob Group",
		fecha: "2025 - 2025",
		descripcion: `Desarrollador fullstack participando activamente en proyectos reales de alto impacto. Colaboro en el desarrollo de aplicaciones web escalables utilizando tecnologías modernas como NestJS, SvelteKit y Prisma. Participo en proyectos como 
			<a
				href="https://pirra.bar"
				target="_blank"
				rel="noopener noreferrer"
				class="mx-0.5 my-0.5 inline-block rounded-full bg-gray-500 px-1.5 py-0.5 text-[10px] font-medium leading-tight text-white sm:px-2 sm:text-xs md:px-3 md:text-sm dark:bg-gray-600"
			>
				Pirra
			</a>, 
			<a
				href="https://tc2000-backoffice.tobgroup.io"
				target="_blank"
				rel="noopener noreferrer"
				class="mx-0.5 my-0.5 inline-block rounded-full bg-red-500 px-1.5 py-0.5 text-[10px] font-medium leading-tight text-white sm:px-2 sm:text-xs md:px-3 md:text-sm dark:bg-red-700"
			>
				Tc2000
			</a>, 
			<a
				href="https://brios.tobgroup.io"
				target="_blank"
				rel="noopener noreferrer"
				class="mx-0.5 my-0.5 inline-block rounded-full bg-blue-500 px-1.5 py-0.5 text-[10px] font-medium leading-tight text-white sm:px-2 sm:text-xs md:px-3 md:text-sm dark:bg-blue-700"
			>
				Brios
			</a>, 
			<a
				href="https://mec.tobgroup.io"
				target="_blank"
				rel="noopener noreferrer"
				class="mx-0.5 my-0.5 inline-block rounded-full bg-green-500 px-1.5 py-0.5 text-[10px] font-medium leading-tight text-white sm:px-2 sm:text-xs md:px-3 md:text-sm dark:bg-green-700"
			>
				Mec
			</a>,
			aplicando metodologías ágiles y mejores prácticas de desarrollo. Utilizo herramientas de desarrollo como Postman para testing de APIs, Azure DevOps para gestión de proyectos y Git Flow para control de versiones. Trabajo en equipo implementando arquitecturas robustas con MySQL como base de datos principal.`,
		tecnologias: [
			"SvelteKit",
			"Prisma",
			"MySQL",
			"Postman",
			"Node.js",
			"NestJS",
			"Azure DevOps",
			"Git Flow"
		],
		icono: `<i class="fa-solid fa-rocket text-yellow-500"></i>`
	},
	{
		cargo: "Desarrollador Web",
		empresa: "Fundasoft",
		fecha: "2024 - 2024",
		descripcion:
			"Desarrollé y maqueté páginas web para una ONG utilizando HTML, CSS y JavaScript, implementando módulos interactivos para la visualización de información. Colaboré en el diseño de interfaces atractivas y optimizadas para la experiencia de usuario, utilizando Bootstrap para lograr un diseño responsive. Trabajé en equipo bajo metodologías ágiles (Scrum/Kanban), gestionando tareas con Trello. Participé en el desarrollo de funcionalidades adicionales con Svelte y Node.js, incluyendo la integración de pasarelas de pago, AWS SES y chatbots. Apliqué control de versiones con GitFlow y contribuí a la mejora de la accesibilidad e interacción del sitio.",
		tecnologias: [
			"HTML",
			"CSS",
			"JavaScript",
			"Svelte",
			"Bootstrap",
			"Node.js",
			"AWS SES",
			"GitFlow",
			"Trello"
		],
		icono: `<i class="fa-solid fa-globe text-blue-500"></i>`
	},
	{
		cargo: "Desarrollador Web",
		empresa: "Freelance Web",
		fecha: "2020 - 2024",
		descripcion:
			"Desde el año 2020, he tenido el privilegio de trabajar como desarrollador web freelance, adquiriendo conocimientos especializados en tecnologías clave como Angular, Svelte, Vue.js, React, Node.js, HTML5, CSS3, Bootstrap, Tailwind CSS, Java, Spring Boot, JavaScript, TypeScript, jQuery, NestJS, .NET, PHP, MySQL, JSON. Estos lenguajes y frameworks han sido fundamentales en mi trayectoria, permitiéndome crear aplicaciones web dinámicas y atractivas. Además, he tenido la oportunidad de utilizar una variedad de herramientas que han optimizado mi flujo de trabajo. Entre ellas se encuentran Visual Studio Code, Visual Basic, Apache Netbeans, Eclipse, Sublime Text, SQL Server, MySQL Workbench, phpMyAdmin, Git y GitHub.",
		tecnologias: [
			"Angular",
			"Svelte",
			"Vue.js",
			"React",
			"Node.js",
			"HTML5",
			"CSS3",
			"Bootstrap",
			"Tailwind CSS",
			"Java",
			"Spring Boot",
			"JavaScript",
			"TypeScript",
			"jQuery",
			"NestJS",
			".NET",
			"PHP",
			"MySQL",
			"JSON",
			"Git",
			"GitHub"
		],
		icono: `<i class="fa-solid fa-globe text-blue-500"></i>`
	},
	{
		cargo: "Soporte Técnico y Mantenimiento de PC",
		empresa: "Freelance",
		fecha: "2017 - 2024",
		descripcion:
			"Instalación de sistemas operativos, backup y mantenimiento de PC. Instalación de programas de edición de videos, de edición de fotos, paquetes de Microsoft 365, Microsoft Office (2010, en adelante). Se realizan instalación de sistemas operativos de todas las versiones disponibles de Windows (Windows 8, Windows 8.1, Windows 10, Windows 10 MiniOS, Windows 11).",
		tecnologias: [
			"Windows 8",
			"Windows 8.1",
			"Windows 10",
			"Windows 11",
			"Microsoft Office",
			"Microsoft 365"
		],
		icono: `<i class="fa-solid fa-hammer text-red-500"></i>`
	}
];

	onMount(async () => {
		document.title = 'Experiencia - Diego David Almirón';

		// Esperamos a que Svelte termine de renderizar el DOM
		await tick();

		// Inicializamos AOS una única vez
		AOS.init({
			duration: 700,
			easing: 'ease-out-cubic',
			once: true,
			offset: 100,
			anchorPlacement: 'top-bottom'
		});
	});
</script>

<div class="space-y-10 pb-6 sm:space-y-14 md:space-y-16">

	<!-- Header -->
	<header class="px-4 text-center sm:px-6">
		<h1
			class="mb-2 text-xl font-bold text-gray-900 sm:mb-3 sm:text-3xl md:text-4xl dark:text-gray-100"
		>
			Experiencia laboral
		</h1>

		<p
			class="mx-auto max-w-2xl text-xs leading-relaxed text-gray-600 sm:text-base md:text-lg dark:text-gray-400"
		>
			Roles, tecnologías y contextos donde fui creciendo como desarrollador.
		</p>
	</header>

	<!-- Timeline -->
	<section
		class="relative mx-0 overflow-visible px-2.5 py-7 sm:mx-6 sm:overflow-hidden sm:rounded-3xl sm:border sm:border-purple-900/10 sm:px-5 sm:py-12 sm:shadow-xl md:px-6 md:py-14 dark:sm:border-purple-500/20"
		aria-label="Línea de tiempo de experiencia"
	>
		<div
			class="pointer-events-none absolute inset-0 hidden bg-gradient-to-br from-indigo-50/90 via-white to-purple-50/80 dark:from-gray-900 dark:via-gray-900 dark:to-purple-950/80 sm:block"
		></div>

		<div
			class="pointer-events-none absolute -right-24 top-20 hidden h-64 w-64 rounded-full bg-purple-300/25 blur-3xl sm:block"
		></div>

		<div
			class="pointer-events-none absolute -bottom-20 -left-20 hidden h-72 w-72 rounded-full bg-indigo-200/30 blur-3xl sm:block"
		></div>

		<div class="relative z-10 mx-auto w-full max-w-6xl max-sm:max-w-none">

			<!-- Línea vertical -->
			<div
				class="absolute bottom-0 left-[0.875rem] top-0 w-1 -translate-x-1/2 rounded-full bg-gradient-to-b from-purple-600 via-indigo-500 to-purple-900 shadow-[0_0_20px_rgba(88,28,135,0.35)] sm:left-[1.125rem] md:left-8"
			></div>

			<div class="space-y-6 sm:space-y-8 md:space-y-10">

				{#each experiencia as item, index}
					<div
						class="relative flex items-start gap-3 pl-8 sm:gap-4 sm:pl-10 md:gap-6 md:pl-16"
					>

						<!-- Nodo -->
						<div
							class="absolute left-[0.875rem] top-5 z-10 flex -translate-x-1/2 sm:left-[1.125rem] sm:top-6 md:left-8 md:top-7"
						>
							<span
								class="flex h-3.5 w-3.5 rounded-full border-[2.5px] border-white bg-gradient-to-br from-purple-600 to-indigo-600 shadow-md ring-2 ring-purple-400/50 dark:border-gray-800 sm:h-4 sm:w-4 sm:border-[3px] md:h-5 md:w-5 {index === 0
									? 'ring-4 ring-emerald-400/70 shadow-emerald-500/30'
									: ''}"
							></span>
						</div>

						<!-- Experiencia -->
						<article
							class="group flex-1 overflow-hidden rounded-2xl border border-purple-900/10 bg-white shadow-lg transition duration-300 hover:border-purple-900/25 hover:shadow-xl dark:border-purple-500/20 dark:bg-gray-900 dark:hover:border-purple-400/40 sm:bg-white/85 sm:backdrop-blur-sm md:hover:-translate-y-0.5 dark:sm:bg-gray-900/95"
							data-aos="fade-up"
						>
							<div
								class="h-1 w-full bg-gradient-to-r from-purple-600 via-violet-500 to-indigo-600 opacity-90"
							></div>

							<div class="p-3.5 sm:p-6 md:p-7">

								<div
									class="mb-3.5 flex flex-col gap-2.5 sm:mb-4 sm:flex-row sm:items-start sm:justify-between sm:gap-4"
								>
									<div class="flex min-w-0 items-start gap-2.5 sm:gap-3">

										<div
											class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-50 to-indigo-50 text-lg ring-1 ring-purple-900/10 shadow-inner dark:from-purple-950 dark:to-indigo-950 dark:ring-purple-600/30 sm:h-12 sm:w-12 sm:text-2xl"
										>
											{@html item.icono}
										</div>

										<div class="min-w-0">
											<h2
												class="text-base font-bold leading-tight text-gray-900 sm:text-xl sm:leading-normal md:text-2xl dark:text-gray-100"
											>
												{item.cargo}
											</h2>

											<p class="text-xs font-semibold text-purple-900 sm:text-base dark:text-purple-300">
												{item.empresa}
											</p>
										</div>

									</div>

									<div
										class="flex flex-wrap items-center gap-1.5 self-start sm:flex-col sm:items-end sm:gap-2"
									>

										{#if item.fecha.includes('Actualidad')}
											<span
												class="inline-flex items-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-emerald-800 ring-1 ring-emerald-200/80 dark:bg-emerald-950/80 dark:text-emerald-200 dark:ring-emerald-800/50 sm:px-3 sm:py-1 sm:text-xs"
											>
												En curso
											</span>
										{/if}

										<time
											class="rounded-full border border-gray-200/80 bg-gray-50/90 px-2.5 py-1 text-[10px] font-semibold text-gray-700 shadow-sm dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 sm:px-3 sm:py-1.5 sm:text-sm"
											datetime={item.fecha}
										>
											{item.fecha}
										</time>

									</div>
								</div>

								<div
									class="prose-experience mb-4 text-xs leading-relaxed text-gray-600 sm:mb-5 sm:text-base sm:leading-relaxed dark:text-gray-400"
								>
									{@html item.descripcion}
								</div>

								<div
									class="flex flex-wrap gap-1.5 sm:gap-2"
									aria-label="Tecnologías"
								>
									{#each item.tecnologias as tecnologia}
										<span
											class="rounded-full border border-purple-200/70 bg-gradient-to-br from-white to-purple-50/80 px-2 py-0.5 text-[10px] font-medium text-purple-900 shadow-sm transition group-hover:border-purple-300 dark:border-purple-700/50 dark:from-gray-800 dark:to-purple-950/80 dark:text-purple-200 sm:px-3 sm:py-1 sm:text-sm"
										>
											{tecnologia}
										</span>
									{/each}
								</div>

							</div>
						</article>
					</div>
				{/each}

			</div>
		</div>
	</section>

	<!-- Estadísticas -->
	<section
		class="relative mx-4 overflow-hidden rounded-2xl border border-purple-900/10 px-4 py-8 shadow-xl sm:mx-6 sm:rounded-3xl sm:px-8 sm:py-12 md:py-14 dark:border-purple-500/20"
		aria-labelledby="stats-experiencia-heading"
	>
		<div
			class="pointer-events-none absolute inset-0 bg-gradient-to-br from-white via-purple-50/50 to-indigo-50/70 dark:from-gray-900 dark:via-purple-950/40 dark:to-indigo-950/70"
		></div>

		<div
			class="pointer-events-none absolute left-1/2 top-0 h-px w-[min(100%,36rem)] -translate-x-1/2 bg-gradient-to-r from-transparent via-purple-300/50 to-transparent"
		></div>

		<div class="relative z-10 mx-auto max-w-5xl">

			<div class="mb-7 text-center sm:mb-10">
				<h2
					id="stats-experiencia-heading"
					class="text-xl font-bold text-gray-900 sm:text-3xl md:text-4xl dark:text-gray-100"
				>
					En números
				</h2>

				<p class="mt-1.5 text-xs leading-relaxed text-gray-600 sm:mt-2 sm:text-base dark:text-gray-400">
					Un vistazo rápido a mi recorrido técnico.
				</p>
			</div>

			<div class="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-5">

				<!-- Años de experiencia -->
				<div
					class="rounded-2xl border border-emerald-900/10 bg-white p-4 text-center shadow-md transition hover:shadow-lg dark:border-emerald-800/30 dark:bg-gray-900 sm:bg-white/90 sm:p-6 sm:backdrop-blur-sm md:hover:-translate-y-0.5 dark:sm:bg-gray-900/95"
				>
					<div
						class="mx-auto mb-2.5 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-lg sm:mb-3 sm:h-12 sm:w-12"
					>
						<svg
							class="h-5 w-5 sm:h-6 sm:w-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
							/>
						</svg>
					</div>

					<p class="text-3xl font-bold tabular-nums text-emerald-700 sm:text-4xl">
						5+
					</p>

					<p class="mt-1 text-sm font-semibold text-gray-900 dark:text-gray-100">
						Años de experiencia
					</p>

					<p class="mt-1 text-[10px] leading-relaxed text-gray-500 sm:text-xs dark:text-gray-400">
						Trayectoria general en IT
					</p>
				</div>

				<!-- Años en empresas -->
				<div
					class="rounded-2xl border border-purple-900/10 bg-white p-4 text-center shadow-md transition hover:shadow-lg dark:border-purple-800/30 dark:bg-gray-900 sm:bg-white/90 sm:p-6 sm:backdrop-blur-sm md:hover:-translate-y-0.5 dark:sm:bg-gray-900/95"
				>
					<div
						class="mx-auto mb-2.5 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-purple-700 to-indigo-700 text-white shadow-lg sm:mb-3 sm:h-12 sm:w-12"
					>
						<svg
							class="h-5 w-5 sm:h-6 sm:w-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
							/>
						</svg>
					</div>

					<p class="text-3xl font-bold tabular-nums text-purple-900 sm:text-4xl">
						1+
					</p>

					<p class="mt-1 text-sm font-semibold text-gray-900 dark:text-gray-100">
						Años en empresas
					</p>

					<p class="mt-1 text-[10px] leading-relaxed text-gray-500 sm:text-xs dark:text-gray-400">
						Experiencia corporativa
					</p>
				</div>

				<!-- Tecnologías -->
				<div
					class="rounded-2xl border border-violet-900/10 bg-white p-4 text-center shadow-md transition hover:shadow-lg dark:border-violet-800/30 dark:bg-gray-900 sm:bg-white/90 sm:p-6 sm:backdrop-blur-sm md:hover:-translate-y-0.5 dark:sm:bg-gray-900/95"
				>
					<div
						class="mx-auto mb-2.5 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-purple-600 text-white shadow-lg sm:mb-3 sm:h-12 sm:w-12"
					>
						<svg
							class="h-5 w-5 sm:h-6 sm:w-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
							/>
						</svg>
					</div>

					<p class="text-3xl font-bold tabular-nums text-violet-700 sm:text-4xl">
						15+
					</p>

					<p class="mt-1 text-sm font-semibold text-gray-900 dark:text-gray-100">
						Tecnologías
					</p>

					<p class="mt-1 text-[10px] leading-relaxed text-gray-500 sm:text-xs dark:text-gray-400">
						Stack que manejo con soltura
					</p>
				</div>

				<!-- Empresas -->
				<div
					class="rounded-2xl border border-amber-900/10 bg-white p-4 text-center shadow-md transition hover:shadow-lg dark:border-amber-800/30 dark:bg-gray-900 sm:bg-white/90 sm:p-6 sm:backdrop-blur-sm md:hover:-translate-y-0.5 dark:sm:bg-gray-900/95"
				>
					<div
						class="mx-auto mb-2.5 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-lg sm:mb-3 sm:h-12 sm:w-12"
					>
						<svg
							class="h-5 w-5 sm:h-6 sm:w-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
							/>
						</svg>
					</div>

					<p class="text-3xl font-bold tabular-nums text-amber-700 sm:text-4xl">
						2
					</p>

					<p class="mt-1 text-sm font-semibold text-gray-900 dark:text-gray-100">
						Empresas
					</p>

					<p class="mt-1 text-[10px] leading-relaxed text-gray-500 sm:text-xs dark:text-gray-400">
						Organizaciones donde trabajé
					</p>
				</div>

			</div>
		</div>
	</section>
</div>

<style>
	/* Enlaces incrustados en descripciones HTML */
	:global(.prose-experience a:not([disabled])) {
		display: inline-flex;
		align-items: center;
		margin: 0 0.125rem;
		border-radius: 9999px;
		padding: 0.125rem 0.625rem;
		font-size: 0.75rem;
		font-weight: 600;
		text-decoration: none;
		transition:
			transform 0.15s ease,
			filter 0.15s ease;
	}

	@media (min-width: 768px) {
		:global(.prose-experience a:not([disabled])) {
			padding: 0.125rem 0.75rem;
			font-size: 0.875rem;
		}
	}

	:global(.prose-experience a:not([disabled]):hover) {
		filter: brightness(1.08);
		transform: translateY(-1px);
	}

	:global(.prose-experience a[disabled]) {
		cursor: default;
		opacity: 0.85;
	}
</style>