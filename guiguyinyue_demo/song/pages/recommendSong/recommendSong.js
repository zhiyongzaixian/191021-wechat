// pages/recommendSong/recommendSong.js
import PubSub from 'pubsub-js'
import request from "../../../utils/request";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    day: '',
    month: '',
    recommendList: [], // 推荐数据列表
    index: 0, // 记录播放歌曲的下标
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
      let {recommendList, index} = this.data;
      let musicId; // 即将要播放的音乐Id
      if(type === 'pre'){ // 上一首
        // if(index === 0){
        //   index = recommendList.length;
        // }
  
        (index === 0) && (index = recommendList.length);
        index -= 1;
        musicId = recommendList[index].id;
      }else { // 下一首
        // if(index === recommendList.length -1){
        //   index = -1;
        // }
        (index === recommendList.length -1) && (index = -1);
        index += 1;
        musicId = recommendList[index].id;
      }
      // 实时更新当前播放音乐的下标记录
      this.setData({
        index
      })
      
      // 发布消息： 将musicId发送给song页面
      PubSub.publish('musicId', musicId)
    })
  },
  // toSong的事件回调
  toSong(event){
    let {song, index} = event.currentTarget.dataset;
    // 路由传参： query的形式 ----> url?a=xxx&b=yyy
    this.setData({
      index
    })
    wx.navigateTo({
      url: '/song/pages/song/song?id=' + song.id
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
