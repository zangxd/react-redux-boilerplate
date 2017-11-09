###1. DLLPlugin-分离第三方依赖

在开发环境下, 通常会采取 HMR 模式来提高开发效率. 但一般情况下, 我们只会更改自身的业务文件, 不会去更改第三方的依赖, 但 webpack 在 rebuild 的时候, 依旧会 build 所有的依赖. 因而, 为减少 rebuild 的时间, 我们可以分离第三方依赖, 在项目启动之前, 将其单独打包和引入.

###2. HappyPack-多进程构建

Webpack的构建过程是单进程的, 利用 HappyPack 可让 loader 对文件进行多进程处理。

###3. CommonsChunkPlugin-提取公共依赖-生产环境

###4. ExtractTextPlugin-css拆分

###5. webpack-parallel-uglify-plugin插件可以并行运行UglifyJS插件-多线程混淆压缩     --- 验证中
