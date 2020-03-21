// eslint-disable-next-line import/no-extraneous-dependencies
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'sourceMap', // does not work - no source map generated...
  //   devServer: {
  //     contentBase: './dist',
  //   },
});
