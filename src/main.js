import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'
// filters
import filters from './filters/filters'
import { utils } from './mixins/utils.js'

import '@/assets/style/global.scss';

Vue.mixin(utils)
Vue.use(VueAxios, axios)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  filters,
  render: h => h(App),
}).$mount('#app')
