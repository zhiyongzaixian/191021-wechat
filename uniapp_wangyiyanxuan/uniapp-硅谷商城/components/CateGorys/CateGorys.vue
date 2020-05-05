<template>
	<view class="cateContainer">
		<view class="cateItem" v-for="(item, index) in indexData.categoryModule" :key='index'>
			<image class="cateImg" :src="item.titlePicUrl" mode=""></image>
			<scroll-view scroll-x="true" class="scrollContainer" >
				<view class="scrollItem" v-for="(scrollItem, index) in item.itemList" :key='index'>
					<image :src="scrollItem.showPicUrl" mode=""></image>
					<view>{{scrollItem.name}}</view>
				</view>
				<view class="scrollItem more" >
					查看更多>>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import {mapState} from 'vuex'
	export default {
		// props: ['indexData']
		computed:{
			...mapState({
				indexData: state => state.index.indexData
			})
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	.cateContainer
		.cateItem
			.cateImg
				width 100%
				height 370upx
			.scrollContainer
				width 100%
				white-space nowrap
				margin 20upx 0
				.scrollItem 
					display inline-block
					width 200upx
					margin 0 10upx
					vertical-align top
					&.more
						width 200upx
						height 200upx
						text-align center
						line-height 200upx
						font-size 26upx
						background #eee
					image 
						width 200upx
						height 200upx
						background #eee
					view
						font-size 24upx
						display: -webkit-box;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 2;
						overflow hidden
						text-overflow ellipsis
						/*自动换行*/
						white-space pre-wrap
						
</style>
