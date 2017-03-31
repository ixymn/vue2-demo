<style lang="less" scoped>
  .verify-form{
    position: relative;
  }
  .verify-hint{
    width: 100%;
    height: 32px;
    line-height: 32px;
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
    font-size: 20px;
    padding-top: 40px;
  }
	.verify {
		padding: 50px;
		text-align: center;
		.line {
			padding: 10px 5px 0 5px;
      border-bottom: 1px solid #efedfa;
      display: flex;
      align-items: center;
      .fa-icon {
        color: #8585a1;
        width: 16px;
        height: 16px;
      }
			input {
				padding: 0 10px;
				line-height: 36px;
        outline: none;
        border: none;
			}
		}
		button {
			padding: 0 20px;
			margin: 32px auto;
			line-height: 44px;
      height: 44px;
      background: #a798f8;
      color: #fff;
      border: none;
      border-radius: 21px;
      width: 98%;
      font-size: 16px;
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
    import { USER_SIGNIN } from 'store/user'

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
