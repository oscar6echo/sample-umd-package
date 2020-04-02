// eslint-disable-next-line import/no-extraneous-dependencies
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = common.map((conf) =>
  merge(conf, {
    mode: 'production',
  })
);
