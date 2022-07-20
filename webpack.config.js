const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve('./packages/test2/src/index.js'),
  resolve: {
    extensions: ['*', '.js'],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
    // uniqueName: '@testscope/testname',
  },
  devServer: {
    static: path.resolve(__dirname, './dist'),
  },
  optimization: {
    minimize: false,
    runtimeChunk: false,
    splitChunks: {
      chunks: 'all',
    },
  },
  devtool: 'eval-cheap-module-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: './asset/index.html',
    }),
  ],
};
