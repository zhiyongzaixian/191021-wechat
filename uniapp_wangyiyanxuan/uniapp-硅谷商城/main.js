import Vue from 'vue'
import store from './store'
import App from './App'

// 关闭Vue开发的提示
Vue.config.productionTip = false

// mp: mini programe
// mpType： 用于声明小程序的类型
// 声明App组件代表整个小程序应用
App.mpType = 'app' // application

const app = new Vue({
    ...App,
		store
})

// 挂载应用，等同于原生小程序的App()
app.$mount()


// new Vue({
// 	el: '#app',
// 	render: h => h(App)
// })

// new Vue({
// 	el: '#app',
// 	render: h => h(App)
// }).$mount()