// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './vuex/store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import VueLazyload from './vue-lazyload' 
Vue.config.productionTip = false

// 将axios配置给原型的$http
Vue.prototype.$http = axios;
/* eslint-disable no-new */
// Vue.use(VueLazyload);
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
