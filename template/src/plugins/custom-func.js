// github https://github.com/shakee93/vue-toasted
import Vue from 'vue'
Vue.mixin({
  methods: {
    // 自定义格式化标时间界戳
    localDateString: function(timestamp, millisecond = false) {
      const time = Number(timestamp)
      const timestampOfMillSecond = millisecond ? time : time * 1000
      const date = new Date(timestampOfMillSecond)
      return date.toLocaleDateString('zh', { hour12: false, year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' })
    },
    // 数组存储值换算
    calcSize: function(byte = 0) {
      const size = Number(byte)
      if (size < 1024) {
        return size + 'B'
      } else if (size < 1024 * 1024) {
        return (size / 1024).toFixed(2) + 'KB'
      } else if (size < 1024 * 1024 * 1024) {
        return (size / (1024 * 1024)).toFixed(2) + 'MB'
      } else if (size < 1024 * 1024 * 1024 * 1024) {
        return (size / (1024 * 1024 * 1024)).toFixed(2) + 'GB'
      }
    },
    // 对象数组深拷贝
    deepCopy: function(source) {
      let sourceCopy = source instanceof Array ? [] : {}
      for (let item in source) {
        sourceCopy[item] = typeof source[item] === 'object' ? this.deepCopy(source[item]) : source[item]
      }
      return sourceCopy
    }
  }
})
