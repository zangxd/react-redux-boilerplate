# babel-preset-env
babel-preset-env 是一个新的 preset，可以根据配置的目标运行环境（environment）自动启用需要的 babel 插件。

## 为啥会有它？
目前我们写 javascript 代码时，需要使用 N 个 preset，比如：
- babel-preset-es2015、babel-preset-es2016。es2015 可以把 ES6 代码编译为 ES5，es2016 可以把 ES2016 代码编译为 ES6。

- babel-preset-latest 可以编译 stage 4 进度的 ECMAScript 代码。

这些 preset 的问题就是: 它们都太”重”了, 即包含了过多在某些情况下不需要的功能. 比如, 现代的浏览器大多支持ES6的generator, 但是如果你使用babel-preset-es2015, 它会将generator函数编译为复杂的ES5代码, 这是没有必要的.

babel-preset-env 的工作方式类似 babel-preset-latest，唯一不同的就是 babel-preset-env 会根据配置的 env 只编译那些还不支持的特性。
