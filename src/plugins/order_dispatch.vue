<style lang="less" scoped>
.dispatch_header{
	width: 10.0rem;
	height: 1.333333rem;
	text-align: center;
	line-height:  1.333333rem;
}
.close_ico{
	width: 0.666667rem;
	height:0.666667rem;
	position: absolute;
	top:0.333333rem;
	left:0.416667rem;
	background: url("../images/close_popup.png") no-repeat;
	background-size: 100%;
}
.dispatch_title{
	font-size: 0.472222rem;
	color: #252436;
}
</style>
<template>
	<div class="ord_dispatch">
		<div class="dispatch_header">
			<span class="close_ico" @click="dispatchClose"></span>
			<div class="dispatch_title">
				DISPATCH
			</div>
		</div>
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
			dispatchClose:function(){
				this.$emit("dispatchClose");
			},
		},
	}
</script>
