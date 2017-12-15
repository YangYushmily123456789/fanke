<template>
	<div id="dd">
		<div class="wrap">
			<div class="topTitle">
				<a href="index.html"><span class="topBack"></span></a>
				<span class="curTitle">商品详情</span>
			</div>

			<div class="main_dress">
				<div class="swiper-container">
		        <div class="swiper-wrapper">
		            <div class="swiper-slide"><img src="../assets/img/6376973-1j201704131650425228.jpg"></div>
		            <div class="swiper-slide">
		            	<img src="../assets/img/6376973-2201704131650425228.jpg">
		            </div>
		        </div>
	        <!-- Add Pagination -->
	       		<div class="swiper-pagination"></div>
	        	</div>
			</div>

			<div class="prd-tit clear" v-for="item in proList">
				<span class="name">{{item.name}}</span>
				<span class="price">{{item.price}}</span>
				<div>
					<a href="javascript:void(0)">
						<span style="color: #c8161e;margin-right: .15rem;max-width: 1.65rem;">
							充100返100，点击充值
						</span>
					</a>
				</div>
				<div class="bb mhr"></div>
				<div class="prd-size clear" id="prd-size">
					<span class="chkbox"></span>
					<span class="size-info" id="size-info">
						选择&nbsp;颜色/尺码
					</span>
					<span class="sword-r"></span>
				</div>

				<!-- 尺码颜色选择 -->
				<div class="size-box hide" id="size-box">
					<h3 class="tit">选择颜色</h3>
					<p class="color clear" id="color">
						<span class="size-color disable">白色</span>
						<span class="size-color active">黑色</span>
					</p>
					<h3 class="tit">尺码选择</h3>
					<p class="size clear">
						<span class="size-color">S</span>
					</p>
					<h3 class="tit">购买数量</h3>
					<p class="changecount clear">
						<span class="minus" @click="minus(item)"></span>
						<span id="num" class="num">{{(item.num)}}</span>
						<span class="plus" @click="add(item)"></span>
					</p>
				</div>

				<div class="bb mhr"></div>
			</div>
			<div class="styleTag"></div>
			<div class="details prd-des">
				<ul>
					<li>
						<a href="javascript:void(0)" class="active"> 商品详情 </a>
					</li>
					<li>
						<a href="javascript:void(0)"> 评论 </a>
					</li>
					<li>
						<a href="javascript:void(0)"> 咨询 </a>
					</li>
				</ul>
			</div>

			<div class="prd-des-cont">
				<div class="autoChangeContent">
					<div class="tagmao0">
						<img src="../assets/img/2017_4_14_11_23_57_9888_640x616.jpg">
						<img src="../assets/img/2017_4_14_11_23_59_7130_640x133.jpg">
						<img src="../assets/img/2017_4_14_11_23_59_6922_640x709.jpg">
						<img src="../assets/img/6376973-2201704131650425228.jpg">
						<img src="../assets/img/2017_4_14_11_23_59_7827_640x126.jpg">
						<img src="../assets/img/2017_4_14_11_24_0_4796_640x466.jpg">
						<img src="../assets/img/2017_4_14_11_24_0_4272_640x572.jpg">
					</div>
				</div>
			</div>

			<!-- 底部 -->
			<div class="blank"></div>
			<div class="details_footer">
				<router-link to="/car">
				<a href="javascript:void(0)">
					<span class="footer-car"><a href="#">{{totalNum}}</a></span>
				</a>
				</router-link>
				<a href="javascript:void(0)" class="addCar">
					<span class="addToCart">加入购物车</span>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				proList:[],
				orderList:[]
			};
		},
		created(){
			// 使用axion插件请求数据
			this.$http.get("./static/data.json",{}).then((res)=>{
				console.log(res.data)  
				this.proList = res.data.proList;
				if (this.$store.state.orderList.length > 0){
					for( var n in this.$store.getters.getOrderList){
						for(var m in this.proList){
							if (this.proList[m].name === this.$store.getters.getOrderList[n].name){
								this.proList[m].num = this.$store.getters.getOrderList[n].num;
							}
						}
					}
				}
			})
		},
		mounted(){

		},
		
		methods : {
			add(item){
				item.num++;
				this.$store.dispatch("addOrder" , item);
			},
			minus(item){
				if (item.num > 0){
					item.num--;
					this.$store.dispatch("addOrder" , item);
				}
			}
		},
		computed : {
			totalNum(){
				var totalNum = 0;
				this.proList.forEach((n , index) => {
					totalNum += Number(n.num);
				})
				return totalNum;
			}
		}
	}
</script>

<style>
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
	#dd .footer-car a{
		color: red;
		margin-top: -.1rem;
		margin-left: .15rem
	}
	#dd .wrap{
		width: 100%;
		background: #fff;
		overflow: hidden;
		min-height: 100%;
	}
	#dd .topTitle{
		width: 100%;
		height: .48rem;
		background: #b81c22;
		text-align: center;
		line-height: .48rem;
		color: #fff;
		font-size: .15rem;
		position: relative;
		/*left: 0;*/
		/*top: 0;*/
	}
	#dd .topBack{
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
	#dd .main_dress{
		width: 100%;
		height: 3.09rem;
		/*margin-top: .48rem;*/
		text-align: center;
	}
	#dd .main_dress img{
		width: 2.9822rem;
		height: 2.9822rem;
	}
	#dd .prd-tit{
		padding: .05rem .2rem;
		line-height: .22rem;
	}
	#dd .prd-tit .name{
		color: #4c4c4c;
		/*margin-left: .12rem;*/
		max-width: 1.65rem;
	}
	#dd .prd-tit .price{
		color: #c8161e;
		font-size: .15rem;
		margin-left: 6%;
	}
	#dd .bb{
		display: block;
		border-bottom: 1px solid #ccc;
		height: 1px;
		margin-top: .1rem;
	}
	#dd .prd-size{
		background: #f5f5f5;
		margin: .09rem 0;
		padding: .08rem .08rem;
		cursor: pointer;
	}
	#dd .prd-size .chkbox{
		float: left;
		height: .135rem;
		width: .135rem;
		background: url(../assets/img/size_icon.jpg) no-repeat center center;
		background-size: contain;
		margin-right: .08rem;
	}
	#dd .prd-size .sword-r{
		float: right;
		width: .07rem;
		height: .135rem;
		background: url(../assets/img/swordr_icon.jpg) no-repeat center center;
		background-size: contain;
	}
	#dd .size-box{
		/*padding: 0 .2rem;*/
		color: #4d4d4d;
	}
	#dd .size-box .tit{
		font-weight: normal;
		font-size: .12rem;
	}
	#dd .size-box .disable{
		border: 1px dashed #b3b3b3;
		border-radius: 3px;
		padding: .05rem .08rem;
	}
	#dd .size-box .size-color{
		border: 1px solid #b3b3b3;
		border-radius: 3px;
		margin-right: .05rem;
		margin-bottom: .05rem;
		padding: .05rem .08rem;
	}
	#dd .size-box .color, #dd .size-box .size{
		padding-top: .1rem;
		border-bottom: 1px solid #ccc;
		margin-bottom: .09rem;
		padding-bottom: .15rem;
	}
	#dd .size-box .active{
		border: 1px solid #b81c20;
		border-radius: 3px;
		padding: .05rem .08rem;
	}
	#dd .minus{
		background: #f5f5f5 url(../assets/img/minus.jpg) no-repeat center center;
		background-size: contain;
		border: 1px solid #f5f5f5;
	}
	#dd .num{
		border: 1px solid #f5f5f5;
		margin-left: 2%;
	}
	#dd .plus{
		background: #f5f5f5 url(../assets/img/plus.jpg) no-repeat center center;
		background-size: contain;
		border: 1px solid #f5f5f5;
	}
	#dd .changecount span{
		float: left;
		width: .24rem;
		height: .24rem;
		line-height: .24rem;
		text-align: center;
		border-radius: .01rem;
		display: inline-block;
	}
	#dd .changecount{
		vertical-align: middle;
		padding-bottom: .3rem;
		margin-top: .1rem;
	}
	#dd .styleTag{
		background: #fff;
		height: 1px;
	}
	#dd .details{
		width: 100%;
		height: .57rem;
		line-height: .57rem;
		border-bottom: 1px solid #666;
	}
	#dd .details ul{
		display: block;
		margin: .15rem auto;
	}
	#dd .details li{
		width: 33%;
		float: left;
		color: #4c4c4c;
		text-align: center;
	}
	#dd .details .active{
		color: #c8161e;
	}
	#dd .details a:hover{
		color: #c8161e;
	}

	/******* 底部 *********/
	#dd .details_footer{
		background: #fff;
		border-top: 1px solid #999;
		width: 100%;
		height: .37rem;
		position: fixed;
		left: 0;
		bottom: 0;
		z-index: 2;
	}
	#dd .details_footer a{
		display: block;
		float: left;
		width: 50%;
		text-align: center;
		height: .37rem;
		line-height: .37rem;
	}
	#dd .details_footer .footer-car{
		display: inline-block;
		width: .3rem;
		height: .3rem;
		line-height: .37rem;
		overflow: hidden;
		background-image: url(../assets/img/navBgimgNew.png); 
		background-size: .36rem 5rem;
		background-repeat: no-repeat;
		background-position: 0rem -1.47rem;
	}
	#dd .addCar{
		background: #b81c22;
		color: #fff;
	}

	#dd .blank{
		width: 100%;
		height: .37rem;
	}

	/*******************/
	#dd .prd-des-cont{
		width: 100%;
		padding-top: .1rem;
	}
	#dd .autoChangeContent{
		width: 100%;
	}
	#dd .tagmao0 img{
		width: 100%;
	}
</style>