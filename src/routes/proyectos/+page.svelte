<script lang="ts">
	// Datos de ejemplo - personaliza con tu información
	const proyectos = [
		{
			id: 1,
			titulo: "E-commerce Platform",
			descripcion: "Plataforma completa de comercio electrónico con sistema de pagos, gestión de inventario y panel administrativo.",
			imagen: "🛒",
			categoria: "Full Stack",
			tecnologias: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
			url: "https://github.com/tuusuario/ecommerce",
			demo: "https://demo-ecommerce.com",
			destacado: true
		},
		{
			id: 2,
			titulo: "Sistema de Gestión CRM",
			descripcion: "Sistema integral de gestión de relaciones con clientes con análisis de datos y reportes automatizados.",
			imagen: "📊",
			categoria: "Backend",
			tecnologias: ["Vue.js", "Laravel", "PostgreSQL", "Redis", "Docker"],
			url: "https://github.com/tuusuario/crm-system",
			demo: "https://demo-crm.com",
			destacado: true
		},
		{
			id: 3,
			titulo: "App Móvil de Delivery",
			descripcion: "Aplicación móvil para servicio de entrega de alimentos con geolocalización y notificaciones en tiempo real.",
			imagen: "📱",
			categoria: "Mobile",
			tecnologias: ["React Native", "Firebase", "Google Maps API", "Redux"],
			url: "https://github.com/tuusuario/delivery-app",
			demo: "https://demo-delivery.com",
			destacado: false
		},
		{
			id: 4,
			titulo: "Dashboard Analytics",
			descripcion: "Dashboard interactivo para análisis de datos empresariales con gráficos dinámicos y filtros avanzados.",
			imagen: "📈",
			categoria: "Frontend",
			tecnologias: ["React", "TypeScript", "D3.js", "Chart.js", "Material-UI"],
			url: "https://github.com/tuusuario/analytics-dashboard",
			demo: "https://demo-analytics.com",
			destacado: false
		},
		{
			id: 5,
			titulo: "API REST de Microservicios",
			descripcion: "Arquitectura de microservicios con API Gateway, autenticación JWT y documentación automática.",
			imagen: "🔌",
			categoria: "Backend",
			tecnologias: ["Node.js", "Express", "MongoDB", "JWT", "Swagger"],
			url: "https://github.com/tuusuario/microservices-api",
			demo: "https://api-demo.com",
			destacado: false
		},
		{
			id: 6,
			titulo: "Portfolio Personal",
			descripcion: "Portfolio personal desarrollado con SvelteKit y Tailwind CSS, completamente responsivo y optimizado.",
			imagen: "🎨",
			categoria: "Frontend",
			tecnologias: ["SvelteKit", "TypeScript", "Tailwind CSS", "Vite"],
			url: "https://github.com/tuusuario/portfolio",
			demo: "https://tuportfolio.com",
			destacado: false
		}
	];

	let filtroCategoria = "Todos";

	const categorias = ["Todos", "Full Stack", "Frontend", "Backend", "Mobile"];

	const proyectosFiltrados = proyectos.filter(proyecto => 
		filtroCategoria === "Todos" || proyecto.categoria === filtroCategoria
	);

	const proyectosDestacados = proyectos.filter(proyecto => proyecto.destacado);
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
				<p class="text-xs sm:text-sm text-gray-600">Proyectos Completados</p>
			</div>
			<div class="bg-white p-4 sm:p-6 rounded-xl text-center shadow-md">
				<div class="text-2xl sm:text-3xl font-bold text-green-600 mb-2">{proyectosDestacados.length}</div>
				<p class="text-xs sm:text-sm text-gray-600">Proyectos Destacados</p>
			</div>
			<div class="bg-white p-4 sm:p-6 rounded-xl text-center shadow-md">
				<div class="text-2xl sm:text-3xl font-bold text-purple-600 mb-2">15+</div>
				<p class="text-xs sm:text-sm text-gray-600">Tecnologías Utilizadas</p>
			</div>
			<div class="bg-white p-4 sm:p-6 rounded-xl text-center shadow-md">
				<div class="text-2xl sm:text-3xl font-bold text-orange-600 mb-2">100%</div>
				<p class="text-xs sm:text-sm text-gray-600">Código Abierto</p>
			</div>
		</div>
	</section>

	<!-- Sección de Colaboración -->
	<section class="bg-white rounded-2xl shadow-lg p-6 sm:p-8 text-center">
		<h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-4">¿Tienes un proyecto en mente?</h2>
		<p class="text-sm sm:text-base text-gray-600 mb-6 max-w-2xl mx-auto">
			Me encanta colaborar en proyectos interesantes. Si tienes una idea o necesitas ayuda con un proyecto, ¡me encantaría escucharte!
		</p>
		<div class="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
			<a href="mailto:tu@email.com" class="bg-purple-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors">
				Contactar
			</a>
			<a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer" class="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
				Ver GitHub
			</a>
		</div>
	</section>
</div> 