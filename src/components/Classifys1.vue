<template>
	
</template>

<script>
	export default{
		data(){
			return{
				list : {},
				Index : index
			}
		},
		created : function(){
			// 使用axios请求数据
			this.$http.get("./static/classify.json" ,{
				params : {}
			}).then((res)=>{
				console.log(res.data.result.nvzhuang)
				this.list = res.data.result.nvzhuang;
			})
		}
	}
</script>