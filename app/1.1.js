webpackJsonp([1],{810:function(t,e,i){var o,a;i(811),o=i(813);var n=i(816);a=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(a=o=o.default),"function"==typeof a&&(a=a.options),a.render=n.render,a.staticRenderFns=n.staticRenderFns,a._scopeId="data-v-3e3a2006",t.exports=o},811:function(t,e,i){var o=i(812);"string"==typeof o&&(o=[[t.id,o,""]]);i(13)(o,{});o.locals&&(t.exports=o.locals)},812:function(t,e,i){e=t.exports=i(4)(),e.push([t.id,".login-form[data-v-3e3a2006]{position:relative}.login-error[data-v-3e3a2006]{width:100%;text-align:center;position:absolute;visibility:hidden;background:#f96;color:#fff;opacity:0}.login-error.show[data-v-3e3a2006],.login-error[data-v-3e3a2006]{-webkit-transition:visibility .5s,opacity .5s linear;transition:visibility .5s,opacity .5s linear}.login-error.show[data-v-3e3a2006]{visibility:visible;opacity:1}.head[data-v-3e3a2006]{text-align:center;font-size:20px;padding-top:40px}.login[data-v-3e3a2006]{padding:50px;text-align:center}.login .line[data-v-3e3a2006]{padding:5px}.login .line input[data-v-3e3a2006]{padding:0 10px;line-height:28px}.login button[data-v-3e3a2006]{padding:0 20px;margin-top:20px;line-height:28px}",""])},813:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o])}return t},a=i(814),n=i(815);e.default={data:function(){return{btn:!1,form:{id:"",passwd:""},isError:!1,list:[1,2,3,4,5],topStatus:""}},methods:o({},(0,a.mapActions)([n.USER_SIGNIN]),{handleTopChange:function(t){this.topStatus=t},submit:function(){return this.btn=!0,this.form.id&&this.form.name?(this.USER_SIGNIN(this.form),void this.$router.replace({path:"/home"})):void(this.isError=!0)},reset:function(){this.isError=!1},loadTop:function(){this.list.push(this.list.length+1),this.$refs.loadmore.onTopLoaded()},loadBottom:function(){this.list.push(this.list.length+1),this.allLoaded=!0,this.$refs.loadmore.onBottomLoaded()}})}},816:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t._m(0),t._v(" "),i("div",{staticClass:"login-form"},[i("div",{staticClass:"login-error",class:{show:t.isError}},[t._v("\n        User name or password error\n      ")]),t._v(" "),i("form",{staticClass:"login",on:{submit:function(e){e.preventDefault(),t.submit(e)}}},[i("div",{staticClass:"line"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.id,expression:"form.id"}],attrs:{type:"number",placeholder:"Username/phone"},domProps:{value:t.form.id},on:{input:function(e){e.target.composing||(t.form.id=e.target.value)},blur:function(e){t.$forceUpdate()}}})]),t._v(" "),i("div",{staticClass:"line"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],attrs:{type:"password",placeholder:"password"},domProps:{value:t.form.name},on:{click:t.reset,input:function(e){e.target.composing||(t.form.name=e.target.value)}}})]),t._v(" "),i("button",[t._v("登录")]),t._v(" "),i("icon",{attrs:{name:"camera"}})],1)]),t._v(" "),i("mt-loadmore",{attrs:{"top-method":t.loadTop},on:{"top-status-change":t.handleTopChange}},[i("ul",t._l(t.list,function(e){return i("li",[t._v(t._s(e))])}))])],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"head"},[i("p",[t._v("LOG IN")])])}]}}});