const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: {
      import: path.resolve('./packages/test2/src/index.js'),
      dependOn: 'shared',
    },
    amberStyle: {
      import: path.resolve('./packages/test1/src/App.styles.js'),
      dependOn: 'shared',
    },
    shared: 'react',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
    // uniqueName: '@testscope/testname',
  },
  resolve: {
    extensions: ['*', '.js'],
  },
  devServer: {
    static: path.resolve(__dirname, './dist'),
  },
  // optimization: {
  //   // minimize: false,
  //   // runtimeChunk: false,
  //   splitChunks: {
  //     chunks: 'all',
  //   },
  // },
  devtool: 'eval-cheap-module-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: './asset/index.html',
    }),
  ],
};
