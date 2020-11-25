import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
//@ 表示根目录
import '@/components/index'
new Vue({
  render: h => h(App),
}).$mount('#app')
