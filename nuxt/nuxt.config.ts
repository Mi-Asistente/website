import { defineNuxtConfig } from 'nuxt';

export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@vueuse/nuxt'],

  app: {
    head: {
      titleTemplate: '%s - Mi Asistente',
      link: [
        { rel: 'preconnect', href: 'https://rsms.me' },
        { rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      ],
      meta: [
        { property: 'og:type', content: 'Website' },
        { property: 'og:image', content: '/og-miasistente-banner.jpg' },
      ],
    },
  },

  autoImports: {
    dirs: ['composables', 'stores', 'components'],
    imports: [],
  },
});
