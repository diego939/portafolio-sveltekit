<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Swal from 'sweetalert2';

	export let open = false;
	const dispatch = createEventDispatcher();

	let nombre = '';
	let correo = '';
	let asunto = '';
	let mensaje = '';
	let error = '';
	let loading = false;

	const fieldBase =
		'w-full rounded-xl border border-gray-200 bg-gray-50/80 px-3.5 py-2.5 text-gray-900 placeholder:text-gray-400 transition focus:border-purple-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-600 dark:border-gray-600 dark:bg-gray-800/80 dark:text-gray-100 dark:placeholder:text-gray-500 dark:focus:border-purple-400 dark:focus:bg-gray-900 dark:focus:ring-purple-500';

	function closeModal() {
		open = false;
		dispatch('close');
		vaciarCampos();
	}

	function vaciarCampos() {
		nombre = '';
		correo = '';
		asunto = '';
		mensaje = '';
		error = '';
	}

	function handleBackdropKeydown(e: KeyboardEvent) {
		if (!open || e.key !== 'Escape') return;
		closeModal();
	}

	async function enviar() {
		loading = true;
		try {
			const res = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'content-type': 'application/json' },
				body: JSON.stringify({ nombre, correo, asunto, mensaje })
			});
			if (!res.ok) {
				const data = await res.json().catch(() => ({}));
				const msg =
					typeof data === 'object' &&
					data &&
					'message' in data &&
					typeof (data as { message?: string }).message === 'string'
						? (data as { message: string }).message
						: 'No se pudo enviar el mensaje.';
				throw new Error(msg);
			}
			Swal.fire({
				icon: 'success',
				title: `${nombre}: gracias por tu interés ☺️`,
				text: 'Te estaré contactando a la brevedad!',
				showConfirmButton: false,
				timer: 4000
			});
			closeModal();
		} catch (e) {
			error = e instanceof Error ? e.message : 'Ocurrió un error al enviar el mensaje.';
		} finally {
			loading = false;
		}
	}

	function validar(e: Event) {
		e.preventDefault();
		if (!nombre.trim() || !correo.trim() || !asunto.trim() || !mensaje.trim()) {
			error = 'Completa todos los campos obligatorios.';
			return;
		}
		enviar();
	}
</script>

<svelte:window on:keydown={handleBackdropKeydown} />

{#if open}
	<div
		class="fixed inset-0 z-[1000] flex min-h-0 items-center justify-center overflow-y-auto overscroll-contain px-3 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom,0px))] pt-[max(0.75rem,env(safe-area-inset-top,0px))] sm:overflow-y-hidden sm:overscroll-auto sm:p-6"
	>
		<div class="fixed inset-0 bg-gray-900/50 backdrop-blur-md dark:bg-black/70" aria-hidden="true"></div>
		<div
			class="animate-fadeIn relative z-10 my-auto flex w-full max-w-lg min-h-0 max-h-[calc(100dvh-1.5rem)] flex-col overflow-hidden rounded-2xl border border-purple-900/10 bg-white shadow-2xl shadow-purple-900/10 dark:border-purple-500/20 dark:bg-gray-900 dark:shadow-black/40 sm:max-h-none"
			role="dialog"
			aria-modal="true"
			aria-labelledby="contact-modal-title"
			aria-describedby="contact-modal-desc"
		>
			<div
				class="h-1.5 w-full shrink-0 rounded-t-2xl bg-gradient-to-r from-purple-600 via-violet-500 to-indigo-600"
				aria-hidden="true"
			></div>

			<div
				class="flex shrink-0 items-start justify-between gap-4 border-b border-gray-100 px-5 pb-4 pt-5 dark:border-gray-700 sm:px-6"
			>
				<div>
					<h2
						id="contact-modal-title"
						class="flex items-center gap-2.5 text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100"
					>
						<span
							class="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-purple-900 ring-1 ring-purple-100 dark:bg-purple-950/80 dark:text-purple-200 dark:ring-purple-800"
							aria-hidden="true"
						>
							<svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
								/>
							</svg>
						</span>
						Contactame
					</h2>
				</div>
				<button
					type="button"
					class="shrink-0 rounded-xl p-2 text-gray-400 transition hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-800 dark:hover:text-gray-200"
					on:click={closeModal}
					aria-label="Cerrar formulario de contacto"
				>
					<svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			</div>

			<form
				class="min-h-0 flex-1 space-y-4 overflow-y-auto overscroll-y-contain px-5 py-5 [-webkit-overflow-scrolling:touch] sm:flex-none sm:overflow-visible sm:space-y-5 sm:px-6 sm:pb-6"
				on:submit|preventDefault={validar}
				novalidate
			>
				{#if error}
					<div
						class="flex gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800 dark:border-red-900/50 dark:bg-red-950/40 dark:text-red-200"
						role="alert"
					>
						<svg class="mt-0.5 h-5 w-5 shrink-0 text-red-600" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
							<path
								fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
								clip-rule="evenodd"
							/>
						</svg>
						<span>{error}</span>
					</div>
				{/if}

				<div class="space-y-1.5">
					<label for="contact-nombre" class="text-sm font-semibold text-gray-800 dark:text-gray-200">
						Nombre <span class="text-red-500">*</span>
					</label>
					<div class="relative">
						<span
							class="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500"
							aria-hidden="true"
						>
							<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
								/>
							</svg>
						</span>
						<input
							id="contact-nombre"
							type="text"
							autocomplete="name"
							class="{fieldBase} pl-11"
							placeholder="Tu nombre"
							bind:value={nombre}
						/>
					</div>
				</div>

				<div class="space-y-1.5">
					<label for="contact-correo" class="text-sm font-semibold text-gray-800 dark:text-gray-200">
						Correo <span class="text-red-500">*</span>
					</label>
					<div class="relative">
						<span
							class="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500"
							aria-hidden="true"
						>
							<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
								/>
							</svg>
						</span>
						<input
							id="contact-correo"
							type="email"
							autocomplete="email"
							inputmode="email"
							class="{fieldBase} pl-11"
							placeholder="tu@correo.com"
							bind:value={correo}
						/>
					</div>
				</div>

				<div class="space-y-1.5">
					<label for="contact-asunto" class="text-sm font-semibold text-gray-800 dark:text-gray-200">
						Asunto <span class="text-red-500">*</span>
					</label>
					<div class="relative">
						<span
							class="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500"
							aria-hidden="true"
						>
							<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
								/>
							</svg>
						</span>
						<input
							id="contact-asunto"
							type="text"
							class="{fieldBase} pl-11"
							placeholder="Ej. Propuesta de trabajo, proyecto…"
							bind:value={asunto}
						/>
					</div>
				</div>

				<div class="space-y-1.5">
					<label for="contact-mensaje" class="text-sm font-semibold text-gray-800 dark:text-gray-200">
						Mensaje <span class="text-red-500">*</span>
					</label>
					<textarea
						id="contact-mensaje"
						rows="3"
						class="{fieldBase} min-h-[5.5rem] resize-y sm:min-h-[7rem]"
						placeholder="Escribe tu mensaje aquí…"
						bind:value={mensaje}
					></textarea>
					<p class="hidden sm:block text-xs text-gray-500 dark:text-gray-400">
						Desde ya, muchas gracias por tu interés.
					</p>
				</div>

				<div
					class="flex flex-wrap justify-center gap-3 border-t border-gray-100 pt-5 dark:border-gray-700"
				>
					<button
						type="button"
						class="rounded-xl border-2 border-gray-200 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 transition hover:border-gray-300 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
						on:click={closeModal}
					>
						Cancelar
					</button>
					<button
						type="submit"
						class="inline-flex items-center justify-center gap-2 rounded-xl bg-purple-900 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-purple-900/25 transition hover:bg-purple-800 disabled:cursor-not-allowed disabled:opacity-60"
						disabled={loading}
					>
						{#if loading}
							Enviando…
							<svg class="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24" aria-hidden="true">
								<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
								<path
									class="opacity-75"
									fill="currentColor"
									d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
								></path>
							</svg>
						{:else}
							Enviar
							<i class="fa-regular fa-paper-plane"></i>
						{/if}
					</button>
				</div>
			</form>
		</div>
	</div>
{/if}

<style>
	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: scale(0.96) translateY(8px);
		}
		to {
			opacity: 1;
			transform: scale(1) translateY(0);
		}
	}
	.animate-fadeIn {
		animation: fadeIn 0.22s ease-out;
	}
</style>
