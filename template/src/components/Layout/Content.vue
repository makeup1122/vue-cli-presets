<!-- WebContent -->
<template>
  <v-content fluid>
    <v-layout class="pa-3" wrap>
      <v-flex xs12>
        <web-breadcrumbs></web-breadcrumbs>
      </v-flex>
      <v-flex>
        <transition mode="out-in" name="slide-fade">
          <keep-alive :max="10">
            <router-view></router-view>
          </keep-alive>
        </transition>
      </v-flex>
    </v-layout>
  </v-content>
</template>

<script>
import WebBreadcrumbs from '@/components/Layout/_Breadcrumbs.vue'
export default {
  name: 'WebContent',
  components: { WebBreadcrumbs }
}
</script>

<style>
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all .2s ease;
}
.slide-fade-leave-active {
  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
