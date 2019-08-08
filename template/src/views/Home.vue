<!-- Home -->
<template>
  <div>
    Home
    <router-link :to="{name: 'About'}">About</router-link>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  data: function () {
    return {
    }
  },
  created: function () {

  },
  computed: {},
  methods: {}
}
</script>
<style scoped>
</style>
