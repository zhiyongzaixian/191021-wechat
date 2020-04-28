// pages/recommendSong/recommendSong.js
import PubSub from 'pubsub-js'
import request from "../../utils/request";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    day: '',
    month: '',
    recommendList: [], // 推荐数据列表
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    // 判断用户是否登录
    let userInfo = wx.getStorageSync('cookies');
    if(!userInfo){
      // 用户没有登录
    
      wx.showLoading({
        title: '请先登录',
        success: () => {
          wx.redirectTo({
            url: '/pages/login/login'
          })
        }
      })
    
    }
  
    this.setData({
      day: new Date().getDate(),
      month: new Date().getMonth() + 1
    })
    // 获取recommendList数据
    let recommendListData = await request('/recommend/songs')
    
    this.setData({
      recommendList: recommendListData.recommend
    })
    
    
    
    // 订阅song发送的切换歌曲消息
    PubSub.subscribe('switchType', (msg, type) => {
      console.log(msg, type);
    })
  },
  
  toSong(event){
    let song = event.currentTarget.dataset.song
    // 路由传参： query的形式 ----> url?a=xxx&b=yyy
    wx.navigateTo({
      url: '/pages/song/song?id=' + song.id
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
