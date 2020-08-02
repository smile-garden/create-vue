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
    devServer: {
      before(app) {
        app.get('/api/goods', function(req, res) {
          res.json({
            code: 0,
            data: [1, 3, 5,7, 9, 11],
          })
        }),
        app.get('/api/detail', function(req, res) {
          res.json({
            code: 0,
            data: {
              title: '商品标题',
              des: '商品副标题',
              content: '山东的等等等等等等等等等等等等',
            },
          })
        })
      }
    }
  },
};
