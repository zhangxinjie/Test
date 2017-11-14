import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
	state:{
		basepath: basepath,
		staticpath: staticpath,
		num: num,
		val: "1.2"	
	},
	mutations:{
		
	},
	getters:{
		getVal: state => {
			return Number.parseInt(state.val);
		}
	}
});

export default store;
