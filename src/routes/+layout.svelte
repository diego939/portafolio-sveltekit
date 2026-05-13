<script lang="ts">
	import '../app.css';
	import { get } from 'svelte/store';
	import Swal from 'sweetalert2';
	import ContactModal from '$lib/ContactModal.svelte';
	import { contactModalOpen } from '$lib/stores/contactModal';
	import { darkMode, toggleDarkMode } from '$lib/stores/theme';
	import { afterNavigate, goto } from '$app/navigation';
	import { page } from '$app/state';
	import { onMount, tick } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	/** Menú móvil: duración corta + easing “out” para sensación ágil; `fly` evita animar altura (más fluido en móvil). */
	const mobileMenuEase = cubicOut;
	const mobileMenuMs = 260;
	import { initFlowbite } from 'flowbite';
	import AOS from 'aos';
	import 'aos/dist/aos.css';

	let { children } = $props();

	let menuAbierto = $state(false);

	/** Muestra el FAB "subir" cuando el scroll supera el 50% del recorrido de la página; la entrada usa AOS. */
	let showBackToTop = $state(false);

	function updateBackToTopVisibility() {
		if (typeof document === 'undefined') return;
		const root = document.documentElement;
		const maxScroll = Math.max(0, root.scrollHeight - window.innerHeight);
		const next = maxScroll > 0 && window.scrollY > maxScroll * 0.5;
		if (next === showBackToTop) return;
		showBackToTop = next;
		if (next) {
			void tick().then(() => {
				requestAnimationFrame(() => {
					AOS.refreshHard();
					AOS.refresh();
					initFlowbite();
				});
			});
		}
	}

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}

	/** `$state`: las asignaciones desde `afterNavigate` deben invalidar la vista en Svelte 5; `let` solo a veces no. */
	let pathname = $state(page.url.pathname);

	afterNavigate((navigation) => {
		pathname = navigation.to?.url.pathname ?? page.url.pathname;
		menuAbierto = false;
		void tick().then(() => {
			requestAnimationFrame(() => updateBackToTopVisibility());
		});
	});

	function navActive(href: string): boolean {
		if (href === '/') return pathname === '/';
		return pathname === href || pathname.startsWith(`${href}/`);
	}

	function navDesktopClass(href: string): string {
		const base =
			'm-0 cursor-pointer appearance-none border-0 bg-transparent font-inherit relative isolate inline-flex items-center justify-center rounded-xl px-3.5 py-2 text-sm font-semibold tracking-tight outline-none transition-[color,transform,box-shadow,background-color] duration-300 ease-out focus-visible:ring-2 focus-visible:ring-purple-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-950 active:scale-[0.97]';
		return navActive(href)
			? `${base} text-white shadow-lg shadow-purple-900/25 ring-1 ring-white/20 bg-gradient-to-br from-purple-600 via-violet-600 to-indigo-600 dark:from-purple-500 dark:via-violet-500 dark:to-indigo-500 dark:shadow-purple-950/40`
			: `${base} text-gray-600 hover:text-purple-900 hover:bg-white/90 hover:shadow-md hover:shadow-gray-900/5 dark:text-gray-300 dark:hover:text-white dark:hover:bg-white/10`;
	}

	function navMobileClass(href: string): string {
		const base =
			'm-0 block w-full cursor-pointer appearance-none rounded-xl border border-transparent py-3 px-4 text-left text-[15px] font-semibold tracking-tight outline-none transition-[color,transform,background-color,border-color,box-shadow] duration-300 ease-out focus-visible:ring-2 focus-visible:ring-purple-500/50 active:scale-[0.99]';
		return navActive(href)
			? `${base} border-purple-500/30 bg-gradient-to-r from-purple-600/15 via-violet-600/12 to-transparent text-purple-900 shadow-inner dark:from-purple-400/20 dark:text-purple-100 dark:border-purple-400/25`
			: `${base} text-gray-700 hover:border-gray-200/80 hover:bg-gray-50/90 dark:text-gray-200 dark:hover:border-gray-600 dark:hover:bg-white/5`;
	}
	
	function toggleMenu() {
		menuAbierto = !menuAbierto;
	}

	$effect(() => {
		if (typeof document === 'undefined') return;
		if (!menuAbierto) return;
		const { style } = document.body;
		const previousOverflow = style.overflow;
		style.overflow = 'hidden';
		return () => {
			style.overflow = previousOverflow;
		};
	});

	function toastThemeChanged() {
		toggleDarkMode();
		const isDark = get(darkMode);
		Swal.fire({
			toast: true,
			position: 'top',
			icon: 'success',
			text: isDark ? 'Modo oscuro activado' : 'Modo claro activado',
			timer: 2000,
			showConfirmButton: false,
			theme: isDark ? 'dark' : 'light'
		});
	}
	
	const pageInfo = $derived.by(() => {
		switch (pathname) {
			case '/':
				return {
					title: 'Diego David Almirón - Desarrollador Full Stack',
					description:
						'Analista Programador Universitario y Desarrollador Full Stack. Especializado en Java, Spring Boot, Angular, Node.js y tecnologías web modernas.'
				};
			case '/educacion':
				return {
					title: 'Educación - Diego David Almirón',
					description:
						'Formación académica, certificaciones y trayectoria educativa de Diego David Almirón. Analista Programador Universitario con múltiples certificaciones en desarrollo web.'
				};
			case '/experiencia':
				return {
					title: 'Experiencia - Diego David Almirón',
					description:
						'Experiencia profesional y trayectoria laboral de Diego David Almirón. Proyectos destacados y roles en diferentes empresas como desarrollador Full Stack.'
				};
			case '/habilidades':
				return {
					title: 'Habilidades - Diego David Almirón',
					description:
						'Habilidades técnicas, tecnologías y competencias de Diego David Almirón. Especializado en Java, Spring Boot, Angular, Node.js y desarrollo web moderno.'
				};
			case '/proyectos':
				return {
					title: 'Proyectos - Diego David Almirón',
					description:
						'Portafolio de proyectos desarrollados por Diego David Almirón. Aplicaciones web, sistemas empresariales y soluciones tecnológicas innovadoras.'
				};
			default:
				return {
					title: 'Diego David Almirón - Desarrollador Full Stack',
					description:
						'Analista Programador Universitario y Desarrollador Full Stack. Especializado en Java, Spring Boot, Angular, Node.js y tecnologías web modernas.'
				};
		}
	});

	const logoText = $derived.by(() => {
		switch (pathname) {
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
	});

	const logoHref = $derived.by(() => {
		switch (pathname) {
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
	});

	onMount(() => {
		initFlowbite();
		AOS.init({
			duration: 650,
			easing: 'ease-out-cubic',
			once: false,
			offset: 32,
			anchorPlacement: 'top-bottom'
		});
		updateBackToTopVisibility();
		const onScroll = () => updateBackToTopVisibility();
		window.addEventListener('scroll', onScroll, { passive: true });
		window.addEventListener('resize', onScroll);
		return () => {
			window.removeEventListener('scroll', onScroll);
			window.removeEventListener('resize', onScroll);
		};
	});
</script>

<svelte:head>
	<title>{pageInfo.title}</title>
	<meta name="description" content={pageInfo.description} />
	<meta property="og:title" content={pageInfo.title} />
	<meta property="og:description" content={pageInfo.description} />
	<meta name="twitter:title" content={pageInfo.title} />
	<meta name="twitter:description" content={pageInfo.description} />
</svelte:head>

<div class="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100">
	<!-- Navegación: cabecera tipo cristal + dock en escritorio + panel móvil con overlay -->
	<nav
		class="sticky top-0 z-50 border-b border-gray-200/50 bg-white/75 shadow-[0_1px_0_0_rgba(0,0,0,0.03)] backdrop-blur-xl backdrop-saturate-150 dark:border-gray-800/60 dark:bg-gray-950/80 dark:shadow-[0_1px_0_0_rgba(255,255,255,0.04)]"
		aria-label="Principal"
	>
		<div class="relative z-[60] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex h-16 items-center justify-between gap-4">
				<div class="flex min-w-0 flex-1 items-center">
					<button
						type="button"
						onclick={() => void goto(logoHref)}
						class="group relative inline-flex cursor-pointer items-center rounded-xl border-0 bg-transparent px-1 py-0.5 outline-none transition-[transform,opacity] duration-300 hover:opacity-95 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-purple-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-950"
					>
						<span
							class="bg-gradient-to-r from-purple-700 via-violet-600 to-indigo-600 bg-clip-text text-xl font-bold tracking-tight text-transparent transition-[filter] duration-300 group-hover:brightness-110 dark:from-purple-300 dark:via-violet-300 dark:to-indigo-300"
						>
							{logoText}
						</span>
						<span
							class="pointer-events-none absolute -inset-x-1 -bottom-0.5 h-px scale-x-0 bg-gradient-to-r from-purple-500/0 via-purple-500/50 to-violet-500/0 opacity-0 transition-[transform,opacity] duration-500 ease-out group-hover:scale-x-100 group-hover:opacity-100"
							aria-hidden="true"
						></span>
					</button>
				</div>

				<!-- Navegación desktop: “dock” con enlaces tipo píldora -->
				<div class="hidden h-16 shrink-0 items-center md:flex">
					<div
						class="flex items-center gap-0.5 rounded-2xl border border-gray-200/80 bg-gray-100/50 p-1 shadow-inner ring-1 ring-black/[0.02] dark:border-gray-700/80 dark:bg-gray-900/50 dark:ring-white/[0.04] lg:gap-1"
					>
						<button
							type="button"
							class={navDesktopClass('/')}
							aria-current={navActive('/') ? 'page' : undefined}
							onclick={() => void goto('/')}
						>
							Inicio
						</button>
						<button
							type="button"
							class={navDesktopClass('/educacion')}
							aria-current={navActive('/educacion') ? 'page' : undefined}
							onclick={() => void goto('/educacion')}
						>
							Educación
						</button>
						<button
							type="button"
							class={navDesktopClass('/experiencia')}
							aria-current={navActive('/experiencia') ? 'page' : undefined}
							onclick={() => void goto('/experiencia')}
						>
							Experiencia
						</button>
						<button
							type="button"
							class={navDesktopClass('/habilidades')}
							aria-current={navActive('/habilidades') ? 'page' : undefined}
							onclick={() => void goto('/habilidades')}
						>
							Habilidades
						</button>
						<button
							type="button"
							class={navDesktopClass('/proyectos')}
							aria-current={navActive('/proyectos') ? 'page' : undefined}
							onclick={() => void goto('/proyectos')}
						>
							Proyectos
						</button>
					</div>
				</div>

				<div class="flex shrink-0 items-center md:hidden">
					<button
						type="button"
						onclick={toggleMenu}
						class="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200/80 bg-white/80 text-gray-700 shadow-sm transition-[color,transform,box-shadow,background-color] duration-300 hover:border-purple-300/50 hover:bg-purple-50/80 hover:text-purple-900 hover:shadow-md active:scale-95 dark:border-gray-700 dark:bg-gray-900/80 dark:text-gray-200 dark:hover:border-purple-500/40 dark:hover:bg-purple-950/40 dark:hover:text-purple-200"
						aria-expanded={menuAbierto}
						aria-controls="nav-mobile-panel"
						aria-label={menuAbierto ? 'Cerrar menú' : 'Abrir menú'}
					>
						<svg
							class="h-6 w-6 transition-transform duration-200 ease-out {menuAbierto ? 'rotate-90' : ''}"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							aria-hidden="true"
						>
							{#if menuAbierto}
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
							{:else}
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
							{/if}
						</svg>
					</button>
				</div>
			</div>
		</div>
	</nav>

	{#if menuAbierto}
		<button
			type="button"
			class="fixed inset-x-0 bottom-0 top-16 z-[55] bg-slate-950/45 md:hidden"
			aria-label="Cerrar menú"
			transition:fade={{ duration: mobileMenuMs, easing: mobileMenuEase }}
			onclick={() => (menuAbierto = false)}
		></button>
		<div
			id="nav-mobile-panel"
			class="fixed left-0 right-0 top-16 z-[56] max-h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain border-t border-gray-200/60 bg-white/95 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.12)] backdrop-blur-md dark:border-gray-800/80 dark:bg-gray-950/95 dark:shadow-black/35 md:hidden"
			transition:fly={{ y: -12, duration: mobileMenuMs, easing: mobileMenuEase }}
			role="navigation"
			aria-label="Móvil"
		>
			<div class="max-w-7xl mx-auto px-4 pb-5 pt-2 sm:px-6">
				<p class="mb-2 px-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500">
					Navegación
				</p>
				<div class="flex flex-col gap-1.5">
					<button
						type="button"
						class={navMobileClass('/')}
						aria-current={navActive('/') ? 'page' : undefined}
						onclick={() => {
							void goto('/');
							menuAbierto = false;
						}}
					>
						Inicio
					</button>
					<button
						type="button"
						class={navMobileClass('/educacion')}
						aria-current={navActive('/educacion') ? 'page' : undefined}
						onclick={() => {
							void goto('/educacion');
							menuAbierto = false;
						}}
					>
						Educación
					</button>
					<button
						type="button"
						class={navMobileClass('/experiencia')}
						aria-current={navActive('/experiencia') ? 'page' : undefined}
						onclick={() => {
							void goto('/experiencia');
							menuAbierto = false;
						}}
					>
						Experiencia
					</button>
					<button
						type="button"
						class={navMobileClass('/habilidades')}
						aria-current={navActive('/habilidades') ? 'page' : undefined}
						onclick={() => {
							void goto('/habilidades');
							menuAbierto = false;
						}}
					>
						Habilidades
					</button>
					<button
						type="button"
						class={navMobileClass('/proyectos')}
						aria-current={navActive('/proyectos') ? 'page' : undefined}
						onclick={() => {
							void goto('/proyectos');
							menuAbierto = false;
						}}
					>
						Proyectos
					</button>
				</div>
			</div>
		</div>
	{/if}

	<!-- Contenido principal -->
	<main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8 dark:bg-gray-950">
		{@render children()}
	</main>

	<ContactModal bind:open={$contactModalOpen} />

	<!-- Botones flotantes: escritorio (Flowbite tooltips; ids únicos) -->
	<div class="fixed bottom-6 right-6 z-40 hidden flex-col space-y-3 md:flex">
		{#if showBackToTop}
			<button
				type="button"
				data-tooltip-target="tooltip-subir"
				data-tooltip-placement="left"
				data-aos="fade-up"
				data-aos-duration="650"
				data-aos-easing="ease-out-cubic"
				data-aos-once="false"
				class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-4 border-sky-600 bg-sky-500 shadow-lg transition-colors hover:bg-sky-400 sm:h-16 sm:w-16 dark:border-sky-300 dark:bg-sky-400 dark:hover:bg-sky-300"
				aria-label="Volver arriba"
				onclick={scrollToTop}
			>
				<svg
					class="h-6 w-6 text-white sm:h-8 sm:w-8"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					aria-hidden="true"
				>
					<path d="M5 10l7-7m0 0l7 7m-7-7v18" />
				</svg>
			</button>
			<div
				id="tooltip-subir"
				role="tooltip"
				class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-800 px-3 py-2 text-sm font-medium whitespace-nowrap text-white opacity-0 shadow-xs dark:bg-gray-700"
			>
				Volver arriba
				<div class="tooltip-arrow" data-popper-arrow></div>
			</div>
		{/if}
		<!-- Tema claro / oscuro -->
		<button
			type="button"
			data-tooltip-target="tooltip-tema"
			data-tooltip-placement="left"
			class="bg-slate-800 border-4 border-slate-950 rounded-full shadow-lg w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center hover:bg-slate-700 transition-colors group dark:bg-amber-400 dark:border-amber-500 dark:hover:bg-amber-300"
			aria-label={$darkMode ? 'Activar modo claro' : 'Activar modo oscuro'}
			onclick={toastThemeChanged}
		>
			{#if $darkMode}
				<svg
					class="h-6 w-6 shrink-0 sm:h-8 sm:w-8 text-amber-950"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					aria-hidden="true"
				>
					<path
						d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0z"
					/>
				</svg>
			{:else}
				<svg
					class="w-6 h-6 sm:w-8 sm:h-8 text-amber-200"
					fill="currentColor"
					viewBox="0 0 24 24"
					aria-hidden="true"
				>
					<path
						d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
					/>
				</svg>
			{/if}
		</button>
		<div
			id="tooltip-tema"
			role="tooltip"
			class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-800 rounded-lg shadow-xs opacity-0 tooltip whitespace-nowrap dark:bg-gray-700"
		>
			{$darkMode ? 'Modo claro' : 'Modo oscuro'}
			<div class="tooltip-arrow" data-popper-arrow></div>
		</div>

		<!-- Botón de WhatsApp -->
		<a
			data-tooltip-target="tooltip-whatsapp"
			data-tooltip-placement="left"
			href="https://wa.me/+543795315483?text=Hola Diego, vi tu portafolio y me gustaría conversar sobre una posible vacante..."
			target="_blank"
			rel="noopener noreferrer"
			class="bg-green-500 border-4 border-green-600 rounded-full shadow-lg w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center hover:bg-green-400 transition-colors group"
			aria-label="Contactar por WhatsApp"
		>
			<svg class="w-6 h-6 sm:w-8 sm:h-8 text-white group-hover:text-green-50" fill="currentColor" viewBox="0 0 24 24">
				<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
			</svg>
		</a>
		<div id="tooltip-whatsapp" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-800 rounded-lg shadow-xs opacity-0 tooltip whitespace-nowrap">
			Contactar por WhatsApp
			<div class="tooltip-arrow" data-popper-arrow></div>
		</div>

		<!-- Botón flotante de contacto -->
		<button
			data-tooltip-target="tooltip-contacto"
			data-tooltip-placement="left"
			class="bg-white border-4 border-purple-900 rounded-full shadow-lg w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center hover:bg-purple-50 transition-colors group dark:bg-gray-800 dark:border-purple-400 dark:hover:bg-gray-700"
			aria-label="Abrir formulario de contacto"
			onclick={() => contactModalOpen.set(true)}
		>
			<i class="fa-regular fa-envelope text-lg sm:text-3xl text-purple-900 dark:text-purple-200"></i>
		</button>
		<div id="tooltip-contacto" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-800 rounded-lg shadow-xs opacity-0 tooltip whitespace-nowrap">
			Abrir el formulario de contacto
			<div class="tooltip-arrow" data-popper-arrow></div>
		</div>
	</div>

	<!-- Botones flotantes: móvil (misma UI, sin tooltips) -->
	<div
		class="fixed bottom-6 right-6 z-40 flex flex-col gap-3 max-sm:bottom-4 max-sm:right-2 max-sm:gap-2 md:hidden"
	>
		{#if showBackToTop}
			<button
				type="button"
				data-aos="fade-up"
				data-aos-duration="650"
				data-aos-easing="ease-out-cubic"
				data-aos-once="false"
				class="flex h-12 w-12 max-sm:h-10 max-sm:w-10 shrink-0 items-center justify-center rounded-full border-4 border-sky-600 max-sm:border-2 bg-sky-500 shadow-lg transition-colors hover:bg-sky-400 dark:border-sky-300 dark:bg-sky-400 dark:hover:bg-sky-300"
				aria-label="Volver arriba"
				onclick={scrollToTop}
			>
				<svg
					class="h-6 w-6 max-sm:h-5 max-sm:w-5 text-white"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					aria-hidden="true"
				>
					<path d="M5 10l7-7m0 0l7 7m-7-7v18" />
				</svg>
			</button>
		{/if}
		<button
			type="button"
			class="bg-slate-800 border-4 border-slate-950 rounded-full shadow-lg h-12 w-12 max-sm:h-10 max-sm:w-10 max-sm:border-2 flex items-center justify-center hover:bg-slate-700 transition-colors group dark:bg-amber-400 dark:border-amber-500 dark:hover:bg-amber-300"
			aria-label={$darkMode ? 'Activar modo claro' : 'Activar modo oscuro'}
			onclick={toastThemeChanged}
		>
			{#if $darkMode}
				<svg
					class="h-6 w-6 max-sm:h-5 max-sm:w-5 shrink-0 text-amber-950"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					aria-hidden="true"
				>
					<path
						d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0z"
					/>
				</svg>
			{:else}
				<svg
					class="h-6 w-6 max-sm:h-5 max-sm:w-5 text-amber-200"
					fill="currentColor"
					viewBox="0 0 24 24"
					aria-hidden="true"
				>
					<path
						d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
					/>
				</svg>
			{/if}
		</button>

		<a
			href="https://wa.me/+543795315483?text=Hola Diego, vi tu portafolio y me gustaría conversar sobre una posible vacante..."
			target="_blank"
			rel="noopener noreferrer"
			class="flex h-12 w-12 max-sm:h-10 max-sm:w-10 items-center justify-center rounded-full border-4 border-green-600 max-sm:border-2 bg-green-500 shadow-lg transition-colors group hover:bg-green-400"
			aria-label="Contactar por WhatsApp"
		>
			<svg
				class="h-6 w-6 max-sm:h-5 max-sm:w-5 text-white group-hover:text-green-50"
				fill="currentColor"
				viewBox="0 0 24 24"
			>
				<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
			</svg>
		</a>

		<button
			type="button"
			class="flex h-12 w-12 max-sm:h-10 max-sm:w-10 items-center justify-center rounded-full border-4 border-purple-900 max-sm:border-2 bg-white shadow-lg transition-colors group hover:bg-purple-50 dark:border-purple-400 dark:bg-gray-800 dark:hover:bg-gray-700"
			aria-label="Abrir formulario de contacto"
			onclick={() => contactModalOpen.set(true)}
		>
			<i
				class="fa-regular fa-envelope text-lg max-sm:text-base text-purple-900 dark:text-purple-200"
			></i>
		</button>
	</div>
</div> 