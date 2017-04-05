<style lang="less" scoped>
.ord_cancel{
	width:8.333333rem;
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
</style>
<template>
	<div class="ord_cancel">
		<p class="cancel_header">
			Reason for canceling 
		</p>
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
			cancelClose:function(){
				this.$emit("cancelClose");
			},
		},
	}
</script>
