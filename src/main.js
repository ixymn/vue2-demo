import Vue from 'vue'
import VueRouter from 'vue-router'
import Icon from 'vue-awesome/components/Icon.vue'
import 'vue-awesome/icons'
import routes from './config/routes'
import store from './store/'
import components from './components/' //加载公共组件


import './css/common.css'
import './less/common.less'

/*flexible.js引入*/
import './static/flexible_css.debug.js'
import './static/flexible.debug.js'

/*mint-ui引入*/
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

Object.keys(components).forEach((key) => {
    var name = key.replace(/(\w)/, (v) => v.toUpperCase()) //首字母大写
    Vue.component(`v${name}`, components[key])
})

Vue.use(VueRouter)
Vue.component('icon', Icon)
const router = new VueRouter({
    routes
})
router.beforeEach(({meta, path}, from, next) => {
    var { auth = true } = meta
    var isLogin = Boolean(store.state.user.id) //true用户已登录， false用户未登录

    if (auth && !isLogin && path !== '/login') {
        return next({ path: '/login' })
    }
    next()
})

new Vue({ store, router }).$mount('#app')
