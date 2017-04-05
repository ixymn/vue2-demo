<style lang="less" scoped>
  .login-form{
    position: relative;
  }
  .login-error{
    width: 100%;
    line-height: .92rem;
    font-size: .44rem;
    text-align: center;
    position: absolute;
    top:-.14rem;
    background: #ff9966;
    color: #fff;
    visibility: hidden;
    opacity: 0;
    transition: visibility 0.5s, opacity 0.5s linear;

    // max-height: 0rem;
    // transition: max-height 1.1s cubic-bezier(1, 0, 0.75, 1);
  }
  .login-error.show{
    visibility: visible;
    opacity: 1;
    // max-height: 13rem;
    // transition: max-height 1.1s cubic-bezier(1, 0, 0.75, 1);
    transition: visibility 0.5s, opacity 0.5s linear;
  }
  .head {
    text-align: center;
    font-size: 0.47222rem;
    padding: 0.44444rem;
    margin-top: .69rem;
  }
	.login {
		padding: 0.41667rem;

		text-align: center;
		.line {
			padding: 0.38889rem 0.06944rem 0.27778rem 0.06944rem;
      margin:0.27778rem;
      border-bottom: 0.01389rem solid #efedfa;
      display: flex;
      align-items: center;
      .fa-icon {
        color: #8585a1;
        width: .67rem;
        height: .67rem;
      }
			input {
				padding: 0 0.22222rem;
				line-height:0.44444rem;
        outline: none;
        border: none;
        width: 90%;
        font-size: .44rem
			}
		}
		button {
			padding: 0 0.55556rem;
			margin: 0.44444rem auto;
			line-height: 1.22222rem;
      height: 1.22222rem;
      background: #a798f8;
      color: #fff;
      border: none;
      border-radius: 0.58333rem;
      width: 98%;
      font-size: 0.44444rem;
		}
	}
</style>
<template>
<div>

    <div class="head"><p>LOG IN</p></div>
  <div class="login-form">
      <div class="login-error" v-bind:class="{ show: isError }">
        <span>User name or password error</span>
      </div>
      <form class="login" v-on:submit.prevent="submit">
  			<div class="line">
          <icon name="user"></icon>
  				<input type="text" placeholder="Username/phone" v-model="form.name" >
  			</div>
  			<div class="line">
          <icon name="lock"></icon>
  				<input type="password" v-on:click="reset" placeholder="password" v-model="form.passwd" >
  			</div>
  			<button>Login</button>
  		</form>
    </div>
    <!-- <mt-loadmore :top-method="loadTop" @top-status-change="handleTopChange" ref="loadmore">
    <ul>
      <li v-for="item in list">{{ item }}</li>
    </ul>
    </mt-loadmore> -->
</div>
</template>
<script>
    import { mapActions } from 'vuex'
    import { USER_SIGNIN } from 'store/userlogin'
    export default {
        data() {
			return {
				btn: false, //true 已经提交过， false没有提交过
				form: {
          isLogin:false,
					name: '',
					passwd: ''
				},
        isError: false,
        networkError:false,
        needVerify:false //修改使得登陆后跳手机验证，真实数据从后台返回
			}
		},
    beforeCreate:function(){
      if(JSON.parse(sessionStorage.getItem('user'))){
        this.$router.replace({ path: '/' })
      }
    },
		methods: {
      ...mapActions([USER_SIGNIN]),
			submit() {
				this.btn = true
        //前台异步处理登录接口
        this.$http.get("http://54.64.140.233:3011/login", {
          params: {
            name: this.form.name,
            passwd: this.form.passwd
          }
        }).then(
          //成功时修改本地数据
          response => {
            if(response.data.state == 200){
              this.form.isLogin = true
            //   state.isLogin = true
            }else {
              this.form.isLogin = false
              this.isError = true
              return
            //   state.isLogin = false
            }
            this.USER_SIGNIN(this.form)
            // actions中处理 USER_SIGNIN 状态，根据状态控制路由

            if(this.needVerify){
              this.$router.replace({ path: '/verify' })
            }else{
              this.$router.replace({ path: '/home' })
            }

        }, response => {
            //networkError
            this.networkError = true;
        })

			},
      reset(){
        this.isError = false;
        this.networkError = false;
      }

		}
    }
</script>
