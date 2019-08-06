(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{192:function(t,s,e){"use strict";e.r(s);var a=e(0),n=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),e("p",[t._v("Webpack 的别名可以通过 "),e("code",[t._v(".vuepress/config.js")]),t._v(" 中 "),e("router-link",{attrs:{to:"./../config/#configurewebpack"}},[t._v("configureWebpack")]),t._v(" 来配置，如：")],1),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),e("p",[t._v("值得一提的是，你不仅可以在你的 Vue 组件中使用上述的语法，在 Markdown 文件中亦是如此。")]),t._v(" "),t._m(14)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"静态资源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#静态资源","aria-hidden":"true"}},[this._v("#")]),this._v(" 静态资源")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"相对路径"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#相对路径","aria-hidden":"true"}},[this._v("#")]),this._v(" 相对路径")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("所有的 Markdown 文件都会被 webpack 编译成 Vue 组件，因此你可以，并且"),s("strong",[this._v("应该更倾向于")]),this._v("使用相对路径（Relative URLs）来引用所有的静态资源：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-md extra-class"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[s("span",{pre:!0,attrs:{class:"token url"}},[this._v("!["),s("span",{pre:!0,attrs:{class:"token content"}},[this._v("An image")]),this._v("](./image.png)")]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("同样地，这在 "),s("code",[this._v("*.vue")]),this._v(" 文件的模板中一样可以工作，图片将会被 "),s("code",[this._v("url-loader")]),this._v(" 和 "),s("code",[this._v("file-loader")]),this._v(" 处理，在运行生成静态文件的构建任务时，文件会被复制到正确的位置。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("除此之外，你也使用 "),s("code",[this._v("~")]),this._v(" 前缀来明确地指出这是一个 webpack 的模块请求，这将允许你通过 webpack 别名来引用文件或者 npm 的依赖：")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-md extra-class"},[e("pre",{pre:!0,attrs:{class:"language-md"}},[e("code",[e("span",{pre:!0,attrs:{class:"token url"}},[t._v("!["),e("span",{pre:!0,attrs:{class:"token content"}},[t._v("Image from alias")]),t._v("](~@alias/image.png)")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token url"}},[t._v("!["),e("span",{pre:!0,attrs:{class:"token content"}},[t._v("Image from dependency")]),t._v("](~some-dependency/image.png)")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("module"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  configureWebpack"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    resolve"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      alias"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@alias'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path/to/some/dir'")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"公共文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#公共文件","aria-hidden":"true"}},[this._v("#")]),this._v(" 公共文件")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("有时，你可能需要提供一个静态资源，但是它们并不直接被你的任何一个 markdown 文件或者主题组件引用 —— 举例来说，favicons 和 PWA 的图标，在这种情形下，你可以将它们放在 "),s("code",[this._v(".vuepress/public")]),this._v(" 中， 它们最终会被复制到生成的静态文件夹中。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"基础路径"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基础路径","aria-hidden":"true"}},[this._v("#")]),this._v(" 基础路径")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("如果你的网站会被部署到一个"),e("strong",[t._v("非根路径")]),t._v("，你将需要在 "),e("code",[t._v(".vuepress/config.js")]),t._v(" 中设置 "),e("code",[t._v("base")]),t._v("，举例来说，如果你打算将你的网站部署到 "),e("code",[t._v("https://foo.github.io/bar/")]),t._v("，那么 "),e("code",[t._v("base")]),t._v(" 的值就应该被设置为 "),e("code",[t._v('"/bar/"')]),t._v(" (应当总是以斜杠开始，并以斜杠结束)。")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("有了基础路径（Base URL），如果你希望引用一张放在 "),e("code",[t._v(".vuepress/public")]),t._v(" 中的图片，你需要使用这样路径："),e("code",[t._v("/bar/image.png")]),t._v("，然而，一旦某一天你决定去修改 "),e("code",[t._v("base")]),t._v("，这样的路径引用将会显得异常脆弱。为了解决这个问题，VuePress 提供了内置的一个 helper "),e("code",[t._v("$withBase")]),t._v("（它被注入到了 Vue 的原型上），可以帮助你生成正确的路径：")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-vue extra-class"},[e("pre",{pre:!0,attrs:{class:"language-vue"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":src")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("$withBase('/foo.png')"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("alt")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("foo"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("最后补充一句，一个 "),s("code",[this._v("base")]),this._v(" 路径一旦被设置，它将会自动地作为前缀插入到 "),s("code",[this._v(".vuepress/config.js")]),this._v(" 中所有以 "),s("code",[this._v("/")]),this._v(" 开始的资源路径中。")])}],!1,null,null,null);s.default=n.exports}}]);