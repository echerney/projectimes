'use strict'
const webpack           = require('webpack');
const path              = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const BUILD_DIR         = path.resolve(__dirname, 'dist');
const APP_DIR           = path.resolve(__dirname, 'client/app');


module.exports = {
  entry: `${APP_DIR}/main.jsx`,
  output: {
    path: BUILD_DIR,
    filename: 'script.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'projectimes',
      xhtml: true,
      inject: false,
      template: require('html-webpack-template'),
      appMountId: 'container'
    }),
    new ExtractTextPlugin({ filename: 'css/[name].css', disable: false, allChunks: true })
  ],
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  }
};
