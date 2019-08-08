<!-- 颜色选择 -->
<template>
  <v-combobox
    v-model="color"
    :items="items"
    :label="label"
    @change="updateColor">
    <template v-slot:selection="{ item, parent, selected }">
      <v-chip :color="item" small dark>{{item}}</v-chip>
    </template>
    <template v-slot:item="{ index, item }">
      <v-chip :color="item" small dark>{{item}}</v-chip>
    </template>
  </v-combobox>
</template>

<script>
export default {
  name: 'FormColorPicker',
  props: {
    label: {
      type: String,
      default: '选择颜色'
    },
    value: {
      type: String,
      default: null
    }
  },
  components: {},
  data: function () {
    return {
      color: this.value || '',
      items: [
        '#2196F3',
        '#F44336',
        '#E91E63',
        '#9C27B0',
        '#673AB7',
        '#009688',
        '#00BCD4',
        '#4CAF50',
        '#FF9800',
        '#000000'
      ]
    }
  },
  created: function () {

  },
  computed: {},
  methods: {
    updateColor: function () {
      this.$emit('input', this.color)
    }
  }
}
</script>
<style scoped>
</style>
