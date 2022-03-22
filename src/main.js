import Vue from 'vue'
import App from './App'
import router from './router'


Vue.config.productionTip = false

// 事件总线 
Vue.prototype.$bus = new Vue()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

