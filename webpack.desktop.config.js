const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    desktop: path.resolve(__dirname, 'src/scenes/desktop')
  },
  output: {
    filename: '[name].js',
    chunkFilename: 'chunk.[name].js',
    path: __dirname + '/dist/desktop'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist/desktop'),
    compress: true,
    port: 8090
  },
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
        test: /\.(js|mjs)$/,
        exclude: /@babel(?:\/|\\{1,2})runtime/,
        loader: require.resolve('babel-loader'),
        options: {
          babelrc: false,
          configFile: false,
          compact: false,
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: [
            [
              '@babel/plugin-proposal-class-properties',
              {
                loose: true
              }
            ]
          ],
          cacheDirectory: true,
          cacheCompression: false,
          sourceMaps: true
        }
      },
      {
        loader: require.resolve('file-loader'),
        exclude: [/\.(js|mjs|jsx|ts|tsx|less|css)$/, /\.html$/, /\.json$/],
        options: {
          name: 'static/media/[name].[hash:8].[ext]'
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader' // creates style nodes from JS strings
          },
          {
            loader: 'css-loader' // translates CSS into CommonJS
          },
          {
            loader: 'less-loader',
            options: {
              modifyVars: {
                'primary-color': '#4C45B2'
              },
              javascriptEnabled: true
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/WEB-INF/html/desktop/_desktop.html',
      filename: './index.html'
    }),
    new CopyPlugin([
      { from: './src/index.html', to: path.join(__dirname, 'dist') }
    ])
  ]
};
