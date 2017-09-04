'use strict'

const Path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  context: Path.resolve(__dirname, "wwwroot"),
  target: "web",
  entry: "./src/app.tsx",
  output: {
    filename: "bundle.js",
    path: Path.resolve(__dirname, "dist"),
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: __dirname,
    port: 9000,
    inline: true,
    compress: true,
    hot: true
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: Path.join(__dirname, "index.html"),
      filename: "index.html",
      title: "Development"
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader" ,
        exclude: /node_modules/
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      },
    ]
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  }
};
