// import引入只能使用相对路径
import request from '../../utils/request'


Page({
  data: {
    bannerList: [], // 轮播图数据
    recommendList: [], // 推荐歌曲
    topList: [], // 排行榜数据
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
    
    // 获取排行榜数据
    let initIdxIds = [0, 1, 2, 3, 4];
    let index = 0; // 指针，用来记录循环的位置
    let resultArr = [];
    while(index < initIdxIds.length){
      let result = await request(`/top/list?idx=${initIdxIds[index++]}`);
      // index += 1;
      let obj = {name: result.playlist.name, tracks: result.playlist.tracks.slice(0, 3)};
      resultArr.push(obj);
      this.setData({
        topList: resultArr
      })
    }
    
    
  },
  
  toRecommend(){
    // 跳转至recommendList
    wx.navigateTo({
      url: '/song/pages/recommendSong/recommendSong'
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
