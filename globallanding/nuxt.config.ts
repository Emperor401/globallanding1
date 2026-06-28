export default defineNuxtConfig({
  devtools: { enabled: false },

  nitro: {
    preset: 'vercel',
  },

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
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },

  compatibilityDate: '2024-09-20',
})
