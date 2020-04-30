<template>
	<view id="indexContainer">
		<view class="header">
			<image class="logo" src="/static/images/logo.png" mode=""></image>
			<view class="searchInput">
				<text class="iconfont icon-sousuo"></text>
				<input type="text" value="" placeholder="搜索商品" placeholder-class="placeholder"/>
			</view>
			<button>登录登录</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
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
				
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	.testxxxxxxxxxxxxxxxxxxxxxxxxxxxx
		font-size 0
</style>
