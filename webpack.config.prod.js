const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    basic: './src/basic.js',
    style: './src/style.scss',
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new CleanPlugin.CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new FixStyleOnlyEntriesPlugin(),
    new HtmlWebpackPlugin({
      chunks: ['home', 'style'],
      template: path.resolve(__dirname, 'src', 'index.html'),
      filename: path.resolve(__dirname, 'dist', 'index.html'),
      minify: {
        collapseWhitespace: true,
      },
    }),
    new HtmlWebpackPlugin({
      chunks: ['basic', 'style'],
      template: path.resolve(__dirname, 'src', 'oferta.html'),
      filename: path.resolve(__dirname, 'dist', 'oferta.html'),
      minify: {
        collapseWhitespace: true,
      },
    }),
    new HtmlWebpackPlugin({
      chunks: ['gallery', 'style'],
      template: path.resolve(__dirname, 'src', 'galeria.html'),
      filename: path.resolve(__dirname, 'dist', 'galeria.html'),
      minify: {
        collapseWhitespace: true,
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
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
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  { useBuiltIns: 'usage', corejs: { version: 3 } },
                ],
              ],
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif)$/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][hash][ext]',
        },
      },
      {
        test: /\.pdf$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
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
};
