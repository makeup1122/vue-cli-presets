import Vue from 'vue'
import VeeValidate, { Validator } from 'vee-validate' // Form表单验证插件
import zhcn from 'vee-validate/dist/locale/zh_CN' // Form表单验证插件的语言包
Validator.localize('zh_CN', zhcn)
Vue.use(VeeValidate, {
  locale: 'zh_CN'
})
