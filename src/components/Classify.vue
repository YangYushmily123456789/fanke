<template>
	<div class="yyc_main">

			<Load v-if='isShow'/>	


			<div class="yyc_header">
				<span class="yyc_header1" @click="back()"></span>
				<span class="yyc_header2">分类</span>
			</div>
			<div class="yyc_main_left">
				<ul v-if="list.length>0" @click="changeId($event)">
					<li v-for="(item,index) in list" @click="Index=index">{{ item.name }}</li>
				</ul>
			</div>

			<div class="yyc_main_right">
				<ul v-if="list.length>0">
					<li v-for="a in list[Index].list1">
						<img :src="a.Logo">
						<span>{{a.KeyWord}}</span>
					</li>
				</ul>
			</div>

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

<script>
	import Load from './load'
	export default{
		data(){
			return{
				list : {},
				Index : 0,
				isShow: true
			}
		},
		components: {
        	Load
    	},
		methods : {
			changeId(e){
				console.log(e.target);
			},
			back() {
            	history.back();
       		}
		},
		created (){
			setTimeout(()=>{
				// 使用axios请求数据
				this.$http.get("./static/tuijian.json")
				.then((res)=>{
					console.log(res)
					this.list = res.data.productList;
					// 修改标示符为false，让loading组件消失
               		this.isShow = false
				})			
			}, 1000)
		}
		
		
	}

</script>

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
	.yyc_header{
		width: 100%;
		height: 0.48rem;
		background-color:#b81c22;
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

	/*********主体**********/
	.yyc_main{
		width: 100%;
		background-color: #fff;
	}

	/*********主体左侧**********/
	.yyc_main_left{
		width: 25%;
		float: left;
		height: 6.1rem;
		background-color: #e5e5e5;
	}
	.yyc_main_left ul{
		width: 100%;
	}
	.yyc_main_left ul li{
		text-align: center;
		line-height: .37rem;
		height: .37rem;
		font-size: .14rem;
		cursor: pointer;
		border-bottom: 1px solid #fff;
	}
	.yyc_main_left ul li:hover{
		color: #CC0000;
		background-color: #fff;
	}
	/*********主体右侧**********/
	.yyc_main_right{
		width: 75%;
		float: right;
	}
	.yyc_main_right ul{
		width: 100%;
	}
	.yyc_main_right ul li{
		width: 33%;
		height: .9961rem;
		float: left;
	}
	.yyc_main_right ul li img{
		width: .6961rem;
		height: .6961rem;
		float: left;
		margin-top: .1rem ;
		margin-left: .1rem;
		margin-right: .15rem;
		display: block;
	}
	.yyc_main_right ul li span{
		font-size: .14rem;
		color: #999;
		display: block;
		text-align: center;
		line-height: .3rem;
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
</style>