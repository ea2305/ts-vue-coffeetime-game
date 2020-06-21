export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'spa',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Names Roulette, Pickupt a random name from a list',
      },
    ],
    link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/google-analytics'],
  googleAnalytics: {
    dev: false,
    id: process.env.GOOGLE_ANALYTICS_ID,
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma',
    '@nuxtjs/pwa',
  ],
  pwa: {
    icon: {
      iconSrc: './static/icons/icon.png',
    },
    workbox: {
      dev: process.env.NODE_ENV === 'development',
      config: {
        debug: process.env.NODE_ENV === 'development',
      },
      cacheAssets: true,
      offlineAnalytics: true,
      cleanupOutdatedCaches: true,
    },
    manifest: {
      start_url: '/',
      name: 'Coffee Time ☕️',
      description: 'Roulette game with names',
      short_name: 'Coffee Time ☕️',
      lang: 'en',
      display: 'standalone',
      orientation: 'portrait',
    },
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false,
        },
      },
    },
  },
}
