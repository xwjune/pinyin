const path = require('path');
const webpack = require('webpack');
const packageConfig = require('./package.json');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    library: 'pinyinUtil',
    libraryTarget: 'umd',
    libraryExport: 'default',
  },
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: ['babel-loader'],
    }],
  },
  plugins: [
    new webpack.BannerPlugin(`v${packageConfig.version} | Copyright © 小巷 <xwjune@163.com> | All rights reserved.`),
  ],
};
