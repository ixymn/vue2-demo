<style lang="less" scoped>
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
		font-family: Roboto-Regular;
		font-size: 0.388889rem;
		line-height: 0.388889rem;
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
	.ords_state_waiting{
		color: #7D51FF;
		background: #FFFFFF;
	}
	.ords_state_finished{
		color:white;
	}
</style>
<template>
	<div class="orders">
		<div class="ords_head">
			<span class="logout_ico"></span>
			<div class="ords_state_btn">
				<span class="ords_state ords_state_waiting">Waiting</span>
				<span class="ords_state ords_state_finished">Finished</span>
			</div>
		</div>
	</div>

</template>
<script>
    import { mapState } from 'vuex'
    export default {
    	
        computed: mapState({ user: state => state.user }),
    }
</script>
