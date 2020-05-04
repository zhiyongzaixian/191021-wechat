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
					<view @click="changeNav(navItem.id)"  class="navItem" :class="{active: navId === navItem.id}" v-for="(navItem, index) in categorysList" :key='navItem.id'>
						{{navItem.name}}
					</view>
				</scroll-view>
			</view>
			<view class="rightContainer">
				<scroll-view scroll-y="true" class="rightScrollView">
					<view class="proContainer">
						<image class="proImg" :src="cateObj.imgUrl" mode=""></image>
						<view class="proItem" v-for="(item, index) in cateObj.subCateList" :key='item.id'>
							<image :src="item.wapBannerUrl" mode=""></image>
							<view>{{item.name}}</view>
						</view>
					</view>
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
				navId: 0
			};
		},
		async mounted() {
			this.categorysList = await request('/getCateGorysListData')
			// 更新左侧导航的id值
			this.navId = this.categorysList[0].id
		},
		methods: {
			changeNav(navId){
				this.navId = navId
			}
		},
		computed: {
			cateObj(){
				// find: 找到符合条件的元素，返回该元素，并结束遍历
				// filter: 过滤出符合条件的元素，并返回一个新的数组
				return this.categorysList.find(item => item.id === this.navId)
			}
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
				border-right 1upx solid #eee
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
				.rightScrollView
					height 100%
					.proContainer
						display flex
						flex-wrap wrap
						.proImg 
							width 520upx
							height 190upx
							margin 20upx auto
						.proItem
							width 33.333%
							display flex
							flex-direction column
							align-items center
							image
								width 90%
								height 144upx
							view
								font-size 24upx
							
	
</style>
