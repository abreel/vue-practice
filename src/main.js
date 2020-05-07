import Vue from 'vue'
// import Loader from 'sass-loader'
// import Router from 'vue-router'

import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
