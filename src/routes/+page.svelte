<script lang="ts">
	import { onMount } from 'svelte';
	
	// Datos de ejemplo - puedes personalizar estos datos
	const nombre = "Diego David Almirón";
	const titulo = "Analista Programador Universitario";
	const descripcion = "Analista Programador Universitario graduado de la Universidad Nacional Del Nordeste (UNNE). Certificado como Desarrollador Fullstack con Java, Desarrollador Web y Programador Web Fullstack Junior. Manejo tecnologías como Java, Spring Boot, Angular, Node.js, JavaScript, TypeScript, PHP, HTML5, CSS3, SQL (MySQL y SQL Server), .NET, JSON. Experiencia en frameworks como ReactJS, VueJS, Bootstrap, Codeigniter, NestJS, SvelteKit, Tailwind CSS. Control de versiones con Git, GitHub y Azure DevOps. Conocimientos en metodologías ágiles (Scrum, Kanban, XP) y tradicionales. Busco aportar mi experiencia técnica y pasión por el desarrollo para crear soluciones innovadoras que impulsen el crecimiento de su empresa.";
	const tecnologias = ["Web", "Front End", "Back End", "Java", "Spring Boot", "Sveltekit", "NodeJs", "NestJs", "Angular", "Javascript", "Typescript", "SQL", "Tailwind CSS"];

	// Cards de destacados para el carrusel
	const destacados = [
		{
			titulo: "Educación",
			icono: `<svg class='w-5 h-5 sm:w-6 sm:h-6 text-purple-900' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'/></svg>`,
			descripcion: "Formación académica y certificaciones que respaldan mi experiencia técnica.",
			link: "/educacion",
			color: "blue"
		},
		{
			titulo: "Experiencia",
			icono: `<svg class='w-5 h-5 sm:w-6 sm:h-6 text-green-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6'/></svg>`,
			descripcion: "Trayectoria profesional y proyectos destacados en diferentes empresas.",
			link: "/experiencia",
			color: "green"
		},
		{
			titulo: "Habilidades",
			icono: `<svg class='w-5 h-5 sm:w-6 sm:h-6 text-purple-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'/></svg>`,
			descripcion: "Tecnologías, herramientas y competencias técnicas que domino.",
			link: "/habilidades",
			color: "purple"
		},
		{
			titulo: "Proyectos",
			icono: `<svg class='w-5 h-5 sm:w-6 sm:h-6 text-indigo-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M12 4v16m8-8H4'/></svg>`,
			descripcion: "Algunos de los proyectos más relevantes en los que he trabajado como desarrollador.",
			link: "/proyectos",
			color: "indigo"
		}
	];
	let destacadoActual = 0;

	// Carrusel automático y de a tres en desktop
	import { onDestroy } from 'svelte';
	let intervalId: any;

	onMount(() => {
		intervalId = setInterval(() => {
			nextDestacado();
		}, 3000);
	});
	onDestroy(() => {
		clearInterval(intervalId);
	});

	function prevDestacado() {
		destacadoActual = (destacadoActual - 1 + destacados.length) % destacados.length;
	}
	function nextDestacado() {
		destacadoActual = (destacadoActual + 1) % destacados.length;
	}

	function mostrarCard(i: number) {
		// En móvil solo una card, en desktop tres
		if (window.innerWidth < 768) {
			return i === destacadoActual;
		} else {
			const total = destacados.length;
			if (total <= 3) return true;
			const indices = [destacadoActual, (destacadoActual + 1) % total, (destacadoActual + 2) % total];
			return indices.includes(i);
		}
	}

	import { contactModalOpen } from '$lib/stores/contactModal';
	import ImageModal from '$lib/ImageModal.svelte';
	
	let imageModalOpen = false;
	
	// Establecer el título de la página
	onMount(() => {
		document.title = 'Inicio - Diego David Almirón';
	});
</script>

<div class="space-y-8 sm:space-y-16">
	<!-- Sección Hero -->
	<section class="text-center py-6 sm:py-8 md:py-12 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl sm:rounded-2xl md:rounded-3xl mx-4 sm:mx-6">
		<div class="max-w-4xl mx-auto px-4 sm:px-6">
			<div class="mb-4 sm:mb-6 md:mb-8">
				<div class="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg mb-3 sm:mb-4 md:mb-6 cursor-pointer hover:scale-105 transition-transform" on:click={() => imageModalOpen = true}>
					<img 
						src="/images/profile.jpg" 
						alt="Diego David Almirón" 
						class="w-full h-full object-cover"
					/>
				</div>
			</div>
			<h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6 px-2">
				Hola, soy <span class="text-purple-900">{nombre}</span>
			</h1>
			<h2 class="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 mb-3 sm:mb-4 md:mb-6 px-2">{titulo}</h2>
			<div class="flex flex-wrap justify-center gap-1 sm:gap-1.5 mb-4 sm:mb-6 md:mb-8 px-2">
				{#each tecnologias as tecnologia}
					<span class="px-1.5 py-0.5 sm:px-2 sm:py-0.5 bg-purple-100 text-purple-800 border border-purple-200 rounded-full text-xs font-medium">
						{tecnologia}
					</span>
				{/each}
			</div>
			<p class="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 md:mb-8 max-w-4xl mx-auto px-2 sm:px-4 leading-relaxed text-justify">
				{descripcion}
			</p>
		</div>
	</section>

	<!-- Sección de Destacados -->
	<section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6">
		{#each destacados as destacado}
			<div class="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center text-center h-full">
				<span class="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center mb-3 sm:mb-4" class:bg-blue-100={destacado.color==='blue'} class:bg-green-100={destacado.color==='green'} class:bg-purple-100={destacado.color==='purple'} class:bg-indigo-100={destacado.color==='indigo'}>{@html destacado.icono}</span>
				<h3 class="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-2">{destacado.titulo}</h3>
				<p class="text-xs sm:text-sm md:text-base text-gray-600 mb-3 sm:mb-4 flex-grow">{destacado.descripcion}</p>
				<a href={destacado.link}
			   class="font-medium text-xs sm:text-sm md:text-base mt-auto
			   {destacado.color==='blue' ? 'text-purple-900 hover:text-purple-700' : ''}
			   {destacado.color==='green' ? 'text-green-600 hover:text-green-700' : ''}
			   {destacado.color==='purple' ? 'text-purple-600 hover:text-purple-700' : ''}
			   {destacado.color==='indigo' ? 'text-indigo-600 hover:text-indigo-700' : ''}">
				Ver más →
			</a>
			</div>
		{/each}
	</section>

	<!-- Sección de Contacto -->
	<section class="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8 text-center mx-4 sm:mx-6">
		<h2 class="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">¿Trabajamos juntos?</h2>
		<p class="text-xs sm:text-sm md:text-base text-gray-600 mb-4 sm:mb-6 max-w-2xl mx-auto px-2">
			Actualmente me encuentro en búsqueda activa de trabajo ya sea como freelance, contractor o relación de dependencia. Si encuentras algo de tu interés no dudes en contactarme.
		</p>

		<!-- Badges de contacto -->
		<div class="flex flex-wrap justify-center gap-2 mb-6 sm:mb-8 px-2">
			<a href="https://www.linkedin.com/in/diegodavidalmiron" target="_blank" rel="noopener noreferrer"
				class="group flex items-center px-2 sm:px-3 py-1 bg-purple-900 border border-purple-900 text-white rounded-full shadow-md text-xs font-semibold hover:bg-white hover:text-purple-900 transition-colors">
				<svg class="w-3 h-3 sm:w-4 sm:h-4 mr-1 text-white group-hover:text-purple-900" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
				Diego David Almirón
			</a>
			<a href="mailto:diegodavidalmiron17@gmail.com" class="group flex items-center px-2 sm:px-3 py-1 bg-purple-900 border border-purple-900 text-white rounded-full shadow-md text-xs font-semibold hover:bg-white hover:text-purple-900 transition-colors">
				<svg class="w-3 h-3 sm:w-4 sm:h-4 mr-1 text-white group-hover:text-purple-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
					<path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"/>
				  </svg>
				diegodavidalmiron17@gmail.com
			</a>
			<a href="https://wa.me/543795315483" target="_blank" rel="noopener noreferrer" class="group flex items-center px-2 sm:px-3 py-1 bg-purple-900 border border-purple-900 text-white rounded-full shadow-md text-xs font-semibold hover:bg-white hover:text-purple-900 transition-colors">
				<svg class="w-3 h-3 sm:w-4 sm:h-4 mr-1 text-white group-hover:text-purple-900" fill="currentColor" viewBox="0 0 24 24"><path d="M20.52 3.48A12.07 12.07 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.12.55 4.19 1.6 6.01L0 24l6.18-1.62A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.21-1.25-6.23-3.48-8.52zM12 22c-1.85 0-3.66-.5-5.23-1.44l-.37-.22-3.67.96.98-3.58-.24-.37A9.94 9.94 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.8c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.41-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.62-.47-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.34-.26.27-1 1-.98 2.43.02 1.43 1.03 2.81 1.18 3 .15.19 2.03 3.1 4.93 4.23.69.3 1.23.48 1.65.61.69.22 1.32.19 1.81.12.55-.08 1.65-.67 1.89-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z"/></svg>
				+54 379 531-5483
			</a>
			<a href="#" on:click|preventDefault={() => contactModalOpen.set(true)} class="group flex items-center px-2 sm:px-3 py-1 bg-purple-900 border border-purple-900 text-white rounded-full shadow-md text-xs font-semibold hover:bg-white hover:text-purple-900 transition-colors">
				<svg class="w-3 h-3 sm:w-4 sm:h-4 mr-1 text-white group-hover:text-purple-900" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 10.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4.5"/><path d="M16 3v4"/><path d="M8 3v4"/><path d="M3 10h18"/></svg>
				Formulario De Contacto
			</a>
		</div>
	</section>
</div>

<!-- Modal de imagen -->
<ImageModal 
	isOpen={imageModalOpen}
	imageSrc="/images/profile.jpg"
	imageAlt="Diego David Almirón"
	on:close={() => imageModalOpen = false}
/>
