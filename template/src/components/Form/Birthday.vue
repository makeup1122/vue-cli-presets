<!-- Birthday Component -->
<template>
  <v-menu
    ref="menu"
    v-model="model"
    :close-on-content-click="false"
    :nudge-right="40"
    lazy
    transition="scale-transition"
    offset-y
    full-width
    min-width="290px">
    <template v-slot:activator="{ on }">
        <v-text-field
          v-model="birthday"
          :label="label"
          readonly
          v-on="on"
        ></v-text-field>
      </template>
      <v-date-picker
        ref="picker"
        locale="zh-cn"
        v-model="birthday"
        :max="new Date().toISOString().substr(0, 10)"
        min="1940-01-01"
        @change="saveBirthday">
      </v-date-picker>
  </v-menu>
</template>

<script>
export default {
  name: 'FormBirthday',
  props: {
    label: {
      type: String,
      default: '出生年月日'
    },
    value: {
      type: String,
      default: null
    }
  },
  components: {},
  data: function () {
    return {
      birthday: this.value || null,
      model: false
    }
  },
  watch: {
    model (val) {
      val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
    }
  },
  methods: {
    saveBirthday (date) {
      this.$refs.menu.save(date)
      this.$emit('input', this.birthday)
    }
  }
}
</script>
<style scoped>
</style>
