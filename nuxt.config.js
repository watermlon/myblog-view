const webpack = require('webpack')
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'myblog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/normalize.css' }
    ]
  },
  css: [
    { src: 'iview/dist/styles/iview.css' },
    { src: 'mavon-editor/dist/css/index.css' },
    { src: 'mavon-editor/dist/markdown/github-markdown.min.css' }
  ],
  // "scripts": {
  //   "dev": "HOST=127.0.0.1 PORT=3333 nuxt"
  // },
  plugins: [
    { src: '~/plugins/iview.js' },
    { src: '~/plugins/axios.js' },
    { src: '~/plugins/markEdit.js', ssr: false },
    { src: '~/plugins/highlight.js', ssr: false }
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    vendor: ['~/plugins/iview.js', '~/plugins/axios.js', '~/plugins/markEdit.js'],
    /*
    ** Run ESLint on save
    */
    // extend (config, { isDev, isClient }) {
    //   const vueLoader = webpackConfig.module.rules.find((rule) => rule.loader === 'vue-loader') 
    //   vueLoader.options.loaders.less = 'vue-style-loader!css-loader!less-loader'
    //   // if (isDev && isClient) {
    //   //   config.module.rules.push({
    //   //     enforce: 'pre',
    //   //     test: /\.(js|vue)$/,
    //   //     loader: 'eslint-loader',
    //   //     exclude: /(node_modules)/
    //   //   })
    //   // }
    // }
  }
}
