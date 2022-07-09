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
        {
          property: 'og:image',
          content: 'https://cms.cgvweb.com/assets/47167d31-18c2-4826-a0e0-a48bac56a4a8',
        },
      ],
    },
  },

  autoImports: {
    dirs: ['composables', 'stores', 'components'],
    imports: [],
  },
});
