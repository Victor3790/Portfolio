const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')

module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname, 'src/entry.js'),
    output: {
      filename: '[name].[hash].js'
    },
    optimization: {
      minimizer: [
        new OptimizeCssAssetsWebpackPlugin(),
        new TerserWebpackPlugin()
      ]
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
        },
        {
          test: /\.html$/,
          use: ['html-loader']
        },
        {
          test: /\.(svg|png|jpg|gif)$/,
          use: {
            loader: 'file-loader',
            options: {
              outputPath: 'imgs'
            }
          }
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src/index.html'),
        minify: {
          collapseWhitespace: true,
          removeComments: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          useShortDoctype: true
        }
      }),
      new MiniCssExtractPlugin({
        filename: 'css/[name].[hash].css'
      }),
      new CleanWebpackPlugin()
    ]
};
