const merge = require('webpack-merge');
const path = require('path');
const resolve = dir => path.resolve(__dirname, dir);
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(
  common,
  {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: {
      main: resolve('src/demo/index.js'),
    },
    output: {
      filename: '[name].bundle.js',
      path: resolve('dist'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        inject: true,
        title: 'Production',
      }),
    ],
    devServer: {
      historyApiFallback: true, // spa不跳转,history模式的路由需要true
      host: 'localhost',
      port: 1025,
      // hot: true,
      inline: true, // 实时刷新
      compress: true, // Enable gzip compression for everything served
      overlay: true, // Shows a full-screen overlay in the browser
      open: true,
      proxy: {
        '/': {
          target: 'http://119.45.143.178:7001',
          // target: 'http://192.168.33.132:7002',
          secure: false,
          changeOrigin: true,
          pathRewrite: {
            '^/': '',
          },
        },
      },
    },
  },

);
