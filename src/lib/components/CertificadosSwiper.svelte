<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { onMount, tick } from 'svelte';
	import type SwiperType from 'swiper';

	interface CertificadoItem {
		nombre: string;
		duracion: string;
		imagen: string;
		credencial: string;
		pdf: string;
	}

	export let certificados: CertificadoItem[];

	function abrirPDF(url: string) {
		if (url) window.open(url, '_blank');
	}

	function verificarCredencial(url: string) {
		if (url) window.open(url, '_blank');
	}

	function onImgError(e: Event) {
		const target = e.target as HTMLImageElement;
		if (!target) return;
		target.style.display = 'none';
		const sibling = target.nextElementSibling as HTMLElement | null;
		if (sibling) sibling.style.display = 'flex';
	}

	let swiperContainer: HTMLElement | undefined = undefined;
	let swiperInstance: SwiperType | undefined;

	function refreshSwiper() {
		swiperInstance?.update();
	}

	afterNavigate(() => {
		tick().then(refreshSwiper);
	});

	onMount(() => {
		let cancelled = false;

		function onVisibilityChange() {
			if (document.visibilityState === 'visible') refreshSwiper();
		}
		document.addEventListener('visibilitychange', onVisibilityChange);

		(async () => {
			const [{ default: Swiper }, { EffectCoverflow, Navigation, Pagination }] = await Promise.all([
				import('swiper'),
				import('swiper/modules')
			]);
			await Promise.all([
				import('swiper/css'),
				import('swiper/css/effect-coverflow'),
				import('swiper/css/pagination')
			]);

			if (cancelled || !swiperContainer) return;

			const paginationEl = swiperContainer.querySelector<HTMLElement>('.cert-swiper-pagination');
			const shell = swiperContainer.parentElement;
			const prevBtn = shell?.querySelector<HTMLElement>('.cert-swiper-button-prev');
			const nextBtn = shell?.querySelector<HTMLElement>('.cert-swiper-button-next');
			if (!paginationEl || !prevBtn || !nextBtn) return;

			const initial =
				certificados.length > 0 ? Math.min(2, Math.max(0, certificados.length - 1)) : 0;

			swiperInstance = new Swiper(swiperContainer, {
				modules: [EffectCoverflow, Pagination, Navigation],
				effect: 'coverflow',
				grabCursor: true,
				centeredSlides: true,
				// centeredSlidesBounds is incompatible with rewind (Swiper 9+) and breaks
				// reaching the first/last slide on multi-slide (desktop) layouts.
				rewind: true,
				initialSlide: initial,
				speed: 550,
				slidesPerView: 1,
				spaceBetween: 12,
				watchSlidesProgress: true,
				observer: true,
				observeParents: true,
				observeSlideChildren: true,
				resizeObserver: true,
				coverflowEffect: {
					rotate: 8,
					stretch: 0,
					depth: 72,
					scale: 0.94,
					modifier: 1,
					slideShadows: true
				},
				pagination: {
					el: paginationEl,
					clickable: true,
					dynamicBullets: false
				},
				navigation: {
					nextEl: nextBtn,
					prevEl: prevBtn
				},
				breakpoints: {
					640: {
						slidesPerView: 'auto',
						spaceBetween: 20,
						coverflowEffect: { rotate: 14, depth: 128, scale: 0.89 }
					},
					1024: {
						slidesPerView: 3,
						spaceBetween: 22,
						coverflowEffect: { rotate: 14, depth: 130, scale: 0.88 }
					}
				}
			});

			await tick();
			swiperInstance?.update();
		})();

		return () => {
			document.removeEventListener('visibilitychange', onVisibilityChange);
			cancelled = true;
			swiperInstance?.destroy(true, true);
			swiperInstance = undefined;
		};
	});
</script>

<section
	class="relative py-10 sm:py-14 px-4 sm:px-6 max-w-full overflow-x-clip box-border sm:rounded-2xl sm:mx-6"
>
	<div
		class="pointer-events-none absolute inset-0 hidden bg-gradient-to-br from-purple-900/10 via-white to-indigo-50/90 dark:from-purple-950/40 dark:via-gray-900 dark:to-indigo-950/80 sm:block sm:rounded-2xl"
	></div>

	<div class="text-center mb-8 sm:mb-10 relative z-10">
		<h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 dark:text-gray-100">Certificaciones</h2>
		<p class="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base dark:text-gray-400">
			Credenciales verificables y material descargable de mi formación continua.
		</p>
	</div>

	<div class="max-w-7xl mx-auto relative z-10 w-full min-w-0">
		<div class="relative w-full max-w-full mx-auto min-w-0 cert-carousel-shell">
			<button
				type="button"
				class="cert-swiper-button-prev absolute left-0 top-[42%] z-20 -translate-y-1/2 flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-purple-900/30 bg-white/95 text-purple-900 shadow-md backdrop-blur-sm transition hover:bg-purple-900 hover:text-white hover:shadow-lg disabled:opacity-30 dark:border-purple-500/40 dark:bg-gray-900/95 dark:text-purple-200 sm:left-1 lg:left-0"
				aria-label="Certificado anterior"
			>
				<svg class="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
				</svg>
			</button>

			<button
				type="button"
				class="cert-swiper-button-next absolute right-0 top-[42%] z-20 -translate-y-1/2 flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-purple-900/30 bg-white/95 text-purple-900 shadow-md backdrop-blur-sm transition hover:bg-purple-900 hover:text-white hover:shadow-lg disabled:opacity-30 dark:border-purple-500/40 dark:bg-gray-900/95 dark:text-purple-200 sm:right-1 lg:right-0"
				aria-label="Certificado siguiente"
			>
				<svg class="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
				</svg>
			</button>

			<div class="swiper cert-swiper w-full max-w-full min-w-0" bind:this={swiperContainer}>
				<div class="swiper-wrapper pb-1 mb-4">
					{#each certificados as cert (cert.nombre + cert.imagen)}
						<div class="swiper-slide">
							<article
								class="cert-card group h-full backdrop-blur-md bg-white/30 border border-purple-900/12 hover:border-purple-900/35 hover:border-2 rounded-2xl shadow-lg p-4 sm:p-5 transition duration-300 hover:shadow-2xl hover:bg-white/45 dark:border-purple-500/25 dark:bg-gray-900/70 dark:hover:bg-gray-800/90 flex flex-col"
							>
								<div class="w-full h-32 sm:h-36 mb-3 flex items-center justify-center shrink-0">
									<img
										src={cert.imagen}
										alt={cert.nombre}
										class="w-full h-full object-contain rounded transition duration-300 group-hover:scale-105"
										loading="lazy"
										decoding="async"
										on:error={onImgError}
									/>
									<div
										class="hidden items-center justify-center w-full h-full bg-gray-100/90 rounded text-gray-500 dark:bg-gray-800 dark:text-gray-400"
									>
										<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
											></path>
										</svg>
									</div>
								</div>

								<h3 class="text-base sm:text-lg font-bold text-gray-800 mb-1 line-clamp-2 text-center dark:text-gray-100">
									{cert.nombre}
								</h3>
								<p class="text-xs sm:text-sm text-purple-900 font-semibold mb-3 text-center dark:text-purple-300">
									Duración: {cert.duracion}
								</p>

								<div class="flex gap-2 w-full mt-auto pt-1">
									{#if cert.pdf}
										<button
											type="button"
											on:click={() => abrirPDF(cert.pdf)}
											class="flex-1 bg-red-600 text-white text-xs py-2 px-2 sm:px-3 rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center gap-1 font-medium"
										>
											<svg class="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
												></path>
											</svg>
											PDF
										</button>
									{/if}
									{#if cert.credencial}
										<button
											type="button"
											on:click={() => verificarCredencial(cert.credencial)}
											class="flex-1 bg-emerald-600 text-white text-xs py-2 px-2 sm:px-3 rounded-lg hover:bg-emerald-700 transition-colors flex items-center justify-center gap-1 font-medium"
										>
											<svg
												class="w-3.5 h-3.5 shrink-0"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
												aria-hidden="true"
											>
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													d="M13.213 9.787a3.391 3.391 0 0 0-4.795 0l-3.425 3.426a3.39 3.39 0 0 0 4.795 4.794l.321-.304m-.321-4.49a3.39 3.39 0 0 0 4.795 0l3.424-3.426a3.39 3.39 0 0 0-4.794-4.795l-1.028.961"
												/>
											</svg>
											Verificar
										</button>
									{/if}
								</div>
							</article>
						</div>
					{/each}
				</div>
				<div class="hidden sm:block">
					<div class="cert-swiper-pagination mb-4"></div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.cert-carousel-shell {
		box-sizing: border-box;
		padding-left: 2.375rem;
		padding-right: 2.375rem;
	}

	@media (min-width: 640px) {
		.cert-carousel-shell {
			padding-left: 3.25rem;
			padding-right: 3.25rem;
		}
	}

	@media (min-width: 1024px) {
		.cert-carousel-shell {
			padding-left: 3.5rem;
			padding-right: 3.5rem;
			max-width: min(100%, 72rem);
			margin-left: auto;
			margin-right: auto;
		}
	}

	:global(.cert-swiper) {
		box-sizing: border-box;
		width: 100%;
		max-width: 100%;
		overflow-x: clip;
		overflow-y: visible;
	}

	@media (max-width: 639.98px) {
		:global(.cert-swiper .swiper-slide) {
			width: 100%;
			box-sizing: border-box;
		}
	}

	@media (min-width: 640px) {
		:global(.cert-swiper .swiper-slide) {
			width: min(100%, 18.75rem);
			max-width: 100%;
		}
	}

	@media (min-width: 640px) and (max-width: 1023px) {
		:global(.cert-swiper .swiper-slide) {
			width: min(18.75rem, 100%);
			max-width: 100%;
		}
	}

	@media (min-width: 1024px) {
		:global(.cert-swiper .swiper-slide) {
			width: auto;
			max-width: none;
		}
	}

	.cert-card {
		min-height: 100%;
		max-width: 100%;
		overflow-wrap: break-word;
	}

	@media (max-width: 639.98px) {
		.cert-card {
			transition:
				filter 0.45s ease,
				opacity 0.45s ease,
				transform 0.45s ease,
				box-shadow 0.45s ease;
		}

		:global(.cert-swiper .swiper-slide-active) .cert-card {
			filter: none;
			opacity: 1;
			transform: scale(1);
			box-shadow:
				0 10px 15px -3px rgb(0 0 0 / 0.08),
				0 4px 6px -4px rgb(0 0 0 / 0.06);
		}

		:global(.cert-swiper .swiper-slide-prev) .cert-card,
		:global(.cert-swiper .swiper-slide-next) .cert-card {
			filter: blur(2.5px);
			opacity: 0.68;
			transform: scale(0.97);
			pointer-events: none;
		}
	}

	:global(.cert-swiper .cert-swiper-pagination) {
		position: relative !important;
		inset: auto !important;
		transform: none !important;
		width: 100% !important;
		max-width: 100%;
		box-sizing: border-box;
		margin-top: 1.25rem;
		padding: 0.25rem 0.25rem 0;
		display: flex !important;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		gap: 0.5rem;
		row-gap: 0.35rem;
	}

	:global(.cert-swiper .cert-swiper-pagination .swiper-pagination-bullet) {
		margin: 0 !important;
		flex-shrink: 0;
		width: 0.55rem;
		height: 0.55rem;
		background: rgb(88 28 135);
		opacity: 0.4;
	}

	@media (min-width: 640px) {
		:global(.cert-swiper .cert-swiper-pagination .swiper-pagination-bullet) {
			width: 0.625rem;
			height: 0.625rem;
		}
	}

	:global(.cert-swiper .cert-swiper-pagination .swiper-pagination-bullet-active) {
		opacity: 1;
		transform: scale(1.2);
	}

	:global(html.dark .cert-swiper .cert-swiper-pagination .swiper-pagination-bullet) {
		background: rgb(196 181 253);
		opacity: 0.45;
	}

	:global(html.dark .cert-swiper .cert-swiper-pagination .swiper-pagination-bullet-active) {
		opacity: 1;
	}
</style>
