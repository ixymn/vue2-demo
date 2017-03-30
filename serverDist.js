const Webpack = require("webpack")
const WebpackDevServer = require('webpack-dev-server')
const webpackDevMiddleware = require('webpack-dev-middleware')
const IS_ENV = process.env.NODE_ENV == 'production'


var express = require('express'),
    path = require('path')

var app =express()
app.use(express.static(path.join(__dirname, '')));

app.listen(3010, function () {
    console.log('App (production) is now running on port 3010! Hit http://127.0.0.1:3010/app/#/ ');
});
