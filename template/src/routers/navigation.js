import routerInstance from '../router.js'
// import store from '@/store/store.js'
import NProgress from 'nprogress' // progress bar
import '@/style/nprogress.css' // progress bar style
NProgress.configure({
  showSpinner: true,
  minimum: 0.3
}) // NProgress Configuration
// 免token白名单
// const whiteList = ['/login', '/authredirect', '/registry', '/forget-pwd', '/new-pwd', '/maintenance'] // no redirect whitelist

routerInstance.beforeEach((to, from, next) => {
  NProgress.start() // start progress bar
  next()
  // if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
  //   next()
  // } else {
  //   if (store.getters.token) {
  //     if (!store.state.user.username) {
  //       store.dispatch('getUserinfoByToken').then(() => {
  //         next()
  //       }).catch(() => {
  //         next({ name: 'Login' })
  //         NProgress.done() // if current page is login will not trigger afterEach hook, so manually handle it
  //       })
  //     } else {
  //       next()
  //     }
  //   } else {
  //     store.commit('SET_ERROR_MSG', '未登录')
  //     next({ name: 'Login' })
  //     NProgress.done() // if current page is login will not trigger afterEach hook, so manually handle it
  //   }
  // }
})
routerInstance.afterEach((to, from) => {
  NProgress.done() // finish progress bar
})
