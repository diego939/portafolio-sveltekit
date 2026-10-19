
<script lang="ts">
	const cvFileName = 'Diego David Almirón CV - Software Developer.pdf';
	const cvUrl = `/documents/pdf/CV/${encodeURI(cvFileName)}`;
</script>

<svelte:head>
	<title>CV - Diego David Almirón</title>
	<meta
		name="description"
		content="Currículum Vitae de Diego David Almirón - Software Developer"
	/>
</svelte:head>

<div class="space-y-6 pb-6 sm:space-y-8">
	<section
		class="mx-4 overflow-hidden rounded-2xl bg-white shadow-xl shadow-purple-900/10 sm:mx-6 sm:rounded-3xl dark:bg-gray-900 dark:shadow-black/30"
	>
		<!-- Barra superior -->
		<div class="h-2 bg-gradient-to-r from-fuchsia-500 via-violet-600 to-indigo-600 sm:h-1.5"></div>

		<!-- MOBILE -->
		<div class="flex flex-col items-center px-5 py-10 text-center sm:hidden">
			<h1 class="mb-6 text-2xl font-bold text-gray-900 dark:text-gray-100">
				Mi Currículum Vitae
			</h1>

			<a
				href={cvUrl}
				download={cvFileName}
				class="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-900 via-violet-800 to-indigo-800 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-900/25 transition hover:-translate-y-0.5 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900"
			>
				<!-- Icono PDF -->
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					class="h-5 w-5"
					aria-hidden="true"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M7 3h7l5 5v13H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"
					/>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M14 3v6h5"
					/>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M8 16h1.5a1.5 1.5 0 0 0 0-3H8v5m6 0v-5h1.5a2.5 2.5 0 0 1 0 5H14"
					/>
				</svg>

				Descargar CV
			</a>
		</div>

		<!-- DESKTOP -->
		<div class="hidden p-2 sm:block sm:p-4 md:p-6">
			<div
				class="mx-auto w-full max-w-5xl overflow-hidden rounded-xl border border-gray-200 bg-gray-100 shadow-inner dark:border-gray-700 dark:bg-gray-800"
			>
				<iframe
					src={cvUrl}
					title="CV de Diego David Almirón"
					class="cv-viewer"
				></iframe>
			</div>
		</div>
	</section>
</div>

<style>
	.cv-viewer {
		display: block;
		width: 100%;
		height: calc(100vh - 120px);
		min-height: 600px;
		border: 0;
	}
</style>
