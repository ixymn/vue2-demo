<style lang="less" scoped>
	.ords_box{
		width:9.444444rem;
		background: #FFFFFF;
		box-shadow: 0 0.083333rem 0.277778rem 0 #D2D2D2;
		border-radius: 0.111111rem;
		margin:0.416667rem auto;
	}
	.ord_no{
		width: 8.611111rem;
		height: 1.166667rem;
		margin:0 auto;
		font-size: 0.333333rem;
		color: #8585A1;
		line-height: 1.166667rem;
		box-shadow: inset 0 -0.013889rem 0 0 #EFEDFA;
	}
	.ord_dispatch_state{
		float:right;
		color:#F87622;
	}
	.ord_send_info{
		width: 8.611111rem;
		margin:0 auto;
		padding:0.416667rem 0;
		box-shadow: inset 0 -0.013889rem 0 0 #EFEDFA;
	}
	.ord_send_info{
		font-size: 0.388889rem;
		color: #252436;
	}
	.ord_send_addr{
		margin-top:0.277778rem;
	}
	.ord_line{
		background: url("../images/order_line.png");
		background-color:#f0f0f0;
		height: 0.5rem;
		background-size: 100% 100%;
		margin:0 -0.277778rem;
	}
	.ord_line>p{
		width: 8.611111rem;
		box-shadow: inset 0 -0.013889rem 0 0 #EFEDFA;
		height: 50%;
		margin:0 auto;
	}
	.ord_send_message{
		width: 8.611111rem;
		margin:0.416667rem auto;
		font-size:0.388889rem;
		color: #131218;
		line-height: 0.388889rem;
	}
	.ord_send_message>span{
		color:#8585A1;
	}
	.ord_view_more{
		padding-bottom: 0.347222rem;
		margin-top:-0.027778rem;
		box-shadow: inset 0 -0.013889rem 0 0 #EFEDFA;
	}
	.ord_view_more_btn{
		width: 6.944444rem;
		height: 0.527778rem;
		text-align: center;
		background: #EFEDFA;
		border-radius: 1.388889rem;
		line-height: 0.527778rem;
		font-size: 0.277778rem;
		color: #8585A1;
		margin:0 auto;
	}
	.ord_view_more_btn>i{
		width: 0.25rem;
		height: 0.25rem;
		display: inline-block;
		background-image: url('../images/view_more.png');
		background-size: 100% 100%;
		margin-left: 0.083333rem;
	}
	.view_active>i{
		background-image: url('../images/view_less.png');
	}
	.ord_money{
		width: 8.611111rem;
		height: 1.805556rem;
		box-shadow: inset 0 -0.013889rem 0 0 #EFEDFA;
		margin:0 auto;
	}
	.ord_money_title{
		float: left;
		font-size: 0.444444rem;
		color: #252436;
		height: 1.805556rem;
		line-height: 1.805556rem;
	}
	.ord_money_info{
		float: right;

	}
	.ord_money_info p:first-child{
		font-size: 0.5rem;
		color: #7D51FF;
		margin-top:0.416667rem;
		margin-bottom: 0.138889rem;
	}
	.ord_money_info p:last-child{
		font-size: 0.333333rem;
		color: #8585A1;
	}
	.ord_action{
		width: 8.611111rem;
		height: 1.805556rem;
		margin: auto;
	}
	.ord_btn{
		width: 3.055556rem;
		height: 0.972222rem;
		line-height: 0.972222rem;
		text-align: center;
		font-size: 0.388889rem;
		color: #7D51FF;
		margin: 0.416667rem 0;
		float: right;
	}
	.ord_dispatch_btn{
		background: #7D51FF;
		box-shadow: 0 0.055556rem 0.111111rem 0 #D2D2D2;
		border-radius: 1.388889rem;
		color:white;
	}
	.ord_detail{
		width: 8.611111rem;
		margin:auto;
		padding-top:0.416667rem;
		box-shadow: inset 0 0.013889rem 0 0 #EFEDFA, inset 0 -0.013889rem 0 0 #EFEDFA;
	}
	.ord_detail_product{
		padding-bottom: 0.416667rem;
	}
	.ord_detail_left{
		float: left;
		width: 6.111111rem;
	}
	.ord_detail_left p:first-child{
		margin-bottom:0.138889rem;
	}
	.ord_detail_right{
		float: right;
		width: 2.361111rem;
	}
	.ord_detail_right p:first-child{
		margin-bottom:0.138889rem;
	}
	.ord_bft{
		font-size: 0.333333rem;
		color: #252436;
	}
	.ord_gft{
		font-size: 0.333333rem;
		color: #8585A1;
	}
	.ord_money_detail{
		width: 8.611111rem;
		margin:auto;
		padding:0.138889rem 0;
		box-shadow: inset 0 0.013889rem 0 0 #EFEDFA, inset 0 -0.013889rem 0 0 #EFEDFA;
	}
	.ord_money_detail>div{
		margin: 0.277778rem 0;
	}
	
</style>
<template>
	<div class="ords_box">
		<p class="ord_no">
			<span>Order No.{{list.number}}</span>
			<span class="ord_dispatch_state">Pending Dispatch</span>
		</p>
		<div class="ord_send_info">
			<p>Devin Cai  0728241313</p>
			<p class="ord_send_addr">Nairobi mayfairsuites,1st floor parklands rd Westland</p>
		</div>
		<div class="ord_send_message">
			<span>Message</span>: {{list.msg}}
		</div>
		<div class="ord_line">
			<p></p>
		</div>
		<div class="ord_view_more">
			<div class="ord_view_more_btn" :class="{view_active:isViewActive}" @click="viewClick">{{isViewActive?"VIEW LESS":"VIEW MORE"}}<i></i></div>
		</div>
		<div v-show="isViewActive">
			<div class="ord_detail">
				<div class="ord_detail_product clearfix" v-for="good in list.goods">
					<div class="ord_detail_left">
						<p class="ord_bft textLeft">{{good.goods_name}}</p>
						<p class="ord_gft textLeft">
							<span v-for="(spec,index) in good.spec">{{index}}:{{spec}}{{(index == (good.spec.length-1))?"":";"}}</span>
						</p>
					</div>
					<div class="ord_detail_right">
						<p class="ord_bft textRight">{{good.goods_price}}</p>
						<p class="ord_gft textRight">×1</p>
					</div>
				</div>
				
			</div>
			<div class="ord_money_detail" >
				<div class="clearfix">
					<span class="ord_gft fLeft">Commission</span>
					<span class="ord_bft fRight">5997.00 *15%=900</span>
				</div>
				<div class="clearfix">
					<span class="ord_gft fLeft">Vouchers</span>
					<span class="ord_bft fRight">199</span>
				</div>
				<div class="clearfix">
					<span class="ord_gft fLeft">Postage</span>
					<span class="ord_bft fRight">199</span>
				</div>
			</div>
		</div>
		<div class="ord_money clearfix">
			<div class="ord_money_title">
				Total Order
			</div>
			<div class="ord_money_info">
				<p class="textRight">{{list.value}}</p>
				<p>Online Payment</p>
			</div>
		</div>
		<div class="ord_action clearfix">
			<div class="ord_btn ord_dispatch_btn" @click="dispatchOpen()">DISPATCH</div>
			<div class="ord_btn ord_cancel_btn" @click="cancelOpen()">CANCEL</div>
		</div>
	</div>
</template>
<script>
	
    export default {
    	data:function(){
    		return{
    			isViewActive:false,
    		}
    	},
    	props: {
    		list:{
    			type:Object,
    			required:true,
    		},
    		isActive:{
    			type:Boolean,
    			required:true,
    		},
    	},
    	methods:{
    		viewClick:function(){
    			this.isViewActive=!this.isViewActive;
    			console.log(this.list.msg);
    		},
    		dispatchOpen:function(){
    			this.$emit("dispatchOpen",this.list.number);
    		},
    		cancelOpen:function(){
    			this.$emit("cancelOpen",this.list.number);
    		}
    	},
    }
</script>
