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
	</view>
</template>

<script>
	export default {
		props: ['indexData']
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
					
</style>
