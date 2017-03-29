const Webpack = require("webpack")
const WebpackDevServer = require('webpack-dev-server')
const webpackDevMiddleware = require('webpack-dev-middleware')

var express = require('express'),
    path = require('path')

const webpackConfig = require("./webpack.config")
const config = require('./config/')

var compiler = Webpack(webpackConfig)
var app = express();



// console.log(compiler);
// var server = new WebpackDevServer(compiler, {
//     publicPath: config.publicPath,
//     stats: {
//         colors: true //显示不同的颜色区分打包的文件
//     },
//     proxy: { //代理服务器
//         '*': {
//             target: config.target,
//             changeOrigin: true
//         }
//     }
// })
//
// app.use(webpackDevMiddleware(compiler, {
//     // public path should be the same with webpack config
//     publicPath: config.publicPath,
//     noInfo: true,
//     stats: {
//         colors: true
//     }
// }));
// //app.use(webpackHotMiddleware(compiler));
//
// var server = http.createServer(app);
// server.listen(3010, (err) => {
//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log('http://localhost:3010' + config.publicPath)
// })
app.use(express.static(path.join(__dirname, '')));
//require('./server/routes')(app);
app.listen(3010, function () {
    console.log('App (production) is now running on port 3010! Hit http://127.0.0.1:3010/app/#/ ');
});
