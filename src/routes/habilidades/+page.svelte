<script lang="ts">
	import { onMount } from 'svelte';

	type HabilidadBlanda = { nombre: string; imagen: string };

	const habilidadesBlandas = [
		{
			nombre: "Trabajo en equipo",
			imagen: "/images/skills/habilidadesBlandas/hands.svg"
		},
		{
			nombre: "Gestión del tiempo",
			imagen: "/images/skills/habilidadesBlandas/time.svg"
		},
		{
			nombre: "Liderazgo",
			imagen: "/images/skills/habilidadesBlandas/leader.svg"
		},
		{
			nombre: "Resolución de Problemas",
			imagen: "/images/skills/habilidadesBlandas/light.svg"
		},
		{
			nombre: "Diseño de sistemas",
			imagen: "/images/skills/habilidadesBlandas/computer.svg"
		},
		{
			nombre: "Creatividad",
			imagen: "/images/skills/habilidadesBlandas/palette.svg"
		}
	] as HabilidadBlanda[];

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
				{ nombre: 'Angular', imagen: '/iconos/angular.svg' },
				{ nombre: 'SvelteKit', imagen: '/iconos/svelte.svg' },
				{ nombre: 'React', imagen: '/iconos/react.svg' },
				{ nombre: 'Vue.js', imagen: '/iconos/vue.svg' },
				{ nombre: 'Tailwind CSS', imagen: '/iconos/tailwind.svg' },
				{ nombre: 'Bootstrap', imagen: '/iconos/bootstrap.svg' },
				{ nombre: 'jQuery', imagen: '/iconos/jquery.svg' },
				{ nombre: 'HTML5', imagen: '/iconos/html5.svg' },
				{ nombre: 'CSS3', imagen: '/iconos/css3.svg' },
				{ nombre: 'TypeScript', imagen: '/iconos/typescript.svg' },
				{ nombre: 'JavaScript', imagen: '/iconos/javascript.svg' }
			]
		},
		{
			id: 'backend',
			titulo: 'Backend',
			subtitulo: 'Runtimes y frameworks de servidor',
			direction: 'right',
			items: [
				{ nombre: 'NestJS', imagen: '/iconos/nestjs.svg' },
				{ nombre: 'Node.js', imagen: '/iconos/nodejs.svg' },
				{ nombre: 'Spring Boot', imagen: '/iconos/spring-boot.svg' },
				{ nombre: 'CodeIgniter', imagen: '/iconos/codeigniter.svg' },
				{ nombre: 'ASP .NET Core', imagen: '/iconos/.net-core.svg' }
			]
		},
		{
			id: 'tecnologias',
			titulo: 'Tecnologías',
			subtitulo: 'Lenguajes y tecnologías de datos / interoperabilidad',
			direction: 'left',
			items: [
				{ nombre: 'Java', imagen: '/iconos/java.svg' },
				{ nombre: '.NET', imagen: '/iconos/.net.svg' },
				{ nombre: 'C Sharp', imagen: '/iconos/c-sharp.svg' },
				{ nombre: 'PHP', imagen: '/iconos/php.svg' },
				{ nombre: 'Ruby', imagen: '/iconos/ruby.svg' },
				{ nombre: 'SQL', imagen: '/iconos/sql.svg' },
				{ nombre: 'JSON', imagen: '/iconos/json.svg' }
			]
		},
		{
			id: 'herramientas',
			titulo: 'Herramientas',
			subtitulo: 'IDE, ORM, DevOps, bases de datos y diseño',
			direction: 'right',
			items: [
				{ nombre: 'Cursor', imagen: '/iconos/cursor.svg' },
				{ nombre: 'Git', imagen: '/iconos/git.svg' },
				{ nombre: 'GitHub', imagen: '/iconos/github.svg' },
				{ nombre: 'Postman', imagen: '/iconos/postman.svg' },
				{ nombre: 'MySQL', imagen: '/iconos/mysql.svg' },
				{ nombre: 'SQL Server', imagen: '/iconos/sqlserver.svg' },
				{ nombre: 'PostgreSQL', imagen: '/iconos/postgresql.svg' },
				{ nombre: 'Maven', imagen: '/iconos/maven.svg' },
				{ nombre: 'Visual Studio Code', imagen: '/iconos/visual-studio-code.svg' },
				{ nombre: 'Visual Studio', imagen: '/iconos/visual-studio.svg' },
				{ nombre: 'Eclipse', imagen: '/iconos/eclipse.svg' },
				{ nombre: 'UML', imagen: '/iconos/uml.svg' },
				{ nombre: 'XAMPP', imagen: '/iconos/xampp.svg' },
				{ nombre: 'Hibernate', imagen: '/iconos/hibernate.svg' },
				{ nombre: 'Prisma', imagen: '/iconos/prisma.svg' }
			]
		}
	];

	function duplicated(items: SkillIcon[]) {
		return [...items, ...items];
	}

	const totalStackItems = skillTracks.reduce((acc, track) => acc + track.items.length, 0);
	const totalCategoriasTecnicas = skillTracks.length;
	const totalHabilidadesBlandas = habilidadesBlandas.length;

	// Establecer el título de la página
	onMount(() => {
		document.title = 'Habilidades - Diego David Almirón';
	});
</script>

<div class="space-y-8 sm:space-y-12">
	<!-- Header -->
	<div class="text-center px-4">
		<h1 class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 dark:text-gray-100">Habilidades y Tecnologías</h1>
		<p class="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto dark:text-gray-400">
			Un resumen de las tecnologías, herramientas y competencias que he desarrollado a lo largo de mi carrera.
		</p>
	</div>

	<!-- Stack técnico: marquesinas con fades laterales (filas alternadas ← →) -->
	<section
		class="skills-marquee-wrap relative mb-10"
		aria-label="Tecnologías por categoría"
	>
		<div class="relative z-10 px-4 pb-10 pt-8 sm:px-8 sm:pb-12 sm:pt-10">
			<div class="mb-8 text-center sm:mb-10">
				<p class="mb-2 text-sm font-semibold uppercase tracking-wider text-purple-800/85 dark:text-purple-300/90">
					Stack técnico
				</p>
			</div>

			<div class="flex flex-col gap-10 sm:gap-12">
				{#each skillTracks as track (track.id)}
					<div>
						<div class="mb-3 px-1 text-center sm:mb-4 sm:text-left">
							<h3 class="text-lg font-bold text-purple-900 sm:text-xl dark:text-purple-200">{track.titulo}</h3>
							<p class="text-xs text-gray-500 sm:text-sm dark:text-gray-400">{track.subtitulo}</p>
						</div>

						<div class="skills-marquee relative overflow-hidden py-1">
							<div
								class="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-white via-white/95 to-transparent dark:from-gray-950 dark:via-gray-950/95 sm:w-24"
							></div>
							<div
								class="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-white via-white/95 to-transparent dark:from-gray-950 dark:via-gray-950/95 sm:w-24"
							></div>

							<div
								class="flex w-max gap-5 pr-5"
								class:skills-marquee-animate-left={track.direction === 'left'}
								class:skills-marquee-animate-right={track.direction === 'right'}
							>
								{#each duplicated(track.items) as item, idx (`${track.id}-${item.nombre}-${idx}`)}
									<div
										class="flex min-w-[210px] max-w-[240px] flex-shrink-0 items-center justify-center gap-2 rounded-full border border-purple-200/80 bg-white px-4 py-2.5 text-gray-900 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-purple-300 hover:shadow-md dark:border-purple-700/50 dark:bg-gray-900 dark:text-gray-100 sm:min-w-[230px]"
									>
										<p class="truncate text-sm font-semibold leading-tight sm:text-base">
											{item.nombre}
										</p>
										<span
											class="skill-icon h-6 w-6 flex-shrink-0 sm:h-7 sm:w-7"
											style={`--icon-url: url('${item.imagen}')`}
											aria-hidden="true"
										></span>
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
		class="relative mx-4 overflow-hidden rounded-2xl border border-purple-900/10 px-5 py-10 shadow-xl sm:mx-6 sm:rounded-3xl sm:px-8 sm:py-12 md:py-14 dark:border-purple-500/20"
		aria-labelledby="soft-skills-heading"
	>
		<div
			class="pointer-events-none absolute inset-0 bg-gradient-to-br from-indigo-50/95 via-white to-purple-100/60 dark:from-gray-900 dark:via-gray-900 dark:to-purple-950/70"
		></div>
		<div
			class="pointer-events-none absolute -left-20 top-10 h-56 w-56 rounded-full bg-purple-300/25 blur-3xl"
		></div>
		<div
			class="pointer-events-none absolute -bottom-16 right-0 h-64 w-64 rounded-full bg-indigo-200/35 blur-3xl"
		></div>

		<div class="relative z-10 mx-auto max-w-6xl">
			<div class="mb-8 text-center sm:mb-10">
				<p class="mb-2 text-sm font-semibold uppercase tracking-wider text-purple-800/85 dark:text-purple-300/90">
					Competencias humanas
				</p>
				<h2 id="soft-skills-heading" class="text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl dark:text-gray-100">
					Habilidades blandas
				</h2>
				<p class="mx-auto mt-2 max-w-xl text-sm text-gray-600 sm:text-base dark:text-gray-400">
					Cómo trabajo en equipo, organizo el tiempo y afronto desafíos complejos.
				</p>
			</div>

			<div class="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7">
				{#each habilidadesBlandas as habilidad (habilidad.nombre)}
					<div
						class="group flex min-h-[4.25rem] items-center justify-center gap-3 rounded-2xl border border-purple-900/10 bg-white/90 px-4 py-3 text-purple-900 shadow-lg backdrop-blur-sm ring-1 ring-purple-200/50 transition duration-300 hover:-translate-y-0.5 hover:border-purple-900/20 hover:shadow-xl dark:border-purple-500/25 dark:bg-gray-900/95 dark:text-purple-200 dark:ring-purple-800/40"
					>
						<span
							class="soft-skill-icon rounded-full"
							style={`--icon-url: url('${habilidad.imagen}')`}
							aria-hidden="true"
						></span>
						<p class="text-center text-sm font-semibold leading-tight text-current sm:text-base">
							{habilidad.nombre}
						</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Estadísticas de Habilidades -->
	<section
		class="relative mx-4 overflow-hidden rounded-2xl border border-purple-900/10 px-5 py-10 shadow-xl sm:mx-6 sm:rounded-3xl sm:px-8 sm:py-12 md:py-14 dark:border-purple-500/20"
		aria-labelledby="stats-habilidades-heading"
	>
		<div
			class="pointer-events-none absolute inset-0 bg-gradient-to-br from-white via-fuchsia-50/40 to-purple-50/70 dark:from-gray-900 dark:via-fuchsia-950/30 dark:to-purple-950/70"
		></div>
		<div
			class="pointer-events-none absolute top-0 left-1/2 h-px w-[min(100%,34rem)] -translate-x-1/2 bg-gradient-to-r from-transparent via-purple-300/55 to-transparent"
		></div>
		<div
			class="pointer-events-none absolute -bottom-24 right-[-4rem] h-52 w-52 rounded-full bg-pink-200/30 blur-3xl"
		></div>

		<div class="relative z-10 mx-auto max-w-5xl">
			<div class="mb-8 text-center sm:mb-10">
				<p class="mb-2 text-sm font-semibold uppercase tracking-wider text-purple-800/85 dark:text-purple-300/90">
					Resumen cuantitativo
				</p>
				<h2 id="stats-habilidades-heading" class="text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl dark:text-gray-100">
					Estadísticas de habilidades
				</h2>
				<p class="mx-auto mt-2 max-w-lg text-sm text-gray-600 sm:text-base dark:text-gray-400">
					Cifras basadas en la cantidad de tecnologías y competencias listadas en esta sección.
				</p>
			</div>

			<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
				<div
					class="rounded-2xl border border-purple-900/10 bg-white/90 p-6 text-center shadow-md backdrop-blur-sm transition hover:-translate-y-0.5 hover:shadow-lg dark:border-purple-800/30 dark:bg-gray-900/95"
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
					<p class="text-3xl font-bold tabular-nums text-purple-900 sm:text-4xl">{totalStackItems}</p>
					<p class="mt-1 text-sm font-semibold text-gray-900 dark:text-gray-100">Tecnologías</p>
					<p class="mt-1 text-xs text-gray-500 dark:text-gray-400">Incluidas en las bandas técnicas</p>
				</div>

				<div
					class="rounded-2xl border border-emerald-900/10 bg-white/90 p-6 text-center shadow-md backdrop-blur-sm transition hover:-translate-y-0.5 hover:shadow-lg dark:border-emerald-800/30 dark:bg-gray-900/95"
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
					<p class="mt-1 text-sm font-semibold text-gray-900 dark:text-gray-100">Herramientas</p>
					<p class="mt-1 text-xs text-gray-500 dark:text-gray-400">IDE, DB y utilidades de flujo</p>
				</div>

				<div
					class="rounded-2xl border border-amber-900/10 bg-white/90 p-6 text-center shadow-md backdrop-blur-sm transition hover:-translate-y-0.5 hover:shadow-lg dark:border-amber-800/30 dark:bg-gray-900/95"
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
					<p class="text-3xl font-bold tabular-nums text-amber-600 sm:text-4xl">{totalHabilidadesBlandas}</p>
					<p class="text-sm font-semibold text-gray-900 dark:text-gray-100">Competencias blandas</p>
					<p class="mt-1 text-xs text-gray-500 dark:text-gray-400">Habilidades humanas destacadas</p>
				</div>

				<div
					class="rounded-2xl border border-orange-900/10 bg-white/90 p-6 text-center shadow-md backdrop-blur-sm transition hover:-translate-y-0.5 hover:shadow-lg dark:border-orange-800/30 dark:bg-gray-900/95"
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
					<p class="text-3xl font-bold tabular-nums text-orange-600 sm:text-4xl">{totalCategoriasTecnicas}</p>
					<p class="mt-1 text-sm font-semibold text-gray-900 dark:text-gray-100">Categorías técnicas</p>
					<p class="mt-1 text-xs text-gray-500 dark:text-gray-400">Frontend, Backend, Tecnologías y Herramientas</p>
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
	.soft-skill-icon {
		height: 1.75rem;
		width: 1.75rem;
		flex-shrink: 0;
		background-color: currentColor;
		-webkit-mask-image: var(--icon-url);
		mask-image: var(--icon-url);
		-webkit-mask-repeat: no-repeat;
		mask-repeat: no-repeat;
		-webkit-mask-position: center;
		mask-position: center;
		-webkit-mask-size: contain;
		mask-size: contain;
	}
	.skill-icon {
		background-color: currentColor;
		-webkit-mask-image: var(--icon-url);
		mask-image: var(--icon-url);
		-webkit-mask-repeat: no-repeat;
		mask-repeat: no-repeat;
		-webkit-mask-position: center;
		mask-position: center;
		-webkit-mask-size: contain;
		mask-size: contain;
	}
</style>
