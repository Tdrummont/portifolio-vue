const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.VUE_APP_DIRETORIO_RAIZ,

  transpileDependencies: true,

  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  }
})
