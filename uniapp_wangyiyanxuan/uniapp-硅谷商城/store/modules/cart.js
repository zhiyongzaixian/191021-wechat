import Vue from 'vue'
import {
	ADDCARTLIST,
	CHANGECOUNTMUTATION,
	CHANGESELECTEDMUTATION,
	CHANGEALLSELECTEDMUTATION
} from '../mutation-type'

const state = {
	cartList: [
		{
				"count": 1,
				"selected": true,
		    "promId": 0,
		    "showPoints": false,
		    "itemTagList": [
		        {
		            "itemId": 1586040,
		            "tagId": 128111157,
		            "freshmanExclusive": false,
		            "name": "暖冬特惠",
		            "subType": 204,
		            "forbidJump": false,
		            "type": 2
		        }
		    ],
		    "rank": 1,
		    "id": 1586040,
		    "sellVolume": 4315,
		    "primaryPicUrl": "https://yanxuan-item.nosdn.127.net/8d3d3daec71799e08c5853ce9e05b440.png",
		    "soldOut": false,
		    "sortFlag": 0,
		    "commentCount": 0,
		    "onSaleTime": 1539930828979,
		    "picMode": 1,
		    "commentWithPicCount": 0,
		    "underShelf": false,
		    "status": 2,
		    "couponConflict": true,
		    "forbiddenBuy": false,
		    "promotionDesc": "暖冬特惠",
		    "limitedFlag": 204,
		    "pieceNum": 0,
		    "itemSizeTableDetailFlag": false,
		    "forbidExclusiveCal": false,
		    "rewardShareFlag": false,
		    "updateTime": 1576200840751,
		    "showCommentEntrance": true,
		    "pieceUnitDesc": "件",
		    "specialPromTag": "",
		    "counterPrice": 699,
		    "categoryL2Id": 0,
		    "retailPrice": 525,
		    "primarySkuPreSellPrice": 0,
		    "preLimitFlag": 0,
		    "itemPromValid": true,
		    "promTag": "暖冬特惠",
		    "source": 0,
		    "points": 0,
		    "primarySkuPreSellStatus": 0,
		    "extraServiceFlag": 0,
		    "flashPageLink": "",
		    "autoOnsaleTimeLeft": 0,
		    "innerData": {},
		    "saleCenterSkuId": 0,
		    "pointsStatus": 0,
		    "extraPrice": "",
		    "colorNum": 6,
		    "showTime": 0,
		    "autoOnsaleTime": 0,
		    "preemptionStatus": 1,
		    "isPreemption": 0,
		    "zcSearchFlag": false,
		    "name": "珍贵的软滑感，女式高领纯小山羊绒衫2.0",
		    "appExclusiveFlag": false,
		    "itemType": 1,
		    "listPicUrl": "https://yanxuan-item.nosdn.127.net/ffd34ce21098cacad33371fcff8bd9f9.png",
		    "pointsPrice": 0,
		    "simpleDesc": "亲近温暖，拥抱温柔与纯粹",
		    "seoTitle": "",
		    "newItemFlag": false,
		    "buttonType": 0,
		    "primarySkuId": 300011138,
		    "displaySkuId": 300014019,
		    "productPlace": "",
		    "itemSizeTableFlag": false
		},
		{
				"count": 1,
				"selected": true,
		    "promId": 0,
		    "showPoints": false,
		    "itemTagList": [
		        {
		            "itemId": 1593000,
		            "tagId": 128111156,
		            "freshmanExclusive": false,
		            "name": "暖冬特惠",
		            "subType": 204,
		            "forbidJump": false,
		            "type": 2
		        }
		    ],
		    "rank": 1,
		    "id": 1593000,
		    "sellVolume": 3168,
		    "primaryPicUrl": "https://yanxuan-item.nosdn.127.net/59c9d23abdfdaac58ede7b3e70934817.png",
		    "soldOut": false,
		    "sortFlag": 0,
		    "commentCount": 0,
		    "onSaleTime": 1539929494550,
		    "picMode": 1,
		    "commentWithPicCount": 0,
		    "underShelf": false,
		    "status": 2,
		    "couponConflict": true,
		    "forbiddenBuy": false,
		    "promotionDesc": "暖冬特惠",
		    "limitedFlag": 204,
		    "pieceNum": 0,
		    "itemSizeTableDetailFlag": false,
		    "forbidExclusiveCal": false,
		    "rewardShareFlag": false,
		    "updateTime": 1575512503370,
		    "showCommentEntrance": true,
		    "pieceUnitDesc": "件",
		    "specialPromTag": "",
		    "counterPrice": 799,
		    "categoryL2Id": 0,
		    "retailPrice": 623,
		    "primarySkuPreSellPrice": 0,
		    "preLimitFlag": 0,
		    "itemPromValid": true,
		    "promTag": "暖冬特惠",
		    "source": 0,
		    "points": 0,
		    "primarySkuPreSellStatus": 0,
		    "extraServiceFlag": 0,
		    "flashPageLink": "",
		    "autoOnsaleTimeLeft": 0,
		    "innerData": {},
		    "saleCenterSkuId": 0,
		    "pointsStatus": 0,
		    "extraPrice": "",
		    "colorNum": 3,
		    "showTime": 0,
		    "autoOnsaleTime": 0,
		    "preemptionStatus": 1,
		    "isPreemption": 0,
		    "zcSearchFlag": false,
		    "name": "软糯似baby肌肤，男式高领纯小山羊绒衫",
		    "appExclusiveFlag": false,
		    "itemType": 1,
		    "listPicUrl": "https://yanxuan-item.nosdn.127.net/631f945255aad262ff1b9ce51662f74b.png",
		    "pointsPrice": 0,
		    "simpleDesc": "绒毛取自未满1岁的山羊羊羔",
		    "seoTitle": "",
		    "newItemFlag": false,
		    "buttonType": 0,
		    "primarySkuId": 1630007,
		    "displaySkuId": 1630008,
		    "productPlace": "",
		    "itemSizeTableFlag": false
		}
	]
}

const mutations = {
	[ADDCARTLIST](state, shopItem){
		// 深度克隆
		// shopItem = JSON.parse(JSON.stringify(shopItem))
		// state.cartList.push(shopItem)
		// 购物车之前是否有当前的商品数据
		// find方法： 通过指定的条件查找数组中符合条件的元素， 返回值： 1. 符合条件的元素 2. undefined
		let item = state.cartList.find(item =>  item.id === shopItem.id)
		if(item){ // 之前有该商品
			// item.count += 1
			// 响应式属性
			item.count += 1
		}else {// 购物车之前没有改商品
			// 添加至购物车
			// 响应式属性 VS 非响应式属性
			/* 
				
			 */
			// 1. 非响应式属性count
			// shopItem.count = 1
			
			// 2. 响应式属性
			Vue.set(shopItem, 'count', 1)
			Vue.set(shopItem, 'selected', true)
			/* 
				在  Vuex中后期往数组中添加引用数据类型，后期修改该引用类型的内容的时候，Vuex无法检测到数据变化
			 */
			state.cartList.push(shopItem)
		}
	},
	[CHANGECOUNTMUTATION](state, {isAdd, index}){
		if(isAdd){ // 累加
			state.cartList[index].count += 1
		}else { // 累减
			if(state.cartList[index].count > 1){
				state.cartList[index].count -= 1
			}else { // 数量 == 1， 直接删除当前的商品
				state.cartList.splice(index, 1)
			}
		}
	},
	[CHANGESELECTEDMUTATION](state, {selected, index}){
		state.cartList[index].selected = selected
	},
	
	// 全选、全不选
	[CHANGEALLSELECTEDMUTATION](state, allSelected){
		state.cartList.forEach(item => item.selected = allSelected)
	}
}


const getters = {
	isAllSelected(state){
		let result = true;
		state.cartList.forEach(item => !item.selected && (result = false))
		return result
	},
	totalCount(state){
		// return state.cartList.reduce((pre, shopItem) => {
		// 	return pre += shopItem.count
		// }, 0)
		
		return state.cartList.reduce((pre, shopItem) => (pre += shopItem.count), 0)
	},
	totalPrice(state){
		// return state.cartList.reduce((pre, shopItem) => {
		// 	return pre += shopItem.count * shopItem.retailPrice
		// }, 0)
		return state.cartList.reduce((pre, shopItem) => (pre += shopItem.count * shopItem.retailPrice), 0)
	}
}



export default {
	state,
	mutations,
	getters
}