<script lang="ts">
	// Datos de ejemplo - personaliza con tu información
	const proyectos = [
		{
			id: 1,
			titulo: "App de Tareas",
			descripcion: "Realicé mi primera aplicación Micro FrontEnd con VueJs que involucra las siguientes actividades: 'Simulación de Login de Usuario, Listado de tareas, Alta de Tareas Nuevas, Baja de Tareas, Modificación de tareas, Uso de Fetch y Axios, uso de API REST para el CRUD (mockapi.io)'. La app está creada en un formato web SPA que utiliza modales para actualizar los patrocinios en el servidor.",
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
			descripcion: "Proyecto para la fundación Corrientes Diversa, torneo deportivo mixto inclusivo en Corrientes. Deportes: Voley, Fútbol, Hockey, Natación, Atletismo, Handball, Artes Marciales, Básquet, Padel, Tenis y Rugby. El sitio facilita el traslado de los competidores, subida de resultados y fotos.",
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
			descripcion: "Aplicación web para administrar inscripciones a colonia de vacaciones y deportes para la Fundación Corrientes Diversa. Actividades: Voley, Fútbol, Hockey, Natación, Pileta Libre, Atletismo, Preparación Física, Yoga, Handball, Artes Marciales, Básquet, Padel, Tenis y Rugby. Valida lugares según deporte elegido.",
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
			descripcion: "Aplicación web para sistematizar un polirubro. Permite gestionar el negocio de manera simple y amigable. Roles: Cajero, Encargado, Gerente y Gerente General.",
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
			descripcion: "Aplicación web desarrollada en el curso Argentina Programa (YoProgramo). Simula una red social profesional para mostrar información IT. El código de aplicación se envía por email para visualizar toda la información.",
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
			descripcion: "Proyecto web de control de stock y ventas con facturación. Desarrollado para la materia Taller de Programación 1. Permite gestionar el negocio de manera simple y amigable. Roles: Cliente, Administrador y Super Administrador.",
			imagen: "🛒",
			categoria: "Full Stack",
			tecnologias: ["Bootstrap", "JavaScript", "HTML", "CSS"],
			url: "https://github.com/diego939/taller1-integrador",
			demo: "#",
			destacado: true
		},
		{
			id: 7,
			titulo: "Amazon SES",
			descripcion: "Amazon Simple Email Service (SES) es un servicio de correo electrónico basado en la nube ofrecido por Amazon Web Services (AWS). Permite a los usuarios enviar y recibir correos electrónicos de marketing, transaccionales y de notificación a través de sus aplicaciones o plataformas. Es una opción popular para empresas y desarrolladores que buscan una solución de correo electrónico escalable, confiable y rentable.",
			imagen: "✉️",
			categoria: "Full Stack",
			tecnologias: ["JavaScript", "Svelte", "Node.js", "Bootstrap"],
			url: "#",
			demo: "#",
			destacado: false
		},
		{
			id: 8,
			titulo: "Actividades Diversa",
			descripcion: "Proyecto que gestiona las actividades de la Fundación Corrientes Diversa, que dicta cursos, tiene deportes y otras actividades. En el sitio se puede ver todas las actividades que se llevan a cabo.",
			imagen: "🏳️‍🌈",
			categoria: "Full Stack",
			tecnologias: ["HTML", "SweetAlert", "CSS", "Bootstrap"],
			url: "#",
			demo: "https://actividades-diversa.vercel.app",
			destacado: false
		},
		{
			id: 9,
			titulo: "Amistoso de Handball",
			descripcion: "Primer torneo amistoso de handball mixto, este proyecto se creó con el fin de organizar un torneo amistoso de handball en la modalidad mixta, donde se detallabael fixture y lugar de competición con sus respectivas inscripciones al torneo",
			imagen: "🤾‍♀️",
			categoria: "Frontend",
			tecnologias: ["HTML", "JavaScript", "Bootstrap", "CSS"],
			url: "#",
			demo: "#",
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