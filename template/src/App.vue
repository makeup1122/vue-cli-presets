<template>
  <v-app :dark="false">
    <router-view></router-view>
  </v-app>
</template>
<script>
export default {
  name: 'App',
  mounted: function() {
    var lsd = document.getElementsByClassName('lds-default')
    lsd[0].parentNode.removeChild(lsd[0])
  }
}
</script>
