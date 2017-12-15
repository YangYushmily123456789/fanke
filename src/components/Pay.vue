<template>
	<div class="box">
		<!-- 头部 -->
		<div class="yyc_header">
			<router-link to="home"><span class="yyc_header1"></span></router-link>
			<span class="yyc_header2">充值返现</span>
		</div>
		<div class="yyc_main">
			<div class="main_bann">
				<img src="../assets/img/tit.jpg" alt="">
			</div>
			<div class="payinfo">
				<p>余额<span>￥0</span></p>
			</div>
			<div class="paymoney">
				<p class="paymoney_txt">充100返100</p>
				<div class="paymoney_itme">
					<div class="as">
						<a>-</a>
						<a><input id="otherMon" class="otherMon" onkeyup="otherMon(this);" type="tel" value="100" placeholder="100" size="6" maxlength="6"></a>
						<a>+</a>
					</div>
				</div>
				<ul class="paymoney_ul">
					温馨提示:
					<li>1、充返100%，充值金额最低为100元，单笔上限为200000元</li>
					<li>2、您可自行手动输入充值金额，金额最低为100元</li>
				</ul>
			</div>
			<div class="paymoney_footer">
				<p>
					<span>支付方式：</span>
					<img src="../assets/img/1.png" alt="">
					<span>支付宝</span>
				</p>
			</div>
			<div class="paymoney_footer_ps">
				<p class="p1">点击充值，即表示您已同意活动规则</p>
				<p class="p2">充 值</p>
				<p class="p3">点击显示活动规则▼</p>
			</div>
		</div>
		<div class="yy"></div>
		<!-- 底部导航栏 -->
		<div class="footer">
			<a href="javascript:void(0)">
				<router-link to="/index">
					<span class="footer-home-active"></span>
				</router-link>
			</a>
			<a href="javascript:void(0)">
				<router-link to="/classify">
					<span class="footer-search"></span>
				</router-link>
			</a>
			<a href="javascript:void(0)">
				<router-link to="/fanke">
					<span class="footer-Tshirt"></span>
				</router-link>
			</a>
			<a href="javascript:void(0)">
				<router-link to="/car">
					<span class="footer-car"></span>
				</router-link>
			</a>
			<a href="javascript:void(0)">
				<router-link to="/geren">
					<span class="footer-mine"></span>
				</router-link>
			</a>
		</div>
	</div>
</template>
<script></script>
<style>
	@charset "utf-8";
*{
	padding: 0;
	margin: 0;
}
html{
	font-size: 100px;
	height: 100%;
}
ul,li{
	list-style: none;
}
a{
	text-decoration: none;
}
.yyc_header{
	width: 100%;
	height: 0.48rem;
	background-color:#b81c22;
	border-bottom: 1px solid #fff;
}
.yyc_header1{
	width: .17rem;
	height: .17rem;
	text-align: center;
	position: absolute;
	left: .3rem;
	top: .15rem;
	border-bottom: 2px solid #fff;
	border-left: 2px solid #fff;
	-webkit-transform: translate(-50%) rotate(45deg);
	cursor: pointer;
}
.yyc_header2{
	height: 0.48rem;
	float: left;
	width: 100%;
	text-align: center;
	line-height: 0.48rem;
	font-size: .17rem;
	color: #fff;
}

.yyc_main{
	width: 100%;
	background: #f8f8f8;
}
.main_bann{
	width: 100%;
	height: 2.28rem;
}
.main_bann img{
	width: 100%;
	height: 2.28rem;
}
.payinfo{
	width: 100%;
	height: .536rem;
	background: #fff;
	border-bottom: 1px solid #d8d8d8;
    border-top: 1px solid #d8d8d8;
    margin: .16rem 0 .16rem 0;
    font-weight: 700;
}
.payinfo p{
	font-size: .14rem;
	text-align: center;
	line-height: .6rem;
}
.payinfo p span{
	color: #ca3222;
	font-size: .23rem;
	line-height: .536rem;
	margin-left: .1rem;
	font-weight: 700;
}


.paymoney{
	width: 100%-.45rem;
	height: 1.89rem;
	background: #fff;
	padding: .1rem .15rem;
	border-top: 1px solid #d8d8d8;
    border-bottom: 1px solid #d8d8d8;
	overflow: hidden;
}
.paymoney_txt{
	text-align: center;
	font-size: .16rem;
	color: #ca3222;
	line-height: .4rem;
}
.paymoney_itme{
	width: 100%;
	height: .52rem;
}
.as{
	width: 1.76rem;
	height: .52rem;
	margin: 0 auto;
	float: left;
	margin-left: .8rem;
	border: 1px solid #b81b22;
}
.as a{
	width: .4rem;
	height: .33rem;
	background: #e4e4e4;
	text-align: center;
	font-size: .19rem;
	float: left;
	color: #000;
	margin-top: .08rem;
    font-weight: 100;
    line-height: .33rem;
    margin-left: .04rem;
	display: inline-block;
}
.as a:nth-of-type(2){
	width: .8rem;
    height: .33rem;
}
.as a input{
	width: .8rem;
    height: .33rem;
    border: none;
    border-radius: 2px;
    font-size: inherit;
    text-align: center;
    background-color: #e4e4e4;
}
.paymoney_ul{
	width: 3.41rem;
	height: .72rem;
	margin: 0 auto;
	color: #777;
	font-size: .15rem;
	margin-top: .1rem;
}
.paymoney_ul li {
	font-size: .15rem;
	line-height: .2.5rem;
	color: #666;
}

.paymoney_footer{
	width: 100%;
	background: #fff;
	margin:  .1rem 0 .1rem 0 ;
	padding-top: .1rem;
}
.paymoney_footer p{
	width: 100%;
	height: .27rem;
	/*margin-left: .1rem;*/
}
.paymoney_footer p span{
	font-size: .14rem;
	float: left;
	margin-left: .15rem;
	color: #666;
}
.paymoney_footer p img{
	width: .21rem;
	height: .21rem;
	float: left;
	margin-left: .1rem;
}
.paymoney_footer_ps p{
	font-size: .14rem;
	text-align: center;
}
.p1{
	font-size: .14rem;
	color: #333;
	text-align: center;
	margin-top: .2rem;
}
.p2{
	background: #ca3222;
	border-radius: .03rem;
	width: 1.56rem;
	height: .3rem;
	text-align: center;
	line-height: .3rem;
	color: #fff;
	margin: 0 auto;
	margin-top: .2rem;
}
.p3{
	color: #b81b22;
	text-align: center;
	font-size: .14rem;
	margin-top: .2rem;
}
.yy{
	width: 100%;
	height: .5rem;
	margin-top: .25rem;
}
/*-----------底部导航栏--------*/
.footer{
	width: 100%;
	height: .52rem;
	position: fixed;
	z-index: 2;
	bottom: -.01rem;
	line-height: .2rem;
	left: 0;
	background: #fff;
	display: flex;
	border-top: 1px solid #999;
}
.footer a{
	flex:1;
	width: 13%;
	height: 100%;
	text-align: center;
}
.footer span{
	width: .36rem;
	height: .48rem;
	display: inline-block;
	background-image: url(../assets/img//navBgimgNew.png);
	background-repeat: no-repeat;
	overflow: hidden;
	background-size: .36rem 5rem;
	-webkit-transform: transform(-50%, -50%);
	margin-top: .04rem;
}
.footer-home-active{
	background-position: 0rem -2.5rem;
}
.footer-search{
	background-position: 0rem -.5rem;
}
.footer-Tshirt{
	background-position: 0rem -1rem;
}
.footer-car{
	background-position: 0rem -1.5rem;
}
.footer-mine{
	background-position: 0rem -2rem;
}
</style>