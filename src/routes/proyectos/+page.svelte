<script lang="ts">
	import { onMount } from 'svelte';
	
	// Datos de ejemplo - personaliza con tu información
	const proyectos = [
		{
			id: 1,
			titulo: "App de Tareas",
			descripcion: "Mi primera aplicación Micro FrontEnd desarrollada con Vue.js que demuestra habilidades avanzadas en desarrollo web moderno. Implementé un sistema completo de gestión de tareas con autenticación de usuarios, operaciones CRUD completas y integración con APIs REST. La aplicación utiliza arquitectura SPA con modales interactivos y está optimizada para una experiencia de usuario fluida.",
			imagen: "📝",
			categoria: "Frontend",
			tecnologias: ["Vue", "Bootstrap", "JavaScript", "HTML", "CSS"],
			url: "#",
			demo: "#",
			destacado: false
		},
		{
			id: 2,
			titulo: "Copa Corrientes Diversa",
			descripcion: "Plataforma web integral para el torneo deportivo inclusivo más importante de Corrientes. Desarrollé un sistema completo que gestiona 11 deportes diferentes, facilitando la organización de competencias mixtas e inclusivas. La aplicación optimiza el traslado de competidores, automatiza la subida de resultados y gestiona galerías fotográficas en tiempo real.",
			imagen: "🏆",
			categoria: "Frontend",
			tecnologias: [ "Bootstrap", "JavaScript", "HTML", "CSS"],
			url: "#",
			demo: "#",
			destacado: false
		},
		{
			id: 3,
			titulo: "Actividades de Verano",
			descripcion: "Sistema de gestión integral para colonias de vacaciones y actividades deportivas. Desarrollé una plataforma que automatiza las inscripciones, gestiona 14 actividades diferentes y valida dinámicamente la disponibilidad de espacios según el deporte seleccionado. La aplicación optimiza la experiencia tanto para participantes como para organizadores.",
			imagen: "🌞",
			categoria: "Frontend",
			tecnologias: ["Vue", "Bootstrap", "JavaScript", "HTML", "CSS"],
			url: "#",
			demo: "#",
			destacado: false
		},
		{
			id: 4,
			titulo: "Polirubro D & P",
			descripcion: "Sistema empresarial completo desarrollado con tecnologías Microsoft para la gestión integral de un polirubro. Implementé un sistema de roles jerárquico (Cajero, Encargado, Gerente, Gerente General) con funcionalidades específicas para cada nivel, optimizando los procesos comerciales y mejorando la eficiencia operativa.",
			imagen: "🏪",
			categoria: "Full Stack",
			tecnologias: [".NET", "SQL Server", "HTML", "CSS"],
			url: "#",
			demo: "#",
			destacado: true
		},
		{
			id: 5,
			titulo: "Mi Portafolio",
			descripcion: "Aplicación web profesional desarrollada durante el programa Argentina Programa (YoProgramo). Creé una plataforma que simula una red social profesional para la comunidad IT, implementando funcionalidades avanzadas de networking y presentación de proyectos. El sistema incluye envío automatizado de información por email para facilitar la colaboración.",
			imagen: "💼",
			categoria: "Full Stack",
			tecnologias: ["Angular","Spring boot","Bootstrap","Java"],
			url: "#",
			demo: "#",
			destacado: false
		},
		{
			id: 6,
			titulo: "Tienda en línea",
			descripcion: "E-commerce completo con sistema de gestión de inventario y facturación automatizada. Desarrollé una plataforma robusta que incluye control de stock en tiempo real, sistema de ventas integrado y facturación automática. Implementé un sistema de roles escalable (Cliente, Administrador, Super Administrador) con funcionalidades específicas para cada nivel de acceso.",
			imagen: "🛒",
			categoria: "Full Stack",
			tecnologias: ["Codeigniter", "PHP","Bootstrap", "JavaScript", "HTML", "CSS"],
			url: "https://github.com/diego939/taller1-integrador",
			demo: "#",
			destacado: true
		},
		{
			id: 7,
			titulo: "Amazon SES",
			descripcion: "Integración avanzada con Amazon Simple Email Service (SES) para automatización de comunicaciones empresariales. Desarrollé una solución que aprovecha la infraestructura cloud de AWS para enviar emails transaccionales, de marketing y notificaciones de forma escalable y confiable. La implementación optimiza costos y garantiza alta disponibilidad.",
			imagen: "✉️",
			categoria: "Frontend",
			tecnologias: ["JavaScript", "Svelte", "Node.js", "Bootstrap"],
			url: "#",
			demo: "#",
			destacado: false
		},
		{
			id: 8,
			titulo: "Actividades Diversa",
			descripcion: "Plataforma web integral para la gestión de actividades educativas y deportivas de la Fundación Corrientes Diversa. Desarrollé un sistema que centraliza la información de cursos, deportes y eventos, facilitando la difusión y organización de actividades inclusivas. La aplicación está desplegada en Vercel para máxima disponibilidad.",
			imagen: "🏳️‍🌈",
			categoria: "Frontend",
			tecnologias: ["HTML", "SweetAlert", "CSS", "Bootstrap"],
			url: "#",
			demo: "https://actividades-diversa.vercel.app",
			destacado: false
		},
		{
			id: 9,
			titulo: "Amistoso de Handball",
			descripcion: "Sistema de gestión para el primer torneo amistoso de handball mixto en la región. Desarrollé una plataforma que automatiza la organización del evento, incluyendo gestión de fixture, asignación de espacios de competición y sistema de inscripciones digital. La aplicación optimiza la experiencia tanto para organizadores como participantes.",
			imagen: "🤾‍♀️",
			categoria: "Frontend",
			tecnologias: ["HTML", "JavaScript", "Bootstrap", "CSS"],
			url: "#",
			demo: "#",
			destacado: false
		}
	];

	let filtroCategoria = "Todos";

	const categorias = ["Todos", "Full Stack", "Frontend", "Backend"];

	// Función para filtrar proyectos según categoría
	$: proyectosFiltrados = proyectos.filter(proyecto => {
		if (filtroCategoria === "Todos") return true;
		
		// Proyectos que aparecen en Full Stack (id: 4, 5, 6)
		if (filtroCategoria === "Full Stack" && [4, 5, 6].includes(proyecto.id)) return true;
		
		// Proyectos que aparecen en Backend (id: 4, 5, 6)
		if (filtroCategoria === "Backend" && [4, 5, 6].includes(proyecto.id)) return true;
		
		// Proyectos que aparecen en Frontend (id: 1, 2, 3, 7, 8, 9)
		if (filtroCategoria === "Frontend" && [1, 2, 3, 7, 8, 9].includes(proyecto.id)) return true;
		
		return false;
	});

	const proyectosDestacados = proyectos.filter(proyecto => proyecto.destacado);
	
	// Establecer el título de la página
	onMount(() => {
		document.title = 'Proyectos - Diego David Almirón';
	});
</script>

<div class="space-y-8 sm:space-y-12">
	<!-- Header -->
	<div class="text-center px-4">
		<h1 class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Mis Proyectos</h1>
		<p class="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
			Una colección de proyectos que demuestran mis habilidades técnicas y mi pasión por crear soluciones innovadoras.
		</p>
	</div>

	<!-- Filtros -->
	<div class="flex justify-center px-4">
		<div class="flex flex-wrap gap-1 sm:gap-2 bg-white p-2 rounded-xl shadow-lg">
			{#each categorias as categoria}
				<button 
					class="px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-lg font-medium transition-colors text-xs sm:text-sm md:text-base {filtroCategoria === categoria ? 'bg-purple-900 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}"
					on:click={() => filtroCategoria = categoria}
				>
					{categoria}
				</button>
			{/each}
		</div>
	</div>

	<!-- Proyectos Destacados -->
	{#if filtroCategoria === "Todos"}
		<section class="space-y-3 sm:space-y-4 md:space-y-6 px-4 sm:px-6">
			<h2 class="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">Proyectos Destacados</h2>
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
				{#each proyectosDestacados as proyecto}
					<div class="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
						<div class="p-4 sm:p-6 md:p-8">
							<div class="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
								<span class="text-2xl sm:text-3xl md:text-4xl">{proyecto.imagen}</span>
								<div>
									<h3 class="text-base sm:text-lg md:text-xl font-bold text-gray-900">{proyecto.titulo}</h3>
									<span class="inline-block px-2 sm:px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs sm:text-sm font-medium">
										{proyecto.categoria}
									</span>
								</div>
							</div>
							<p class="text-xs sm:text-sm md:text-base text-gray-600 mb-3 sm:mb-4">{proyecto.descripcion}</p>
							<div class="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4 md:mb-6">
								{#each proyecto.tecnologias as tecnologia}
									<span class="px-2 sm:px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs sm:text-sm">
										{tecnologia}
									</span>
								{/each}
							</div>
							<div class="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
								<a 
									href={proyecto.url} 
									target="_blank" 
									rel="noopener noreferrer"
									class="bg-purple-900 text-white px-3 sm:px-4 py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors text-center text-xs sm:text-sm"
								>
									Código
								</a>
								<a 
									href={proyecto.demo} 
									target="_blank" 
									rel="noopener noreferrer"
									class="border border-purple-900 text-purple-900 px-3 sm:px-4 py-2 rounded-lg font-medium hover:bg-purple-50 transition-colors text-center text-xs sm:text-sm"
								>
									Demo
								</a>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</section>
	{/if}

	<!-- Todos los Proyectos -->
	<section class="space-y-3 sm:space-y-4 md:space-y-6 px-4 sm:px-6">
		<h2 class="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
			{filtroCategoria === "Todos" ? "Todos los Proyectos" : `Proyectos de ${filtroCategoria}`}
		</h2>
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
			{#each proyectosFiltrados as proyecto}
				<div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col h-full">
					<div class="p-3 sm:p-4 md:p-6 flex flex-col flex-1">
						<div class="flex items-center space-x-2 sm:space-x-3 mb-2 sm:mb-3">
							<span class="text-xl sm:text-2xl md:text-3xl">{proyecto.imagen}</span>
							<div>
								<h3 class="text-sm sm:text-base md:text-lg font-semibold text-gray-900">{proyecto.titulo}</h3>
								<span class="inline-block px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
									{proyecto.categoria}
								</span>
							</div>
						</div>
						<p class="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3 md:mb-4 flex-grow">{proyecto.descripcion}</p>
						<div class="flex flex-wrap gap-1 mb-2 sm:mb-3 md:mb-4">
							{#each proyecto.tecnologias.slice(0, 3) as tecnologia}
								<span class="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">
									{tecnologia}
								</span>
							{/each}
							{#if proyecto.tecnologias.length > 3}
								<span class="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
									+{proyecto.tecnologias.length - 3}
								</span>
							{/if}
						</div>
						<div class="flex flex-col sm:flex-row space-y-1 sm:space-y-0 sm:space-x-2 mt-auto">
							<a 
								href={proyecto.url} 
								target="_blank" 
								rel="noopener noreferrer"
								class="bg-gray-600 text-white px-2 sm:px-3 py-1 rounded text-xs sm:text-sm hover:bg-gray-700 transition-colors text-center"
							>
								Código
							</a>
							<a 
								href={proyecto.demo} 
								target="_blank" 
								rel="noopener noreferrer"
								class="border border-gray-300 text-gray-700 px-2 sm:px-3 py-1 rounded text-xs sm:text-sm hover:bg-gray-50 transition-colors text-center"
							>
								Demo
							</a>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</section>

	<!-- Estadísticas de Proyectos -->
	<section class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 sm:p-8">
		<h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-6 text-center">Estadísticas de Proyectos</h2>
		<div class="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
			<div class="bg-white p-4 sm:p-6 rounded-xl text-center shadow-md">
				<div class="text-2xl sm:text-3xl font-bold text-purple-900 mb-2">{proyectos.length}</div>
				<p class="text-xs sm:text-sm text-gray-600">Proyectos Más Relevantes</p>
			</div>
			<div class="bg-white p-4 sm:p-6 rounded-xl text-center shadow-md">
				<div class="text-2xl sm:text-3xl font-bold text-green-600 mb-2">{proyectosDestacados.length}</div>
				<p class="text-xs sm:text-sm text-gray-600">Proyectos Destacados</p>
			</div>
			<div class="bg-white p-4 sm:p-6 rounded-xl text-center shadow-md">
				<div class="text-2xl sm:text-3xl font-bold text-purple-600 mb-2">20+</div>
				<p class="text-xs sm:text-sm text-gray-600">Tecnologías Utilizadas</p>
			</div>
			<div class="bg-white p-4 sm:p-6 rounded-xl text-center shadow-md">
				<div class="text-2xl sm:text-3xl font-bold text-orange-600 mb-2">100%</div>
				<p class="text-xs sm:text-sm text-gray-600">Código Abierto</p>
			</div>
		</div>
	</section>

	<!-- Sección de Más Proyectos -->
	<section class="bg-white rounded-2xl shadow-lg p-6 sm:p-8 text-center">
		<h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-4">¿Quieres ver más proyectos?</h2>
		<p class="text-sm sm:text-base text-gray-600 mb-6 max-w-2xl mx-auto">
			Estos son solo algunos de mis proyectos. En mi repositorio de GitHub encontrarás más proyectos, experimentos y contribuciones que he realizado.
		</p>
		<div class="flex justify-center">
			<a href="https://github.com/diego939" target="_blank" rel="noopener noreferrer" class="bg-purple-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors flex items-center space-x-2">
				<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
					<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
				</svg>
				<span>Ver más proyectos en mi repositorio</span>
			</a>
		</div>
	</section>
</div> 