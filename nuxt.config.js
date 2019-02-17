const pkg = require('./package')

module.exports = {
  mode: 'universal',
  
  head: {
    title: pkg.name,
    meta: [
      {
        charset: 'utf-8',
        title: 'Tinashe Zvihwati\'s Website',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Welcome to Tinashe Zvihwati\'s website. All about sharing experiences, opinions and ideas'
      },
      {
        hid: 'author',
        name: 'author',
        content: 'Tinashe Zvihwati'
      },
      {
        hid: 'theme-color',
        name: 'theme-color',
        content: '#317EFB'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'Tinashe Zvihwati, Web Development, Nodejs, Vuejs, Mongodb, NGINX, Travel, Zimbabwe, Blogger, Writer, Photography, Tinashe, Zvihwati, Developer, Travel Blogger, Blogger'
      },
      {
        hid: 'google-site-verification',
        name: 'google-site-verification',
        content: 'Nvtxn485Uph-S7HHc_RiwvMb6lUkM-43KLCV05xUNZo'
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'Tinashe Zvihwati Website'
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Tinashe\'s Website'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Welcome to Tinashe Zvihwati\'s website. All about sharing experiences, opinions and ideas'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://www.iamtinashe.io'
      },
      {
        hid: 'og:locale',
        property: 'og:locale',
        content: 'en_GB'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '/iamtinashe.png'
      },
      {
        hid: 'twitter:card',
        property: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        hid: 'name',
        itemprop: 'name',
        content: 'Tinashe Zvihwati\'s Website'
      },
      {
        hid: 'description',
        itemprop: 'description',
        content: 'Welcome to Tinashe Zvihwati\'s website. All about sharing experiences, opinions and ideas'
      },
      {
        hid: 'image',
        itemprop: 'image',
        content: '/iamtinashe.png'
      },
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        hid: 'canonical',
        rel: 'canonical',
        href: 'https://www.iamtinashe.io'
      },
      {
        hid: 'author',
        rel: 'author',
        href: 'https://plus.google.com/u/0/104854325985685691264'
      },
      {
        hid: 'publisher',
        rel: 'publisher',
        href: 'https://plus.google.com/u/0/104854325985685691264'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Montserrat:200,400,700'
      },
      {
        rel: 'stylesheet',
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      },
      {
        rel: 'stylesheet',
        href: "https://cdnjs.cloudflare.com/ajax/libs/octicons/3.5.0/octicons.min.css"
      },
      {
        rel: 'stylesheet',
        href: "//cdn-images.mailchimp.com/embedcode/classic-10_7.css"
      }
    ],
    script: [
      {
        src: "https://platform.twitter.com/widgets.js",
        type: "text/javascript"
      },
      {
        src: "https://cdn.jsdelivr.net/npm/vue-disqus@3/dist/vue-disqus.js",
        type: "text/javascript"
      },
      { 
        src: "https://downloads.mailchimp.com/js/signup-forms/popup/embed.js",
        type: "text/javascript"
      },
      {
        src: "https://s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js",
        type: "text/javascript"
      }
    ],
  },
  loading: {
    color: '#fff'
  },
  css: [
    "@/assets/style.scss"
  ],
  plugins: [
    {src: "~/plugins/github-activity", ssr: false},
    {src: "~/plugins/vue-google-maps.js", ssr: false},
    { src: '~/plugins/vue-gallery.js', ssr: false },
    { src: '~plugins/ga.js', ssr: false },
    { src: '~/plugins/vue-google-adsense', ssr: false },
    { src: '~/plugins/vue-filter-date-format.js', ssr: false},
    { src: '~/plugins/vuedisqus.js', ssr: false}
  ],
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    // https://www.npmjs.com/package/@nuxtjs/sitemap
    '@nuxtjs/sitemap'
  ],
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
  build: {
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
