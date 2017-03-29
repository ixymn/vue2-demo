11test
```
github:[https://github.com/lzxb/vue2-demo](https://github.com/lzxb/vue2-demo)

## 源码说明
### 项目目录说明
```pjlsssssssssss
kkkkkkkkkkkkkk
.
|-- config                           // 项目开发环境配置
|   |-- index.js                     // 项目打包部署配置
|-- src                              // 源码目录
|   |-- components                   // 公共组件
|       |-- header.vue               // 页面头部公共组件
|       |-- index.js                 // 加载各种公共组件
|   |-- config                       // 路由配置和程序的基本信息配置
|       |-- routes.js                // 配置页面路由
|   |-- css                          // 各种css文件
|       |-- common.css               // 全局通用css文件
|   |-- iconfont                     // 各种字体图标
|   |-- images                       // 公共图片
|   |-- less                         // 各种less文件
|       |-- common.less              // 全局通用less文件
|   |-- pages                        // 页面组件
|       |-- home                     // 个人中心
|       |-- index                    // 网站首页
|       |-- login                    // 登录
|       |-- signout                  // 退出
|   |-- store                        // vuex的状态管理
|       |-- index.js                 // 加载各种store模块
|       |-- user.js                  // 用户store
|   |-- template                     // 各种html文件
|       |-- index.html               // 程序入口html文件
|   |-- util                         // 公共的js方法，vue的mixin混合
|   |-- app.vue                      // 页面入口文件
|   |-- main.js                      // 程序入口文件，加载各种公共组件
|-- .babelrc                         // ES6语法编译配置
|-- gulpfile.js                      // 启动，打包，部署，自动化构建
|-- webpack.config.js                // 程序打包配置
|-- server.js                        // 代理服务器配置
|-- README.md                        // 项目说明
|-- package.json                     // 配置项目相关信息，通过执行 npm init 命令创建
.
```

我们配置下我们各自电脑的ssh，步骤如下：

1、新建github账号的 ssh-key
```
ssh-keygen -t rsa -C "yourEmail@blabla.com"

```

2、提示命名key的文件名
```
Generating public/private rsa key pair.
Enter file in which to save the key (/path/to/your/.ssh/id_rsa):
```

起一个容易标识的名字 like :
```
id_rsa_yourName

```

3、复制 .ssh/id_rsa_yourName.pub文件内容到`https://github.com/settings/profile`的`SSH and GPG keys`里面
这样你就可以push啦

4、修改.ssh目录下的config文件（如果没有就新建）
```
# 建一个gitlab别名，新建的帐号使用这个别名做克隆和更新
Host github.com
 HostName github.com
 User git
 IdentityFile ~/.ssh/id_rsa_yourName

 ```
