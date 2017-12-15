<template>
	<div id ="classifys">
		<div class="yy_header">
				<span class="yy_header1"></span>
				<span class="yy_header2">卫衣</span>
			</div>
			<div class="yy_main">
				<ul class="yy_nav">
					<li><a href="#">新品</a></li>
					<li><a href="#">销量</a></li>
					<li><a href="#">评价</a></li>
					<li>
					<a href="#">价格</a>
					<img class="price-bg" src="../assets/img/icon_order.jpg" alt="">
					</li>
				</ul>
				<ul class="yy_main_main">
					<li>
						<router-link to="/afterCar">
							<img src="../assets/img/6378478-1j201710271746044808.jpg" alt="">
							<p>凡客卫衣 暖绒连帽 男款</p>
							<span>176元</span>
						</router-link>
					</li>
					<li>
						<img src="../assets/img/6378631-1j201710271746043089.jpg" alt="">
						<p>凡客卫衣 暖绒连帽 男款</p>
						<span>176元</span>
					</li>
					<li>
						<img src="../assets/img/6378000-1j201710121408227197.jpg" alt="">
						<p>凡客卫衣 暖绒连帽 男款</p>
						<span>176元</span>
					</li>
					<li>
						<img src="../assets/img/6379041-1j201710251923084579.jpg" alt="">
						<p>凡客卫衣 暖绒连帽 男款</p>
						<span>176元</span>
					</li>
					<li>
						<img src="../assets/img/6378862-1j201710230808430074.jpg" alt="">
						<p>凡客卫衣 暖绒连帽 男款</p>
						<span>176元</span>
					</li>
					<li>
						<img src="../assets/img/6378283-1j201711031618492826.jpg" alt="">
						<p>凡客卫衣 暖绒连帽 男款</p>
						<span>176元</span>
					</li>
					<li>
						<img src="../assets/img/6378503-1j201711031613494167.jpg" alt="">
						<p>凡客卫衣 暖绒连帽 男款</p>
						<span>176元</span>
					</li>
					<li>
						<img src="../assets/img/6378501-1j201711031613492136.jpg" alt="">
						<p>凡客卫衣 暖绒连帽 男款</p>
						<span>176元</span>
					</li>
					<li>
						<img src="../assets/img/6378284-1j201711031613492136.jpg" alt="">
						<p>凡客卫衣 暖绒连帽 男款</p>
						<span>176元</span>
					</li>
					<li>
						<img src="../assets/img/6377998-1j201710121408227822.jpg" alt="">
						<p>凡客卫衣 暖绒连帽 男款</p>
						<span>176元</span>
					</li>
				</ul>
			</div>
			<div class="map_f">
				<p class="map_p">
					<a class="pre_1" data-pn="4" href="#">上一页</a>
					<!-- &nbsp; -->
					<a data-pn="0" href="#">1</a>
					<!-- &nbsp; -->
					<a data-pn="1" href="#">2</a>
					<!-- &nbsp; -->
					<a data-pn="2" href="#">3</a>
					<!-- &nbsp; -->
					<a data-pn="6" href="#" class="next_1">下一页</a>
					<!-- &nbsp; -->
				</p>
			</div>
			<div class="yy"></div>
			<!-- 底部导航栏 -->
			<div class="footer">
							<a href="javascript:void(0)">
								<router-link to="/home">
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
		color: #999;
	}
	.yy_header{
		width: 100%;
		height: 0.48rem;
		background-color:#b81c22;
	}
	.yy_header1{
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
	.yy_header2{
		height: 0.48rem;
		float: left;
		width: 100%;
		text-align: center;
		line-height: 0.48rem;
		font-size: .17rem;
		color: #fff;
	}

	/********导航********/
	.yy_main{
		width: 100%;
	}
	.yy_nav{
		width: 100%;
		height: .37rem;
		background-color: #fff;
	}
	.yy_nav li{
		float:left;
		width: 25%;
		height: .37rem;
		text-align: center; 
	}
	.yy_nav li a{
		color: #4c4c4c;
		width: 100%;
		cursor: pointer;
		line-height: .37rem;
		font-size: .15rem;
		float: left;
	}
	.yy_nav li a:hover{
		color: #b81b22;
	}
	.price-bg{
		width: .0877rem;
		height: .1463rem;
		float: right;	
		margin-right: .16rem;
		margin-top: -.25rem;
	}
	.yy_main_main{
		width: 100%;
		height: 11.3rem;
	}
	.yy_main_main li{
		width: 1.875rem;
		height: 2.26rem;
		float: left;
	}
	.yy_main_main li img{
		width: 1.45rem;
		height: 1.45rem;
		float: left;
		margin: .2rem 0 .15rem .2rem;
	}
	.yy_main_main li p{
		color: #4c4c4c;
		line-height: .2rem;
		float: left;
		width: 100%;
		font-size: .14rem;
		text-align: center;
	}
	.yy_main_main li span{
		font-size: .13rem;
		text-align: center;
		line-height: .2rem;
		float: left;
		width: 100%;
		color: #4c4c4c;
	}
	.map_f{
		width: 100%;
		height: .32rem;
		float: left;
		margin-top: .3rem;
	}
	.map_f .map_p{
		width: 3.2rem;
		height: .32rem;
		margin: 0 auto;
		float: left;
		margin-left: .25rem;
	}
	.map_f .map_p a{
		font-size: .15rem;
		background: #fff;
		color: #999;
		float: left;
		border-radius: 0;
		height: .32rem;
		line-height: .32rem;
		margin-left: .1rem;
		width: .3rem;
		text-align: center;
		display: inline-block;
	}
	.map_f .map_p .pre_1{
		width: .8rem;
	}
	.map_f .map_p .next_1{
		width: .8rem;
	}
	.map_f .map_p .first_p{
		width: .6rem;
	}
	.map_f{
		text-align: center;
	}
	.map_rx1, .map_rx2{
		border-left: solid 1px #ccc;
		border-top: solid 1px #ccc;
		background: #fff;
		position: absolute;
		right: 0;
		bottom: 0; 
	}
	/*-----------底部导航栏--------*/
	.footer{
		width: 100%;
		height: .52rem;
		position: fixed;
		line-height: .2rem;
		z-index: 2;
		bottom: -.01rem;
		left: 0;
		background: #fff;
		border-top: 1px solid #999;
	}
	.footer a{
		display: inline-block;
		width: 13%;
		height: 100%;
		text-align: center;
	}
	.footer span{
		width: .36rem;
		height: .48rem;
		display: inline-block;
		background-image: url(../assets/img/navBgimgNew.png);
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
	.yy{
		width: 100%;
		height: .53rem;
		margin-bottom: 1rem;
	}
</style>