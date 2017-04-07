<style lang="less" scoped>
.login-form{
    position: relative;
}
.login-error{
    width: 100%;
    height: 0.889rem;
    line-height: 0.889rem;
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
.login {
    text-align: center;
    .line {
        position: relative;
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
            padding: 0 0.833rem;
            line-height: 1.0rem;
            outline: none;
            border: none;
            width: 90%
      }
    }
    button {
        padding: 0 20px;
        margin: 32px auto;
        line-height: 1.0rem;
        height: 1.0rem;
        background: #a798f8;
        color: #fff;
        border: none;
        border-radius: 0.583rem;
        width: 98%;
        font-size: 16px;
    }
}
.wrapper{
    padding:0 0.417rem;
}
.chooseCountry{
    height:1.222rem;
    line-height: 1.222rem;
    box-shadow: inset 0 -1px 0 0 #EFEDFA;
    span{
        font-size: 0.389rem;
        color:#8585A1;
    }
}
.countryZone{
    ul{
        padding-top:0.278rem;
        display:flex;
        justify-content:space-between;
        flex-wrap:wrap;
    }
    li{
        // float: left;
        width:2.778rem;
        // height:0.889rem;
        // line-height:0.889rem;
        padding:9px 0;
        // padding: 1.5rem 2rem;
        text-align: center;
        border-radius: 1.389rem;
        border:1px solid #C4C4D0;
        margin-bottom: 0.278rem;
        color:#8585A1;
    }
    .active{
        border: 1px solid #7D51FF;
        color:#000;
    }
}
.sendCode{
    font-size: 14px;
    color: #F87622;
    line-height:1.111rem;
    width:2.611rem;
    position:absolute;
    bottom:0;
    right:0;
    z-index: 10;
}
.sendCode.active{
    color:#8585A1;
}
.skip{
    text-align: center;
    span{
        display:inline-block;
        padding: 0 20px;
        line-height: 1.222rem;
        height: 1.222rem;
        color: #F87622;
        border: none;
        border-radius: 21px;
        width: 38%;
        font-size: 14px;
    }
}
.head {
    position:relative;
    p{
        text-align: center;
        font-size: 20px;
        height:3.2rem;
        line-height: 2.8rem;
    }
}
.loginError{
    width: 100%;
    height: 0.917rem;
    line-height: 0.917rem;
    text-align: center;
    position: absolute;
    bottom:0;
    // display:none;
    visibility:hidden;
    background: #ff9966;
    color: #fff;
    transition: visibility 0.5s, opacity 0.5s linear;
}
.loginSuccess{
    width: 100%;
    height: 0.917rem;
    line-height: 0.917rem;
    text-align: center;
    position: absolute;
    bottom:0;
    // display:none;
    visibility:hidden;
    background: #5DD198;
    color: #fff;
    transition: visibility 0.5s, opacity 0.5s linear;
}
.counFade-enter-active {
  transition: all .3s ease;
}
.counFade-leave-active {
  transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.counFade-enter, .counFade-leave-active {
  transform: translateX(30px);
  opacity: 0;
}

</style>
<template>
<div>
    <div class="head">
        <p>VERIFY MOBILE</p>
        <div class="loginSuccess" v-show="loginSuccess">
            <span>Success</span>
        </div>
        <div class="loginError" v-show="loginError">
            <span>Identifying code wrong!</span>
        </div>
    </div>
    <div class="wrapper">
        <div class="chooseCountry" @click="counToggle=!counToggle">
            <span>Please select a country</span>
        </div>
        <transition name="counFade">
        <div class="countryZone" v-show="counToggle">
            <ul>
                <li @click="chooseCoun(country)" v-for="(country,index) in countries" :class="{active:country.isActive}">
                    {{country.name}}
                </li>
            </ul>
        </div>
        </transition>
        <div class="login-form">
            <form class="login">
                  <div class="line">
              <!-- <icon name="user"></icon> -->
                      <input type="text" placeholder="phone" v-model="form.phone" >
                  </div>
                  <div class="line">
              <!-- <icon name="lock"></icon> -->
                        <input type="text" placeholder="verification code" v-model="form.passwd" >
                        <div class="sendCode" @click="sendCodeClick" v-show="!countNum">SEND</div>
                        <div class="sendCode active" v-show="countNum">Resend in {{countNum}}s</div>
                  </div>
                  <button @click="goSubmit">SUBMIT</button>
                <div class="skip" @click="SKIP"><span>SKIP</span></div>
              </form>
        </div>
    </div>
</div>

</template>
<script>
    // import { mapActions } from 'vuex'
    // import { USER_SIGNIN } from 'store/user'

    export default {
        data(){
            return{
                sendCodeHint:'SEND',
                popupVisible:true,
                form:{
                    phone:'',
                    verCode:'',
                    zoneCode:''
                },
                countries:[
                    {
                        name:'Kenya',
                        zoneCode:1,
                        isActive:false
                    },
                    {
                        name:'Uganda',
                        zoneCode:2,
                        isActive:false
                    },
                    {
                        name:'Nigeria',
                        zoneCode:3,
                        isActive:false
                    },
                    {
                        name:'China',
                        zoneCode:4,
                        isActive:false
                    }
                ],
                verifyCode:true,
                loginSuccess:true,
                loginError:false,
                counToggle:false,
                countNum:''
            }
        },
        methods:{
            sendCodeClick(){
                this.countNum = 3;
                var THIS = this;
                var countDown = setInterval(countDownF,1000);
                function countDownF(){
                    THIS.countNum--;
                    if(THIS.countNum ===0){
                        clearInterval(countDown)
                    }
                }
            },
            SKIP(){
              this.$router.replace({ path: '/home' })
            },
            goSubmit(){
                alert(9);
                return false;
            },
            chooseCoun(country){
                for(var i in this.countries){
                    this.countries[i].isActive = false;
                }
                country.isActive=true
            },
            loadTop: function () {
                let _this = this;
                setTimeout(function () {
                    _this.$refs.loadmore.onTopLoaded();
                    let i = _this.list[0] - 1;
                    _this.list.unshift(i);
                }, 1000);
            },
            loadBottom: function () {
                let _this = this;
                setTimeout(function () {
                    let i = _this.list[_this.list.length - 1] + 1;
                    _this.list.push(i);
                    //_this.allLoaded = true;
                    _this.$refs.loadmore.onBottomLoaded();
                }, 1000);
            }

        },
        created(){
            var url = 'http://54.64.140.233:3011/orderlist';
            this.$http.get(url).then(result=>{
                console.log(result.data.order)
            },result=>{
                // alert('连接失败');
            });
        },
    }
</script>
