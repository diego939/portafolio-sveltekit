# Portafolio Personal - Diego David Almirón

Portafolio web desarrollado con SvelteKit y Tailwind CSS.

## 🚀 Tecnologías

- **SvelteKit** - Framework web
- **Tailwind CSS** - Framework CSS
- **TypeScript** - Tipado estático
- **Flowbite Svelte** - Componentes UI
- **Vercel** - Deployment

## 📦 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/diego939/portafolio-sveltekit.git
cd portafolio-sveltekit

# Instalar dependencias
npm install --legacy-peer-deps

# Ejecutar en desarrollo
npm run dev

# Build para producción
npm run build
```

## 🌐 Deployment en Vercel

### Configuración Automática

El proyecto está configurado para deployment automático en Vercel con:

- **Framework**: SvelteKit
- **Build Command**: `npm run build`
- **Install Command**: `npm install --legacy-peer-deps`
- **Output Directory**: `.svelte-kit/output/client`

### Archivos de Configuración

- `vercel.json` - Configuración específica para Vercel
- `.npmrc` - Configuración de npm con legacy peer deps
- `tailwind.config.js` - Configuración de Tailwind CSS

### Solución de Problemas

Si encuentras errores de dependencias:

1. **Error de Tailwind CSS v4**: El proyecto usa Tailwind CSS v3 con flowbite-svelte v1.8.0
2. **Peer Dependencies**: Usa `--legacy-peer-deps` para evitar conflictos
3. **Build Errors**: Verifica que todas las dependencias estén instaladas correctamente

## 📁 Estructura del Proyecto

```
src/
├── lib/
│   ├── ContactModal.svelte
│   ├── ImageModal.svelte
│   └── stores/
│       └── contactModal.ts
├── routes/
│   ├── +layout.svelte
│   ├── +page.svelte
│   ├── educacion/
│   ├── experiencia/
│   ├── habilidades/
│   └── proyectos/
└── app.css
```

## 🎨 Características

- **Responsive Design** - Adaptable a todos los dispositivos
- **SEO Optimizado** - Meta tags y títulos dinámicos
- **Accesibilidad** - Cumple estándares WCAG
- **Performance** - Optimizado para velocidad
- **Modal de Imagen** - Vista ampliada de fotos
- **Formulario de Contacto** - Integrado con SweetAlert2

## 📞 Contacto

- **LinkedIn**: [Diego David Almirón](https://www.linkedin.com/in/diegodavidalmiron)
- **Email**: diegodavidalmiron17@gmail.com
- **WhatsApp**: +54 379 531-5483

## 📄 Licencia

Este proyecto es de uso personal y educativo.
