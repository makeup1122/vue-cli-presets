import axios from 'axios'
// import store from '@/store/store.js'
// import router from '@/routers/router.js'
const server = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
  timeout: 5000,
  headers: {}
})
// request 拦截器
server.interceptors.request.use(function(config) {
  // if (store.getters.token) {
  //   config.headers['Authorization'] = 'Bearer ' + store.getters.token // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
  // }
  return config
}, function(error) {
  return Promise.reject(error)
})
// response 拦截器
server.interceptors.response.use(function(response) {
  return response
}, function(error) {
  // const httpCode = [401, 403]
  // if (httpCode.indexOf(error.response.status) !== -1) {
  //   store.commit('SET_ERROR_MSG', error.response.data)
  //   router.replace({ name: 'Login' })
  // }
  return Promise.reject(error)
})

export default server
