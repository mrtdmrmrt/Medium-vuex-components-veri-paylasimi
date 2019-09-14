import Vue from"vue"
import Vuex from "vuex"
Vue.use(Vuex)
const store = new Vuex.Store({
	state : {  
		dataList : []
	},
	mutations : {
		addDataMutation(state,data){
			state.dataList.push(data)
		}
	},
	actions : {
		addDataAction(vuexContext,data){
			vuexContext.commit("addDataMutation",data)
		}
	},
	getters : {
		getAddedDataList(state){
			return state.dataList
		} 
	}

})

export default store


