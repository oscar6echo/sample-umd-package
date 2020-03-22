const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'webpack-numbers.js', // filename under dist - should match package.json/main
    library: 'webpackNumbers', // global name in browser window
    libraryTarget: 'umd', // node and browser - see https://webpack.js.org/guides/author-libraries/
    globalObject: 'this', // necessary for node and browser - see https://webpack.js.org/configuration/output/#outputglobalobject
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  externals: {
    // lodash: {
    //   commonjs: 'lodash',
    //   commonjs2: 'lodash',
    //   amd: 'lodash',
    //   root: '_',
    // },
  },
};

// // with source-map
// module.exports = ['source-map'].map((devtool) => ({
//   mode: 'development',
//   entry: './src/index.js',
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'webpack-numbers.js',
//   },
//   devtool,
//   optimization: {
//     runtimeChunk: true,
//   },
// }));
