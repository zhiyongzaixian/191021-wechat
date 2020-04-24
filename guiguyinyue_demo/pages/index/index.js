// import引入只能使用相对路径
import request from '../../utils/request'


Page({
  data: {
    bannerList: [], // 轮播图数据
    recommendList: [], // 推荐歌曲
  },
  onLoad: async function (options) {
    // 发送请求
    let bannerListData = await request('/banner', {type: 2} );
    this.setData({
      bannerList: bannerListData.banners
    })
    
    // 获取推荐歌曲数据
    let recommendListData = await request('/personalized');
    this.setData({
      recommendList: recommendListData.result
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
