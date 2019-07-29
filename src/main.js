// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.config.errorHandler = function(err, vm, info) {
  console.log(`Error: ${err.toString()}\nInfo: ${info}`);
}

import 'vue2-toast/lib/toast.css';
import Toast from 'vue2-toast';
Vue.use(Toast, {
  type: 'top',
  duration: 4000,
  wordWrap: true,
});

import VeeValidate from 'vee-validate';
Vue.use(VeeValidate);


import moment from 'moment'
Vue.filter('formatDate', (value) => {
  if (value) {
    return moment(String(value)).format('ll')
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
