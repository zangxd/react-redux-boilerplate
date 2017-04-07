var path = require("path");
var webpack = require("webpack");
var precss = require("precss");
var autoprefixer = require("autoprefixer");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: [
        "react-hot-loader/patch",
        "webpack-dev-server/client?http://localhost:3000",
        "webpack/hot/only-dev-server",
        "./src/index"
    ],
    output: {
        path: path.join(__dirname, "dist"),
        publicPath: "/",
        filename: "app.[hash].js"
    },
    devtool: "eval",
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss|css$/,
                loader: "style-loader!css-loader!postcss-loader!resolve-url-loader!sass-loader?sourceMap"
            },
            {
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
            },
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
        ]
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({ hash: false, template: "./index.html" }),
        new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /nb/),
        new webpack.LoaderOptionsPlugin({
            test: /\.scss$/,
            debug: true,
            options: {
                postcss: function() {
                    return [ precss, autoprefixer ];
                },
                context: path.join(__dirname, "src"),
                output: { path: path.join(__dirname, "dist") }
            }
        })
    ]
};
