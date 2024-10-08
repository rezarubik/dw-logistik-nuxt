export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'dw-logistik-nuxt',
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
    script: [
      { src: 'vendor/jquery/jquery.min.js' },
      { src: '/vendor/bootstrap/js/bootstrap.bundle.min.js' },
      { src: '/vendor/jquery-easing/jquery.easing.min.js' },
      { src: '/js/sb-admin-2.min.js' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/vendor/fontawesome-free/css/all.min.css',
    '@/assets/css/sb-admin-2.min.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/axios.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    // https://bootstrap-vue.org/docs
    'bootstrap-vue/nuxt',
  ],
  auth: {
    // Options
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/login',
            method: 'post',
            propertyName: 'data',
          },
          logout: { url: '/logout', method: 'post' },
          user: { url: '/users/login', method: 'get', propertyName: 'data' },
        },
        tokenRequired: true,
        tokenType: 'Bearer',
      },
    },
  },
  router: {
    // todo: Cek apakah user sudah login atau belum
    middleware: ['auth'],
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'http://localhost:8000/',
    // baseURL: 'http://dw-logistik-api.test/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
