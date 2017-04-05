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
.dispatch_main{
	margin-top: 0.833333rem;
}

.dispatch_company{
	width: 9.166667rem;
	height: 1.222222rem;
	margin: auto;
	font-size: 0.388889rem;
	color: #8585A1;
	box-shadow: inset 0 -0.013889rem 0 0 #EFEDFA;
}
.dispatch_company>span{
	line-height: 1.222222rem;
}
.dispatch_company>i{
	width: 0.388889rem;
	height: 0.388889rem;
	display: inline-block;
	background-image: url('../images/courier_up.png');
	background-size: 100% 100%;
	margin-top:0.416667rem;
	float: right;
}
.dispatch_company_clicked>i{
	background-image: url('../images/courier_down.png');
}
.dispatch_company_list{
	margin:0.138889rem 0.208333rem;
	font-size: 0.388889rem;
	color: #8585A1;
}
.dispatch_company_list>li{
	display: inline-block;
	width: 2.777778rem;
	height: 0.888889rem;
	line-height: 0.888889rem;
	box-sizing: border-box;
	border: 0.013889rem solid #C4C4D0;
	border-radius: 1.388889rem;
	text-align: center;
	float: left;
	margin:0.138889rem 0.208333rem;
}
.dispatch_company_list>li.dispatch_company_selected{
	border: 0.027778rem solid #7D51FF;
	color: #252436;
}
.dispatch_number{
	width: 9.166667rem;
	height: 1.222222rem;
	margin: auto;
	font-size: 0.444444rem;
	color: #C4C4D0;;
	box-shadow: inset 0 -0.013889rem 0 0 #EFEDFA;
}
.dispatch_number>i{
	display: inline-block;
	width: 0.666667rem;
	height: 0.666667rem;
	margin-top: 0.277778rem;
	background-image: url('../images/waynum_ico.png');
	background-size: 100% 100%;
	float: left;
}
.dispatch_number>input{
	width:8.222222rem;
	height: 1.194444rem;
	margin-left: 0.277778rem;
	border: none;
	float:left;
}
.dispatch_submit{
	margin:1.111111rem auto 0 auto;
	width:9.166667rem;
	height: 1.222222rem;
	background: #A798F8;
	border-radius: 1.388889rem;
	text-align: center;
	font-size: 0.444444rem;
	color: #FFFFFF;
	line-height: 1.222222rem;
}
.enable_submit{
	background: #7D51FF;
	box-shadow: 0 0.138889rem 0.277778rem 0 #D2D2D2;
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
		<div class="dispatch_main">
			<div class="dispatch_company clearfix" :class="{dispatch_company_clicked:isClick}" @click="clickCompany">
				<span>Courier Company</span><i></i>
			</div>
			<div v-show="isClick">
				<ul class="dispatch_company_list clearfix">
					<li @click="selectedCompanyItem(index)" :class="{dispatch_company_selected:companyInfo.isSelected}" v-for="(companyInfo,index) in companyList" :key="companyInfo.id">{{companyInfo.text}}</li>
					
				</ul>
			</div>
			<div class="dispatch_number clearfix" >
				<i></i><input v-model="param.number" type="text" placeholder="Waybill number" @input="verifyNumber">
			</div>
			<div class="dispatch_submit" :class="{enable_submit:isEnableSubmit}">
				SUBMIT
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data:function(){
			return {
				isClick:false,
				companyList:[
					{"id":1,"text":"KiliExpress","isSelected":false},
					{"id":2,"text":"CCES","isSelected":false},
				],
				param:{
					"company":"",
					"number":"",
				},
				isEnableSubmit:false,
			}
		},
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
			clickCompany:function(){
				this.isClick=!this.isClick;
			},
			selectedCompanyItem:function(index){
				this.companyList.forEach((item,i) => {
					i===index?(item.isSelected=true):(item.isSelected=false);
				});
				this.param.company=this.companyList[index].id;
				this.isEnableSubmit=(this.param.number!="")&&(this.param.company!="");
			},
			verifyNumber:function(){
				this.isEnableSubmit=(this.param.number!="")&&(this.param.company!="");
			},
		},
	}
</script>
