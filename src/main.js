// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Scroll from 'vue-scroll'
import App from './App'
import router from './router'

Vue.use(Scroll)

/* eslint-disable no-new */
new Vue({
  'eslint-disable': false,
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
