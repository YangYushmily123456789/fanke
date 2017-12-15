import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
	/*
		state 用于存储数据项
		mutations  单线程同步代码用于操作state
		actions  用于响应状态变化  不能操作state  而和mutations区别在于可以存在异步请求
		getters  用于获取数据的接口

	*/ 
export default new Vuex.Store({
	state : {
		orderList : []
	},
	mutations : {
		add_order(state , item){
			var flag = false;
			state.orderList.forEach(function(n , index , arr){
				if (n.name === item.name){
					flag = true;
					arr[index] = item;
				}
			});
			if (!flag){
				state.orderList.push(item);
			}
		}

	},
	actions : {
		addOrder({commit} , item){
			commit("add_order" , item)
		}
	},
	getters : {
		getOrderList : function(state){
			return state.orderList
		}
		// getDate : (state)=> state.date
	}
});