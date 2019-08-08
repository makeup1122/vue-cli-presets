<!-- Layout -->
<template>
  <v-container>
    <web-header></web-header>
    <web-content></web-content>
    <web-footer></web-footer>
  </v-container>
</template>
<script>
import WebContent from '@/components/Layout/Content.vue'
import WebHeader from '@/components/Layout/Header.vue'
import WebFooter from '@/components/Layout/Footer.vue'
export default {
  name: 'Layout',
  components: { WebContent, WebHeader, WebFooter }
}
</script>
