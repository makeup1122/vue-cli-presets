// github https://github.com/shakee93/vue-toasted
import Vue from 'vue'
import Toasted from 'vue-toasted'
Vue.use(Toasted, {
  duration: 2500,
  position: 'top-center',
  className: 'white--text title',
  // icon: 'check',
  fullWidth: true,
  fitToScreen: true,
  theme: 'toasted-primary'
})
