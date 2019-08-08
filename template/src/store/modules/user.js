import * as UserAPI from '@/api/user'
import * as Cookie from '@/utils/cookie'
const User = {
  state: {
    openid: null,
    token: Cookie.getToken() || null,
    userid: null,
    nickname: null,
    avatar: null,
    userinfo: null,
    identity: 'normal'
  },
  getters: {
    isLogin: state => {
      return state.openid !== null
    },
    hasToken: state => {
      return state.token !== null
    },
    noUserinfo: state => {
      return state.token !== null && state.openid === null
    },
    identityStatusText: state => {
      switch (state.identity) {
        case 'verified': return '已认证'
        case 'apply': return '申请'
        case 'nopass': return '不通过'
        case 'normal':
        default: return '一般'
      }
    }
  },
  mutations: {
    logout (state) {
      state.openid = null
      state.token = null
      state.userid = null
      state.nickname = null
      state.avatar = null
      state.userinf = null
    },
    SET_OPENID (state, openid) {
      state.openid = openid
    },
    SET_TOKEN (state, token) {
      Cookie.setToken(token)
      state.token = token
    },
    SET_NICKNAME (state, nickname) {
      state.nickname = nickname
    },
    SET_AVATAR (state, avatar) {
      state.avatar = avatar
    },
    SET_USERID(state, userid) {
      state.userid = userid
    },
    SET_USERINFO(state, userinfo) {
      state.userinfo = userinfo
    },
    SET_IDENTITY(state, identity) {
      state.identity = identity
    }
  },
  actions: {
    doRedirectHandle({ commit }, routeName) {
      // 缓存页面
      sessionStorage.setItem('beforeRouterName', routeName)
      // 跳转授权页面
      window.location.href = UserAPI.getRedirectUrl()
    },
    // 微信登陆操作
    doLoginHandle({ commit }, code, state) {
      return new Promise((resolve, reject) => {
        UserAPI.login(code, state).then(res => {
          // console.log(res.data)
          commit('SET_OPENID', res.data.openid)
          commit('SET_AVATAR', res.data.avatar)
          commit('SET_NICKNAME', res.data.nickname)
          commit('SET_TOKEN', res.data.token)
          commit('SET_USERID', res.data.userid)
          commit('SET_USERINFO', res.data)
          commit('SET_IDENTITY', res.data.identity_status)
          resolve()
        }).catch(err => {
          window.location.href = 'https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=Mzg4MDEyOTkzNQ==&scene=110#wechat_redirect'
          reject(err)
        })
      })
    },
    getUserinfo({ commit }) {
      return new Promise((resolve, reject) => {
        UserAPI.info().then(res => {
          // console.log(res.data)
          commit('SET_OPENID', res.data.openid)
          commit('SET_AVATAR', res.data.avatar)
          commit('SET_NICKNAME', res.data.nickname)
          commit('SET_USERID', res.data.userid)
          commit('SET_USERINFO', res.data)
          commit('SET_IDENTITY', res.data.identity_status)
          resolve()
        }).catch(err => {
          reject(err)
        })
      })
    }
  }
}
export default User
