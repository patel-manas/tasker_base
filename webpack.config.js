const isDev = require('isdev');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

const paths = {
  root: __dirname,
  src: __dirname + '/src',
  entry: __dirname + '/src/index.js',
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
    extensions: ['.js', '.jsx', '.css' , '.json', '.scss']
  },
  devtool: isDev ? 'cheap-module-inline-source-map' : 'source-map',
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          eslintrc: true
        }
      },
      {
        test: /\.(scss|css)?$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(eot|ttf|woff2?)(\?.*)?$/i,
        use: isDev
          ? 'url-loader?name=[name].[ext]'
          : 'file-loader?name=[name].[ext]'
      },
      {
        test: /\.(svg|png|jpe?g|gif)(\?.*)?$/i,
        use: isDev
          ? 'url-loader?name=[name].[ext]'
          : 'file-loader?name=[name].[ext]'
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        options: {
          babelrc: true
        }
      },
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
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
