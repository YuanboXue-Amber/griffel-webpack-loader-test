const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
    extensions: ['*', '.js'],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
  devServer: {
    static: path.resolve(__dirname, './dist'),
  },
  optimization: {
    minimize: false,

    runtimeChunk: false,
    /**
     * See docs and defaults here. https://webpack.js.org/plugins/split-chunks-plugin/.
     **/
    splitChunks: {
      chunks: 'all',
      // /* Chunk splitting options. */
      // minChunks: 1,
      // maxAsyncRequests: 10,
      // maxInitialRequests: 8,
    },
  },
  devtool: 'eval-cheap-module-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: './asset/index.html',
    }),
  ],
};
