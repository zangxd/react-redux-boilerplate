var path = require('path');
var webpack = require('webpack');
var precss = require('precss');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        vendor: ['react', 'react-dom', 'react-router'],
        app: [
            './src/index'
        ],
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
        filename: 'assets/[name].[hash].js',
        chunkFilename: 'assets/[name].[chunkhash].js'
    },
    devtool: 'cheap-module-source-map',
    module: {
        loaders: [{
            test: /\.js$/,
            include: path.join(__dirname, 'src'),
            loader: 'babel-loader'
        }, {
            test: /\.scss$/i,
            loader: ExtractTextPlugin.extract(['css-loader', 'postcss-loader', 'resolve-url-loader', 'sass-loader?sourceMap']),
        }, {
            test: /\.(jpe?g|png|gif|svg)$/i,
            loaders: [
                  {
                    loader: 'file-loader?cacheDirectory=true',
                    options: {
                      query: {
                        name: 'assets/images/[sha512:hash:hex].[ext]'
                      }
                    }
                  },
                  {
                    loader: 'image-webpack-loader',
                    options: {
                      query: {
                        mozjpeg: {
                          progressive: true,
                        },
                        gifsicle: {
                          interlaced: true,
                        },
                        optipng: {
                          optimizationLevel: 7,
                        }
                      }
                    }
                  }
                ]
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(true),
        new webpack.LoaderOptionsPlugin({
            test: /\.scss$/,
            debug: true,
            options:  {
                postcss: function() {
                    return [precss, autoprefixer];
                },
                context: path.join(__dirname, 'src'),
                output: {
                    path: path.join(__dirname, 'dist')
                }
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: Infinity
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new ExtractTextPlugin("assets/styles.css"),
        new HtmlWebpackPlugin({
            hash: false,
            template: './index.html'
        })
    ],
};
