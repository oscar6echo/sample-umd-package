const path = require('path');

// const dependencies = Object.keys(require('/package.json').dependencies);

const modules = {
  rules: [
    {
      test: /\.(js)$/,
      exclude: /node_modules/,
      use: 'babel-loader',
    },
  ],
};

const confSrc1 = {
  name: 'src1',
  entry: './src1/index.js',
  output: {
    path: path.resolve(__dirname, 'dist1'),
    filename: 'webpack-numbers.js', // filename under dist - should match package.json/main
    library: 'webpackNumbers', // global name in browser window
    libraryTarget: 'umd', // node and browser - see https://webpack.js.org/guides/author-libraries/
    globalObject: 'this', // necessary for node and browser - see https://webpack.js.org/configuration/output/#outputglobalobject
  },
  module: modules,
  externals: {},
};

const confSrc2Node = {
  name: 'src2-node',
  entry: './src2/index-node.js',
  output: {
    path: path.resolve(__dirname, 'dist2N'),
    filename: 'my-lib.js',
    library: 'MyLib',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  module: modules,
  externals: {},
};

const confSrc2Browser = {
  name: 'src2-node',
  entry: './src2/index-browser.js',
  output: {
    path: path.resolve(__dirname, 'dist2B'),
    filename: 'my-lib.js',
    library: 'MyLib',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  module: modules,
  externals: {},
};

const confSrc2BrowserLib = {
  name: 'src2-browser',
  entry: {
    funcA: './src2/funcA.js',
    funcB: './src2/funcB.js',
    btoaBrowser: './src2/btoa-browser.js',
  },
  output: {
    path: path.resolve(__dirname, 'lib2'),
    filename: 'my-lib.[name].js',
    library: ['MyLib', '[name]'],
    libraryTarget: 'umd',
  },
  module: modules,
  externals: {},
};

module.exports = [confSrc1, confSrc2Node, confSrc2Browser, confSrc2BrowserLib];

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
