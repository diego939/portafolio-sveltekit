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

	const proyectosDestacados = [
		{
			nombre: "E-commerce Platform",
			descripcion: "Plataforma completa de comercio electrónico con más de 10,000 usuarios activos.",
			impacto: "Aumentó las ventas en un 150%",
			tecnologias: ["React", "Node.js", "MongoDB", "Stripe"]
		},
		{
			nombre: "Sistema de Gestión CRM",
			descripcion: "Sistema integral de gestión de relaciones con clientes para empresa de servicios.",
			impacto: "Mejoró la eficiencia operativa en un 40%",
			tecnologias: ["Vue.js", "Laravel", "PostgreSQL", "Redis"]
		},
		{
			nombre: "App Móvil de Delivery",
			descripcion: "Aplicación móvil para servicio de entrega de alimentos con geolocalización.",
			impacto: "Procesa más de 1,000 pedidos diarios",
			tecnologias: ["React Native", "Firebase", "Google Maps API"]
		}
	];
	
	// Establecer el título de la página
	onMount(() => {
		document.title = 'Experiencia - Diego David Almirón';
	});
</script>

<div class="space-y-12">
	<!-- Header -->
	<div class="text-center">
		<h1 class="text-4xl font-bold text-gray-900 mb-4">Experiencia Laboral</h1>
		<p class="text-lg text-gray-600 max-w-2xl mx-auto">
			Mi trayectoria profesional y los proyectos que han marcado mi crecimiento como desarrollador.
		</p>
	</div>

	<!-- Timeline de Experiencia -->
	<div class="relative">
		<!-- Línea de tiempo -->
		<div class="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 md:w-1 bg-purple-900"></div>
		
		<div class="space-y-6 md:space-y-8">
			{#each experiencia as item, index}
				<div class="relative flex items-start space-x-4 md:space-x-6">
					<!-- Punto en la línea de tiempo -->
					<div class="absolute left-2 md:left-6 w-3 h-3 md:w-4 md:h-4 bg-purple-900 rounded-full border-2 md:border-4 border-white shadow-lg z-10"></div>
					
					<!-- Contenido -->
					<div class="ml-8 md:ml-16 bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex-1">
						<div class="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 md:mb-4 space-y-2 sm:space-y-0">
							<div class="flex items-center space-x-2 md:space-x-3">
								<span class="text-xl md:text-2xl">{@html item.icono}</span>
								<div>
									<h3 class="text-lg md:text-xl font-semibold text-gray-900">{item.cargo}</h3>
									<p class="text-purple-900 font-medium text-sm md:text-base">{item.empresa}</p>
								</div>
							</div>
							<span class="text-xs md:text-sm text-gray-500 bg-gray-100 px-2 md:px-3 py-1 rounded-full self-start">
								{item.fecha}
							</span>
						</div>
						<p class="text-gray-600 leading-relaxed mb-3 md:mb-4 text-sm md:text-base">
							{@html item.descripcion}
						</p>
						<div class="flex flex-wrap gap-1 md:gap-2">
							{#each item.tecnologias as tecnologia}
								<span class="px-2 md:px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs md:text-sm font-medium">
									{tecnologia}
								</span>
							{/each}
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>


	<!-- Estadísticas de Experiencia -->
	<section class="bg-white rounded-2xl shadow-lg p-8">
		<h2 class="text-2xl font-bold text-gray-900 mb-6 text-center">Estadísticas de Experiencia</h2>
		<div class="grid md:grid-cols-4 gap-6">
			<div class="text-center">
				<div class="text-3xl font-bold text-green-600 mb-2">5+</div>
				<p class="text-gray-600">Años De Experiencia General</p>
			</div>
			<div class="text-center">
				<div class="text-3xl font-bold text-purple-900 mb-2">1+</div>
				<p class="text-gray-600">Experiencia En Empresas</p>
			</div>
			<div class="text-center">
				<div class="text-3xl font-bold text-purple-600 mb-2">15+</div>
				<p class="text-gray-600">Tecnologías Dominadas</p>
			</div>
			<div class="text-center">
				<div class="text-3xl font-bold text-orange-600 mb-2">2</div>
				<p class="text-gray-600">Empresas Trabajadas</p>
			</div>
		</div>
	</section>

	<!-- Sección de Metodologías -->
	<section class="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8">
		<h2 class="text-2xl font-bold text-gray-900 mb-6 text-center">Metodologías y Prácticas</h2>
		<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
			<div class="bg-white p-4 rounded-lg text-center">
				<div class="text-2xl mb-2"><i class="fa-solid fa-arrows-rotate text-blue-500"></i></div>
				<h3 class="font-semibold text-blue-500">Agile/Scrum</h3>
			</div>
			<div class="bg-white p-4 rounded-lg text-center">
				<div class="text-2xl mb-2"><i class="fa-solid fa-hammer text-red-500"></i></div>
				<h3 class="font-semibold text-red-500">DevOps</h3>
			</div>
			<div class="bg-white p-4 rounded-lg text-center">
				<div class="text-2xl mb-2"><i class="fa-solid fa-vial text-green-500"></i></div>
				<h3 class="font-semibold text-green-500">TDD</h3>
			</div>
			<div class="bg-white p-4 rounded-lg text-center">
				<div class="text-2xl mb-2"><i class="fa-solid fa-users text-purple-500"></i></div>
				<h3 class="font-semibold text-purple-500">Liderazgo</h3>
			</div>
		</div>
	</section>
</div> 