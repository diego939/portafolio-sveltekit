<script lang="ts">
	import { onMount } from 'svelte';
	
	// Institutos reales
	const institutos = [
		{
			logo: "/images/instituciones/facena.jpg",
			nombre: "Facultad de Ciencias Exactas UNNE",
			titulo: "Analista Programador universitario",
			finalizacion: "Jul - 2024",
			url: "https://www.exa.unne.edu.ar/"
		},
		{
			logo: "/images/instituciones/arg-programa.png",
			nombre: "Argentina Programa",
			titulo: "Desarrollador Fullstack Junior",
			finalizacion: "Dic - 2022",
			url: "https://www.argentina.gob.ar/produccion/planargentina40"
		},
		{
			logo: "/images/instituciones/educacion-it.jpg",
			nombre: "Educación IT",
			titulo: "Desarrollador Fullstack Java",
			finalizacion: "Nov - 2021",
			url: "https://www.educacionit.com/"
		},
		{
			logo: "/images/instituciones/logo-utn.ba.jpg",
			nombre: "E-Learning UTN BA",
			titulo: "Desarrollador Web",
			finalizacion: "Oct - 2017",
			url: "https://sceu.frba.utn.edu.ar/"
		}
	];

	// Certificados reales
	const certificados = [
		{
			nombre: "Power BI desde cero",
			duracion: "2 hs",
			imagen: "/images/certificados/Power BI/Power BI.jpg",
			credencial: "https://cursos.desafiolatam.com/certificates/7qbcczzhxx",
			pdf: "/documents/pdf/certificados/Power BI - 2025-12-10.pdf"
		},
		{
			nombre: "Analista Programador",
			duracion: "3 años",
			imagen: "/images/certificados/Analista Programador Universitario/Analista Programador Universitario - Diploma-1.png",
			credencial: "https://registrograduados.siu.edu.ar/consulta.php?id_tipo_documento%5E%5EVlR4S0pDbi9qZ3BQUkVrOFAyMGNpUT09%7C%7Cnro_documento%5E%5ENVk5bEVjaE1CNGNUMzE1Y1VzWG1wQT09%7C%7Cnombres%5E%5EWDZJR1NQUkVWKzIvTGFESXFoV0gzUT09%7C%7Capellidos%5E%5EMDczRFBtWVo3MUU1c0FJOHhMYitIZz09",
			pdf: "/documents/pdf/Analista Programador Universitario - Diploma.pdf"
		},
		{
			nombre: "Vue.JS",
			duracion: "15 hs",
			imagen: "/images/certificados/VueJS Certificado/Certificado-Vue.JS-EducaciónIT.png",
			credencial: "https://www.educacionit.com/perfil/diego-david-almiron-605939/certificado/70435",
			pdf: "/documents/pdf/certificados/Certificado-Vue.JS-EducaciónIT.pdf"
		},
		{
			nombre: "#YoProgramo",
			duracion: "9 meses",
			imagen: "/images/certificados/Certificado_YoProgramo/Certificado_YoProgramo.png",
			credencial: "https://drive.google.com/file/d/1S4vWwsi-DxSiflZfd7XPYQxntFIx1ETK/view?usp=sharing",
			pdf: "/documents/pdf/certificados/Certificado_YoProgramo.pdf"
		},
		{
			nombre: "#SeProgramar",
			duracion: "3 meses",
			imagen: "/images/certificados/argentina_programa_octubre_diciembre_2021/argentina_programa_octubre_diciembre_2021-1.png",
			credencial: "https://mumuki.io/argentina-programa/certificates/verify/aq1HlWWt9SPPQKuX",
			pdf: "/documents/pdf/certificados/argentina_programa_octubre_diciembre_2021.pdf"
		},
		{
			nombre: "Habilidades Blandas",
			duracion: "6 hs",
			imagen: "/images/certificados/Habilidades Blandas Certificado/Certificado-Habilidades-Blandas-EducaciónIT.png",
			credencial: "https://www.educacionit.com/perfil/diego-david-almiron-605939/certificado/53583",
			pdf: "/documents/pdf/certificados/Certificado-Habilidades-Blandas-EducaciónIT.pdf"
		},
		{
			nombre: "Fullstack Java",
			duracion: "130 hs",
			imagen: "/images/certificados/CertificadoDigitalers2021/CertificadoDigitalers2021-1.png",
			credencial: "https://drive.google.com/file/d/1RePFXjh_vC2Jw-4vBFMNh_KoCmEfaX_j/view?usp=sharing",
			pdf: "/documents/pdf/certificados/CertificadoDigitalers2021.pdf"
		},
		{
			nombre: "Desarrollo Web",
			duracion: "2 meses",
			imagen: "/images/certificados/CertificadoUTN/CertificadoUTN-1.png",
			credencial: "https://sigead.utnba.centrodeelearning.com/alumnos/validar_certificado",
			pdf: "/documents/pdf/certificados/Certificado Desarrollo Web UTN.pdf"
		},
		{
			nombre: "Base De Datos",
			duracion: "12 hs",
			imagen: "/images/certificados/CertificacionBaseDeDatos/CertificacionBaseDeDatos-1.png",
			credencial: "https://www.educacionit.com/perfil/diego-david-almiron-605939/certificado/53398",
			pdf: "/documents/pdf/certificados/CertificacionBaseDeDatos.pdf"
		},
		{
			nombre: "Java Hibernate",
			duracion: "12 hs",
			imagen: "/images/certificados/certificado Java Hibernate/certificado Java Hibernate-1.png",
			credencial: "https://www.educacionit.com/perfil/diego-david-almiron-605939/certificado/53428",
			pdf: "/documents/pdf/certificados/certificado Java Hibernate.pdf"
		},
		{
			nombre: "Java Spring",
			duracion: "15 hs",
			imagen: "/images/certificados/Java Spring certificado/Java Spring certificado-1.png",
			credencial: "https://www.educacionit.com/perfil/diego-david-almiron-605939/certificado/53415",
			pdf: "/documents/pdf/certificados/Java Spring certificado.pdf"
		},
		{
			nombre: "Java J2SE",
			duracion: "45 hs",
			imagen: "/images/certificados/Java Standard Web Programming, J2SE Certificado/Java Standard Web Programming, J2SE Certificado-1.png",
			credencial: "https://www.educacionit.com/perfil/diego-david-almiron-605939/certificado/53410",
			pdf: "/documents/pdf/certificados/Java Standard Web Programming, J2SE Certificado.pdf"
		},
		{
			nombre: "JavaScript",
			duracion: "18 hs",
			imagen: "/images/certificados/Javascript desde cero certificado/Javascript desde cero certificado-1.png",
			credencial: "https://www.educacionit.com/perfil/diego-david-almiron-605939/certificado/53389",
			pdf: "/documents/pdf/certificados/Javascript desde cero certificado.pdf"
		},
		{
			nombre: "Java No Programadores",
			duracion: "15 hs",
			imagen: "/images/certificados/Java para no programadores certificado/Java para no programadores certificado-1.png",
			credencial: "https://www.educacionit.com/perfil/diego-david-almiron-605939/certificado/53393",
			pdf: "/documents/pdf/certificados/Java para no programadores certificado.pdf"
		},
		{
			nombre: "React.JS",
			duracion: "12 hs",
			imagen: "/images/certificados/ReactJS Certificado/ReactJS Certificado-1.png",
			credencial: "https://www.educacionit.com/perfil/diego-david-almiron-605939/certificado/53435",
			pdf: "/documents/pdf/certificados/ReactJS Certificado.pdf"
		},
		{
			nombre: "Git",
			duracion: "12 hs",
			imagen: "/images/certificados/certificadoGit/certificadoGit-1.png",
			credencial: "https://www.educacionit.com/perfil/diego-david-almiron-605939/certificado/53419",
			pdf: "/documents/pdf/certificados/certificadoGit.pdf"
		},
		{
			nombre: "Fundamentos Web",
			duracion: "15 hs",
			imagen: "/images/certificados/Fundamentos Web certificado/Fundamentos Web certificado-1.png",
			credencial: "https://www.educacionit.com/perfil/diego-david-almiron-605939/certificado/53295",
			pdf: "/documents/pdf/certificados/Fundamentos Web certificado.pdf"
		},
		{
			nombre: "Networking",
			duracion: "2 hs",
			imagen: "/images/certificados/LinkedIn para networking/LinkedIn-para-networking.png",
			credencial: "https://www.linkedin.com/learning/certificates/cab1e82f5f4244a693919a65255a34d4817c3d85e5c94d5b4db19cea2f6f46b4?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BLSXa6TsWQOaEndZdbJkC1w%3D%3D",
			pdf: "/documents/pdf/certificados/LinkedIn para networking.pdf"
		},
		{
			nombre: "Ciberseguridad",
			duracion: "1 hs",
			imagen: "/images/certificados/Ciberseguridad/Diego David Almirón - 2024-09-21 - Ciberseguridad.png",
			credencial: "https://cursos.desafiolatam.com/certificates/17kl17nx6h",
			pdf: "/documents/pdf/certificados/Diego David Almirón - 2024-09-21 - Ciberseguridad.pdf"
		},
		{
			nombre: "Seguridad Informática",
			duracion: "2 hs",
			imagen: "/images/certificados/Diego-David Almirón-Seguridad Informática/Diego-David Almirón-Seguridad Informática-1.png",
			credencial: "https://www.educacionit.com/perfil/diego-david-almiron-605939/certificado/57042",
			pdf: "/documents/pdf/certificados/Diego-David Almirón-Seguridad Informática.pdf"
		},
		{
			nombre: "Oracle",
			duracion: "2 hs",
			imagen: "/images/certificados/Diego David Almirón-Oracle/Diego David Almirón-Oracle-1.png",
			credencial: "https://www.educacionit.com/perfil/diego-david-almiron-605939/certificado/56086",
			pdf: "/documents/pdf/certificados/Diego David Almirón-Oracle.pdf"
		},
	];

	// Función para abrir PDF
	function abrirPDF(url: string) {
		if (url) {
			window.open(url, '_blank');
		}
	}

	// Función para verificar credencial
	function verificarCredencial(url: string) {
		if (url) {
			window.open(url, '_blank');
		}
	}

	// Función para abrir URL del instituto
	function abrirInstituto(url: string) {
		if (url) {
			window.open(url, '_blank');
		}
	}

	// Variables para el carrusel de certificados
	let paginaActual = 0;
	const certificadosPorPagina = 4;
	const totalPaginas = Math.ceil(certificados.length / certificadosPorPagina);

	// Función para ir a la página anterior
	function paginaAnterior() {
		if (paginaActual > 0) {
			paginaActual--;
		}
	}

	// Función para ir a la página siguiente
	function paginaSiguiente() {
		if (paginaActual < totalPaginas - 1) {
			paginaActual++;
		}
	}

	// Función para ir a una página específica
	function irAPagina(pagina: number) {
		paginaActual = pagina;
	}

	// Obtener certificados de la página actual
	$: certificadosActuales = certificados.slice(
		paginaActual * certificadosPorPagina,
		(paginaActual + 1) * certificadosPorPagina
	);

	// Función para convertir duración a horas
	function convertirDuracionAHoras(duracion: string): number {
		const duracionLower = duracion.toLowerCase();
		
		if (duracionLower.includes('hs') || duracionLower.includes('horas')) {
			return parseInt(duracionLower.match(/\d+/)?.[0] || '0');
		} else if (duracionLower.includes('meses')) {
			const meses = parseInt(duracionLower.match(/\d+/)?.[0] || '0');
			return meses * 40; // Estimación: 40 horas por mes
		} else if (duracionLower.includes('años')) {
			const años = parseInt(duracionLower.match(/\d+/)?.[0] || '0');
			return años * 480; // Estimación: 480 horas por año
		}
		return 0;
	}

	// Calcular total de horas de esfuerzo
	$: totalHorasEsfuerzo = certificados.reduce((total, cert) => {
		return total + convertirDuracionAHoras(cert.duracion);
	}, 0);
	
	// Establecer el título de la página
	onMount(() => {
		document.title = 'Educación - Diego David Almirón';
	});
</script>

<div class="space-y-12">
	<!-- Header -->
	<div class="text-center px-4">
		<h1 class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Educación</h1>
		<p class="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
			Mi formación académica y certificaciones que respaldan mi experiencia técnica y profesional.
		</p>
	</div>

	<!-- Sección de Certificaciones -->
	<section class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 mx-4 sm:mx-6">
		<h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">Certificaciones</h2>
		
		<!-- Carrusel de certificados -->
		<div class="relative">
			<!-- Botones de navegación -->
			<button 
				on:click={paginaAnterior}
				disabled={paginaActual === 0}
				class="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
			>
				<svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
				</svg>
			</button>
			
			<button 
				on:click={paginaSiguiente}
				disabled={paginaActual === totalPaginas - 1}
				class="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
			>
				<svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
				</svg>
			</button>

			<!-- Contenedor de certificados -->
			<div class="px-8">
				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					{#each certificadosActuales as cert}
						<div class="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 p-4">
							<div class="flex flex-col items-center text-center h-full">
								<!-- Imagen del certificado -->
								<div class="w-full h-32 mb-3 flex items-center justify-center">
									<img 
										src={cert.imagen} 
										alt={cert.nombre} 
										class="max-w-full max-h-full object-contain rounded"
										on:error={(e) => {
											const target = e.target as HTMLImageElement;
											if (target) {
												target.style.display = 'none';
												const sibling = target.nextElementSibling as HTMLElement;
												if (sibling) {
													sibling.style.display = 'flex';
												}
											}
										}}
									/>
									<div class="hidden items-center justify-center w-full h-full bg-gray-100 rounded text-gray-500">
										<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
										</svg>
				</div>
			</div>
			
								<!-- Información del certificado -->
								<h3 class="font-semibold text-gray-900 text-sm mb-1 line-clamp-2">{cert.nombre}</h3>
								<p class="text-xs text-gray-600 mb-3">Duración: {cert.duracion}</p>
								
								<!-- Botones de acción -->
								<div class="flex gap-2 w-full mt-auto">
									{#if cert.pdf}
										<button 
											on:click={() => abrirPDF(cert.pdf)}
											class="flex-1 bg-red-600 text-white text-xs py-2 px-3 rounded hover:bg-red-700 transition-colors flex items-center justify-center gap-1"
										>
											<svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
											</svg>
											PDF
										</button>
									{/if}
									{#if cert.credencial}
										<button 
											on:click={() => verificarCredencial(cert.credencial)}
											class="flex-1 bg-green-600 text-white text-xs py-2 px-3 rounded hover:bg-green-700 transition-colors flex items-center justify-center gap-1"
										>
										<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
											<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.213 9.787a3.391 3.391 0 0 0-4.795 0l-3.425 3.426a3.39 3.39 0 0 0 4.795 4.794l.321-.304m-.321-4.49a3.39 3.39 0 0 0 4.795 0l3.424-3.426a3.39 3.39 0 0 0-4.794-4.795l-1.028.961"/>
										  </svg>										  
											Verificar
										</button>
									{/if}
								</div>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>

		<!-- Indicadores de página -->
		{#if totalPaginas > 1}
			<div class="flex justify-center items-center space-x-2 mt-6">
				{#each Array(totalPaginas) as _, index}
					<button 
						on:click={() => irAPagina(index)}
						class="w-3 h-3 rounded-full transition-all duration-200 {paginaActual === index ? 'bg-purple-900' : 'bg-gray-300 hover:bg-gray-400'}"
						aria-label="Ir a página {index + 1}"
					></button>
				{/each}
			</div>
		{/if}
	</section>

	
	<!-- Grid de Institutos -->
	<section class="px-4 sm:px-6">
		<h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">Institutos</h2>
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
			{#each institutos as inst}
				<div class="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow flex flex-col h-full min-h-[320px] sm:min-h-[370px] p-4 sm:p-6">
					<button 
						on:click={() => abrirInstituto(inst.url)}
						class="w-full text-left focus:outline-none focus:ring-0 rounded-lg p-2 -m-2"
					>
						<img src={inst.logo} alt={inst.nombre} class="h-20 object-contain mb-4 transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer" />
					</button>
					<p class="font-semibold text-gray-800 text-center mb-1">{inst.nombre}</p>
					<p class="text-gray-600 text-center mb-1"><span class="font-bold">Título:</span> <span class="text-blue-700 font-medium">{inst.titulo}</span></p>
					<p class="text-gray-500 text-center mb-4">Finalización: {inst.finalizacion}</p>
					<div class="flex-1"></div>
					<button 
						on:click={() => abrirInstituto(inst.url)}
						class="w-full bg-purple-900 text-white py-2 rounded-b-xl flex items-center justify-center gap-2 hover:bg-purple-700 transition-colors mt-auto"
					>
					<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
						<path stroke="currentColor" stroke-width="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"/>
						<path stroke="currentColor" stroke-width="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
					  </svg>					  
						Ver
					</button>
				</div>
			{/each}
		</div>
	</section>

	<!-- Sección de Logros Académicos -->
	<section class="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 mx-4 sm:mx-6">
		<h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">Logros Alcanzados</h2>
		<div class="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
			<div class="text-center">
				<div class="text-3xl font-bold text-purple-900 mb-2">{totalHorasEsfuerzo}</div>
				<p class="text-gray-600">Horas de esfuerzo</p>
			</div>
			<div class="text-center">
				<div class="text-3xl font-bold text-green-600 mb-2">4</div>
				<p class="text-gray-600">Instituciones</p>
			</div>
			<div class="text-center">
				<div class="text-3xl font-bold text-purple-600 mb-2">{certificados.length}</div>
				<p class="text-gray-600">Certificaciones</p>
			</div>
		</div>
	</section>
</div> 