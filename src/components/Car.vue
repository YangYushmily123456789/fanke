<template>
	<div id="wrap_car1">
		<div class="topTitle">
			<router-link to="home"><span class="topBack"></span></router-link>
			<span class="curTitle">购物车</span>
		</div>

		<!-- 购物之后 -->
		<div class="others-content1">
			<div class="shoppingCar-wrap normalShopping">
				<div class="ptype">
					<span>在售商品：</span>
					<a href="javascript:void(0)" class="nocheck">全不选</a>
					<a href="javascript:void(0)" class="delete">删除</a>
				</div>

				<div class="shoppingCar" id="car_0">
					<div class="car-settle-product-item">
						<input type="checkbox" name="" checked="checked">
						<a href="javascript:void(0)" class="checkk">
							<img src="../assets/img/6375656-1j201710130915342876.jpg">
						</a>
				
						<div class="car-settle-pi-r" v-for="item in orderList">
							<a href="javascript:void(0)">{{item.name}}</a>
							<p class="choose-num">
								<span class="product-color">颜色: 蓝色&nbsp;&nbsp;&nbsp;&nbsp;尺码: M</span>
								<span class="del-car"></span>
							</p>
							<p class="choose-num">
								<span class="p-money">￥&nbsp;{{item.price}}</span>
								<span class="reduce" @click="minus(item)"></span>
								<span class="num">{{item.num}}</span>
								<span class="plus" @click="add(item)"></span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- 底部 -->
		<div class="zhifu" style="margin-top:3rem;">
			<button id="paylist" @click="paylist()">支付列表</button>
	        <button id="wx" @click="wx()">微信支付</button>
	        <button id="alipay" @click="paylist()">支付宝支付</button>
		</div>
		<div class="final-info"> 
			<form action="/ShoppingCar/Settlement" class="total-price-f,clear" method="post" name=""> 
				<div class="pay-money-info"> 
					<p class="total-price">
						需支付:
						<span class="red-w" id="totalPrice">¥&nbsp;{{totalMoney}}</span>
					</p>
					<p> </p>
					<p class="total-amount-discount"> 
						<span>总金额:</span>
						<span id="totalAmount">¥&nbsp;{{totalMoney}}</span> 
						<span>已优惠:</span>
						<span id="totalDiscount">¥&nbsp;0.00</span> 
					</p> 
				</div>
				<div class="settlement" v-for="(item , index) in orderList"> 
					<input type="hidden" value="15772064" id="hidSelectedSku" name="Sku"> 
					<p id="btnSubmit" class="set-btn red-bg" > 结算 {{item.num}} </p> 
				</div> 
			</form> 
			<input type="hidden" id="VeClientType" value="New"> 
		</div>
	</div>
</template>

<script>
	export default {
		mounted : function(){
			this.orderList = this.$store.getters.getOrderList;
		},
		data(){
			return {
				orderList : []
			}
		},
		computed : {
			totalMoney(){
				var totalMoney = 0;
				this.orderList.forEach((n) => {
					totalMoney += n.num * n.price;
				})
				return totalMoney;
			}
		},
		methods : {
			add(item){
				item.num++;
				this.$store.dispatch("addOrder" , item);
			},
			minus(item,index){
				if (item.num > 0){
					item.num--;
					this.$store.dispatch("addOrder" , item);
				}
				if (item.num == 0){
					this.orderList.splice(index , 1)
				}
			},
			 paylist:function(e){
		        FUQIANLA.init({
		            'appId': 'bm5ZHRTdvb89KYD1B6xg0Q', //应用ID号
		            'merchId': 'm1604080001', //商户号
		            'orderId': Date.now(), //订单号，此处为模拟订单号。具体以接入为准
		            'channel': 'ali_pay_wap,wx_pay_pub,bd_pay_wap,jd_pay_wap,yb_pay_wap', //开通的通道简称
		            'amount': '0.01', //支付金额
		            'subject': 'h5测试数据', //商品标题
		            'notifyUrl': 'http://fuqian.la', //异步支付结果通知地址
		            'extra':{
		                'wx_pay_pub': {
		                    'openid': 'wx123sdfaf'
		                },
		                'jd_pay_wap': {
		                    'return_url': 'http://fuqian.la'
		                },
		                'yb_pay_wap': {
		                    'productcatalog': 30,
		                    'identityid': '18612889999'
		                }
		            }
		        })
		    },

		    
		    wx:function(e){
		        FUQIANLA.init({
		            'appId': 'bm5ZHRTdvb89KYD1B6xg0Q', //应用ID号
		            'merchId': 'm1604080001', //商户号
		            'orderId': Date.now(), //订单号，此处为模拟订单号。具体以接入为准
		            'channel': 'wx_pay_pub', //开通的通道简称
		            'amount': '0.01', //支付金额
		            'subject': 'h5测试数据', //商品标题
		            'notifyUrl': 'http://fuqian.la', //异步支付结果通知地址
		            'extra':{
		                'openid': 'wx123sdfaf'
		            }
		        })
		    },

		    alipay:function(e){
		        FUQIANLA.init({
		            'appId': 'bm5ZHRTdvb89KYD1B6xg0Q', //应用ID号
		            'merchId': 'm1604080001', //商户号
		            'orderId': Date.now(), //订单号，此处为模拟订单号。具体以接入为准
		            'channel': 'ali_pay_wap', //开通的通道简称
		            'amount': '0.01', //支付金额
		            'subject': 'h5测试数据', //商品标题
		            'notifyUrl': 'http://fuqian.la' //异步支付结果通知地址
		        });
		    }
		}
	}
</script>

<style>
/******** 购物之后 ***********/
.zhifu{
	width: 100%;
}
.zhifu button{
	width: 3rem;
	float: left;
	height: .4rem;
	background: #a40e0e;
	display: block;
	border: none;
	margin: 0 auto;
	color: #fff;
	font-size: .16rem;
	margin-top: .1rem;
	margin-left: .35rem;
	border-radius: .05rem;
}
*{
	margin: 0;
	padding: 0;
}
html{
	font-size: 100px;
}
body{
	/*background: #f4f4f4;*/
	font-size: .14rem;
	color: #333;
	font-family: "Helvetica Neue",Helvetica,STHeiTi,sans-serif;
}
ol,ul{
	list-style: none;
}
img{
	outline: 0;
	resize: none;
	vertical-align: middle;
}
a{
	color: #999;
	text-decoration: none;
}
a:hover{
	color: #999;
}
input{
	outline: none;
}
/******** 购物之后 ***********/
#wrap_car1{
	width: 100%;
	min-height: 100%;
	background: #fff;
}
#wrap_car1 .topTitle{
	width: 100%;
	height: .48rem;
	background: #b81c22;
	text-align: center;
	line-height: .48rem;
	color: #fff;
	font-size: .15rem;
	position: relative;
}
#wrap_car1 .topBack{
	top: 50%;
	left: .2rem;
	position: absolute;
	width: .14rem;
	height: .14rem;
	border-bottom: 2px solid #fff;
	border-left: 2px solid #fff;
	cursor: pointer;
	transform: translateY(-50%) rotate(45deg);
}
#wrap_car1 .others-content1{
	width: 100%;
	height: 100%;
	background: #fff;
	margin-bottom: .425rem;
}
#wrap_car1 .shoppingCar-wrap{
	background: #fff;
	padding: 0rem .2rem;
	color: #4c4c4c;
}
#wrap_car1 .ptype{
	margin-top: .03rem;
}
#wrap_car1 .ptype span{
	float: left;
	font-size: .1rem;
}
#wrap_car1 .ptype a{
	font-size: .1rem;
	float: left;
	width: .36rem;
	height: .2078rem;
	display: inline-block;
	color: #fff;
	background: #b81c22;
	line-height: .2078rem;
	border-radius: .02rem;
	text-align: center;
}
#wrap_car1 .nocheck{
	margin-left: 55%;
}
#wrap_car1 .delete{
	margin-left: 3%;
}
#wrap_car1 .car-settle-product-item{
	padding: .1rem 0rem;
	border-bottom: 1px solid #e3e3e3;
	position: relative;
}
#wrap_car1 .car-settle-product-item input[type='checkbox']{
	position: absolute;
	vertical-align: middle;
	z-index: 2;
	width: .2rem;
	height: .2rem;
	top: .6rem;
	left: -4%;
}
#wrap_car1 .car-settle-product-item img{
	width: .84rem;
	height: .84rem;
}
#wrap_car1 .car-settle-product-item .checkk{
	float: left;
	margin-left: 3%;
	margin-top: .1rem;
}
#wrap_car1 .car-settle-pi-r a{
	color: #4c4c4c;
	font-size: .1rem;
	display: inline-block;
	margin-top: .1rem;
}
#wrap_car1 .choose-num{
	font-size: .12rem;
	margin-top: .08rem;
	/*vertical-align: middle;*/
}
#wrap_car1 .choose-num .p-money{
	color: #b81c22;
	line-height: .23rem;
}
#wrap_car1 .choose-num .reduce{
	width: .2759rem;
	height: .2759rem;
	display: inline-block;
	background: url(../assets/img/reduce.png) no-repeat center center;
	background-size: .2759rem .2759rem; 
	margin-left: .1rem;
	vertical-align: middle;
}
#wrap_car1 .choose-num .num{
	width: .3rem;
	height: .232rem;
	display: inline-block;
	vertical-align: middle;
	border: 1px solid #cdcdcd;
	border-radius: 3px;
	text-align: center;
	line-height: .232rem;
}
#wrap_car1 .choose-num .plus{
	width: .2759rem;
	height: .2759rem;
	display: inline-block;
	background: url(../assets/img/n-plus.png) no-repeat center center;
	background-size: .2759rem .2759rem; 
	/*margin-left: .1rem;*/
	vertical-align: middle;
}
#wrap_car1 .del-car{
	width: .225rem;
	height: .225rem;
	display: inline-block;
	background: url(../assets/img/del-car.png) no-repeat center;
	position: absolute;
	top: .6rem;
	right: 0;
	background-size: .225rem .225rem;
}
#wrap_car1 .final-info {
    padding: 0.05rem 0;
    max-width: 640px;
    width: 100%;
    position: fixed;
    bottom: 0;
    z-index: 2;
    background-color: #f5f5f5;
    border-top: 1px solid #999;
}
#wrap_car1 .pay-money-info {
    float: left;
    margin-left: .2rem;
}
#wrap_car1 .total-price {
    font-size: .14rem;
}
#wrap_car1 .red-w{
	color: #b81c22;
}
#wrap_car1 .total-amount-discount{
	font-size: .1rem;
}
#wrap_car1 .settlement {
    position: absolute;
    top: 50%;
    right: 6%;
    transform: translateY(-50%);
}
#wrap_car1 .set-btn {
    padding: 0.06rem .12rem;
  	appearance: none;
    border-radius: 0;
    border-radius: 0;
    border-radius: 0;
    font-size: .14rem;
    font-weight: bolder;
}
#wrap_car1 .red-bg {
    background-color: #b81c22;
    color: #fff;
    border: 1px solid #b81b22;
    /*border-radius: 3px;*/
}
#wrap_car1 input{
	outline: 0;
}
</style>

