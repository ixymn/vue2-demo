<style lang="less" scoped>
.ord_cancel{
	width:9.166667rem;
	height: 8.333333rem;
	box-shadow: inset 0 -0.013889rem 0 0 #EFEDFA;
	border-radius: 0.277778rem;
	text-align: center;
	margin-bottom:0.416667rem;
	background: #fff;
}
.cancel_header{
	font-size: 0.472222rem;
	color: #252436;
	padding-top: 0.555556rem;
}
.cancel_main{
	width: 8.055556rem;
	margin:0.625rem auto 0 auto;
}
.cancel_main>li{
	display: inline-block;
	box-sizing: border-box;
	text-align: center;
	width: 3.888889rem;
	height: 0.888889rem;
	line-height: 0.888889rem;
	border: 0.013889rem solid #C4C4D0;
	border-radius: 1.388889rem; 
	font-size: 0.388889rem;
	color: #8585A1;
	float: left;
	margin:0.208333rem 0;
}
.cancel_main>li:nth-child(even){
	float: right;
}
.cancel_com_btn{
	width: 5.555556rem;
	height: 1.222222rem;
	text-align: center;
	font-size: 0.444444rem;
	line-height: 1.222222rem;
	margin: auto;
}
.cancel_btn{
	background: #A798F8;
	border-radius: 1.388889rem;
	color: #FFFFFF;
	margin-top:0.666667rem;
}
.nosure_btn{
	color: #7D51FF;
	margin-top:0.277778rem;
}
.cancel_main .focus{
	border: 0.027778rem solid #7D51FF;
	color: #252436;
}
.enable_btn{
	background: #7D51FF;
	box-shadow: 0 0.138889rem 0.277778rem 0 #D2D2D2;
}
</style>
<template>
	<div class="ord_cancel">
		<p class="cancel_header">
			Reason for canceling 
		</p>
		<ul class="cancel_main clearfix">
			<li v-for="reason in reasonData" :class="{focus:reason.focus}" @click="focusReason(reason.id)">
				{{reason.text}}
			</li>
		</ul>
		<div class="cancel_com_btn cancel_btn" :class="{enable_btn:isEnable}">CANCEL</div>
		<div class="cancel_com_btn nosure_btn" @click="cancelClose">NOT SURE</div>
	</div>
</template>
<script>
	export default {
		data:()=>{
			return{
				isEnable:false,
				reasonData:[
					{"id":1,"text":"Out of stock","focus":false},
					{"id":2,"text":"Not a valid order","focus":false},
					{"id":3,"text":"Not a valid goods","focus":false},
					{"id":4,"text":"Other reasons","focus":false},
				],
			}
		},
		props:{
			num:{
				type:Number,
				required:true,
			},
		},
		methods:{
			cancelClose:function(){
				this.$emit("cancelClose");
			},
			focusReason:function(id){
				this.reasonData.forEach(function(reason){
					id===reason.id?reason.focus=true:reason.focus=false;
				});
				this.isEnable=true;
			}
		},
	}
</script>
