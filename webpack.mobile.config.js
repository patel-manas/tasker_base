const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
const isDev = require('isdev');
const CopyPlugin = require('copy-webpack-plugin');
const OfflinePlugin = require('offline-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const publicPath = path.resolve(__dirname + '/dist/mobile/');

module.exports = {
  entry: {
    mobile: path.resolve(__dirname, 'src/scenes/mobile')
  },
  output: {
    filename: '[name].js',
    chunkFilename: 'chunk.[name].js',
    path: publicPath
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist/mobile'),
    compress: true,
    port: 8091
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
    new CopyPlugin([
      { from: './src/index.html', to: path.join(__dirname, 'dist') }
    ]),
    new HtmlWebPackPlugin({
      template: './src/WEB-INF/html/mobile/_mobile.html',
      filename: './index.html'
    })
  ].concat(
    !isDev
      ? [
          new OfflinePlugin({
            publicPath,
            externals: ['/'],
            safeToUseOptionalCaches: true,
            AppCache: false, // we don't use app cache feature
            ServiceWorker: {
              scope: publicPath,
              events: true,
              navigateFallbackURL: '/'
            },
            // rewrites the asset path for matching production assets
            // with sub directories that serves public path
            // we exclude root path and jsp file caching
            rewrites: function(asset) {
              if (asset !== '/' && !/\.jsp/i.test(asset)) {
                return `${publicPath}${asset}`;
              }
            }
          })
        ]
      : []
  )
};
