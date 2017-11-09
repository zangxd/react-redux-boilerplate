const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// happypack 多进程构建
const HappyPack = require('happypack')

// dll 拆分
const manifest = require('./dll/vendor-manifest.json')

const happyPackPlugin = [
  new HappyPack({id: 'js', threads: 4, loaders: ['babel-loader?cacheDirectory']}),
  new HappyPack({
    id: 'css',
    threads: 4,
    loaders: [
      'style-loader', 'css-loader', 'postcss-loader', 'resolve-url-loader', 'sass-loader?sourceMap'
    ]
  })
]

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000', 'webpack/hot/only-dev-server', 'react-hot-loader/patch', './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'app.[hash].js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: ['happypack/loader?id=js'],
        include: [path.join(__dirname, './src')],
        exclude: /node_modules/
      }, {
        test: /\.scss|css$/,
        use: ['happypack/loader?id=css']
      }, {
        test: /\.(eot|svg|ttf|woff|woff2)(\?.+)?$/,
        loader: 'file-loader'
      }, {
        test: /\.(jpe?g|png|gif|svg)(\?.+)?$/,
        use: [
          {
            loader: 'file-loader?cacheDirectory=true',
            options: {
              query: {
                name: 'assets/[sha512:hash:hex].[ext]'
              }
            }
          }, {
            loader: 'image-webpack-loader',
            options: {
              query: {
                mozjpeg: {
                  progressive: true
                },
                gifsicle: {
                  interlaced: true
                },
                optipng: {
                  optimizationLevel: 7
                }
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    }),
    new webpack.DllReferencePlugin({context: __dirname, manifest: manifest}),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({hash: false, template: './index.html', env:'development'}),
  ].concat(happyPackPlugin)
}
