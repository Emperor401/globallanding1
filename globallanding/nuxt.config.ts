export default defineNuxtConfig({
  devtools: { enabled: false },

  modules: [
    '@nuxtjs/tailwindcss',
  ],

  css: [
    '~/assets/css/main.css',
  ],

  app: {
    head: {
      title: 'GlobalGle',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Trade Bitcoin, Ethereum and top cryptocurrencies with confidence on GlobalGle.',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/logo.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Excon:wght@700;900&family=DM+Serif+Display:ital@0;1&display=swap' },
      ],
    },
  },

  compatibilityDate: '2024-09-20',
})
