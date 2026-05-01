<script lang="ts">
	import { onMount } from 'svelte';
	import CertificadosSwiper from '$lib/components/CertificadosSwiper.svelte';
	
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
			nombre: ".NET",
			duracion: "40 hs",
			imagen: "/images/certificados/.NET/Certificado-.NET-Diego-David-Almirón.jpg",
			credencial: "https://certificados.itschool.com.ar/validar/a2cc1d0bf701ff9f4e2a095a6166efff59c9a657372ff69dd047e1423ae5fd9a",
			pdf: "/documents/pdf/certificados/Certificado-.NET-Diego-David-Almirón.pdf"
		},
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

	// Función para abrir URL del instituto
	function abrirInstituto(url: string) {
		if (url) {
			window.open(url, '_blank');
		}
	}

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

	<CertificadosSwiper {certificados} />

	
	<!-- Grid de Institutos -->
	<section
		class="relative mx-4 sm:mx-6 rounded-2xl overflow-hidden px-4 sm:px-6 py-10 sm:py-12 md:py-14"
		aria-labelledby="institutos-heading"
	>
		<div
			class="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50/90 pointer-events-none"
		></div>
		<div
			class="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-purple-200/30 blur-3xl pointer-events-none"
		></div>
		<div
			class="absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-indigo-200/25 blur-3xl pointer-events-none"
		></div>

		<div class="relative z-10 max-w-7xl mx-auto">
			<div class="text-center mb-8 sm:mb-10 md:mb-12">
				<p class="text-sm font-semibold uppercase tracking-wider text-purple-800/80 mb-2">
					Formación académica
				</p>
				<h2 id="institutos-heading" class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
					Institutos
				</h2>
				<p class="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
					Instituciones donde cursé títulos y programas que marcaron mi perfil profesional.
				</p>
			</div>

			<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-7">
				{#each institutos as inst (inst.url)}
					<article
						class="group relative flex flex-col h-full min-h-[300px] sm:min-h-[340px] rounded-2xl bg-white/80 backdrop-blur-sm border border-purple-900/10 shadow-lg shadow-purple-900/5 hover:shadow-xl hover:shadow-purple-900/10 hover:border-purple-900/25 transition-all duration-300 hover:-translate-y-1"
					>
						<div
							class="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r from-purple-700 via-indigo-600 to-purple-500 opacity-90"
						></div>

						<div class="flex flex-col flex-1 p-5 sm:p-6 pt-6">
							<button
								type="button"
								on:click={() => abrirInstituto(inst.url)}
								class="mx-auto mb-5 flex h-24 w-full max-w-[200px] items-center justify-center rounded-2xl bg-gradient-to-b from-white to-purple-50/80 ring-1 ring-purple-900/10 shadow-inner transition-transform duration-300 group-hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2"
								aria-label="Abrir sitio de {inst.nombre}"
							>
								<img
									src={inst.logo}
									alt=""
									class="h-16 w-auto max-w-[90%] object-contain"
								/>
							</button>

							<h3
								class="text-center font-bold text-gray-900 text-sm sm:text-base leading-snug mb-3 line-clamp-3 min-h-[3.5rem] sm:min-h-[4rem]"
							>
								{inst.nombre}
							</h3>

							<p class="text-xs font-medium text-purple-900/70 uppercase tracking-wide text-center mb-1">
								Título obtenido
							</p>
							<p class="text-center text-sm sm:text-[0.9375rem] text-purple-900 font-semibold leading-snug mb-4 flex-1">
								{inst.titulo}
							</p>

							<div
								class="flex items-center justify-center gap-2 rounded-xl bg-gray-50/90 py-2.5 px-3 text-xs text-gray-600 border border-gray-100 mb-4"
							>
								<svg
									class="w-4 h-4 shrink-0 text-purple-700"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									aria-hidden="true"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
									/>
								</svg>
								<span><span class="font-semibold text-gray-700">Finalización</span> · {inst.finalizacion}</span>
							</div>

							<button
								type="button"
								on:click={() => abrirInstituto(inst.url)}
								class="mt-auto w-full flex items-center justify-center gap-2 rounded-xl bg-purple-900 text-white text-sm font-semibold py-3 px-4 hover:bg-purple-800 active:bg-purple-950 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2"
							>
								<svg
									class="w-5 h-5 text-white shrink-0"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									aria-hidden="true"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
									/>
								</svg>
								Visitar institución
							</button>
						</div>
					</article>
				{/each}
			</div>
		</div>
	</section>

	<!-- Sección de Logros Académicos -->
	<section
		class="relative mx-4 sm:mx-6 rounded-2xl overflow-hidden px-4 sm:px-6 py-10 sm:py-12 md:py-14 border border-purple-900/10 shadow-xl shadow-purple-900/5"
		aria-labelledby="logros-heading"
	>
		<div
			class="absolute inset-0 bg-gradient-to-br from-white via-purple-50/40 to-indigo-50/60 pointer-events-none"
		></div>
		<div
			class="absolute top-0 left-1/2 -translate-x-1/2 w-[min(100%,42rem)] h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent"
		></div>

		<div class="relative z-10 max-w-5xl mx-auto">
			<div class="text-center mb-8 sm:mb-10">
				<p class="text-sm font-semibold uppercase tracking-wider text-purple-800/80 mb-2">
					En números
				</p>
				<h2 id="logros-heading" class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
					Logros alcanzados
				</h2>
				<p class="text-gray-600 text-sm sm:text-base max-w-xl mx-auto">
					Resumen de mi trayectoria formativa: tiempo invertido, instituciones y credenciales.
				</p>
			</div>

			<div class="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
				<div
					class="group relative rounded-2xl bg-white/85 backdrop-blur-sm p-6 sm:p-7 text-center border border-purple-900/10 shadow-md hover:shadow-lg hover:border-purple-900/20 transition-all duration-300 hover:-translate-y-0.5"
				>
					<div
						class="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-700 to-indigo-700 text-white shadow-lg shadow-purple-900/25 group-hover:scale-105 transition-transform duration-300"
					>
						<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
					</div>
					<p
						class="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-900 to-indigo-800 bg-clip-text text-transparent tabular-nums mb-1"
					>
						{totalHorasEsfuerzo.toLocaleString('es-AR')}
					</p>
					<p class="font-semibold text-gray-900 text-sm sm:text-base mb-1">Horas de esfuerzo</p>
					<p class="text-xs text-gray-500 leading-relaxed">Estimación según duración de certificaciones</p>
				</div>

				<div
					class="group relative rounded-2xl bg-white/85 backdrop-blur-sm p-6 sm:p-7 text-center border border-emerald-900/10 shadow-md hover:shadow-lg hover:border-emerald-700/25 transition-all duration-300 hover:-translate-y-0.5"
				>
					<div
						class="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-900/20 group-hover:scale-105 transition-transform duration-300"
					>
						<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
							/>
						</svg>
					</div>
					<p class="text-3xl sm:text-4xl font-bold text-emerald-700 tabular-nums mb-1">
						{institutos.length}
					</p>
					<p class="font-semibold text-gray-900 text-sm sm:text-base mb-1">Instituciones</p>
					<p class="text-xs text-gray-500 leading-relaxed">Centros donde cursé títulos y programas</p>
				</div>

				<div
					class="group relative rounded-2xl bg-white/85 backdrop-blur-sm p-6 sm:p-7 text-center border border-violet-900/10 shadow-md hover:shadow-lg hover:border-violet-600/25 transition-all duration-300 hover:-translate-y-0.5"
				>
					<div
						class="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-purple-600 text-white shadow-lg shadow-violet-900/20 group-hover:scale-105 transition-transform duration-300"
					>
						<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
							/>
						</svg>
					</div>
					<p class="text-3xl sm:text-4xl font-bold text-violet-700 tabular-nums mb-1">
						{certificados.length}
					</p>
					<p class="font-semibold text-gray-900 text-sm sm:text-base mb-1">Certificaciones</p>
					<p class="text-xs text-gray-500 leading-relaxed">Credenciales y cursos con certificado</p>
				</div>
			</div>
		</div>
	</section>
</div> 