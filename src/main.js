import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'
import Vuelidate from 'vuelidate'
import VueTheMask from 'vue-the-mask'
import i18n from './plugin/i18n'
// filters
import filters from './filters/filters'
import { utils } from './mixins/utils.js'
import '@/assets/style/global.scss';

import defaultLayout from '@/layouts/default-layout.vue'
import errorLayout from '@/layouts/error-layout.vue'
import sidebarLayout from '@/layouts/sidebar-layout.vue'

Vue.component('default-layout', defaultLayout)
Vue.component('error-layout', errorLayout)
Vue.component('sidebar-layout', sidebarLayout)

Vue.mixin(utils)
Vue.use(VueAxios, axios)
Vue.use(Vuelidate)
Vue.use(VueTheMask)
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  // console.log(to)
  // console.log(from)
  // console.log(next)
  i18n.locale = to.params.locale || 'ru';
  next();
});

new Vue({
  router,
  store,
  filters,
  i18n,
  render: h => h(App),
}).$mount('#app')
