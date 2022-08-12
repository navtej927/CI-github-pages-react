const path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  //   output: {
  //     path: path.resolve(__dirname, './public'),
  //     filename: 'bundle.js',
  //   },
  plugins: [new HtmlWebpackPlugin({
    template: './public/index.html'
  })],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 1000,
  },
};
