(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{189:function(t,s,e){"use strict";e.r(s);var a=e(0),n=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),e("p",[t._v("下述的指南基于以下条件：")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),e("ol",[e("li",[e("p",[t._v("请确保你已经安装了 "),e("a",{attrs:{href:"https://www.npmjs.com/package/firebase-tools",target:"_blank",rel:"noopener noreferrer"}},[t._v("firebase-tools"),e("OutboundLink")],1),t._v("。")])]),t._v(" "),t._m(15)]),t._v(" "),t._m(16),t._v(" "),t._m(17),t._m(18),t._v(" "),t._m(19),t._m(20),t._v(" "),t._m(21),t._v(" "),e("ol",[e("li",[e("p",[t._v("首先，假设你已经安装了 "),e("a",{attrs:{href:"https://www.npmjs.com/package/surge",target:"_blank",rel:"noopener noreferrer"}},[t._v("surge"),e("OutboundLink")],1),t._v("；")])]),t._v(" "),t._m(22),t._v(" "),t._m(23)]),t._v(" "),e("p",[t._v("你也可以通过 "),e("code",[t._v("surge study/.vuepress/dist yourdomain.com")]),t._v(" 来部署到 "),e("a",{attrs:{href:"http://surge.sh/help/adding-a-custom-domain",target:"_blank",rel:"noopener noreferrer"}},[t._v("自定义域名"),e("OutboundLink")],1),t._v("。")]),t._v(" "),t._m(24),t._v(" "),e("ol",[e("li",[e("p",[t._v("首先安装 "),e("a",{attrs:{href:"https://devcenter.heroku.com/articles/heroku-cli",target:"_blank",rel:"noopener noreferrer"}},[t._v("Heroku CLI"),e("OutboundLink")],1),t._v("；")])]),t._v(" "),e("li",[e("p",[e("a",{attrs:{href:"https://signup.heroku.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("在这里"),e("OutboundLink")],1),t._v(" 注册一个 Heroku 账号；")])]),t._v(" "),t._m(25)]),t._v(" "),t._m(26),t._m(27),t._v(" "),t._m(28),t._v(" "),t._m(29),e("p",[t._v("这里是你项目的配置，请参考 "),e("a",{attrs:{href:"https://github.com/heroku/heroku-buildpack-static",target:"_blank",rel:"noopener noreferrer"}},[t._v("heroku-buildpack-static"),e("OutboundLink")],1),t._v(" 了解更多。")]),t._v(" "),t._m(30),t._v(" "),t._m(31),t._m(32),t._v(" "),t._m(33)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#部署","aria-hidden":"true"}},[this._v("#")]),this._v(" 部署")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("文档放置在项目的 "),s("code",[this._v("study")]),this._v(" 目录中；")]),this._v(" "),s("li",[this._v("使用的是默认的构建输出位置；")]),this._v(" "),s("li",[this._v("VuePress 以本地依赖的形式被安装到你的项目中，并且配置了如下的 npm scripts:")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"study:build"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vuepress build study"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"github-pages"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#github-pages","aria-hidden":"true"}},[this._v("#")]),this._v(" GitHub Pages")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ol",[e("li",[e("p",[t._v("在 "),e("code",[t._v("study/.vuepress/config.js")]),t._v(" 中设置正确的 "),e("code",[t._v("base")]),t._v("。")]),t._v(" "),e("p",[t._v("如果你打算发布到 "),e("code",[t._v("https://<USERNAME>.github.io/")]),t._v("，则可以省略这一步，因为 "),e("code",[t._v("base")]),t._v(" 默认即是 "),e("code",[t._v('"/"')]),t._v("。")]),t._v(" "),e("p",[t._v("如果你打算发布到 "),e("code",[t._v("https://<USERNAME>.github.io/<REPO>/")]),t._v("（也就是说你的仓库在 "),e("code",[t._v("https://github.com/<USERNAME>/<REPO>")]),t._v("），则将 "),e("code",[t._v("base")]),t._v(" 设置为 "),e("code",[t._v('"/<REPO>/"')]),t._v("。")])]),t._v(" "),e("li",[e("p",[t._v("在你的项目中，创建一个如下的 "),e("code",[t._v("deploy.sh")]),t._v(" 文件（请自行判断去掉高亮行的注释）:")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-bash extra-class"},[e("div",{staticClass:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("br"),e("br"),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("br"),e("br"),e("br")]),e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token shebang important"}},[t._v("#!/usr/bin/env sh")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 确保脚本抛出遇到的错误")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" -e\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 生成静态文件")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run study:build\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 进入生成的文件夹")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" study/.vuepress/dist\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果是发布到自定义域名")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# echo 'www.example.com' > CNAME")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -A\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'deploy'")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果发布到 https://<USERNAME>.github.io")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果发布到 https://<USERNAME>.github.io/<REPO>")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" -\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),s("p",[this._v("你可以在你的持续集成的设置中，设置在每次 push 代码时自动运行上述脚本。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"gitlab-pages-and-gitlab-ci"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gitlab-pages-and-gitlab-ci","aria-hidden":"true"}},[this._v("#")]),this._v(" GitLab Pages and GitLab CI")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ol",[e("li",[e("p",[t._v("在 "),e("code",[t._v("study/.vuepress/config.js")]),t._v(" 中设置正确的 "),e("code",[t._v("base")]),t._v("。")]),t._v(" "),e("p",[t._v("如果你打算发布到 "),e("code",[t._v("https://<USERNAME or GROUP>.gitlab.io/")]),t._v("，则可以省略这一步，因为 "),e("code",[t._v("base")]),t._v(" 默认即是 "),e("code",[t._v('"/"')]),t._v("。")]),t._v(" "),e("p",[t._v("如果你打算发布到 "),e("code",[t._v("https://<USERNAME or GROUP>.gitlab.io/<REPO>/")]),t._v("（也就是说你的仓库在 "),e("code",[t._v("https://gitlab.com/<USERNAME>/<REPO>")]),t._v("），则将 "),e("code",[t._v("base")]),t._v(" 设置为 "),e("code",[t._v('"/<REPO>/"')]),t._v("。")])]),t._v(" "),e("li",[e("p",[t._v("在 "),e("code",[t._v(".vuepress/config.js")]),t._v(" 中将 "),e("code",[t._v("dest")]),t._v(" 设置为 "),e("code",[t._v("public")]),t._v("。")])]),t._v(" "),e("li",[e("p",[t._v("在你项目的根目录下创建一个名为 "),e("code",[t._v(".gitlab-ci.yml")]),t._v(" 的文件，无论何时你提交了更改，它都会帮助你自动构建和部署：")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" node"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("9.11.1\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("pages")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cache")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("paths")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" node_modules/\n\n "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("script")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" npm install\n "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" npm run study"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("build\n "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("artifacts")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("paths")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" public\n "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("only")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" master\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"netlify"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#netlify","aria-hidden":"true"}},[this._v("#")]),this._v(" Netlify")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[this._v("在 Netlify 中, 创建一个新的 Github 项目，使用以下设置：")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[e("strong",[t._v("Build Command:")]),t._v(" "),e("code",[t._v("npm run build:study")]),t._v(" 或者 "),e("code",[t._v("yarn build:study")])]),t._v(" "),e("li",[e("strong",[t._v("Publish directory:")]),t._v(" "),e("code",[t._v("study/.vuepress/dist")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"2"}},[s("li",[this._v("点击 deploy 按钮！")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"google-firebase"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#google-firebase","aria-hidden":"true"}},[this._v("#")]),this._v(" Google Firebase")])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("p",[this._v("在你项目的根目录下创建 "),s("code",[this._v("firebase.json")]),this._v(" 和 "),s("code",[this._v(".firebaserc")]),this._v("，并包含以下内容：")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("firebase.json")]),this._v(":")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"hosting"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"public"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./study/.vuepress/dist"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ignore"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v(".firebaserc")]),this._v(":")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"projects"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"default"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<YOUR_FIREBASE_ID>"')]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"3"}},[s("li",[this._v("在执行了 "),s("code",[this._v("yarn study:build")]),this._v(" 或 "),s("code",[this._v("npm run study:build")]),this._v(" 后, 使用 "),s("code",[this._v("firebase deploy")]),this._v(" 指令来部署。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"surge"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#surge","aria-hidden":"true"}},[this._v("#")]),this._v(" Surge")])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("p",[this._v("运行 "),s("code",[this._v("yarn study:build")]),this._v(" 或者 "),s("code",[this._v("npm run study:build")]),this._v("；")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("p",[this._v("想要使用 surge 来部署，你可以运行： "),s("code",[this._v("surge study/.vuepress/dist")]),this._v("；")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"heroku"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#heroku","aria-hidden":"true"}},[this._v("#")]),this._v(" Heroku")])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("p",[this._v("运行 "),s("code",[this._v("heroku login")]),this._v(" 并填写你的 Heroku 证书：")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("heroku login\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"4"}},[s("li",[this._v("在你的项目根目录中，创建一个名为 "),s("code",[this._v("static.json")]),this._v(" 的文件，并包含下述内容：")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("static.json")]),this._v(":")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"root"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./study/.vuepress/dist"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"5"}},[s("li",[this._v("配置 Heroku 的 git 远程仓库：")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 版本变化")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"My site ready for deployment."')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 以指定的名称创建一个新的 heroku 应用")]),t._v("\nheroku apps:create example\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 为静态网站设置构建包")]),t._v("\nheroku buildpacks:set https://github.com/heroku/heroku-buildpack-static.git\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"6"}},[s("li",[this._v("部署你的网站：")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 发布网站")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push heroku master\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 打开浏览器查看 Helku CI 的 dashboard")]),t._v("\nheroku "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),t._v("\n")])])])}],!1,null,null,null);s.default=n.exports}}]);