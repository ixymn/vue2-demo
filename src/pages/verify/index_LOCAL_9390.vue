<style lang="less" scoped>
  .verify-form{
    position: relative;
  }
  .verify-hint{
    width: 100%;
    height: 0.44444rem;
    line-height: 0.44444rem;
    text-align: center;
    position: absolute;
    visibility: hidden;
    background: #ff9966;
    color: #fff;
    opacity: 0;
    transition: visibility 0.5s, opacity 0.5s linear;
  }
  .verify-hint.show{
    visibility: visible;
    opacity: 1;
    transition: visibility 0.5s, opacity 0.5s linear;
  }
  .head {
    text-align: center;
    font-size: 0.47222rem;
    padding-top: 0.44444rem;
  }
	.verify {
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
        width: 0.44444rem;
        height: 0.44444rem;
      }
			input {
				padding: 0 0.22222rem;
				line-height: 0.44444rem;
        outline: none;
        border: none;
        width: 90%;
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
  <div class="head"><p>VERIFY MOBILE</p></div>
  <div class="verify-form">
      <div class="verify-hint" v-bind:class="{ show: isShow }">
        User name or password error
      </div>
      <div class="verify" >
        <div class="line">
          <div class="select-title">Please select a country <icon name="arrow"></icon></div>
          <ul class="country-list"></ul>
        </div>
  			<div class="line">
          <icon name="user"></icon>
  				<input type="number" placeholder="Username/phone" v-model="verify.phone" >
  			</div>
  			<div class="line">
          <icon name="lock"></icon>
  				<input type="password" v-on:click="reset" placeholder="password" v-model="verify.code" >
  			</div>
  			<button @="submit">Login</button>
  		</div>
    </div>
</div>
</template>
<script>
    import { mapActions } from 'vuex'
    import { USER_SIGNIN } from 'store/userlogin'

    export default {
        data() {
			return {
				btn: false, //true 已经提交过， false没有提交过
				verify: {
					phone: '',
					passwd: '',
          country:''
				},
        isError: false,
        list:[1,2,3,4,5],
        topStatus: ''
			}
		},
		methods: {
			submit() {
				this.btn = true
				if(!this.form.id || !this.form.name) {
          this.isError = true;
          return
        }
				this.USER_SIGNIN(this.form)
        // actions中处理 USER_SIGNIN
				this.$router.replace({ path: '/home' })
			},


		}
    }
</script>
