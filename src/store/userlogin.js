import Vue from 'vue'
import axios from 'axios'

export const USER_SIGNIN = 'USER_SIGNIN' //登录成功
export const USER_SIGNOUT = 'USER_SIGNOUT' //退出登录

export default {
    state: {
      isLogin:false,
      user:JSON.parse(sessionStorage.getItem('user')) || {}
    },
    mutations: {
        [USER_SIGNIN](state, user) {
          if(user.isLogin){
            state.isLogin = true;
            sessionStorage.setItem('user', JSON.stringify(user))
            Object.assign(state, user)
          }else{
            state.isLogin = false;
          }
        },
        [USER_SIGNOUT](state) {
            sessionStorage.removeItem('user')
            Object.keys(state).forEach(k => Vue.delete(state, k))
        }
    },
    actions: {
        [USER_SIGNIN]({commit}, user) {
            commit(USER_SIGNIN,user)
        },
        [USER_SIGNOUT]({commit}) {
            commit(USER_SIGNOUT)
        }
    }
}
