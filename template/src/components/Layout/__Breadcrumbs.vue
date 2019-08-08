<template>
   <v-breadcrumbs :items="breadcrumbsArray">
     <template v-slot:divider>
        <v-icon>chevron_right</v-icon>
      </template>
      <template slot="item" slot-scope="props">
        <v-breadcrumbs-item :href="props.item.href">
          <v-icon v-if="props.item.icon">{{props.item.icon}}</v-icon>
          <span>
          {{ props.item.name.toUpperCase() }}</span>
        </v-breadcrumbs-item>
      </template>
    </v-breadcrumbs>
</template>

<script>
export default {
  name: 'BreadCrumbs',
  data: function () {
    return {
    }
  },
  created: function () {

  },
  components: {},
  computed: {
    breadcrumbsArray: function () {
      let homeHref = this.$router.resolve('/')
      let arr = [{ name: '', href: homeHref.href, icon: 'home' }]
      this.$route.matched.forEach(e => {
        if (e.path && e.meta && e.meta.title) {
          homeHref = this.$router.resolve(e.path)
          let item = { name: e.meta.title, href: homeHref.href }
          // if (!arr.includes(item)) {
          arr.push(item)
          // }
        }
      })
      return arr
    }
  },
  methods: {}
}
</script>
<style>
a.v-breadcrumbs__item{
  color: '#ffffff' !important;
}
</style>
