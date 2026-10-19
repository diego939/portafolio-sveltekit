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
		<!-- Barra superior de acento -->
		<div class="h-2 bg-gradient-to-r from-fuchsia-500 via-violet-600 to-indigo-600 sm:h-1.5"></div>

		<!-- Contenedor del CV -->
		<div class="p-2 sm:p-4 md:p-6">
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

	@media (max-width: 639px) {
		.cv-viewer {
			height: calc(100vh - 100px);
			min-height: 500px;
		}
	}
</style>