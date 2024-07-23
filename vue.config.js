const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    //配置跨域代理http,https
    proxy: {
      "/dev-api": {
        target: process.env.VUE_APP_BASE_URL,
        changeOrigin: true,
        pathRewrite: {
          '^/dev-api': ""
        }
      }
    }
  },
})
