let Koa = require('koa');
let KoaRouter = require('koa-router');


// 1. 生成项目的应用
const app = new Koa();
// 2. 生成路由器
const router = new KoaRouter();

// express: req === request(请求信息), res === response(响应信息对象),
// 注册测试路由
router.get('/test1', (ctx, next) => {
	// koa: ctx === req + res的角色
	// express： res.send = '返回的数据'
	// koa: ctx.body = '返回的数据'
	ctx.body = '测试返回的数据'
});

let indexData = require('./datas/index.json');
router.get('/getIndexData', async (ctx, next) => {
	// await new Promise((resolve, reject) => {
	// 	setTimeout(() => {
	// 		resolve()
	// 	}, 2000)
	// })
	ctx.body = indexData
	
})


// cateGorysList分类数据接口
let cateGorysList = require('./datas/categoryDatas.json');
router.get('/getCateGorysListData', async (ctx, next) => {
	ctx.body = cateGorysList
})

// indexCateList数据接口
let indexCateListData = require('./datas/indexCateList.json');
router.get('/getIndexCateListData', async (ctx, next) => {
	ctx.body = indexCateListData
})



// 3. 声明使用中间键
app
	.use(router.routes()) // 使用路由
	.use(router.allowedMethods()) // 使用路由方法
	
// 4. 监听端口号
app.listen('4001', () => {
	console.log('服务器启动成功');
	console.log('服务器地址: http://localhost:4001')
});