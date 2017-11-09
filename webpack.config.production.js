const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
//const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin')
//const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
//const basePath = path.resolve(__dirname, './')

module.exports = {
  entry: {
    vendor: [
      'react', 'react-dom', 'react-router-dom', 'redux', 'react-redux'
    ],
    app: './src/index'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'assets/[name].[hash].js',
    chunkFilename: 'assets/[name].[chunkhash].js'
  },
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        loader: 'babel-loader'
      }, {
        test: /\.scss|css$/i,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader?sourceMap', 'resolve-url-loader', 'sass-loader?sourceMap']
        })
      }, {
        test: /\.(eot|svg|ttf|woff|woff2)(\?.+)?$/,
        loader: 'file-loader'
      }, {
        test: /\.(jpe?g|png|gif|svg)$/i,
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
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new webpack.optimize.CommonsChunkPlugin({name: 'vendor', minChunks: Infinity}),
    // new UglifyJSPlugin({
    //   uglifyOptions: {
    //     minimize: true,
    //     output: {
    //       comments: false,
    //       beautify: false
    //     },
    //     compress: {
    //       warnings: false,
    //       drop_console: true
    //     },
    //     warnings: false
    //   }
    // }),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false,
        drop_console: true,
        screw_ie8: true
      },
      output: {
        comments: false
      }
    }),
    // new ParallelUglifyPlugin({
    //   cacheDir: '.cache/',
    //   uglifyJS: {
    //     compress: {
    //         warnings: false,
    //         drop_console: true
    //     },
    //     output: {
    //         comments: false
    //     }
    //   }
    // }),
    new ExtractTextPlugin('assets/styles.css'),
    new HtmlWebpackPlugin({hash: false, template: './index.html'})
  ]
}
