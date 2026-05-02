<script lang="ts">
	import { onMount } from 'svelte';
	import Swal from 'sweetalert2';

	function badgeCategoria(c: string): string {
		if (c === 'Full Stack')
			return 'bg-purple-100 text-purple-900 ring-1 ring-purple-200/80';
		if (c === 'Frontend') return 'bg-sky-100 text-sky-900 ring-1 ring-sky-200/80';
		return 'bg-emerald-100 text-emerald-900 ring-1 ring-emerald-200/80';
	}

	// Datos de ejemplo - personaliza con tu información
	const proyectos = [
		{
			id: 1,
			titulo: "Medicina y Salud",
			descripcion: "Landing page moderna para servicios médicos con un fuerte enfoque en UI/UX. Diseñé una interfaz limpia, responsive y orientada a la conversión, incorporando componentes visuales atractivos como formularios con floating labels, carruseles animados y secciones dinámicas. Se priorizó la experiencia del usuario en todos los dispositivos, optimizando accesibilidad, jerarquía visual y microinteracciones. El proyecto está desplegado en Vercel para alta disponibilidad.",
			imagen: "🩺",
			categoria: "Frontend",
			tecnologias: ["Angular", "TailwindCSS", "Flowbite", "SweetAlert", "AOS"],
			url: "https://github.com/diego939/medicina-y-salud-frontend-angular",
			demo: "https://medicina-y-salud-frontend-angular.vercel.app",
			destacado: true
		},
		{
			id: 2,
			titulo: "Sistema de Gestión Escolar",
			descripcion: "Sistema de gestión escolar fullstack en desarrollo, diseñado como una solución flexible y escalable para instituciones educativas. El objetivo es construir una plataforma adaptable a diferentes modelos organizativos, permitiendo personalización por institución. Implementado con backend en .NET (API REST documentada con Swagger) y base de datos SQL Server, junto a un frontend en Angular enfocado en experiencia de usuario, modularidad y mantenibilidad.",
			imagen: "🏫",
			categoria: "Full Stack",
			tecnologias: ["Angular", ".NET", "SQL Server", "Swagger"],
			url: "https://github.com/diego939/sistema-escuela-frontend-angular",
			demo: "",
			destacado: true
		},
		{
			id: 3,
			titulo: "Liga San Miguel",
			descripcion:
				"Desarrollé una plataforma full stack para la gestión de torneos de la Liga de Fútbol de San Miguel, utilizada en un entorno real para optimizar la administración de competencias, equipos y jugadores. Implementé automatización de fichajes y control de sanciones, reduciendo la carga operativa manual y mejorando la trazabilidad de la información. La solución incluye una API REST robusta en NestJS (documentada con Swagger), un frontend dinámico en Angular con Tailwind CSS y una base de datos PostgreSQL, todo desplegado en la nube (Railway y Vercel) para garantizar accesibilidad y escalabilidad.",
			imagen: "⚽",
			categoria: "Full Stack",
			tecnologias: [
				"Angular",
				"Tailwind CSS",
				"NestJS",
				"Swagger",
				"PostgreSQL",
				"Railway",
				"Vercel"
			],
			url: "https://github.com/diego939/liga-san-miguel-frontend-angular",
			demo: "https://liga-san-miguel-futbol.vercel.app",
			destacado: false
		},
		{
			id: 4,
			titulo: "App de Tareas",
			descripcion: "Mi primera aplicación Micro FrontEnd desarrollada con Vue.js que demuestra habilidades avanzadas en desarrollo web moderno. Implementé un sistema completo de gestión de tareas con autenticación de usuarios, operaciones CRUD completas y integración con APIs REST. La aplicación utiliza arquitectura SPA con modales interactivos y está optimizada para una experiencia de usuario fluida.",
			imagen: "📝",
			categoria: "Frontend",
			tecnologias: ["Vue", "Bootstrap", "JavaScript", "HTML", "CSS"],
			url: "https://github.com/diego939/tareas-app-vue",
			demo: "",
			destacado: false
		},
		{
			id: 5,
			titulo: "Copa Corrientes Diversa",
			descripcion: "Desarrollé y migré una plataforma web completa a SvelteKit, enfocada en la gestión de torneos deportivos inclusivos. Implementé módulos para administración de deportes, equipos, competencias, fixtures, resultados y podios, junto con un sistema de subida y gestión de archivos (imágenes y PDFs) utilizando almacenamiento en la nube con Vercel Blob. El sistema utiliza Prisma ORM con MySQL para modelado de datos relacional y consultas eficientes, y Tailwind CSS para la construcción de una interfaz moderna, responsive y optimizada.",
			imagen: "🏆",
			categoria: "Full Stack",
			tecnologias: [ "SvelteKit", "Prisma ORM", "Tailwind CSS", "MySQL", "Vercel Blob"],
			url: "https://github.com/diego939/torneo-diverso-ctes",
			demo: "https://torneo-diverso-ctes.vercel.app",
			destacado: false
		},
		{
			id: 6,
			titulo: "E-commerce ASP.NET Core",
			descripcion: "Aplicación web de comercio electrónico desarrollada con ASP.NET Core MVC utilizando Razor Views y una arquitectura en capas. El sistema incluye catálogo de productos, carrito de compras, panel administrativo y procesamiento de pagos mediante integración con PayPal Developer. También se utilizan AJAX y jQuery para mejorar la experiencia de usuario mediante interacciones dinámicas sin recarga de página.",
			imagen: "🛒",
			categoria: "Full Stack",
			tecnologias: [".NET", "ASP.NET Core", "Razor", "SQL Server", "jQuery", "AJAX", "Bootstrap"],
			url: "https://github.com/diego939/tienda_asp.net",
			demo: "",
			destacado: false
		},
		{
			id: 7,
			titulo: "Polirubro D & P",
			descripcion: "Sistema de gestión empresarial desarrollado con tecnologías Microsoft para administrar las operaciones de un polirubro. La aplicación incluye control de ventas, gestión de productos, manejo de stock y generación de reportes administrativos. Implementa un sistema de roles jerárquico (Cajero, Encargado, Gerente y Gerente General) que habilita funcionalidades según el nivel de acceso del usuario.",
			imagen: "🏪",
			categoria: "Full Stack",
			tecnologias: [".NET", "SQL Server", "HTML", "CSS", "Entity Framework", "Report Viewer"],
			url: "https://github.com/Pablin89/Proyecto2023",
			demo: "",
			destacado: false
		},
		{
			id: 8,
			titulo: "Mi Portafolio",
			descripcion: "Aplicación web profesional desarrollada durante el programa Argentina Programa (YoProgramo). Creé una plataforma que simula una red social profesional para la comunidad IT, implementando funcionalidades avanzadas de networking y presentación de proyectos. El sistema incluye envío automatizado de información por email para facilitar la colaboración.",
			imagen: "💼",
			categoria: "Full Stack",
			tecnologias: ["Angular","Spring boot","Bootstrap","Java"],
			url: "https://github.com/diego939/Front-End-Angular",
			demo: "https://portafolio-almiron-diego.vercel.app/",
			destacado: false
		},
		{
			id: 9,
			titulo: "Tienda en línea",
			descripcion: "E-commerce completo con sistema de gestión de inventario y facturación automatizada. Desarrollé una plataforma robusta que incluye control de stock en tiempo real, sistema de ventas integrado y facturación automática. Implementé un sistema de roles escalable (Cliente, Administrador, Super Administrador) con funcionalidades específicas para cada nivel de acceso.",
			imagen: "🛒",
			categoria: "Full Stack",
			tecnologias: ["Codeigniter", "PHP","Bootstrap", "JavaScript", "HTML", "CSS"],
			url: "https://github.com/diego939/taller1-integrador",
			demo: "",
			destacado: false
		},
		{
			id: 10,
			titulo: "Amazon SES",
			descripcion: "Integración avanzada con Amazon Simple Email Service (SES) para automatización de comunicaciones empresariales. Desarrollé una solución que aprovecha la infraestructura cloud de AWS para enviar emails transaccionales, de marketing y notificaciones de forma escalable y confiable. La implementación optimiza costos y garantiza alta disponibilidad.",
			imagen: "✉️",
			categoria: "Full Stack",
			tecnologias: ["JavaScript", "Svelte", "Node.js", "Bootstrap", "AWS", "Express"],
			url: "https://github.com/diego939/aws-ses-svelte",
			demo: "",
			destacado: false
		},
		{
			id: 11,
			titulo: "Actividades Diversa",
			descripcion: "Plataforma web integral para la gestión de actividades educativas y deportivas de la Fundación Corrientes Diversa. Desarrollé un sistema que centraliza la información de cursos, deportes y eventos, facilitando la difusión y organización de actividades inclusivas. La aplicación está desplegada en Vercel para máxima disponibilidad.",
			imagen: "🏳️‍🌈",
			categoria: "Frontend",
			tecnologias: ["HTML", "SweetAlert", "CSS", "Bootstrap"],
			url: "https://github.com/diego939/actividades-diversa",
			demo: "https://actividades-diversa.vercel.app",
			destacado: false
		},
		/*{
			id: 13,
			titulo: "Caja Handball",
			descripcion: "Sistema de administración financiera para gestión de caja en eventos de handball. Desarrollé una plataforma que registra y controla todos los movimientos de dinero (depósitos y extracciones) con sus respectivos detalles. La aplicación permite visualizar el historial completo de transacciones, generar reportes detallados y descargar archivos de encabezado y detalle en formatos Excel y PDF para auditoría y control administrativo.",
			imagen: "💰",
			categoria: "Frontend",
			tecnologias: ["HTML", "JavaScript", "Bootstrap", "CSS"],
			url: "https://github.com/diego939/caja-handball",
			demo: "https://caja-handball.vercel.app/",
			destacado: false
		},*/
		{
			id: 12,
			titulo: "Job Tracker App",
			descripcion: "Aplicación Full Stack para la gestión de postulaciones laborales, que permite registrar, organizar y hacer seguimiento de empleos aplicados. Incluye funcionalidades como creación, edición y eliminación de aplicaciones, manejo de estados (aplicado, entrevista, oferta, rechazado) y persistencia de datos en la nube. El frontend fue desarrollado con React y Tailwind CSS, mientras que el backend utiliza Node.js con Prisma ORM conectado a una base de datos PostgreSQL en Superbase.",
			imagen: "💼",
			categoria: "Full Stack",
			tecnologias: [
				"React",
				"Node.js",
				"Prisma",
				"PostgreSQL",
				"Tailwind CSS",
				"Supabase",
				"Railway",
				"Vercel"
			],
			url: "https://github.com/diego939/job-tracker-frontend",
			demo: "https://job-tracker-frontend-vert.vercel.app/",
			destacado: false
		}
	];

	let filtroCategoria = "Todos";

	const categorias = ["Todos", "Full Stack", "Frontend", "Backend"];

	// Función para filtrar proyectos según categoría
	$: proyectosFiltrados = proyectos.filter(proyecto => {
		if (filtroCategoria === "Todos") return true;
		
		// Proyectos que aparecen en Full Stack
		if (filtroCategoria === "Full Stack" && proyecto.categoria === "Full Stack") return true;
		
		// Proyectos que aparecen en Backend (mismos que Full Stack)
		if (filtroCategoria === "Backend" && proyecto.categoria === "Full Stack") return true;
		
		// Proyectos que aparecen en Frontend
		if (filtroCategoria === "Frontend" && proyecto.categoria === "Frontend") return true;
		
		return false;
	});

	const noDisponible = () => {
		Swal.fire({
			icon: 'info',
			title: 'Demo no disponible',
			text: 'Lo siento, este proyecto no tiene una demo pública disponible en este momento.',
			showConfirmButton: true,
			confirmButtonText: 'Cerrar'
		});
	};

	const proyectosDestacados = proyectos.filter(proyecto => proyecto.destacado);
	
	// Establecer el título de la página
	onMount(() => {
		document.title = 'Proyectos - Diego David Almirón';
	});
</script>

<div class="space-y-10 pb-6 sm:space-y-14 md:space-y-16">
	<!-- Header -->
	<header class="px-4 text-center sm:px-6">
		<p class="mb-2 text-sm font-semibold uppercase tracking-wider text-purple-800/85">
			Portafolio seleccionado
		</p>
		<h1 class="mb-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
			Mis proyectos
		</h1>
		<p class="mx-auto max-w-2xl text-base text-gray-600 sm:text-lg">
			Aplicaciones y sistemas que muestran cómo resuelvo problemas reales con código limpio y stack moderno.
		</p>
	</header>

	<!-- Filtros -->
	<div class="flex justify-center px-4 sm:px-6">
		<div
			class="inline-flex flex-wrap justify-center gap-1.5 rounded-2xl border border-purple-900/10 bg-white/90 p-2 shadow-lg backdrop-blur-sm sm:gap-2"
			role="tablist"
			aria-label="Filtrar por categoría"
		>
			{#each categorias as categoria}
				<button
					type="button"
					class="rounded-xl px-3 py-2 text-xs font-semibold transition-all sm:px-4 sm:text-sm md:text-base {filtroCategoria ===
					categoria
						? 'bg-purple-900 text-white shadow-md shadow-purple-900/25'
						: 'bg-gray-50 text-gray-700 hover:bg-purple-50 hover:text-purple-900'}"
					on:click={() => (filtroCategoria = categoria)}
					aria-pressed={filtroCategoria === categoria}
				>
					{categoria}
				</button>
			{/each}
		</div>
	</div>

	<!-- Proyectos Destacados -->
	{#if filtroCategoria === 'Todos'}
		<section class="space-y-6 px-4 sm:space-y-8 sm:px-6" aria-labelledby="destacados-heading">
			<div class="flex flex-col gap-2 text-center sm:text-left">
				<h2 id="destacados-heading" class="text-2xl font-bold text-gray-900 sm:text-3xl">
					Proyectos destacados
				</h2>
				<p class="text-sm text-gray-600 sm:text-base">
					Los que mejor representan mi trabajo actual y mi enfoque full stack.
				</p>
			</div>
			<div class="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
				{#each proyectosDestacados as proyecto (proyecto.id)}
					<article
						class="group relative flex flex-col overflow-hidden rounded-2xl border border-purple-900/10 bg-white/95 shadow-xl backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-purple-900/25 hover:shadow-2xl"
					>
						<div
							class="h-1.5 w-full bg-gradient-to-r from-purple-600 via-violet-500 to-indigo-600"
						></div>
						<div class="flex flex-1 flex-col p-6 sm:p-8">
							<div class="mb-4 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
								<div class="flex items-start gap-4">
									<div
										class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-50 to-indigo-50 text-3xl shadow-inner ring-1 ring-purple-900/10 sm:h-16 sm:w-16 sm:text-4xl"
										aria-hidden="true"
									>
										{proyecto.imagen}
									</div>
									<div>
										<h3 class="text-xl font-bold text-gray-900 sm:text-2xl">{proyecto.titulo}</h3>
										<span
											class="mt-2 inline-flex rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide {badgeCategoria(
												proyecto.categoria
											)}"
										>
											{proyecto.categoria}
										</span>
									</div>
								</div>
								{#if proyecto.destacado}
									<span
										class="self-start rounded-full bg-amber-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-amber-900 ring-1 ring-amber-200/80"
									>
										Destacado
									</span>
								{/if}
							</div>
							<p class="mb-5 flex-1 text-sm leading-relaxed text-gray-600 sm:text-base">
								{proyecto.descripcion}
							</p>
							<div class="mb-6 flex flex-wrap gap-2">
								{#each proyecto.tecnologias as tecnologia}
									<span
										class="rounded-full border border-purple-200/70 bg-gradient-to-br from-white to-purple-50/90 px-3 py-1 text-xs font-medium text-purple-900 shadow-sm"
									>
										{tecnologia}
									</span>
								{/each}
							</div>
							<div class="mt-auto flex flex-col gap-3 sm:flex-row sm:gap-3">
								<a
									href={proyecto.url}
									target="_blank"
									rel="noopener noreferrer"
									class="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-purple-900 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-900/20 transition hover:bg-purple-800"
								>
									<svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
										<path
											d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
										/>
									</svg>
									Código
								</a>
								{#if proyecto.demo}
									<a
										href={proyecto.demo}
										target="_blank"
										rel="noopener noreferrer"
										class="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border-2 border-purple-900/20 bg-white px-4 py-3 text-sm font-semibold text-purple-900 transition hover:border-purple-900/40 hover:bg-purple-50/80"
									>
										<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
											/>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
											/>
										</svg>
										Ver demo
									</a>
								{:else}
									<button
										type="button"
										class="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 px-4 py-3 text-sm font-semibold text-gray-600 transition hover:bg-gray-100"
										on:click={() => noDisponible()}
									>
										Demo no disponible
									</button>
								{/if}
							</div>
						</div>
					</article>
				{/each}
			</div>
		</section>
	{/if}

	<!-- Grid proyectos -->
	<section class="space-y-6 px-4 sm:space-y-8 sm:px-6" aria-labelledby="lista-proyectos-heading">
		<h2 id="lista-proyectos-heading" class="text-2xl font-bold text-gray-900 sm:text-3xl">
			{filtroCategoria === 'Todos' ? 'Todos los proyectos' : `Proyectos · ${filtroCategoria}`}
		</h2>
		<div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
			{#each proyectosFiltrados as proyecto (proyecto.id)}
				<article
					class="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-lg transition duration-300 hover:-translate-y-0.5 hover:border-purple-900/15 hover:shadow-xl"
				>
					<div class="flex flex-1 flex-col p-5 sm:p-6">
						<div class="mb-3 flex items-start gap-3">
							<div
								class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gray-50 text-2xl ring-1 ring-gray-100 transition group-hover:bg-purple-50 group-hover:ring-purple-100"
								aria-hidden="true"
							>
								{proyecto.imagen}
							</div>
							<div class="min-w-0 flex-1">
								<h3 class="font-bold leading-snug text-gray-900 sm:text-lg">{proyecto.titulo}</h3>
								<span
									class="mt-1 inline-flex rounded-full px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide {badgeCategoria(
										proyecto.categoria
									)}"
								>
									{proyecto.categoria}
								</span>
							</div>
							{#if proyecto.destacado}
								<span class="shrink-0 rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-bold uppercase text-amber-900">
									★
								</span>
							{/if}
						</div>
						<p class="mb-4 flex-1 text-sm leading-relaxed text-gray-600 line-clamp-4">
							{proyecto.descripcion}
						</p>
						<div class="mb-5 flex flex-wrap gap-1.5">
							{#each proyecto.tecnologias.slice(0, 4) as tecnologia}
								<span
									class="rounded-md bg-purple-50/90 px-2 py-0.5 text-[11px] font-medium text-purple-900 ring-1 ring-purple-100"
								>
									{tecnologia}
								</span>
							{/each}
							{#if proyecto.tecnologias.length > 4}
								<span class="rounded-md bg-gray-100 px-2 py-0.5 text-[11px] font-semibold text-gray-600">
									+{proyecto.tecnologias.length - 4}
								</span>
							{/if}
						</div>
						<div class="mt-auto flex flex-col gap-2 sm:flex-row">
							<a
								href={proyecto.url}
								target="_blank"
								rel="noopener noreferrer"
								class="inline-flex flex-1 items-center justify-center rounded-xl bg-gray-900 px-3 py-2.5 text-xs font-semibold text-white transition hover:bg-gray-800 sm:text-sm"
							>
								GitHub
							</a>
							{#if proyecto.demo}
								<a
									href={proyecto.demo}
									target="_blank"
									rel="noopener noreferrer"
									class="inline-flex flex-1 items-center justify-center rounded-xl border border-purple-900/20 bg-white px-3 py-2.5 text-xs font-semibold text-purple-900 transition hover:bg-purple-50 sm:text-sm"
								>
									Demo
								</a>
							{:else}
								<button
									type="button"
									class="inline-flex flex-1 items-center justify-center rounded-xl border border-dashed border-gray-300 bg-gray-50 px-3 py-2.5 text-xs font-semibold text-gray-600 hover:bg-gray-100 sm:text-sm"
									on:click={() => noDisponible()}
								>
									Sin demo
								</button>
							{/if}
						</div>
					</div>
				</article>
			{/each}
		</div>
	</section>

	<!-- Estadísticas -->
	<section
		class="relative mx-4 overflow-hidden rounded-3xl border border-purple-900/10 bg-gradient-to-br from-indigo-50/90 via-white to-purple-50/80 p-8 shadow-inner sm:mx-6 sm:p-10"
		aria-labelledby="stats-proyectos-heading"
	>
		<div
			class="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-purple-400/15 blur-3xl"
		></div>
		<h2 id="stats-proyectos-heading" class="relative mb-8 text-center text-2xl font-bold text-gray-900 sm:text-3xl">
			Cifras del portafolio
		</h2>
		<div class="relative grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5">
			<div
				class="rounded-2xl border border-white/60 bg-white/90 p-5 text-center shadow-md backdrop-blur-sm"
			>
				<div class="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100 text-purple-900">
					<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
						/>
					</svg>
				</div>
				<div class="text-3xl font-bold text-purple-900">{proyectos.length}</div>
				<p class="mt-1 text-xs text-gray-600 sm:text-sm">Proyectos relevantes</p>
			</div>
			<div
				class="rounded-2xl border border-white/60 bg-white/90 p-5 text-center shadow-md backdrop-blur-sm"
			>
				<div class="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800">
					<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
						/>
					</svg>
				</div>
				<div class="text-3xl font-bold text-emerald-700">{proyectosDestacados.length}</div>
				<p class="mt-1 text-xs text-gray-600 sm:text-sm">Destacados</p>
			</div>
			<div
				class="rounded-2xl border border-white/60 bg-white/90 p-5 text-center shadow-md backdrop-blur-sm"
			>
				<div class="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 text-violet-900">
					<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
						/>
					</svg>
				</div>
				<div class="text-3xl font-bold text-violet-800">20+</div>
				<p class="mt-1 text-xs text-gray-600 sm:text-sm">Tecnologías</p>
			</div>
			<div
				class="rounded-2xl border border-white/60 bg-white/90 p-5 text-center shadow-md backdrop-blur-sm"
			>
				<div class="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-900">
					<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
						/>
					</svg>
				</div>
				<div class="text-3xl font-bold text-amber-800">100%</div>
				<p class="mt-1 text-xs text-gray-600 sm:text-sm">Código abierto</p>
			</div>
		</div>
	</section>

	<!-- GitHub CTA -->
	<section
		class="mx-4 overflow-hidden rounded-3xl bg-gradient-to-r from-gray-900 via-purple-950 to-gray-900 px-6 py-10 text-center shadow-2xl sm:mx-6 sm:px-10 sm:py-12"
	>
		<h2 class="mb-3 text-xl font-bold text-white sm:text-2xl">¿Más en GitHub?</h2>
		<p class="mx-auto mb-8 max-w-xl text-sm text-purple-100/90 sm:text-base">
			Experimentos, forks y otros repos que complementan lo que ves aquí.
		</p>
		<a
			href="https://github.com/diego939"
			target="_blank"
			rel="noopener noreferrer"
			class="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-3.5 text-sm font-bold text-gray-900 shadow-lg transition hover:bg-purple-50 hover:shadow-xl"
		>
			<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
				<path
					d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
				/>
			</svg>
			Ver perfil en GitHub
		</a>
	</section>
</div>
