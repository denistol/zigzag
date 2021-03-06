import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './sass/styles.sass'

Vue.config.productionTip = false
Vue.prototype.$getAsset = (fname => require(`@/assets/${fname}`))
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')