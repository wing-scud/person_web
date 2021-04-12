import Vue from 'vue'
import App from './App.vue'
import ElementUi from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
Vue.config.productionTip = false;
Vue.use(ElementUi)
//自动注册组件
import '@/components/index'
new Vue({
  render: h => h(App),
}).$mount('#app')
