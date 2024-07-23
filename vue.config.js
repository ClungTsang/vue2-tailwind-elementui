const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    //配置跨域代理http,https
    proxy: {
      "/dev-api": {
        target: "http://vueshop.glbuys.com/dev-api",
        changeOrigin: true,
        pathRewrite: {
          '^/dev-api': ""
        }
      }
    }
  },
})
