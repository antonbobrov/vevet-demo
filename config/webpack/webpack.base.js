const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { PATHS } = require('../PATHS');
const { getFilesPaths } = require('../utils/getFilesPaths');

const isProduction = process.env.NODE_ENV === 'production';

const baseUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://antonbobrov.github.io/vevet-demo/'
    : '/';

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: './src/js/index.ts',

  output: {
    path: PATHS.build,
    filename: '[name].[contenthash].js',
    publicPath: baseUrl,
  },

  module: {
    rules: [
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader',
      },

      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },

      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              postcssOptions: {
                plugins: [['autoprefixer']],
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
        sideEffects: true,
      },
    ],
  },

  resolve: {
    extensions: ['.ts', '.js'],
  },

  plugins: [
    new CleanWebpackPlugin(),

    new MiniCssExtractPlugin({
      filename: !isProduction ? '[name].css' : '[name].[fullhash].css',
    }),

    ...getFilesPaths(PATHS.pages, '.hbs').map(({ path: filePath }) => {
      let filename = filePath.replace(PATHS.pages, '').replace(/^\//, '');
      filename = filename.replace('.hbs', '.html');

      return new HtmlWebpackPlugin({
        template: filePath,
        filename,
        minify: isProduction,
        inject: 'body',
        baseUrl,
      });
    }),

    new CopyPlugin({
      patterns: [{ from: PATHS.public, to: '' }],
    }),
  ],
};
