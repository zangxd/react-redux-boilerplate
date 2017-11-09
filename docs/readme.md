## 技术栈
- React 16
- Redux
- React-Router 4
- Webpack 3

## 架构实现的功能
- 编译 jsx、es6/es7、scss 等资源
- 自动引入静态资源到相应 html 页面
- 实时编译和刷新浏览器
- 按指定模块化规范自动包装模块
- 自动给 css 添加浏览器内核前缀
- 按需打包合并 js、css
- 压缩 js、css、html
- 图片路径处理、压缩、CssSprite
- 对文件使用 hash 命名，做强缓存
- 语法检查
- 全局替换指定字符串
- 本地接口模拟服 务
- 发布到远端机

chmod +x build.sh

## package

webpack
webpack-dev-server

```
yarn add webpack webpack-dev-server --dev
```

babel-cli
babel-eslint
babel-jest
babel-loader
babel-runtime（dependencies）
babel-plugin-transform-runtime
babel-plugin-transform-decorators-legacy
babel-preset-env
babel-preset-react
babel-preset-stage-1

```
yarn add babel-cli babel-eslint babel-jest babel-loader babel-plugin-transform-runtime babel-plugin-transform-decorators-legacy babel-preset-env babel-preset-react babel-preset-stage-1 --dev

yarn add babel-runtime
```

eslint
eslint-config-airbnb
eslint-plugin-import
eslint-plugin-jsx-a11y
eslint-plugin-react

```
yarn add eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react --dev
```

extract-text-webpack-plugin
html-webpack-plugin

```
yarn add extract-text-webpack-plugin html-webpack-plugin --dev
```

css-loader
file-loader
raw-loader
sass-loader
style-loader
url-loader
image-webpack-loader
postcss-loader
postcss-import
postcss-salad
node-sass

```
yarn add postcss-loader postcss-import postcss-salad --dev
yarn add css-loader file-loader raw-loader sass-loader style-loader url-loader node-sass image-webpack-loader --dev
```

react-hot-loader
react-addons-perf

```
yarn add react-hot-loader react-addons-perf --dev
```

react
react-dom
redux
react-redux
react-router-dom
react-router-redux
redux-logger
redux-thunk

```
yarn add react react-dom redux react-redux react-router-dom react-router-redux redux-logger redux-thunk prop-types
```

immutable
moment
classnames
axios

```
yarn add immutable moment classnames axios
```

resolve-url-loader
image-webpack-loader
redux-devtools-extension
