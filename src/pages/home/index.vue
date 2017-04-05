<style lang="less" scoped>
	.orders{
		min-height:100%;
		background:#f0f0f0;
		font-family: Roboto-Regular;
	}
	.ords_head{
		background-image: linear-gradient(-90deg, #8D72FF 0%, #7D51FF 100%);
		width: 10.0rem;
		height: 0.916667rem;
		padding:0.208333rem 0;
	}
	.logout_ico{
		width: 0.666667rem;
		height:0.666667rem;
		position: absolute;
		top:0.333333rem;
		left:0.416667rem;
		background: url("../../images/nav_logout_button.png") no-repeat;
		background-size: 100%;
	}
	.ords_state_btn{
		width: 4.722222rem;
		height: 0.916667rem;
		margin: 0 2.638889rem;
		border-radius: 1.388889rem;
		background: #9070ff;
		font-size: 0.388889rem;
		line-height: 0.388889rem;
		color:white;
	}
	.ords_state{
		display: inline-block;
		width: 2.361111rem;
		height: 0.916667rem;
		border-radius: 1.388889rem;
		float: left;
		text-align: center;
		line-height: 0.916667rem
	}
	.ords_state_active{
		color: #7D51FF;
		background: #FFFFFF;
	}
	
</style>
<template>
	<div class="orders">
		<div class="ords_head">
			<span class="logout_ico"></span>
			<div class="ords_state_btn">
				<span class="ords_state" :class="{ords_state_active: isActive}" @click="changeOrderState(1)">Waiting</span>
				<span class="ords_state" :class="{ords_state_active: !isActive}"
				@click="changeOrderState(2)">Finished</span>
			</div>
		</div>
		<div class="ords_main clearfix">
			<mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore" :auto-fill="false">
				<orderItemComponent v-for="list in lists" :list="list" :isActive="isActive" v-on:dispatchOpen="dispatchOpen" v-on:cancelOpen="cancelOpen"></orderItemComponent>
			</mt-loadmore>
		</div>
		<mt-popup position="right" v-model="popupRightVisible" style="height:100%">
			<dispatchPopup v-on:dispatchClose="dispatchClose" :num="num"></dispatchPopup>
		</mt-popup>
		<mt-popup position="bottom" v-model="popupBottomVisible" style="background:transparent;">
			<cancelPopup v-on:cancelClose="cancelClose" :num="num"></cancelPopup>
		</mt-popup>
	</div>
	
</template>
<script>
    import { mapState } from 'vuex'
    import orderItemComponent from  '../../plugins/order_item.vue'
    import dispatchPopup from '../../plugins/order_dispatch.vue'
    import cancelPopup from '../../plugins/order_cancel.vue'

    export default {
    	data: function () {
			return {
				isActive: false,
				lists: [],
				popupRightVisible:false,
				popupBottomVisible:false,
				num:0,
			}
    	},
    	beforeCreate:function(){
    		this.$http.get("http://54.64.140.233:3011/orderlist").then(response => {
			   	response.data.order.forEach((data)=>{
			   		console.log(data);
			   		this.lists.push(data);
			   	});
			}, response => {
				console.log("error");
				console.log(response);
			})
    	},
    	components:{
    		orderItemComponent,
    		dispatchPopup,
    		cancelPopup,
    	},
        computed: mapState({ user: state => state.user }),
        methods:{
        	changeOrderState:function(state){
        		if(state === 1){//waiting
        			this.isActive=true;
        		}else if(state === 2){//finished
        			this.isActive=false;
        		}
        	},

			loadTop: function () {
				let _this = this;
				setTimeout(function () {
					_this.$refs.loadmore.onTopLoaded();
				}, 1000);
			},
			loadBottom: function () {
				let _this = this;
				setTimeout(function () {
					
					//_this.allLoaded = true;
					_this.$refs.loadmore.onBottomLoaded();
				}, 1000);
			},
			dispatchOpen:function(){
				this.num=arguments[0];
				this.popupRightVisible=true;
			},
			dispatchClose:function(){
				this.popupRightVisible=false;
			},
			cancelOpen:function(){
				this.num=arguments[0];
				this.popupBottomVisible=true;
			},
			cancelClose:function(){
				this.popupBottomVisible=false;
			},
        },
    }
</script>
