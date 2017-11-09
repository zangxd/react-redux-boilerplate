const webpack = require('webpack')
const path = require('path')

const vendors = ['react', 'react-dom', 'react-router-dom', 'redux', 'react-redux']

module.exports = {
  output: {
    path: path.join(__dirname, 'dll'),
    filename: '[name].js',
    library: '[name]'
  },

  entry: {
    "vendor": vendors
  },
  plugins: [new webpack.DllPlugin({
    // mainfest 文件的生成位置
    path: path.join(__dirname, 'dll', '[name]-manifest.json'),
    // name 是dll暴露的对象名，要跟 output.library 保持一致
    name: '[name]',
    // 解析包路径的上下文
    context: __dirname
  })]
}
