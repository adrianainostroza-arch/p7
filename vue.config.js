const { defineConfig } = require('@vue/cli-service')
const { VuetifyPlugin } = require('webpack-plugin-vuetify')

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? '/p7/' : '/',

  transpileDependencies: ['vuetify'],

  configureWebpack: {
    // Importa automáticamente solo los componentes de Vuetify que se usan (tree-shaking)
    plugins: [new VuetifyPlugin()]
  }
})
