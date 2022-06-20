const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  // module: {
  //   rules: [
  //     // Webpack loader that evaluates styles during build time in Fluent UI React v9
  //     // https://github.com/microsoft/griffel/tree/main/packages/webpack-loader
  //     {
  //       test: /\.styles.js$/,
  //       exclude: /node_modules/,
  //       use: {
  //         loader: '@griffel/webpack-loader',
  //       },
  //     },
  //   ],
  // },
  resolve: {
    extensions: ['*', '.js'],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  devServer: {
    static: path.resolve(__dirname, './dist'),
  },
  optimization: {
    minimize: false,
  },
  devtool: 'eval',
};
