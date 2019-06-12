const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
  title: 'react-electron',
  template: './src/index.html',
  filename: './index.html'
});

module.exports = {
  entry: './src/index.js',
  target: 'electron-renderer',
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: './',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [
          /node_modules/,
          /.json?/,
        ],
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          }
        }
      }, {
        test: /.(s*)css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ]
  },
  plugins : [
    htmlPlugin,
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  }
}