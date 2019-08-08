<!-- 搜索服务 -->
<template>
  <v-container class="ma-0 pa-2" grid-list-lg>
    <v-form ref="searchForm">
    <v-layout>
      <v-flex>
        <v-text-field  label="标题" placeholder="输入搜索标题内容" hide-details  v-model="search.title"></v-text-field>
      </v-flex>
      <v-flex>
        <v-select
          hide-details
            v-if="category.length > 0"
            v-model="search.category"
            :items="category"
            label="模块"
            placeholder="从选项中选择模块！"
            :menu-props="{'closeOnClick':false, 'closeOnContentClick':false, 'openOnClick':false, 'maxHeight':900}"
          ></v-select>
      </v-flex>
      <v-flex>
        <v-btn flat class="primary--text" @click="onBtnSearchClick"><v-icon>search</v-icon>搜索</v-btn>
        <v-btn flat @click="onBtnResetClick"><v-icon>refresh</v-icon>重置</v-btn>
      </v-flex>
    </v-layout>
    </v-form>
  </v-container>
</template>
<script>
export default {
  name: 'SearchBar',
  components: {},
  props: {
    search: {
      type: Object,
      default: () => { return {} }
    },
    category: {
      type: Array,
      default: () => { return [] }
    }
  },
  data: function () {
    return {
    }
  },
  created: function () {
  },
  computed: {},
  methods: {
    onBtnSearchClick: function() {
      this.$emit('searchclick')
    },
    onBtnResetClick: function() {
      this.$refs.searchForm.reset()
      this.$emit('searchclick')
    }
  }
}
</script>
<style scoped>
</style>
