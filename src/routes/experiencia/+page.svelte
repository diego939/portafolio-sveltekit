<script lang="ts">
	import { onMount } from 'svelte';

	// Datos de ejemplo - personaliza con tu información
	const experiencia = [
		{
			cargo: "Desarrollador Web",
			empresa: "Freelance",
			fecha: "2026 - Actualidad",
			descripcion: "Actualmente me desempeño como desarrollador web freelance, creando software a medida para clientes reales. Desarrollo aplicaciones modernas y escalables utilizando Angular y Tailwind CSS en el frontend, junto con Node.js, NestJS y .NET en el backend. Me enfoco en la construcción de APIs RESTful, integración de sistemas y soluciones orientadas a mejorar procesos de negocio.",
			tecnologias: ["Angular", "Tailwind CSS", "Node.js", "NestJS", ".NET", "SQL Server", "MySQL", "Git", "GitHub"],
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
				class="px-2 md:px-3 py-0.5 bg-gray-900 text-white rounded-full text-xs md:text-sm font-medium"
				>
				Tob Group
				</a>, 
			<a
				href="https://deportivo-colon.tobgroup.io"
				target="_blank"
				rel="noopener noreferrer"
				class="px-2 md:px-3 py-0.5 bg-purple-500 text-white rounded-full text-xs md:text-sm font-medium"
				>
				Club Deportivo Colón
				</a>, 
			<a
				href="https://sps-salud.vercel.app"
				target="_blank"
				rel="noopener noreferrer"
				class="px-2 md:px-3 py-0.5 bg-gray-500 text-white rounded-full text-xs md:text-sm font-medium"
				>
				SPS Salud
				</a>,
			<a
				disabled
				rel="noopener noreferrer"
				class="px-2 md:px-3 py-0.5 bg-green-500 text-white rounded-full text-xs md:text-sm font-medium"
				>
				Caja Municipal de Préstamos
				</a>, 
			trabajando con Angular, SvelteKit y Tailwind CSS en una etapa de especialización <span class="font-bold">frontend</span>, creando experiencias de usuario fluidas y responsivas. Integración con APIs, validación de formularios y maquetación avanzada. En paralelo, mantuve participación activa en backend implementando endpoints con Node.js y NestJS, consolidando un perfil fullstack. Uso de Azure DevOps y Git Flow para la gestión y versionado del proyecto.`,
			tecnologias: ["Angular", "SvelteKit", "Tailwind CSS", "JavaScript", "TypeScript", "Node.js", "NestJS", "Azure DevOps", "Git Flow"],
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
				class="px-2 md:px-3 py-0.5 bg-gray-500 text-white rounded-full text-xs md:text-sm font-medium"
				>
				Pirra
				</a>, 
			<a
				href="https://tc2000-backoffice.tobgroup.io"
				target="_blank"
				rel="noopener noreferrer"
				class="px-2 md:px-3 py-0.5 bg-red-500 text-white rounded-full text-xs md:text-sm font-medium"
				>
				Tc2000
				</a>, 
			<a
				href="https://brios.tobgroup.io"
				target="_blank"
				rel="noopener noreferrer"
				class="px-2 md:px-3 py-0.5 bg-blue-500 text-white rounded-full text-xs md:text-sm font-medium"
				>
				Brios
				</a>, 
			<a
				href="https://mec.tobgroup.io"
				target="_blank"
				rel="noopener noreferrer"
				class="px-2 md:px-3 py-0.5 bg-green-500 text-white rounded-full text-xs md:text-sm font-medium"
				>
				Mec
				</a>,
			 aplicando metodologías ágiles y mejores prácticas de desarrollo. Utilizo herramientas de desarrollo como Postman para testing de APIs, Azure DevOps para gestión de proyectos y Git Flow para control de versiones. Trabajo en equipo implementando arquitecturas robustas con MySQL como base de datos principal.`,
			tecnologias: ["SvelteKit", "Prisma", "MySQL", "Postman", "Node.js", "NestJS", "Azure DevOps", "Git Flow"],
			icono: `<i class="fa-solid fa-rocket text-yellow-500"></i>`
		},
		{
			cargo: "Desarrollador Web",
			empresa: "Fundasoft",
			fecha: "2024 - 2024",
			descripcion: "Desarrollé y maqueté páginas web para una ONG utilizando HTML, CSS y JavaScript, implementando módulos interactivos para la visualización de información. Colaboré en el diseño de interfaces atractivas y optimizadas para la experiencia de usuario, utilizando Bootstrap para lograr un diseño responsive. Trabajé en equipo bajo metodologías ágiles (Scrum/Kanban), gestionando tareas con Trello. Participé en el desarrollo de funcionalidades adicionales con Svelte y Node.js, incluyendo la integración de pasarelas de pago, AWS SES y chatbots. Apliqué control de versiones con GitFlow y contribuí a la mejora de la accesibilidad e interacción del sitio.",
			tecnologias: ["HTML", "CSS", "JavaScript", "Svelte", "Bootstrap", "Node.js", "AWS SES", "GitFlow", "Trello"],
			icono: `<i class="fa-solid fa-globe text-blue-500"></i>`
		},
		{
			cargo: "Desarrollador Web",
			empresa: "Freelance Web",
			fecha: "2020 - 2024",
			descripcion: "Desde el año 2020, he tenido el privilegio de trabajar como desarrollador web freelance, adquiriendo conocimientos especializados en tecnologías clave como Angular, Svelte, Vue.js, React, Node.js, HTML5, CSS3, Bootstrap, Tailwind CSS, Java, Spring Boot, JavaScript, TypeScript, jQuery, NestJS, .NET, PHP, MySQL, JSON. Estos lenguajes y frameworks han sido fundamentales en mi trayectoria, permitiéndome crear aplicaciones web dinámicas y atractivas. Además, he tenido la oportunidad de utilizar una variedad de herramientas que han optimizado mi flujo de trabajo. Entre ellas se encuentran Visual Studio Code, Visual Basic, Apache Netbeans, Eclipse, Sublime Text, SQL Server, MySQL Workbench, phpMyAdmin, Git y GitHub.",
			tecnologias: ["Angular", "Svelte", "Vue.js", "React", "Node.js", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS", "Java", "Spring Boot", "JavaScript", "TypeScript", "jQuery", "NestJS", ".NET", "PHP", "MySQL", "JSON", "Git", "GitHub"],
			icono: `<i class="fa-solid fa-globe text-blue-500"></i>`
		},
		{
			cargo: "Soporte Técnico y Mantenimiento de PC",
			empresa: "Freelance",
			fecha: "2017 - 2024",
			descripcion: "Instalación de sistemas operativos, backup y mantenimiento de PC. Instalación de programas de edición de videos, de edición de fotos, paquetes de Microsoft 365, Microsoft Office (2010, en adelante). Se realizan instalación de sistemas operativos de todas las versiones disponibles de Windows (Windows 8, Windows 8.1, Windows 10, Windows 10 MiniOS, Windows 11).",
			tecnologias: ["Windows 8", "Windows 8.1", "Windows 10", "Windows 11", "Microsoft Office", "Microsoft 365"],
			icono: `<i class="fa-solid fa-hammer text-red-500"></i>`
		}
	];

	onMount(() => {
		document.title = 'Experiencia - Diego David Almirón';
	});
</script>

<div class="space-y-10 pb-6 sm:space-y-14 md:space-y-16">
	<!-- Header -->
	<header class="px-4 text-center sm:px-6">
		<p class="mb-2 text-sm font-semibold uppercase tracking-wider text-purple-800/85">
			Trayectoria profesional
		</p>
		<h1 class="mb-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
			Experiencia laboral
		</h1>
		<p class="mx-auto max-w-2xl text-base text-gray-600 sm:text-lg">
			Roles, tecnologías y contextos donde fui creciendo como desarrollador.
		</p>
	</header>

	<!-- Timeline (sin “card” envolvente en móvil: más ancho útil y menos márgenes) -->
	<section
		class="relative mx-0 overflow-visible px-3 py-8 sm:mx-6 sm:overflow-hidden sm:rounded-3xl sm:border sm:border-purple-900/10 sm:px-5 sm:py-12 sm:shadow-xl md:px-6 md:py-14"
		aria-label="Línea de tiempo de experiencia"
	>
		<div
			class="pointer-events-none absolute inset-0 hidden bg-gradient-to-br from-indigo-50/90 via-white to-purple-50/80 sm:block"
		></div>
		<div
			class="pointer-events-none absolute -right-24 top-20 hidden h-64 w-64 rounded-full bg-purple-300/25 blur-3xl sm:block"
		></div>
		<div
			class="pointer-events-none absolute -bottom-20 -left-20 hidden h-72 w-72 rounded-full bg-indigo-200/30 blur-3xl sm:block"
		></div>

		<div class="relative z-10 mx-auto w-full max-w-6xl max-sm:max-w-none">
			<!-- línea + glow -->
			<div
				class="absolute bottom-0 left-[1.125rem] top-0 w-1 -translate-x-1/2 rounded-full bg-gradient-to-b from-purple-600 via-indigo-500 to-purple-900 shadow-[0_0_20px_rgba(88,28,135,0.35)] md:left-8"
			></div>

			<div class="space-y-8 md:space-y-10">
				{#each experiencia as item, index}
					<div class="relative flex items-start gap-4 pl-10 md:gap-6 md:pl-16">
						<!-- nodo -->
						<div
							class="absolute left-[1.125rem] top-6 z-10 flex -translate-x-1/2 md:left-8 md:top-7"
						>
							<span
								class="flex h-4 w-4 rounded-full border-[3px] border-white bg-gradient-to-br from-purple-600 to-indigo-600 shadow-md ring-2 ring-purple-400/50 md:h-5 md:w-5 {index ===
								0
									? 'ring-4 ring-emerald-400/70 shadow-emerald-500/30'
									: ''}"
							></span>
						</div>

						<article
							class="group flex-1 overflow-hidden rounded-2xl border border-purple-900/10 bg-white/85 shadow-lg backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-purple-900/25 hover:shadow-xl"
						>
							<div
								class="h-1 w-full bg-gradient-to-r from-purple-600 via-violet-500 to-indigo-600 opacity-90"
							></div>
							<div class="p-5 sm:p-6 md:p-7">
								<div
									class="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4"
								>
									<div class="flex items-start gap-3">
										<div
											class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-50 to-indigo-50 text-xl ring-1 ring-purple-900/10 shadow-inner sm:h-12 sm:w-12 sm:text-2xl"
										>
											{@html item.icono}
										</div>
										<div class="min-w-0">
											<h2 class="text-lg font-bold text-gray-900 sm:text-xl md:text-2xl">
												{item.cargo}
											</h2>
											<p class="font-semibold text-purple-900 sm:text-base">{item.empresa}</p>
										</div>
									</div>
									<div class="flex flex-wrap items-center gap-2 self-start sm:flex-col sm:items-end">
										{#if item.fecha.includes('Actualidad')}
											<span
												class="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-800 ring-1 ring-emerald-200/80"
											>
												En curso
											</span>
										{/if}
										<time
											class="rounded-full border border-gray-200/80 bg-gray-50/90 px-3 py-1.5 text-xs font-semibold text-gray-700 shadow-sm sm:text-sm"
											datetime={item.fecha}
										>
											{item.fecha}
										</time>
									</div>
								</div>

								<div
									class="prose-experience mb-5 text-sm leading-relaxed text-gray-600 sm:text-base sm:leading-relaxed"
								>
									{@html item.descripcion}
								</div>

								<div class="flex flex-wrap gap-2" aria-label="Tecnologías">
									{#each item.tecnologias as tecnologia}
										<span
											class="rounded-full border border-purple-200/70 bg-gradient-to-br from-white to-purple-50/80 px-2.5 py-1 text-xs font-medium text-purple-900 shadow-sm transition group-hover:border-purple-300 sm:px-3 sm:text-sm"
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
		class="relative mx-4 overflow-hidden rounded-2xl border border-purple-900/10 px-5 py-10 shadow-xl sm:mx-6 sm:rounded-3xl sm:px-8 sm:py-12 md:py-14"
		aria-labelledby="stats-experiencia-heading"
	>
		<div
			class="pointer-events-none absolute inset-0 bg-gradient-to-br from-white via-purple-50/50 to-indigo-50/70"
		></div>
		<div
			class="pointer-events-none absolute top-0 left-1/2 h-px w-[min(100%,36rem)] -translate-x-1/2 bg-gradient-to-r from-transparent via-purple-300/50 to-transparent"
		></div>

		<div class="relative z-10 mx-auto max-w-5xl">
			<div class="mb-8 text-center sm:mb-10">
				<h2 id="stats-experiencia-heading" class="text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
					En números
				</h2>
				<p class="mt-2 text-sm text-gray-600 sm:text-base">
					Un vistazo rápido a mi recorrido técnico.
				</p>
			</div>

			<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
				<div
					class="rounded-2xl border border-emerald-900/10 bg-white/90 p-6 text-center shadow-md backdrop-blur-sm transition hover:-translate-y-0.5 hover:shadow-lg"
				>
					<div
						class="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-lg"
					>
						<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
							/>
						</svg>
					</div>
					<p class="text-3xl font-bold text-emerald-700 tabular-nums sm:text-4xl">5+</p>
					<p class="mt-1 text-sm font-semibold text-gray-900">Años de experiencia</p>
					<p class="mt-1 text-xs text-gray-500">Trayectoria general en IT</p>
				</div>

				<div
					class="rounded-2xl border border-purple-900/10 bg-white/90 p-6 text-center shadow-md backdrop-blur-sm transition hover:-translate-y-0.5 hover:shadow-lg"
				>
					<div
						class="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-700 to-indigo-700 text-white shadow-lg"
					>
						<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
							/>
						</svg>
					</div>
					<p class="text-3xl font-bold text-purple-900 tabular-nums sm:text-4xl">1+</p>
					<p class="mt-1 text-sm font-semibold text-gray-900">Años en empresas</p>
					<p class="mt-1 text-xs text-gray-500">Experiencia corporativa</p>
				</div>

				<div
					class="rounded-2xl border border-violet-900/10 bg-white/90 p-6 text-center shadow-md backdrop-blur-sm transition hover:-translate-y-0.5 hover:shadow-lg"
				>
					<div
						class="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-purple-600 text-white shadow-lg"
					>
						<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
							/>
						</svg>
					</div>
					<p class="text-3xl font-bold text-violet-700 tabular-nums sm:text-4xl">15+</p>
					<p class="mt-1 text-sm font-semibold text-gray-900">Tecnologías</p>
					<p class="mt-1 text-xs text-gray-500">Stack que manejo con soltura</p>
				</div>

				<div
					class="rounded-2xl border border-amber-900/10 bg-white/90 p-6 text-center shadow-md backdrop-blur-sm transition hover:-translate-y-0.5 hover:shadow-lg"
				>
					<div
						class="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-lg"
					>
						<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
							/>
						</svg>
					</div>
					<p class="text-3xl font-bold text-amber-700 tabular-nums sm:text-4xl">2</p>
					<p class="mt-1 text-sm font-semibold text-gray-900">Empresas</p>
					<p class="mt-1 text-xs text-gray-500">Organizaciones donde trabajé</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Metodologías -->
	<section
		class="relative mx-4 overflow-hidden rounded-2xl border border-purple-900/15 px-5 py-10 sm:mx-6 sm:rounded-3xl sm:px-8 sm:py-12 md:py-14"
		aria-labelledby="metodologias-heading"
	>
		<div
			class="pointer-events-none absolute inset-0 bg-gradient-to-br from-purple-900/95 via-indigo-900 to-purple-950"
		></div>
		<div
			class="pointer-events-none absolute -right-20 top-10 h-56 w-56 rounded-full bg-white/10 blur-3xl"
		></div>
		<div
			class="pointer-events-none absolute bottom-0 left-0 h-48 w-48 rounded-full bg-indigo-500/20 blur-3xl"
		></div>

		<div class="relative z-10 mx-auto max-w-5xl">
			<div class="mb-8 text-center sm:mb-10">
				<p class="mb-2 text-sm font-semibold uppercase tracking-wider text-purple-200/90">
					Forma de trabajo
				</p>
				<h2 id="metodologias-heading" class="text-2xl font-bold text-white sm:text-3xl md:text-4xl">
					Metodologías y prácticas
				</h2>
				<p class="mx-auto mt-2 max-w-xl text-sm text-purple-100/90 sm:text-base">
					Referencias que suelo aplicar en equipo y en proyectos reales.
				</p>
			</div>

			<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
				<div
					class="group rounded-2xl border border-white/10 bg-white/10 p-6 text-center shadow-lg backdrop-blur-md transition hover:border-white/25 hover:bg-white/15"
				>
					<div
						class="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 to-blue-600 text-2xl text-white shadow-lg transition group-hover:scale-105"
					>
						<i class="fa-solid fa-arrows-rotate" aria-hidden="true"></i>
					</div>
					<h3 class="text-lg font-bold text-white">Agile / Scrum</h3>
					<p class="mt-1 text-xs text-purple-200/80">Iteración y entrega continua</p>
				</div>
				<div
					class="group rounded-2xl border border-white/10 bg-white/10 p-6 text-center shadow-lg backdrop-blur-md transition hover:border-white/25 hover:bg-white/15"
				>
					<div
						class="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-500 to-orange-600 text-2xl text-white shadow-lg transition group-hover:scale-105"
					>
						<i class="fa-solid fa-hammer" aria-hidden="true"></i>
					</div>
					<h3 class="text-lg font-bold text-white">DevOps</h3>
					<p class="mt-1 text-xs text-purple-200/80">Pipelines y calidad de entrega</p>
				</div>
				<div
					class="group rounded-2xl border border-white/10 bg-white/10 p-6 text-center shadow-lg backdrop-blur-md transition hover:border-white/25 hover:bg-white/15"
				>
					<div
						class="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-600 text-2xl text-white shadow-lg transition group-hover:scale-105"
					>
						<i class="fa-solid fa-vial" aria-hidden="true"></i>
					</div>
					<h3 class="text-lg font-bold text-white">TDD</h3>
					<p class="mt-1 text-xs text-purple-200/80">Pruebas como guía del diseño</p>
				</div>
				<div
					class="group rounded-2xl border border-white/10 bg-white/10 p-6 text-center shadow-lg backdrop-blur-md transition hover:border-white/25 hover:bg-white/15"
				>
					<div
						class="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-400 to-purple-600 text-2xl text-white shadow-lg transition group-hover:scale-105"
					>
						<i class="fa-solid fa-users" aria-hidden="true"></i>
					</div>
					<h3 class="text-lg font-bold text-white">Liderazgo</h3>
					<p class="mt-1 text-xs text-purple-200/80">Comunicación y coordinación</p>
				</div>
			</div>
		</div>
	</section>
</div>

<style>
	/* Enlaces incrustados en descripciones HTML (Tob Group, etc.) */
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