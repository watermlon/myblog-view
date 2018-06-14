import mavonEditor from 'mavon-editor'
import Vue from 'vue'
Vue.use(mavonEditor)
if (process.browser) {
    const mavonEditor = require('mavon-editor')
    Vue.use(mavonEditor)
  }