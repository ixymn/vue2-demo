webpackJsonp([4],{827:function(t,e,n){var r,o;n(828),r=n(830);var s=n(832);o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(o=r=r.default),"function"==typeof o&&(o=o.options),o.render=s.render,o.staticRenderFns=s.staticRenderFns,o._scopeId="data-v-4fdb8bb4",t.exports=r},828:function(t,e,n){var r=n(829);"string"==typeof r&&(r=[[t.id,r,""]]);n(13)(r,{});r.locals&&(t.exports=r.locals)},829:function(t,e,n){e=t.exports=n(4)(),e.push([t.id,".login-msg[data-v-4fdb8bb4],.msg[data-v-4fdb8bb4]{padding:50px;text-align:center}.msg[data-v-4fdb8bb4]{font-size:20px;color:red}",""])},830:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(814),s=n(831),a=r(s);e.default={data:function(){return{logo:a.default}},computed:(0,o.mapState)({user:function(t){return t.user}})}},831:function(t,e,n){t.exports=n.p+"logo.png"},832:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-header",{attrs:{title:"首页"}},[t.user.id?n("router-link",{attrs:{to:"/home"},slot:"right"},[t._v(t._s(t.user.name))]):t._e()],1),t._v(" "),t.user.id?t._e():n("div",{staticClass:"login-msg"},[n("router-link",{attrs:{to:"/login"}},[t._v("你还未登录，请先登录")])],1),t._v(" "),t.user.id?n("div",{staticClass:"msg"},[n("img",{attrs:{width:"50",src:t.logo,alt:""}}),t._v(" "),n("br"),t._v("\n\t\t哈哈，恭喜你已经入坑Vue2\n\t")]):t._e()],1)},staticRenderFns:[]}}});