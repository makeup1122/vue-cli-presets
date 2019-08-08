const path = require('path')
module.exports = {
  devServer: {
    disableHostCheck: true,
    port: 8081
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, './src')
      }
    }
  }
}
