import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout/Layout.vue'
Vue.use(Router)
var routerInstance = new Router({
    // 默认加载系统设置路由
    routes: [
      {
        path: '/',
        meta: {
          icon: 'home',
          title: '首页'
        },
        component: Layout,
        children: [
          {
            path: '',
            name: 'Home',
            component: () => import('@/views/Home.vue')
          }
        ]
      },
      {
        path: '/about',
        meta: {
          title: '关于'
        },
        component: Layout,
        children: [
          {
            path: '',
            name: 'About',
            component: () => import('@/views/About.vue')
          }
        ]
      },
      { path: '*', redirect: '/' },
      { path: '/404', name: 'NotFound', component: () => import('@/views/error/404.vue') }
    ],
    scrollBehavior (to, from, savedPosition) {
      // return 期望滚动到哪个的位置
      return { x: 0, y: 0 }
    }
})
// routerInstance.addRoutes(OthersRoute)
export default routerInstance
