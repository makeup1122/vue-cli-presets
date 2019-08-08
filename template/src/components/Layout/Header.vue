<template>
  <v-toolbar app prominent fixed  dense color="primary">
    <v-toolbar-side-icon @click.stop="updateDrawer"  class="white--text"></v-toolbar-side-icon>
    <v-toolbar-title class="white--text">
      {{title}}
    </v-toolbar-title>
    <!-- <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-menu>
        <v-tooltip slot="activator" bottom>
          <template #activator="data">
            <v-btn v-on="data.on" class="white--text subheading" flat href="http://www.xsysq.cn" target="_blank"><v-icon>home</v-icon>首页</v-btn>
          </template>
          <span>回到主页</span>
        </v-tooltip>
      </v-menu>
      <v-menu offset-y open-on-hover>
        <v-btn slot="activator" icon  class="white--text">
          <v-icon>person</v-icon>
        </v-btn>
        <v-list>
          <v-list-tile to="/profile">
            <v-list-tile-action>
              <v-icon>person</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>个人信息</v-list-tile-content>
          </v-list-tile>
          <v-divider></v-divider>
          <v-list-tile @click="handleLogout">
            <v-list-tile-action>
              <v-icon>subdirectory_arrow_right</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>退出</v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar-items> -->
  </v-toolbar>
</template>
<script>
export default {
  name: 'WebHeader',
  computed: {
    title: function() {
      return process.env.VUE_APP_TITLE
    }
  }
}
</script>
<style>
</style>
