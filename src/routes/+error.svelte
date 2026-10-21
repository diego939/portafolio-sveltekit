<script lang="ts">
	import { page } from '$app/state';

	const isNotFound = $derived(page.status === 404);
</script>

<svelte:head>
	<title>
		{isNotFound ? '404 - Página no encontrada' : `${page.status} - Ocurrió un error`} | Diego David Almirón
	</title>
	<meta
		name="description"
		content="La página que buscás no está disponible. Volvé al inicio y seguí explorando mi portafolio de desarrollo web."
	/>
</svelte:head>

<main
	class="relative isolate flex min-h-0 h-full w-full flex-1 items-center justify-center overflow-hidden px-4 py-4 sm:px-6 sm:py-6"
>

	<!-- Tarjeta de error -->
	<section
	    class="relative w-full max-w-2xl max-h-full overflow-y-auto rounded-2xl border border-purple-200/80 bg-gradient-to-br from-white via-violet-50/80 to-indigo-100/90 px-5 py-6 text-center shadow-xl shadow-purple-900/10 sm:rounded-3xl sm:px-10 sm:py-8 md:px-14 dark:border-purple-500/20 dark:from-gray-900 dark:via-gray-900 dark:to-purple-950/70 dark:shadow-black/30"
	    aria-labelledby="error-heading"
    >
		<!-- Acento superior -->
		<div
			class="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-fuchsia-500 via-violet-600 to-indigo-600"
			aria-hidden="true"
		></div>

		<!-- Icono -->
		<div class="relative mx-auto mb-5 flex h-20 w-20 items-center justify-center sm:mb-7 sm:h-24 sm:w-24">
			<div
				class="absolute inset-0 rounded-full bg-gradient-to-br from-fuchsia-400/30 via-violet-500/20 to-indigo-500/30 blur-xl"
				aria-hidden="true"
			></div>

			<div
				class="relative flex h-full w-full items-center justify-center rounded-2xl border border-purple-200 bg-gradient-to-br from-white to-violet-100 shadow-lg shadow-purple-900/10 dark:border-purple-500/30 dark:from-gray-800 dark:to-purple-950"
			>
				<svg
					class="h-10 w-10 text-violet-700 sm:h-12 sm:w-12 dark:text-violet-300"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="1.5"
					aria-hidden="true"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M8 3.75h5.5L19 9.25v10A1.75 1.75 0 0 1 17.25 21h-9.5A1.75 1.75 0 0 1 6 19.25v-13.75A1.75 1.75 0 0 1 7.75 3.75Z"
					/>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M13.5 3.75v5.5H19M9 13h6M9 16.5h3"
					/>
				</svg>
			</div>
		</div>

		<!-- Código de error -->
		<p
			class="mb-2 bg-gradient-to-r from-purple-900 via-violet-800 to-indigo-700 bg-clip-text text-6xl font-extrabold tracking-tight text-transparent sm:text-7xl md:text-8xl dark:from-purple-300 dark:via-violet-300 dark:to-indigo-300"
			aria-label={isNotFound ? 'Error 404' : `Error ${page.status}`}
		>
			{page.status}
		</p>

		<!-- Mensaje -->
		<h1
			id="error-heading"
			class="mx-auto max-w-lg text-xl font-bold tracking-tight text-gray-900 sm:text-2xl md:text-3xl dark:text-gray-100"
		>
			{isNotFound ? '¡Ups! Esta página no existe' : '¡Algo salió mal!'}
		</h1>

		<p
			class="mx-auto mt-3 max-w-md text-sm leading-relaxed text-gray-600 sm:mt-4 sm:text-base dark:text-gray-400"
		>
			{isNotFound
				? 'Parece que el enlace que seguiste no es correcto o que esta página ya no está disponible.'
				: 'No pudimos completar tu solicitud. Podés volver al inicio e intentar navegar nuevamente por el portafolio.'}
		</p>

		<!-- Acciones -->
		<div class="mx-auto mt-7 flex w-full max-w-sm flex-col gap-3 sm:mt-9 sm:flex-row sm:max-w-none sm:justify-center">
			<a
				href="/"
				class="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-purple-900/20 bg-gradient-to-r from-purple-900 via-violet-800 to-indigo-800 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-900/20 transition duration-200 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 dark:border-purple-400/20 dark:focus-visible:ring-offset-gray-900 sm:w-auto"
			>
				<svg
					class="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2"
					aria-hidden="true"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M10 19l-7-7 7-7M3 12h18"
					/>
				</svg>
				Volver al inicio
			</a>

			<a
				href="/proyectos"
				class="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border-2 border-purple-300 bg-white/80 px-5 py-3 text-sm font-semibold text-purple-900 shadow-sm transition duration-200 hover:border-purple-500 hover:bg-purple-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 dark:border-purple-500/40 dark:bg-gray-800/80 dark:text-purple-200 dark:hover:border-purple-400 dark:hover:bg-gray-700 dark:focus-visible:ring-offset-gray-900 sm:w-auto"
			>
				Explorar proyectos
				<svg
					class="h-4 w-4"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2"
					aria-hidden="true"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M17 8l4 4m0 0-4 4m4-4H3"
					/>
				</svg>
			</a>
		</div>

		<!-- Firma -->
		<div class="mx-auto mt-7 max-w-xs border-t border-purple-200/80 pt-5 dark:border-purple-500/20 sm:mt-9 sm:pt-6">
			<p class="text-xs text-gray-500 sm:text-sm dark:text-gray-400">
				Estás en el portafolio de
			</p>
			<p class="mt-1 bg-gradient-to-r from-purple-900 via-violet-800 to-indigo-700 bg-clip-text text-sm font-bold text-transparent sm:text-base dark:from-purple-300 dark:via-violet-300 dark:to-indigo-300">
				Diego David Almirón
			</p>
		</div>
	</section>
</main>