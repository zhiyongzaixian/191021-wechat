import Vue from 'vue'
import Vuex from 'vuex'
import index from './modules/index'
import cart from './modules/cart'

// 1. 声明使用Vuex
Vue.use(Vuex)

// 2. 生成store对象, 并向外暴露
export default new Vuex.Store({
	modules:{
		index,
		cart
	}
})