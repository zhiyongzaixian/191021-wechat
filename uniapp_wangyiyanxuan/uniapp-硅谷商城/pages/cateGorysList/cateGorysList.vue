<template>
	<view class="cateGorysListContainer">
		<!-- 头部区域 -->
		<view class="header">
			<view class="search">
				搜索商品
			</view>
		</view>
		<!-- 内容区 -->
		<view class="contentContainer">
			<view class="leftContainer">
				<scroll-view scroll-y="true" >
					<view  class="navItem" :class="{active: navIndex === index}" v-for="(navItem, index) in categorysList" :key='navItem.id'>
						{{navItem.name}}
					</view>
				</scroll-view>
			</view>
			<view class="rightContainer">
				<scroll-view scroll-y="true" >
					<view></view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
	import request from '../../utils/request.js'
	export default {
		data() {
			return {
				categorysList: [],
				navIndex: 0
			};
		},
		async mounted() {
			this.categorysList = await request('/getCateGorysListData')
		}
	}
</script>

<style lang="stylus">
	.cateGorysListContainer
		.header 
			width 100%
			height 55upx
			padding 10upx 0
			.search
				width 90%
				height 100%
				margin 0 auto
				background #EEEEEE
				border-radius 10upx
				line-height 55upx
				text-align center
				font-size 26upx
	
	
	
	
	
	
	
		.contentContainer
			border-top 1upx solid #eee
			height calc(100vh - 76upx)
			display flex
			.leftContainer
				width 20%
				height 100%
				border-right 1upx solid #333
				box-sizing border-box
				.navItem
					position relative
					font-size 26upx
					text-align center
					height 80upx
					line-height 80upx
					&.active
						color #ab2b2b
						&:after
							position absolute
							left 2upx
							top 15%
							content ''
							width 2rpx
							height 70%
							background #ab2b2b
							
			.rightContainer
				width 80%
				height 100%
	
	.testxxxxxxxxxxxxxxxxxxxxxxxxxxxx
		font-size 0
</style>
