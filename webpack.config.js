const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      // // Webpack loader that evaluates styles during build time in Fluent UI React v9
      // // https://github.com/microsoft/griffel/tree/main/packages/webpack-loader
      // {
      //   test: /\.styles.js$/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: '@griffel/webpack-loader',
      //   },
      // },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    static: path.resolve(__dirname, './dist'),
    hot: true,
  },
  optimization: {
    minimize: false,
  },
  devtool: false,
};
