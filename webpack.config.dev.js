const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(sc|c)ss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.pdf$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: './pdf',
              name: '[name].[ext]',
              esModule: false,
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
    ],
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      chunks: ['index', 'style'],
      template: path.resolve(__dirname, 'src', 'index.html'),
      filename: path.resolve(__dirname, 'dist', 'index.html'),
      minify: {
        collapseWhitespace: true,
      },
    }),
    new HtmlWebpackPlugin({
      chunks: ['index', 'style'],
      template: path.resolve(__dirname, 'src', 'oferta.html'),
      filename: path.resolve(__dirname, 'dist', 'oferta.html'),
      minify: {
        collapseWhitespace: true,
      },
    }),
    new HtmlWebpackPlugin({
      chunks: ['index', 'style'],
      template: path.resolve(__dirname, 'src', 'galeria.html'),
      filename: path.resolve(__dirname, 'dist', 'galeria.html'),
      minify: {
        collapseWhitespace: true,
      },
    }),

    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    static: './src',
  },
};
