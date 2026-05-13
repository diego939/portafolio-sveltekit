<script lang="ts">
	import { beforeUpdate, createEventDispatcher } from 'svelte';
	import type { GallerySlide } from '$lib/gallery';

	export let isOpen = false;
	export let images: GallerySlide[] = [];
	export let title = '';
	export let initialIndex = 0;

	const dispatch = createEventDispatcher();

	let index = 0;
	let wasOpen = false;

	beforeUpdate(() => {
		if (isOpen && !wasOpen) index = Math.max(0, initialIndex);
		wasOpen = isOpen;
	});

	$: count = images.length;
	$: safeIndex = count > 0 ? Math.min(Math.max(0, index), count - 1) : 0;
	$: current = count > 0 ? images[safeIndex] : null;

	function closeModal() {
		dispatch('close');
	}

	function go(delta: number) {
		if (count <= 0) return;
		index = (safeIndex + delta + count) % count;
	}

	function goTo(i: number) {
		if (i >= 0 && i < count) index = i;
	}

	function handleKeydown(event: KeyboardEvent) {
		if (!isOpen) return;
		if (event.key === 'Escape') closeModal();
		if (event.key === 'ArrowLeft') {
			event.preventDefault();
			go(-1);
		}
		if (event.key === 'ArrowRight') {
			event.preventDefault();
			go(1);
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} />

{#if isOpen && count > 0 && current}
	<div
		class="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4"
		role="presentation"
		on:click={closeModal}
	>
		<div
			class="relative flex max-h-[min(92vh,900px)] w-full max-w-5xl flex-col gap-3"
			role="dialog"
			aria-modal="true"
			aria-label={title || 'Galería de capturas'}
			tabindex="-1"
			on:click|stopPropagation
		>
			<button
				type="button"
				class="absolute -right-1 -top-1 z-20 rounded-full p-2 text-white transition hover:bg-white/10 hover:text-gray-200 sm:right-0 sm:top-0"
				on:click={closeModal}
				aria-label="Cerrar galería"
			>
				<svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
				</svg>
			</button>

			{#if title}
				<h2 class="pr-10 text-center text-sm font-semibold text-white/95 sm:text-base">{title}</h2>
			{/if}

			<div class="relative flex min-h-0 flex-1 items-center justify-center">
				<button
					type="button"
					class="absolute left-0 z-10 rounded-full bg-black/40 p-2 text-white backdrop-blur-sm transition hover:bg-black/60 sm:left-2 sm:p-3"
					on:click={() => go(-1)}
					aria-label="Imagen anterior"
				>
					<svg class="h-6 w-6 sm:h-8 sm:w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
					</svg>
				</button>

				<img
					src={current.src}
					alt={current.alt}
					class="max-h-[min(70vh,720px)] w-full max-w-full rounded-lg object-contain shadow-2xl"
				/>

				<button
					type="button"
					class="absolute right-0 z-10 rounded-full bg-black/40 p-2 text-white backdrop-blur-sm transition hover:bg-black/60 sm:right-2 sm:p-3"
					on:click={() => go(1)}
					aria-label="Imagen siguiente"
				>
					<svg class="h-6 w-6 sm:h-8 sm:w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
					</svg>
				</button>
			</div>

			<p class="text-center text-xs text-white/80 sm:text-sm">
				{safeIndex + 1} / {count}
			</p>

			<div
				class="flex max-w-full gap-2 overflow-x-auto pb-1 pt-1 [scrollbar-width:thin]"
				role="tablist"
				aria-label="Miniaturas de la galería"
			>
				{#each images as img, i (img.src)}
					<button
						type="button"
						role="tab"
						aria-selected={i === safeIndex}
						class="relative h-14 w-24 shrink-0 overflow-hidden rounded-lg ring-2 ring-transparent transition hover:opacity-95 sm:h-16 sm:w-28 {i === safeIndex
							? 'ring-purple-400 opacity-100'
							: 'opacity-70 hover:ring-white/30'}"
						on:click={() => goTo(i)}
					>
						<img src={img.src} alt="" class="h-full w-full object-cover object-top" />
						<span class="sr-only">{img.alt}</span>
					</button>
				{/each}
			</div>
		</div>
	</div>
{/if}
