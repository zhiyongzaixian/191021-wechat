<template>
	<view id="indexContainer">
		<!-- 头部 -->
		<view class="header">
			<image class="logo" src="/static/images/logo.png" mode=""></image>
			<view class="searchInput">
				<text class="iconfont icon-sousuo"></text>
				<input type="text" value="" placeholder="搜索商品" placeholder-class="placeholder"/>
			</view>
			<button>登录登录</button>
		</view>
		<!-- 导航区域 -->
		<scroll-view scroll-x="true" class="navContainer" >
			<view class="navItem active">
				推荐
			</view>
			<view class="navItem">
				居家生活
			</view>
			<view class="navItem">
				服饰鞋包
			</view>
			<view class="navItem">
				美食酒水
			</view>
			<view class="navItem">
				个护清洁
			</view>
			<view class="navItem">
				推荐
			</view>
			<view class="navItem">
				居家生活
			</view>
			<view class="navItem">
				服饰鞋包
			</view>
			<view class="navItem">
				美食酒水
			</view>
			<view class="navItem">
				个护清洁
			</view>
			<view class="navItem">
				推荐
			</view>
			<view class="navItem">
				居家生活
			</view>
			<view class="navItem">
				服饰鞋包
			</view>
			<view class="navItem">
				美食酒水
			</view>
			<view class="navItem">
				个护清洁
			</view>
			
		</scroll-view>
	</view>
</template>

<script>
	import axios from 'axios'
	import request from '../../utils/request.js'
	export default {
		data() {
			return {
				
			};
		},
		async mounted() {
			let indexData = await request('/getIndexData')
			console.log(indexData)
			// axios不能再小程序中使用，因为基于浏览器环境的XHR对象封装的
			// axios.get('http://localhost:4001/getIndexData')
				
		}
	}
</script>

<style lang="stylus">
	#indexContainer
		.header 
			display flex
			height 60upx
			width 100%
			padding 10upx 0
			.logo 
				width 140upx
				height 40upx
				margin 10upx 30upx
			.searchInput
				position relative
				height 60upx
				width 420upx
				background #ededed
				.iconfont 
					position absolute
					left 10upx
					top 15upx
					font-size 30upx
				input
					width 370upx
					margin-left 50upx
					height 100%
					color #BB2C08
				.placeholder
					font-size 28upx
					text-align center
					line-height 60upx
			button
				font-size 24upx
				width 144upx
				height 60upx
				margin 0 10upx
				color #b4282d
				white-space nowrap
				overflow hidden
				text-overflow ellipsis
				padding 0 5upx
				
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
		.navContainer
			white-space nowrap
			height 80upx
			.navItem
				position relative
				display inline-block
				width 140upx
				height 80upx
				margin 0 10upx
				line-height 80upx
				text-align center
				font-size 28upx
				&.active:after
					content ''
					height 1upx
					width 100%
					position absolute
					bottom 0
					left 0
					background #BB2C08
					
				
				
				
				
				
				
				
				
				
				
				
				
				
	.testxxxxxxxxxxxxxxxxxxxxxxxxxxxx
		font-size 0
</style>
