<script lang="ts">
	import '../app.css';
	import ContactModal from '$lib/ContactModal.svelte';
	import { contactModalOpen } from '$lib/stores/contactModal';
	import {Tooltip} from 'flowbite-svelte'
	
	let menuAbierto = false;
	
	function toggleMenu() {
		menuAbierto = !menuAbierto;
	}
</script>

<div class="min-h-screen bg-gray-50">
	<!-- Navegación -->
	<nav class="bg-white shadow-lg sticky top-0 z-50">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex justify-between h-16">
				<!-- Logo -->
				<div class="flex items-center">
					<a href="/" class="text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors">
						Mi Portafolio
					</a>
				</div>
				
				<!-- Navegación Desktop -->
				<div class="hidden md:flex items-center space-x-8">
					<a href="/" class="text-gray-600 hover:text-blue-600 transition-colors font-medium">
						Inicio
					</a>
					<a href="/educacion" class="text-gray-600 hover:text-blue-600 transition-colors font-medium">
						Educación
					</a>
					<a href="/experiencia" class="text-gray-600 hover:text-blue-600 transition-colors font-medium">
						Experiencia
					</a>
					<a href="/habilidades" class="text-gray-600 hover:text-blue-600 transition-colors font-medium">
						Habilidades
					</a>
					<a href="/proyectos" class="text-gray-600 hover:text-blue-600 transition-colors font-medium">
						Proyectos
					</a>
				</div>
				
				<!-- Botón menú móvil -->
				<div class="md:hidden flex items-center">
					<button 
						on:click={toggleMenu}
						class="text-gray-600 hover:text-blue-600 transition-colors"
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
						<a href="/" class="text-gray-600 hover:text-blue-600 transition-colors font-medium py-2">
							Inicio
						</a>
						<a href="/educacion" class="text-gray-600 hover:text-blue-600 transition-colors font-medium py-2">
							Educación
						</a>
						<a href="/experiencia" class="text-gray-600 hover:text-blue-600 transition-colors font-medium py-2">
							Experiencia
						</a>
						<a href="/habilidades" class="text-gray-600 hover:text-blue-600 transition-colors font-medium py-2">
							Habilidades
						</a>
						<a href="/proyectos" class="text-gray-600 hover:text-blue-600 transition-colors font-medium py-2">
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

	<!-- Botón flotante de contacto -->
	<button
	  class="fixed bottom-6 right-6 z-50 bg-white border-4 border-blue-600 rounded-full shadow-lg w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center hover:bg-blue-50 transition-colors group"
	  aria-label="Abrir formulario de contacto"
	  on:click={() => contactModalOpen.set(true)}
	>
	  <svg class="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 group-hover:text-blue-700" fill="white" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
	    <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" stroke-width="2" fill="white"/>
	    <path d="M3 7l9 6 9-6" stroke="currentColor" stroke-width="2" fill="none"/>
	  </svg>
	</button>
	<Tooltip></Tooltip>
</div> 