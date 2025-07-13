<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	
	export let isOpen = false;
	export let imageSrc = '';
	export let imageAlt = '';
	
	const dispatch = createEventDispatcher();
	
	function closeModal() {
		dispatch('close');
	}
	
	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			closeModal();
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} />

{#if isOpen}
	<div 
		class="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
		on:click={closeModal}
	>
		<div class="relative max-w-4xl max-h-full">
			<button 
				class="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
				on:click={closeModal}
			>
				<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
				</svg>
			</button>
			
			<div class="relative" on:click|stopPropagation>
				<img 
					src={imageSrc} 
					alt={imageAlt}
					class="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
				/>
			</div>
		</div>
	</div>
{/if} 