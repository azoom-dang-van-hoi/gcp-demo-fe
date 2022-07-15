export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  ssr: false,
  head: {
    title: 'gcp-demo-fe',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/scss/app.scss'],
  styleResources: {
    scss: [
      '~/assets/scss/utils/*.scss',
    ],
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/apis.js', '~/plugins/permission-component.js'],
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
    NODE_ENV: process.env.NODE_ENV,
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  router: {
    middleware: ['auth', 'permissions'],
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources',
    // https://go.nuxtjs.dev/tailwindcss
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
