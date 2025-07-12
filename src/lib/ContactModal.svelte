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

  async function enviar() {
    loading = true;
    try {
      await fetch('https://66de46b8de4426916ee0c347.mockapi.io/mails', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ nombre, correo, asunto, mensaje })
      });
      Swal.fire({
        icon: 'success',
        title: `${nombre}: gracias por tu interés ☺️`,
        text: 'Te estaré contactando a la brevedad!',
        showConfirmButton: false,
        timer: 4000
      });
      closeModal();
    } catch (e) {
      error = 'Ocurrió un error al enviar el mensaje.';
    } finally {
      loading = false;
    }
  }

  function validar(e: Event) {
    e.preventDefault();
    if (!nombre || !correo || !asunto || !mensaje) {
      error = '⛔ Complete todos los campos';
      return;
    }
    enviar();
  }
</script>

{#if open}
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
    <div class="bg-white rounded-xl shadow-2xl w-full max-w-md mx-4 animate-fadeIn">
      <div class="flex justify-between items-center border-b px-6 py-4">
        <h2 class="text-xl font-bold text-blue-900 flex items-center gap-2">
          <svg class="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 10.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4.5"/><path d="M16 3v4"/><path d="M8 3v4"/><path d="M3 10h18"/></svg>
          Formulario de Contacto
        </h2>
        <button class="text-gray-400 hover:text-red-500 text-2xl font-bold" on:click={closeModal}>&times;</button>
      </div>
      <form class="px-6 py-4 space-y-4" on:submit|preventDefault={validar}>
        {#if error}
          <div class="text-red-600 text-sm text-center">{error}</div>
        {/if}
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">Nombre</label>
          <input type="text" class="w-full border border-blue-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" bind:value={nombre} />
        </div>
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">Correo</label>
          <input type="email" class="w-full border border-blue-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" bind:value={correo} />
        </div>
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">Asunto</label>
          <input type="text" class="w-full border border-blue-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" bind:value={asunto} />
        </div>
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">Mensaje</label>
          <textarea rows="4" class="w-full border border-blue-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" bind:value={mensaje}></textarea>
        </div>
        <div class="flex justify-center gap-3 pt-2">
          <button type="submit" class="bg-blue-600 text-white px-6 py-2 rounded font-semibold hover:bg-blue-700 transition-colors disabled:opacity-60" disabled={loading}>
            {loading ? 'Enviando...' : 'Enviar'}
          </button>
          <button type="button" class="bg-red-500 text-white px-4 py-2 rounded font-semibold hover:bg-red-600 transition-colors" on:click={closeModal}>Cerrar</button>
        </div>
      </form>
    </div>
  </div>
{/if}

<style>
  @keyframes fadeIn {
    from { opacity: 0; transform: scale(0.95); }
    to { opacity: 1; transform: scale(1); }
  }
  .animate-fadeIn {
    animation: fadeIn 0.2s;
  }
</style> 