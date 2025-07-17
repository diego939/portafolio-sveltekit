<script lang="ts">
	import '../app.css';
	import ContactModal from '$lib/ContactModal.svelte';
	import { contactModalOpen } from '$lib/stores/contactModal';
	import { page } from '$app/stores';
	
	let menuAbierto = false;
	
	function toggleMenu() {
		menuAbierto = !menuAbierto;
	}
	
	// Función para obtener el título y descripción según la ruta
	function getPageInfo() {
		const path = $page.url.pathname;
		
		switch (path) {
			case '/':
				return {
					title: 'Diego David Almirón - Desarrollador Full Stack',
					description: 'Analista Programador Universitario y Desarrollador Full Stack. Especializado en Java, Spring Boot, Angular, Node.js y tecnologías web modernas.'
				};
			case '/educacion':
				return {
					title: 'Educación - Diego David Almirón',
					description: 'Formación académica, certificaciones y trayectoria educativa de Diego David Almirón. Analista Programador Universitario con múltiples certificaciones en desarrollo web.'
				};
			case '/experiencia':
				return {
					title: 'Experiencia - Diego David Almirón',
					description: 'Experiencia profesional y trayectoria laboral de Diego David Almirón. Proyectos destacados y roles en diferentes empresas como desarrollador Full Stack.'
				};
			case '/habilidades':
				return {
					title: 'Habilidades - Diego David Almirón',
					description: 'Habilidades técnicas, tecnologías y competencias de Diego David Almirón. Especializado en Java, Spring Boot, Angular, Node.js y desarrollo web moderno.'
				};
			case '/proyectos':
				return {
					title: 'Proyectos - Diego David Almirón',
					description: 'Portafolio de proyectos desarrollados por Diego David Almirón. Aplicaciones web, sistemas empresariales y soluciones tecnológicas innovadoras.'
				};
			default:
				return {
					title: 'Diego David Almirón - Desarrollador Full Stack',
					description: 'Analista Programador Universitario y Desarrollador Full Stack. Especializado en Java, Spring Boot, Angular, Node.js y tecnologías web modernas.'
				};
		}
	}

	// Variable reactiva para el texto del logo
	$: logoText = (() => {
		const path = $page.url.pathname;
		
		switch (path) {
			case '/':
				return 'Mi Portafolio';
			case '/educacion':
				return 'Educación';
			case '/experiencia':
				return 'Experiencia';
			case '/habilidades':
				return 'Habilidades';
			case '/proyectos':
				return 'Proyectos';
			default:
				return 'Mi Portafolio';
		}
	})();

	// Variable reactiva para el enlace del logo
	$: logoHref = (() => {
		const path = $page.url.pathname;
		
		switch (path) {
			case '/':
				return '/';
			case '/educacion':
				return '/educacion';
			case '/experiencia':
				return '/experiencia';
			case '/habilidades':
				return '/habilidades';
			case '/proyectos':
				return '/proyectos';
			default:
				return '/';
		}
	})();
	
	// Actualizar el título y meta tags de la página
	$: if (typeof document !== 'undefined') {
		const pageInfo = getPageInfo();
		document.title = pageInfo.title;
		
		// Actualizar meta description
		let metaDescription = document.querySelector('meta[name="description"]');
		if (metaDescription) {
			metaDescription.setAttribute('content', pageInfo.description);
		}
		
		// Actualizar Open Graph tags
		let ogTitle = document.querySelector('meta[property="og:title"]');
		if (ogTitle) {
			ogTitle.setAttribute('content', pageInfo.title);
		}
		
		let ogDescription = document.querySelector('meta[property="og:description"]');
		if (ogDescription) {
			ogDescription.setAttribute('content', pageInfo.description);
		}
		
		// Actualizar Twitter tags
		let twitterTitle = document.querySelector('meta[name="twitter:title"]');
		if (twitterTitle) {
			twitterTitle.setAttribute('content', pageInfo.title);
		}
		
		let twitterDescription = document.querySelector('meta[name="twitter:description"]');
		if (twitterDescription) {
			twitterDescription.setAttribute('content', pageInfo.description);
		}
	}
</script>

<div class="min-h-screen bg-gray-50">
	<!-- Navegación -->
	<nav class="bg-white shadow-lg sticky top-0 z-50">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex justify-between h-16">
				<!-- Logo -->
				<div class="flex items-center">
					<a href={logoHref} class="text-xl font-bold text-gray-800 hover:text-purple-900 transition-colors">
						{logoText}
					</a>
				</div>
				
				<!-- Navegación Desktop -->
				<div class="hidden md:flex items-center space-x-8">
					<a href="/" class="text-gray-600 hover:text-purple-900 transition-colors font-medium">
						Inicio
					</a>
					<a href="/educacion" class="text-gray-600 hover:text-purple-900 transition-colors font-medium">
						Educación
					</a>
					<a href="/experiencia" class="text-gray-600 hover:text-purple-900 transition-colors font-medium">
						Experiencia
					</a>
					<a href="/habilidades" class="text-gray-600 hover:text-purple-900 transition-colors font-medium">
						Habilidades
					</a>
					<a href="/proyectos" class="text-gray-600 hover:text-purple-900 transition-colors font-medium">
						Proyectos
					</a>
				</div>
				
				<!-- Botón menú móvil -->
				<div class="md:hidden flex items-center">
					<button 
						on:click={toggleMenu}
						class="text-gray-600 hover:text-purple-900 transition-colors"
						aria-label="Toggle menu"
					>
						<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							{#if menuAbierto}
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
							{:else}
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
							{/if}
						</svg>
					</button>
				</div>
			</div>
			
			<!-- Menú móvil -->
			{#if menuAbierto}
				<div class="md:hidden bg-white border-t border-gray-200 py-4">
					<div class="flex flex-col space-y-3 px-4">
						<a href="/" class="text-gray-600 hover:text-purple-900 transition-colors font-medium py-2" on:click={() => menuAbierto = false}>
							Inicio
						</a>
						<a href="/educacion" class="text-gray-600 hover:text-purple-900 transition-colors font-medium py-2" on:click={() => menuAbierto = false}>
							Educación
						</a>
						<a href="/experiencia" class="text-gray-600 hover:text-purple-900 transition-colors font-medium py-2" on:click={() => menuAbierto = false}>
							Experiencia
						</a>
						<a href="/habilidades" class="text-gray-600 hover:text-purple-900 transition-colors font-medium py-2" on:click={() => menuAbierto = false}>
							Habilidades
						</a>
						<a href="/proyectos" class="text-gray-600 hover:text-purple-900 transition-colors font-medium py-2" on:click={() => menuAbierto = false}>
							Proyectos
						</a>
					</div>
				</div>
			{/if}
		</div>
	</nav>

	<!-- Contenido principal -->
	<main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
		<slot />
	</main>

	<ContactModal bind:open={$contactModalOpen} />

	<!-- Botones flotantes -->
	<div class="fixed bottom-6 right-6 z-40 flex flex-col space-y-3">
		<!-- Botón de WhatsApp -->
		<a
			href="https://wa.me/+543795315483?text=Hola Diego, vi tu portafolio y me gustaría conversar sobre una posible vacante."
			target="_blank"
			rel="noopener noreferrer"
			class="bg-green-500 border-4 border-green-600 rounded-full shadow-lg w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center hover:bg-green-400 transition-colors group"
			aria-label="Contactar por WhatsApp"
		>
			<svg class="w-6 h-6 sm:w-8 sm:h-8 text-white group-hover:text-green-50" fill="currentColor" viewBox="0 0 24 24">
				<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
			</svg>
		</a>
		
		<!-- Botón flotante de contacto -->
		<button
		  class="bg-white border-4 border-purple-900 rounded-full shadow-lg w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center hover:bg-purple-50 transition-colors group"
		  aria-label="Abrir formulario de contacto"
		  on:click={() => contactModalOpen.set(true)}
		>
		  <svg class="w-6 h-6 sm:w-8 sm:h-8 text-purple-900 group-hover:text-purple-700" fill="white" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
		    <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" stroke-width="2" fill="white"/>
		    <path d="M3 7l9 6 9-6" stroke="currentColor" stroke-width="2" fill="none"/>
		  </svg>
		</button>
	</div>
</div> 