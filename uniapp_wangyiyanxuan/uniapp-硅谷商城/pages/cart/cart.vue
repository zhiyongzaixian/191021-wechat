<template>
	<view class="cartContainer">
		<view class="title">购物车</view>
		<!-- 没有登录 -->
		<block v-if="!userInfo.rawData">
			<view class="header">
				<text>30天无忧退货</text>
				<text>48小时快速退货</text>
				<text>满99元免邮费</text>
			</view>
			<view class="contentContainer">
				<image class="cartImg" src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png?imageView&type=webp" mode=""></image>
				<button @click="toLogin">登录</button>
				<view class="addMore">去添加点什么吧</view>
			</view>
		</block>
		
		<!-- 登录 -->
		<block v-else>
			<block v-if="cartList.length">
				<!-- 登录：购物车有数据 -->
				<!-- 购物车列表 -->
				<view class="cartList">
					<view class="cartItem" v-for="(cartItem,index) in cartList" :key='cartItem.id'>
						<text class='iconfont icon-xuanzhong ' :class="{selected: cartItem.selected}"  @click="changeSelected(!cartItem.selected, index)"></text>
						<view class="shopItem">
							<image class="shopImg" :src="cartItem.listPicUrl" mode=""></image>
							<view class="shopInfo">
								<text>{{cartItem.name}}</text>
								<text class="price">￥{{cartItem.retailPrice}}</text>
							</view>
						</view>
						<!-- 控制数量 -->
						<view class="countCtrl">
							<text class="add" @click="changeCount(true, index)"> + </text>
							<text class="count"> {{cartItem.count}} </text>
							<text class="del" @click="changeCount(false, index)"> - </text>
						</view>
					</view>
					
				</view>
				<!-- 底部下单 -->
				<view class="cartFooter">
					<text class='iconfont icon-xuanzhong ' :class="{selected: isAllSelected}" @click="changeAllSelected(!isAllSelected)"></text>
					<text class="allSelected">已选 {{totalCount}}</text>
					<view class="right">
						<text class="totalPrice">合计: ￥{{totalPrice}}</text>
						<text class="preOrder">下单</text>
					</view>
				</view>
			</block>
			<block v-else>
				<!-- 登录： 购物车没有数据 -->
				<image class="cartImg" src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png?imageView&type=webp" mode=""></image>
				<view class="hint">购物车还是空的，赶紧去购物吧</view>
			</block>
		</block>
		
	</view>
	
</template>

<script>
	import {mapState, mapMutations, mapGetters} from 'vuex'
	import  {CHANGECOUNTMUTATION, CHANGESELECTEDMUTATION, CHANGEALLSELECTEDMUTATION} from '../../store/mutation-type.js'
	export default {
		data() {
			return {
				userInfo: {}
			}
		},
		beforeMount() {
			// 判断用户是否登录
			let userInfo = uni.getStorageSync('userInfo')
			// 登录
			if(userInfo){
				this.userInfo = JSON.parse(userInfo)
			}
		},
		methods: {
			...mapMutations({
				'changeCountMutation': CHANGECOUNTMUTATION,
				"changeSelectedMutaioin": CHANGESELECTEDMUTATION,
				'changeAllSelectedMutation': CHANGEALLSELECTEDMUTATION
			}),
			toLogin(){
				uni.redirectTo({
					url:  '/pages/login/login'
				})
			},
			// 修改数量
			changeCount(isAdd, index){
				this.changeCountMutation({isAdd, index})
			},
			// 修改是否选中的状态
			changeSelected(selected, index){
				this.changeSelectedMutaioin({selected, index});
			},
			
			// 全选/全不选
			changeAllSelected(allSelected){
				this.changeAllSelectedMutation(allSelected)
			}
		},
		computed: {
			...mapState({
				cartList: state => state.cart.cartList
			}),
			...mapGetters(['isAllSelected', 'totalCount', 'totalPrice'])
		}
	}
</script>

<style lang="stylus">
	.cartImg
		display block
		width 248upx
		height 248upx
		margin 300upx auto 50upx
		
		
	.cartContainer
		position relative
		background #f4f4f4
		height 100%
		.title
			font-size 32upx
			line-height 80upx
			margin-left 30upx
		.header
			display flex
			background #eee
			text
				width 33.333%
				height 80upx
				line-height 80upx
				text-align center
				font-size 26upx
		.contentContainer
			button
				width 480upx
				height 92upx
				background #DD1A21
				color #fff
				font-size 32upx
				line-height 92upx
			.addMore
				text-align center
				font-size 26upx
				color #7f7f7f
				line-height 60rpx
		.cartList
			.cartItem
				position relative
				display flex
				height 172upx
				background #fff
				margin-top 20upx
				padding 20upx
				.iconfont
					font-size 40upx
					line-height 172upx
					margin 0 40upx
					color #999
					&.selected
						color: #BB2C08
				.shopItem
					display flex 
					.shopImg
						width 172upx
						height 172upx
						background #eee
					.shopInfo
						font-size 28upx
						display flex
						flex-direction column
						margin-left 20upx
						text
							line-height 60upx
						.price
							color: #BB2C08
				.countCtrl
					position absolute
					right 20upx
					bottom 30upx
					text
						display inline-block
						width 60upx
						height 50upx
						text-align center
						line-height 50upx
						border 1upx solid #EEEEEE
						&:nth-child(2)
							border none
							border-top 1upx solid #EEEEEE
							border-bottom 1upx solid #EEEEEE
		.cartFooter
			position absolute
			display flex	
			bottom 0
			height 96upx
			line-height 96upx
			width 100%
			background #fff
			font-size 30upx
			.iconfont
				font-size 40upx
				margin 0 20upx
				color: #999
				&.selected
					color: #BB2C08
			.right 
				height 96upx
				position absolute
				right 0
				.totalPrice
					display inline-block
					height 96upx
					line-height 96upx
				.preOrder
					display inline-block
					background #DD1A21
					width 225upx
					height 96upx
					line-height 96upx
					text-align center
					font-size 28upx
					color #fff
					margin-left 30upx
		.hint
			text-align center
			font-size 28upx
		
</style>
