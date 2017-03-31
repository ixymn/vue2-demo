更新了npm script ，用法如下

'''
npm run dev
'''
使用的是webpack dev server，启用了热更新，即改即生效

'''
npm run dev:dist
'''
打包生成静态文件在app文件夹下

'''
npm run dist
'''
使用express加载刚刚打包的静态文件，这相当于是正式的生产环境访问静态文件的形式
