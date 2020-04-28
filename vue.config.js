const webpack = require('webpack');

module.exports = {
  productionSourceMap: false,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://sell-api-dev.bw365.net',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
      '/fileApi': {
        target: 'http://img-dev.bw365.net',
        changeOrigin: true,
        pathRewrite: {
          '^/fileApi': '',
        },
      },
    },
  },
  configureWebpack: {
    externals: {
      'AMap': 'AMap',
    },
    optimization: {
      runtimeChunk: 'single',
    },
    plugins: [
      new webpack.ContextReplacementPlugin(
        /moment[/\\]locale$/,
        /zh-cn/,
      ),
    ],
  },
};
