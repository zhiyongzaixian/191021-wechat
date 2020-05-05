import request from '../../utils/request.js'

const state = {
	initData: 'index的初始化测试数据',
	indexData: {}, // index主页数据
}

const mutations = {
	changeIndexData(state, indexData){
		
		state.indexData = indexData
		console.log(state.indexData, 'xxx')
	}
}

const actions = {
	async getIndexData({commit}){
		// 异步行为： 发送请求获取数据
		let indexData = await request('/getIndexData')
		commit('changeIndexData', indexData)
	}
}



export default {
	state,
	mutations,
	actions,
}