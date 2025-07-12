<script lang="ts">
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

	// Carruseles de skills (Frameworks, Librerías, Lenguajes, Herramientas)
	const frameworks = [
		{ nombre: "NestJs", imagen: "/images/skills/frameworks/nestjs.png" },
		{ nombre: "Sveltekit", imagen: "/images/skills/frameworks/svetle.png" },
		{ nombre: "Angular", imagen: "/images/skills/frameworks/angular.png" },
		{ nombre: "NodeJs", imagen: "/images/skills/frameworks/nodejs.png" },
		{ nombre: "Spring Boot", imagen: "/images/skills/frameworks/spring-boot.png" },
		{ nombre: "Codeigniter", imagen: "/images/skills/frameworks/codeigniter.png" },
	];
	const librerias = [
		{ nombre: "ReactJs", imagen: "/images/skills/librerias/react.png" },
		{ nombre: "VueJs", imagen: "/images/skills/librerias/vuejs.png" },
		{ nombre: "Jquery", imagen: "/images/skills/librerias/jquery.png" },
		{ nombre: "Tailwind", imagen: "/images/skills/librerias/tailwind.png" },
		{ nombre: "Bootstrap", imagen: "/images/skills/librerias/bootstrap.png" },
	];
	const lenguajes = [
		{ nombre: "Java", imagen: "/images/skills/lenguajes/java.png" },
		{ nombre: ".NET", imagen: "/images/skills/lenguajes/net.png" },
		{ nombre: "Typescript", imagen: "/images/skills/lenguajes/typescript.png" },
		{ nombre: "JavaScript", imagen: "/images/skills/lenguajes/javascript.png" },
		{ nombre: "PHP", imagen: "/images/skills/lenguajes/php.png" },
		{ nombre: "SQL", imagen: "/images/skills/lenguajes/sql.png" },
		{ nombre: "Json", imagen: "/images/skills/lenguajes/json.png" },
		{ nombre: "HTML5", imagen: "/images/skills/lenguajes/html5.png" },
		{ nombre: "CSS3", imagen: "/images/skills/lenguajes/css3.png" },
		{ nombre: "Ruby", imagen: "/images/skills/lenguajes/ruby.png" },
	];
	const herramientasCarrusel = [
		{ nombre: "Cursor", imagen: "/images/skills/herramientas/cursor.png" },
		{ nombre: "Git", imagen: "/images/skills/herramientas/git.png" },
		{ nombre: "GitHub", imagen: "/images/skills/herramientas/github.png" },
		{ nombre: "Postman", imagen: "/images/skills/herramientas/postman.png" },
		{ nombre: "MySQL", imagen: "/images/skills/herramientas/mysql.png" },
		{ nombre: "SQL Server", imagen: "/images/skills/herramientas/sqlserver.png" },
		{ nombre: "Maven", imagen: "/images/skills/herramientas/maven.png" },
		{ nombre: "Visual Code", imagen: "/images/skills/herramientas/microsoft_visual_studio_code.png" },
		{ nombre: "Visual Studio", imagen: "/images/skills/herramientas/visual_studio.png" },
		{ nombre: "Eclipse", imagen: "/images/skills/herramientas/eclipse.png" },
		{ nombre: "UML", imagen: "/images/skills/herramientas/uml.png" },
		{ nombre: "Xampp", imagen: "/images/skills/herramientas/xampp.png" },
		{ nombre: "Hibernate", imagen: "/images/skills/herramientas/hibernate.png" },
		{ nombre: "Enterprise Architect", imagen: "/images/skills/herramientas/enterprise_architect.png" },
	];

	// Estado de los carruseles
	import { writable } from 'svelte/store';
	const pageSize = 1;
	const fwIndex = writable(0);
	const lbIndex = writable(0);
	const lgIndex = writable(0);
	const hrIndex = writable(0);

	function next(index: ReturnType<typeof writable<number>>, arr: any[]) {
		index.update((i: number) => (i + pageSize < arr.length ? i + pageSize : 0));
	}
	function prev(index: ReturnType<typeof writable<number>>, arr: any[]) {
		index.update((i: number) => (i - pageSize >= 0 ? i - pageSize : Math.max(0, arr.length - (arr.length % pageSize || pageSize))));
	}
</script>

<div class="space-y-8 sm:space-y-12">
	<!-- Header -->
	<div class="text-center px-4">
		<h1 class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Habilidades y Tecnologías</h1>
		<p class="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
			Un resumen de las tecnologías, herramientas y competencias que he desarrollado a lo largo de mi carrera.
		</p>
	</div>

	<!-- Carruseles de Skills -->
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
		<!-- Frameworks -->
		<div class="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center">
			<h3 class="bg-purple-900 text-white text-center rounded-t-xl py-2 px-4 w-full font-bold tracking-wider mb-2">FRAMEWORKS</h3>
			<div class="flex items-center w-full">
				<button class="text-3xl text-purple-400 hover:text-purple-900 focus:outline-none" on:click={() => prev(fwIndex, frameworks)}>&lt;</button>
				<div class="flex-1 flex justify-center gap-2">
					{#each frameworks.slice($fwIndex, $fwIndex + pageSize) as fw}
						<div class="flex flex-col items-center">
							<img src={fw.imagen} alt={fw.nombre} class="h-24 w-24 object-contain mb-2 transition-transform duration-300 ease-in-out hover:scale-110" />
							<span class="font-semibold text-lg text-gray-700">{fw.nombre}</span>
						</div>
					{/each}
				</div>
				<button class="text-3xl text-purple-400 hover:text-purple-900 focus:outline-none" on:click={() => next(fwIndex, frameworks)}>&gt;</button>
			</div>
		</div>
		<!-- Librerías -->
		<div class="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center">
			<h3 class="bg-purple-900 text-white text-center rounded-t-xl py-2 px-4 w-full font-bold tracking-wider mb-2">LIBRERÍAS</h3>
			<div class="flex items-center w-full">
				<button class="text-3xl text-purple-400 hover:text-purple-900 focus:outline-none" on:click={() => prev(lbIndex, librerias)}>&lt;</button>
				<div class="flex-1 flex justify-center gap-2">
					{#each librerias.slice($lbIndex, $lbIndex + pageSize) as lb}
						<div class="flex flex-col items-center">
							<img src={lb.imagen} alt={lb.nombre} class="h-24 w-24 object-contain mb-2 transition-transform duration-300 ease-in-out hover:scale-110" />
							<span class="font-semibold text-lg text-gray-700">{lb.nombre}</span>
						</div>
					{/each}
				</div>
				<button class="text-3xl text-purple-400 hover:text-purple-900 focus:outline-none" on:click={() => next(lbIndex, librerias)}>&gt;</button>
			</div>
		</div>
		<!-- Lenguajes -->
		<div class="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center">
			<h3 class="bg-purple-900 text-white text-center rounded-t-xl py-2 px-4 w-full font-bold tracking-wider mb-2">LENGUAJES</h3>
			<div class="flex items-center w-full">
				<button class="text-3xl text-purple-400 hover:text-purple-900 focus:outline-none" on:click={() => prev(lgIndex, lenguajes)}>&lt;</button>
				<div class="flex-1 flex justify-center gap-2">
					{#each lenguajes.slice($lgIndex, $lgIndex + pageSize) as lg}
						<div class="flex flex-col items-center">
							<img src={lg.imagen} alt={lg.nombre} class="h-24 w-24 object-contain mb-2 transition-transform duration-300 ease-in-out hover:scale-110" />
							<span class="font-semibold text-lg text-gray-700">{lg.nombre}</span>
						</div>
					{/each}
				</div>
				<button class="text-3xl text-purple-400 hover:text-purple-900 focus:outline-none" on:click={() => next(lgIndex, lenguajes)}>&gt;</button>
			</div>
		</div>
		<!-- Herramientas -->
		<div class="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center">
			<h3 class="bg-purple-900 text-white text-center rounded-t-xl py-2 px-4 w-full font-bold tracking-wider mb-2">HERRAMIENTAS</h3>
			<div class="flex items-center w-full">
				<button class="text-3xl text-purple-400 hover:text-purple-900 focus:outline-none" on:click={() => prev(hrIndex, herramientasCarrusel)}>&lt;</button>
				<div class="flex-1 flex justify-center gap-2">
					{#each herramientasCarrusel.slice($hrIndex, $hrIndex + pageSize) as hr}
						<div class="flex flex-col items-center">
							<img src={hr.imagen} alt={hr.nombre} class="h-24 w-24 object-contain mb-2 transition-transform duration-300 ease-in-out hover:scale-110" />
							<span class="font-semibold text-lg text-gray-700">{hr.nombre}</span>
						</div>
					{/each}
				</div>
				<button class="text-3xl text-purple-400 hover:text-purple-900 focus:outline-none" on:click={() => next(hrIndex, herramientasCarrusel)}>&gt;</button>
			</div>
		</div>
	</div>

	<!-- Soft Skills -->
	<section class="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
		<h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-6 text-center">Habilidades Blandas</h2>
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each habilidadesBlandas as habilidad}
				<div class="bg-white rounded-xl shadow-lg flex flex-col items-center pb-0">
					<h3 class="bg-blue-100 text-dark text-center rounded-t-xl py-2 px-4 w-full font-bold text-base uppercasse">{habilidad.nombre}</h3>
					<div class="flex-1 flex items-center justify-center w-full bg-cyan-400 p-6">
						<img src={habilidad.imagen} alt={habilidad.nombre} class="h-40 object-contain transition-transform duration-300 ease-in-out hover:scale-110" />
					</div>
					<div class="bg-purple-900 text-white w-full text-center py-2 rounded-b-xl font-semibold text-sm flex flex-col items-center">
						<span>
							{habilidad.valoracion}:
							{#each Array(habilidad.estrellas) as _, i}
								<span class="inline-block text-yellow-400 text-base">★</span>
							{/each}
							{#if habilidad.estrellas < 5}
								<span class="inline-block text-gray-300 text-base">{'★'.repeat(5 - habilidad.estrellas)}</span>
							{/if}
						</span>
					</div>
				</div>
			{/each}
		</div>
	</section>

	<!-- Estadísticas de Habilidades -->
	<section class="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 sm:p-8">
		<h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-6 text-center">Estadísticas de Habilidades</h2>
		<div class="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
			<div class="bg-white p-4 sm:p-6 rounded-xl text-center shadow-md">
				<div class="text-2xl sm:text-3xl font-bold text-purple-900 mb-2">20+</div>
				<p class="text-xs sm:text-sm text-gray-600">Tecnologías Dominadas</p>
			</div>
			<div class="bg-white p-4 sm:p-6 rounded-xl text-center shadow-md">
				<div class="text-2xl sm:text-3xl font-bold text-green-600 mb-2">15+</div>
				<p class="text-xs sm:text-sm text-gray-600">Herramientas Utilizadas</p>
			</div>
			<div class="bg-white p-4 sm:p-6 rounded-xl text-center shadow-md">
				<div class="flex justify-center mb-2">
					{#each Array(4) as _, i}
						<span class="inline-block text-yellow-400 text-2xl">★</span>
					{/each}
					<span class="inline-block text-gray-300 text-2xl">★</span>
				</div>
				<p class="text-xs sm:text-sm text-gray-600">Muy Bueno</p>
			</div>
			<div class="bg-white p-4 sm:p-6 rounded-xl text-center shadow-md">
				<div class="text-2xl sm:text-3xl font-bold text-orange-600 mb-2">80%</div>
				<p class="text-xs sm:text-sm text-gray-600">Promedio de Dominio</p>
			</div>
		</div>
	</section>
</div> 