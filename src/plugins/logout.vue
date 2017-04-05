<style lang="less" scoped>
.logout{
	width: 9.166667rem;
	height: 6.027778rem;
	background: #FFFFFF;
	box-shadow: inset 0 -0.013889rem 0 0 #EFEDFA;
	border-radius: 0.277778rem;
	margin-bottom: 0.416667rem;
}
.logout_header{
	padding-top: 0.972222rem;
	font-size: 0.472222rem;
	color: #252436;
	text-align: center;
}
.logout_com_btn{
	width: 5.555556rem;
	height: 1.222222rem;
	line-height: 1.222222rem;
	text-align: center;
	font-size: 0.444444rem;
	border-radius: 1.388889rem;
	margin:auto;
}
.logout_btn{
	margin-top:1.388889rem;
	background: #7D51FF;
	box-shadow: 0 0.138889rem 0.277778rem 0 #D2D2D2;	
	color:white;
}
.cancel_btn{
	color: #7D51FF;
	margin-top:0.277778rem;
}
</style>
<template>
	<div class="logout">
		<p class="logout_header">
			Are you sure you want to logout?
		</p>
	
		<div class="logout_com_btn logout_btn" >LOG OUT</div>
		<div class="logout_com_btn cancel_btn" @click="logoutClose">NOT SURE</div>
	</div>
</template>
<script>
	export default {
		props:{
			num:{
				type:Number,
				required:true,
			},
		},
		methods:{
			logoutClose:function(){
				this.$emit("logoutClose");
			},
		},
	}
</script>
