<template>
	<view class="recommendContainer">
		<!-- 轮播图 -->
		<swiper class="banner" :indicator-dots="true" :autoplay="true" indicator-color='green' indicator-active-color='pink'>
			<swiper-item>
				<image src="https://yanxuan.nosdn.127.net/91038b7db8982d4288d71f0547a2569d.jpg?type=webp&imageView&quality=75&thumbnail=750x0" mode=""></image>
			</swiper-item>
			<swiper-item>
				<image src="https://yanxuan.nosdn.127.net/a12c510b428bbcc4fdf1eb4bdfd86ae4.png?type=webp&imageView&quality=75&thumbnail=750x0" mode=""></image>
			</swiper-item>
			<swiper-item>
				<image src="https://yanxuan.nosdn.127.net/8d6ea84dbf81210291edc275327f6c50.jpg?type=webp&imageView&quality=75&thumbnail=750x0" mode=""></image>
			</swiper-item>
		</swiper>
	
		<!-- policyDescList  三个横向图标 -->
		<view class="policyDescList">
			<view class="policyItem" v-for="(item, index) in indexData.policyDescList" :key='index'>
				<!-- 有时候会编译失败，切换成Vue的语法就好了  -->
				<!-- <image src="{{item.icon}}" mode=""></image> -->
				<image :src="item.icon" mode=""></image>
				<text>{{item.desc}}</text>
			</view>
		</view>
		
		<!-- kingkongList 10个图标区域 -->
		<view class="kingkongList">
			<view class="kingkongItem" v-for="(item, index) in indexData.kingKongModule.kingKongList" :key='item.L1Id'>
				<image :src="item.picUrl" mode=""></image>
				<text>{{item.text}}</text>
			</view>
		</view>
	
		<!-- cateGorys组件 -->
		<CateGorys :indexData='indexData'></CateGorys>
	</view>
</template>

<script>
	import CateGorys from '../CateGorys/CateGorys.vue'
	export default {
		props: ['indexData'],
		components:{
			CateGorys
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	.recommendContainer
		.policyDescList
			display flex
			width 100%
			.policyItem
				text-align center
				flex 1
				image
					width 32upx
					height 32upx
					vertical-align middle
					margin-right 6upx
				text
					font-size 24upx
					vertical-align middle
		.kingkongList
			display flex
			flex-wrap wrap
			margin 20upx 0
			.kingkongItem
				width 20%
				display flex
				flex-direction column
				align-items center
				image
					width 110upx
					height 110upx
				text
					font-size 24upx
					line-height 50upx
					
</style>
