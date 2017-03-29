<style lang="less" scoped>
  .login-form{
    position: relative;
  }
  .login-error{
    width: 100%;
    text-align: center;
    position: absolute;
    visibility: hidden;
    background: #ff9966;
    color: #fff;
    opacity: 0;
    transition: visibility 0.5s, opacity 0.5s linear;
  }
  .login-error.show{
    visibility: visible;
    opacity: 1;
    transition: visibility 0.5s, opacity 0.5s linear;
  }
  .head {
    text-align: center;
    font-size: 20px;
    padding-top: 40px;
  }
	.login {
		padding: 50px;
		text-align: center;
		.line {
			padding: 5px;
			input {
				padding: 0 10px;
				line-height: 28px;
			}
		}
		button {
			padding: 0 20px;
			margin-top: 20px;
			line-height: 28px;
		}
	}
</style>
<template>
	<div>

    <div class="head"><p>LOG IN</p></div>
    <div class="login-form">
      <div class="login-error" v-bind:class="{ show: isError }">
        User name or password error
      </div>
      <form class="login" v-on:submit.prevent="submit">
  			<div class="line">
  				<input type="number" placeholder="Username/phone" v-model="form.id" >
  			</div>
  			<div class="line">
  				<input type="password" v-on:click="reset" placeholder="password" v-model="form.passwd" >
  			</div>
  			<button>登录</button>
  		</form>
    </div>

	</div>
</template>
<script>
    import { mapActions } from 'vuex'
    import { USER_SIGNIN } from 'store/user'

    export default {
        data() {
			return {
				btn: false, //true 已经提交过， false没有提交过
				form: {
					id: '',
					passwd: ''
				},
        isError: false,
			}
		},
		methods: {
            ...mapActions([USER_SIGNIN]),
			submit() {
				this.btn = true
				if(!this.form.id || !this.form.passwd) {
          this.isError = true;
          return
        }
				this.USER_SIGNIN(this.form)
        // actions中处理 USER_SIGNIN
				this.$router.replace({ path: '/home' })
			},
      reset(){
        this.isError = false;
      }
		}
    }
</script>
