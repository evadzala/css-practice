const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:12345/api',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
    client: {
      overlay: {
        warnings: true,
        errors: true,
      },
    },
    allowedHosts: 'all',
  },
  lintOnSave: process.env.NODE_ENV !== 'production',
})
