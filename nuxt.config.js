const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description
      }
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      },
      {
        rel: 'stylesheet',
        href: "https://cdnjs.cloudflare.com/ajax/libs/octicons/3.5.0/octicons.min.css"
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },

  /*
   ** Global CSS
   */
  css: [
    "@/assets/style.scss"
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/github-activity',
     {src: "~/plugins/vue-google-maps.js"},
     { src: '~/plugins/vue-gallery.js', ssr: false },
     { src: '~plugins/ga.js', ssr: false },
     { src: '~/plugins/vue-google-adsense', ssr: false }
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    // https://www.npmjs.com/package/@nuxtjs/sitemap
    '@nuxtjs/sitemap'
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    transpile: [/^vue2-google-maps($|\/)/],
    vendor:["vue2-google-maps"]
  },

  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://www.iamtinashe.io',
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    generate: false, // Enable me when using nuxt generate
    exclude: [
      '/admin/**'
    ],
    routes: [
      {
        url: '/',
        changefreq: 'daily',
        priority: 1,
        lastmodISO: '2019-02-09T13:30:00.000Z'
      },
      {
        url: '/profile',
        changefreq: 'daily',
        priority: 0.9,
        lastmodISO: '2019-01-29T13:30:00.000Z'
      },
      {
        url: '/blog',
        changefreq: 'daily',
        priority: 0.8,
        lastmodISO: '2019-02-09T13:30:00.000Z'
      },
      {
        url: '/photography',
        changefreq: 'daily',
        priority: 0.6,
        lastmodISO: '2019-02-09T13:30:00.000Z'
      },
      {
        url: '/videos',
        changefreq: 'daily',
        priority: 0.5,
        lastmodISO: '2019-02-09T13:30:00.000Z'
      },
      {
        url: '/social',
        changefreq: 'daily',
        priority: 0.6,
        lastmodISO: '2019-02-09T13:30:00.000Z'
      },
      {
        url: '/connect',
        changefreq: 'daily',
        priority: 0.7,
        lastmodISO: '2019-02-09T13:30:00.000Z'
      }
    ]
  }
}
