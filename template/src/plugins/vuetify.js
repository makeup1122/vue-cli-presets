import Vue from 'vue'
import Vuetify from 'vuetify'
import zhHans from 'vuetify/es5/locale/zh-Hans' // 加载Vuetify中文包
// import 'material-design-icons-iconfont/dist/material-design-icons.css'
// import 'vuetify/src/stylus/app.styl'
import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify, {
  iconfont: 'md',
  lang: {
    locales: { zhHans },
    current: 'zhHans'
  },
  theme: {
    primary: '#e5142d',
    secondary: '#07C8FE',
    tertiary: '#00bcd4',
    accent: '#1767C0',
    error: '#f55a4e',
    info: '#00d3ee',
    success: '#5cb860',
    warning: '#ffa21a'
  }
})
