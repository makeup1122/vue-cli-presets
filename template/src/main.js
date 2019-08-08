import Vue from 'vue'
import App from './App.vue'
// 加载路由守卫
import './routers/navigation.js'
// 加载插件
import './plugins'
// 加载全局组件
Vue.config.productionTip = false
new Vue({
  render: h => h(App)
}).$mount('#app')
