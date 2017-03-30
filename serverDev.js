const Webpack = require("webpack")
const WebpackDevServer = require('webpack-dev-server')
const webpackDevMiddleware = require('webpack-dev-middleware')
const IS_ENV = process.env.NODE_ENV == 'production'


var express = require('express'),
    path = require('path')

const webpackConfig = require("./webpack.config")
const config = require('./config/')

var compiler = Webpack(webpackConfig)

var server = new WebpackDevServer(compiler, {
    publicPath: config.publicPath,
    stats: {
        colors: true //显示不同的颜色区分打包的文件
    },
    proxy: { //代理服务器
        '*': {
            target: config.target,
            changeOrigin: true
        }
    }
})

server.listen(3010, (err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('http://localhost:3010' + config.publicPath)
})


// var app =express()
// app.use(express.static(path.join(__dirname, '')));
//
// app.listen(3010, function () {
//     console.log('App (production) is now running on port 3010! Hit http://127.0.0.1:3010/app/#/ ');
// });
