const isDev = require('isdev');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

const paths = {
  root: __dirname,
  src: __dirname + '/src',
  entry: __dirname + '/src/index.tsx',
  output: __dirname + '/src/dist/'
};

module.exports = {
  entry: paths.entry,
  output: {
    filename: "bundle.js",
    path: paths.output
  },
  mode: isDev ? 'development' : 'production',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.scss']
  },
  devtool: isDev ? 'cheap-module-inline-source-map' : 'source-map',
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          eslintrc: true
        }
      },
      {
        test: /\.(scss)?$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
        options: {
          babelrc: true
        }
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      },
      {
        enforce: 'pre',
        test: /\.tsx$/,
        loader: 'source-map-loader'
      }
    ]
  },
  devServer: {
    contentBase: __dirname,
    compress: true,
    port: 9000
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${paths.root}/_index.html`,
      filename: `${paths.root}/index.html`,
    })
  ]
};
