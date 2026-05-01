<script lang="ts">
	import { onMount } from 'svelte';
	
	// Datos de ejemplo - personaliza con tu información
	const categoriasHabilidades = [
		{
			categoria: "Frontend",
			icono: "🎨",
			color: "blue",
			habilidades: [
				{ nombre: "React", nivel: 90, color: "blue" },
				{ nombre: "TypeScript", nivel: 85, color: "blue" },
				{ nombre: "Vue.js", nivel: 80, color: "blue" },
				{ nombre: "SvelteKit", nivel: 75, color: "blue" },
				{ nombre: "HTML/CSS", nivel: 95, color: "blue" }
			]
		},
		{
			categoria: "Backend",
			icono: "⚙️",
			color: "green",
			habilidades: [
				{ nombre: "Node.js", nivel: 88, color: "green" },
				{ nombre: "Python", nivel: 82, color: "green" },
				{ nombre: "PHP", nivel: 75, color: "green" },
				{ nombre: "Java", nivel: 70, color: "green" },
				{ nombre: "C#", nivel: 65, color: "green" }
			]
		},
		{
			categoria: "Bases de Datos",
			icono: "🗄️",
			color: "purple",
			habilidades: [
				{ nombre: "PostgreSQL", nivel: 85, color: "purple" },
				{ nombre: "MongoDB", nivel: 80, color: "purple" },
				{ nombre: "MySQL", nivel: 75, color: "purple" },
				{ nombre: "Redis", nivel: 70, color: "purple" }
			]
		},
		{
			categoria: "DevOps & Cloud",
			icono: "☁️",
			color: "orange",
			habilidades: [
				{ nombre: "AWS", nivel: 80, color: "orange" },
				{ nombre: "Docker", nivel: 75, color: "orange" },
				{ nombre: "Git", nivel: 90, color: "orange" },
				{ nombre: "CI/CD", nivel: 70, color: "orange" }
			]
		}
	];

	const herramientas = [
		{ nombre: "VS Code", icono: "💻", categoria: "IDE" },
		{ nombre: "Figma", icono: "🎨", categoria: "Diseño" },
		{ nombre: "Postman", icono: "📡", categoria: "API" },
		{ nombre: "Jira", icono: "📋", categoria: "Gestión" },
		{ nombre: "Slack", icono: "💬", categoria: "Comunicación" },
		{ nombre: "Notion", icono: "📝", categoria: "Documentación" }
	];

	// Reemplazo de softSkills por modelo visual con imágenes y valoración
	const habilidadesBlandas = [
		{
			nombre: "Trabajo en equipo",
			imagen: "/images/skills/habilidadesBlandas/trabajo en equipo.png",
			valoracion: "Muy Bueno",
			estrellas: 4
		},
		{
			nombre: "Gestión del tiempo",
			imagen: "/images/skills/habilidadesBlandas/gestion del tiempo.png",
			valoracion: "Muy Bueno",
			estrellas: 4
		},
		{
			nombre: "Liderazgo",
			imagen: "/images/skills/habilidadesBlandas/liderazgo.png",
			valoracion: "Excelente",
			estrellas: 5
		},
		{
			nombre: "Resolución de Problemas",
			imagen: "/images/skills/habilidadesBlandas/Resolucion de Problemas.png",
			valoracion: "Muy Bueno",
			estrellas: 4
		},
		{
			nombre: "Diseño de sistemas",
			imagen: "/images/skills/habilidadesBlandas/disenio de sistemas.png",
			valoracion: "Muy Bueno",
			estrellas: 4
		},
		{
			nombre: "Creatividad",
			imagen: "/images/skills/habilidadesBlandas/creatividad.png",
			valoracion: "Muy Bueno",
			estrellas: 4
		}
	];

	function getColorClasses(color: string, isBg = false) {
		const colors = {
			blue: isBg ? "bg-blue-100 text-blue-800" : "bg-blue-500",
			green: isBg ? "bg-green-100 text-green-800" : "bg-green-500",
			purple: isBg ? "bg-purple-100 text-purple-800" : "bg-purple-500",
			orange: isBg ? "bg-orange-100 text-orange-800" : "bg-orange-500"
		};
		return colors[color as keyof typeof colors] || colors.blue;
	}

	type SkillIcon = { nombre: string; imagen: string };

	/** Cuatro bandas con marquesina y fades (estilo cruzado ← / →) */
	const skillTracks: {
		id: string;
		titulo: string;
		subtitulo: string;
		items: SkillIcon[];
		direction: 'left' | 'right';
	}[] = [
		{
			id: 'frontend',
			titulo: 'Frontend',
			subtitulo: 'Frameworks, librerías UI y capa de presentación',
			direction: 'left',
			items: [
				{ nombre: 'Angular', imagen: '/images/skills/frameworks/angular.png' },
				{ nombre: 'SvelteKit', imagen: '/images/skills/frameworks/svetle.png' },
				{ nombre: 'React', imagen: '/images/skills/librerias/react.png' },
				{ nombre: 'Vue.js', imagen: '/images/skills/librerias/vuejs.png' },
				{ nombre: 'Tailwind CSS', imagen: '/images/skills/librerias/tailwind.png' },
				{ nombre: 'Bootstrap', imagen: '/images/skills/librerias/bootstrap.png' },
				{ nombre: 'jQuery', imagen: '/images/skills/librerias/jquery.png' },
				{ nombre: 'HTML5', imagen: '/images/skills/lenguajes/html5.png' },
				{ nombre: 'CSS3', imagen: '/images/skills/lenguajes/css3.png' },
				{ nombre: 'TypeScript', imagen: '/images/skills/lenguajes/typescript.png' },
				{ nombre: 'JavaScript', imagen: '/images/skills/lenguajes/javascript.png' }
			]
		},
		{
			id: 'backend',
			titulo: 'Backend',
			subtitulo: 'Runtimes y frameworks de servidor',
			direction: 'right',
			items: [
				{ nombre: 'NestJS', imagen: '/images/skills/frameworks/nestjs.png' },
				{ nombre: 'Node.js', imagen: '/images/skills/frameworks/nodejs.png' },
				{ nombre: 'Spring Boot', imagen: '/images/skills/frameworks/spring-boot.png' },
				{ nombre: 'CodeIgniter', imagen: '/images/skills/frameworks/codeigniter.png' },
				{ nombre: 'ASP.NET Core', imagen: '/images/skills/frameworks/NET_Core.png' }
			]
		},
		{
			id: 'tecnologias',
			titulo: 'Tecnologías',
			subtitulo: 'Lenguajes y tecnologías de datos / interoperabilidad',
			direction: 'left',
			items: [
				{ nombre: 'Java', imagen: '/images/skills/lenguajes/java.png' },
				{ nombre: '.NET', imagen: '/images/skills/lenguajes/net.png' },
				{ nombre: 'PHP', imagen: '/images/skills/lenguajes/php.png' },
				{ nombre: 'Ruby', imagen: '/images/skills/lenguajes/ruby.png' },
				{ nombre: 'SQL', imagen: '/images/skills/lenguajes/sql.png' },
				{ nombre: 'JSON', imagen: '/images/skills/lenguajes/json.png' }
			]
		},
		{
			id: 'herramientas',
			titulo: 'Herramientas',
			subtitulo: 'IDE, DevOps, bases de datos y diseño',
			direction: 'right',
			items: [
				{ nombre: 'Cursor', imagen: '/images/skills/herramientas/cursor.png' },
				{ nombre: 'Git', imagen: '/images/skills/herramientas/git.png' },
				{ nombre: 'GitHub', imagen: '/images/skills/herramientas/github.png' },
				{ nombre: 'Postman', imagen: '/images/skills/herramientas/postman.png' },
				{ nombre: 'MySQL', imagen: '/images/skills/herramientas/mysql.png' },
				{ nombre: 'SQL Server', imagen: '/images/skills/herramientas/sqlserver.png' },
				{ nombre: 'PostgreSQL', imagen: '/images/skills/herramientas/Postgresql.png' },
				{ nombre: 'Maven', imagen: '/images/skills/herramientas/maven.png' },
				{ nombre: 'Visual Studio Code', imagen: '/images/skills/herramientas/microsoft_visual_studio_code.png' },
				{ nombre: 'Visual Studio', imagen: '/images/skills/herramientas/visual_studio.png' },
				{ nombre: 'Eclipse', imagen: '/images/skills/herramientas/eclipse.png' },
				{ nombre: 'UML', imagen: '/images/skills/herramientas/uml.png' },
				{ nombre: 'XAMPP', imagen: '/images/skills/herramientas/xampp.png' },
				{ nombre: 'Hibernate', imagen: '/images/skills/herramientas/hibernate.png' },
				{ nombre: 'Enterprise Architect', imagen: '/images/skills/herramientas/enterprise_architect.png' }
			]
		}
	];

	function duplicated(items: SkillIcon[]) {
		return [...items, ...items];
	}

	// Establecer el título de la página
	onMount(() => {
		document.title = 'Habilidades - Diego David Almirón';
	});
</script>

<div class="space-y-8 sm:space-y-12">
	<!-- Header -->
	<div class="text-center px-4">
		<h1 class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Habilidades y Tecnologías</h1>
		<p class="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
			Un resumen de las tecnologías, herramientas y competencias que he desarrollado a lo largo de mi carrera.
		</p>
	</div>

	<!-- Stack técnico: marquesinas con fades laterales (filas alternadas ← →) -->
	<section
		class="skills-marquee-wrap relative mx-4 mb-10 overflow-hidden rounded-2xl border border-purple-900/10 bg-white shadow-xl sm:mx-6 sm:rounded-3xl"
		aria-label="Tecnologías por categoría"
	>
		<div
			class="pointer-events-none absolute inset-0 bg-gradient-to-br from-indigo-50/40 via-white to-purple-50/50"
		></div>

		<div class="relative z-10 px-4 pb-10 pt-8 sm:px-8 sm:pb-12 sm:pt-10">
			<div class="mb-8 text-center sm:mb-10">
				<p class="mb-2 text-sm font-semibold uppercase tracking-wider text-purple-800/85">
					Stack técnico
				</p>
			</div>

			<div class="flex flex-col gap-10 sm:gap-12">
				{#each skillTracks as track (track.id)}
					<div>
						<div class="mb-3 px-1 text-center sm:mb-4 sm:text-left">
							<h3 class="text-lg font-bold text-purple-900 sm:text-xl">{track.titulo}</h3>
							<p class="text-xs text-gray-500 sm:text-sm">{track.subtitulo}</p>
						</div>

						<div class="skills-marquee relative overflow-hidden py-1">
							<div
								class="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-white via-white/95 to-transparent sm:w-24"
							></div>
							<div
								class="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-white via-white/95 to-transparent sm:w-24"
							></div>

							<div
								class="flex w-max gap-5 pr-5"
								class:skills-marquee-animate-left={track.direction === 'left'}
								class:skills-marquee-animate-right={track.direction === 'right'}
							>
								{#each duplicated(track.items) as item, idx (`${track.id}-${item.nombre}-${idx}`)}
									<div
										class="flex min-w-[200px] max-w-[220px] flex-shrink-0 flex-col items-center rounded-xl border border-gray-200/90 bg-white px-5 py-5 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:min-w-[220px]"
									>
										<div
											class="mb-3 flex h-14 w-14 items-center justify-center rounded-full border-2 border-gray-200 bg-white shadow-inner"
										>
											<img
												src={item.imagen}
												alt=""
												class="h-8 w-8 object-contain"
												width="32"
												height="32"
												loading="lazy"
												decoding="async"
											/>
										</div>
										<p class="text-sm font-semibold leading-tight text-purple-900 sm:text-base">
											{item.nombre}
										</p>
									</div>
								{/each}
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Soft Skills -->
	<section
		class="relative mx-4 overflow-hidden rounded-2xl border border-purple-900/10 px-5 py-10 shadow-xl sm:mx-6 sm:rounded-3xl sm:px-8 sm:py-12 md:py-14"
		aria-labelledby="soft-skills-heading"
	>
		<div
			class="pointer-events-none absolute inset-0 bg-gradient-to-br from-indigo-50/95 via-white to-purple-100/60"
		></div>
		<div
			class="pointer-events-none absolute -left-20 top-10 h-56 w-56 rounded-full bg-purple-300/25 blur-3xl"
		></div>
		<div
			class="pointer-events-none absolute -bottom-16 right-0 h-64 w-64 rounded-full bg-indigo-200/35 blur-3xl"
		></div>

		<div class="relative z-10 mx-auto max-w-6xl">
			<div class="mb-8 text-center sm:mb-10">
				<p class="mb-2 text-sm font-semibold uppercase tracking-wider text-purple-800/85">
					Competencias humanas
				</p>
				<h2 id="soft-skills-heading" class="text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
					Habilidades blandas
				</h2>
				<p class="mx-auto mt-2 max-w-xl text-sm text-gray-600 sm:text-base">
					Cómo trabajo en equipo, organizo el tiempo y afronto desafíos complejos.
				</p>
			</div>

			<div class="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7">
				{#each habilidadesBlandas as habilidad (habilidad.nombre)}
					<article
						class="group flex flex-col overflow-hidden rounded-2xl border border-purple-900/10 bg-white/90 shadow-lg backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-purple-900/20 hover:shadow-2xl"
					>
						<div
							class="h-1 w-full bg-gradient-to-r from-purple-600 via-fuchsia-500 to-indigo-600 opacity-95"
						></div>

						<div class="border-b border-purple-900/5 px-5 pb-4 pt-5 text-center">
							<h3 class="text-lg font-bold leading-snug text-gray-900 sm:text-xl">
								{habilidad.nombre}
							</h3>
							<p class="mt-3 flex justify-center">
								<span
									class="inline-flex items-center rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ring-1 {habilidad.valoracion ===
									'Excelente'
										? 'bg-amber-100 text-amber-900 ring-amber-200/80'
										: 'bg-purple-100 text-purple-900 ring-purple-200/80'}"
								>
									{habilidad.valoracion}
								</span>
							</p>
						</div>

						<div
							class="relative mx-4 my-4 flex min-h-[11rem] flex-1 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-50/90 via-white to-purple-50/90 p-6 shadow-inner ring-1 ring-purple-900/10 sm:min-h-[12rem]"
						>
							<div
								class="pointer-events-none absolute inset-0 rounded-2xl opacity-70 [background:radial-gradient(circle_at_25%_15%,rgba(139,92,246,0.14),transparent_55%),radial-gradient(circle_at_85%_80%,rgba(99,102,241,0.12),transparent_45%)]"
							></div>
							<img
								src={habilidad.imagen}
								alt=""
								class="relative z-10 max-h-40 w-auto object-contain transition duration-300 ease-out group-hover:scale-[1.06]"
							/>
						</div>

						<div
							class="mt-auto border-t border-purple-900/10 bg-gradient-to-r from-purple-950 via-purple-900 to-indigo-950 px-4 py-4 text-center sm:px-5 sm:py-5"
						>
							<p class="mb-2 text-[0.65rem] font-semibold uppercase tracking-widest text-purple-200/90">
								Autoevaluación
							</p>
							<div
								class="flex justify-center gap-0.5 sm:gap-1"
								role="img"
								aria-label="{habilidad.estrellas} de 5 estrellas"
							>
								{#each Array(5) as _, i}
									<span
										class="select-none text-lg leading-none sm:text-xl {i < habilidad.estrellas
											? 'text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.35)]'
											: 'text-white/20'}"
										aria-hidden="true"
									>★</span>
								{/each}
							</div>
						</div>
					</article>
				{/each}
			</div>
		</div>
	</section>

	<!-- Estadísticas de Habilidades -->
	<section
		class="relative mx-4 overflow-hidden rounded-2xl border border-purple-900/10 px-5 py-10 shadow-xl sm:mx-6 sm:rounded-3xl sm:px-8 sm:py-12 md:py-14"
		aria-labelledby="stats-habilidades-heading"
	>
		<div
			class="pointer-events-none absolute inset-0 bg-gradient-to-br from-white via-fuchsia-50/40 to-purple-50/70"
		></div>
		<div
			class="pointer-events-none absolute top-0 left-1/2 h-px w-[min(100%,34rem)] -translate-x-1/2 bg-gradient-to-r from-transparent via-purple-300/55 to-transparent"
		></div>
		<div
			class="pointer-events-none absolute -bottom-24 right-[-4rem] h-52 w-52 rounded-full bg-pink-200/30 blur-3xl"
		></div>

		<div class="relative z-10 mx-auto max-w-5xl">
			<div class="mb-8 text-center sm:mb-10">
				<p class="mb-2 text-sm font-semibold uppercase tracking-wider text-purple-800/85">
					Resumen cuantitativo
				</p>
				<h2 id="stats-habilidades-heading" class="text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
					Estadísticas de habilidades
				</h2>
				<p class="mx-auto mt-2 max-w-lg text-sm text-gray-600 sm:text-base">
					Cifras orientativas sobre mi stack y nivel de dominio autopercibido.
				</p>
			</div>

			<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
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
								d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
							/>
						</svg>
					</div>
					<p class="text-3xl font-bold tabular-nums text-purple-900 sm:text-4xl">20+</p>
					<p class="mt-1 text-sm font-semibold text-gray-900">Tecnologías</p>
					<p class="mt-1 text-xs text-gray-500">Dominadas en proyectos reales</p>
				</div>

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
								d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
							/>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
							/>
						</svg>
					</div>
					<p class="text-3xl font-bold tabular-nums text-emerald-700 sm:text-4xl">15+</p>
					<p class="mt-1 text-sm font-semibold text-gray-900">Herramientas</p>
					<p class="mt-1 text-xs text-gray-500">IDE, DB y utilidades de flujo</p>
				</div>

				<div
					class="rounded-2xl border border-amber-900/10 bg-white/90 p-6 text-center shadow-md backdrop-blur-sm transition hover:-translate-y-0.5 hover:shadow-lg"
				>
					<div
						class="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow-lg"
					>
						<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path
								d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.6-6.3 4.6 2.3-7-6-4.6h7.6z"
							/>
						</svg>
					</div>
					<div class="mb-2 flex justify-center gap-0.5" role="img" aria-label="4 de 5 estrellas">
						{#each Array(4) as _, i}
							<span class="text-xl text-amber-400 drop-shadow-sm sm:text-2xl" aria-hidden="true">★</span>
						{/each}
						<span class="text-xl text-gray-300 sm:text-2xl" aria-hidden="true">★</span>
					</div>
					<p class="text-sm font-semibold text-gray-900">Competencias blandas</p>
					<p class="mt-1 text-xs text-gray-500">Autoevaluación: muy bueno</p>
				</div>

				<div
					class="rounded-2xl border border-orange-900/10 bg-white/90 p-6 text-center shadow-md backdrop-blur-sm transition hover:-translate-y-0.5 hover:shadow-lg"
				>
					<div
						class="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-rose-600 text-white shadow-lg"
					>
						<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
							/>
						</svg>
					</div>
					<p class="text-3xl font-bold tabular-nums text-orange-600 sm:text-4xl">80%</p>
					<p class="mt-1 text-sm font-semibold text-gray-900">Dominio medio</p>
					<p class="mt-1 text-xs text-gray-500">Promedio estimado del stack</p>
				</div>
			</div>
		</div>
	</section>
</div>

<style>
	@keyframes skills-scroll-left {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-50%);
		}
	}
	@keyframes skills-scroll-right {
		0% {
			transform: translateX(-50%);
		}
		100% {
			transform: translateX(0);
		}
	}
	.skills-marquee-animate-left {
		animation: skills-scroll-left 52s linear infinite;
	}
	.skills-marquee-animate-right {
		animation: skills-scroll-right 56s linear infinite;
	}
	.skills-marquee-animate-left:hover,
	.skills-marquee-animate-right:hover {
		animation-play-state: paused;
	}
	@media (max-width: 640px) {
		.skills-marquee-animate-left {
			animation-duration: 72s;
		}
		.skills-marquee-animate-right {
			animation-duration: 76s;
		}
	}
	@media (prefers-reduced-motion: reduce) {
		.skills-marquee-animate-left,
		.skills-marquee-animate-right {
			animation: none !important;
			transform: none !important;
		}
	}
</style>
