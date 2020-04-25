import request from '../../utils/request'
Page({
  data: {
    videoGroupList:[], // 导航列表
    navId: '', // 视频标签id标识
    videoList: [], // 视频列表数据
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    // 获取导航列表数据
    let videoGroupListData = await request('/video/group/list');
    this.setData({
      videoGroupList: videoGroupListData.data.slice(0, 14),
      navId: videoGroupListData.data[0].id
    })
    
    
    this.getVideoList(this.data.navId);
  },
  
  // 获取视频列表数
  async getVideoList(navId){
    let videoListData = await request('/video/group', {id: navId})
    console.log(videoListData);
    // 更新至data中的videoList
    this.setData({
      videoList: videoListData.datas
    })
  },
  
  // 修改导航id值
  changeNavId(event){
    console.log(event);
    console.log(typeof event.currentTarget.id);
    this.setData({
      navId: event.currentTarget.id>>>0
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
    console.log('onHide');
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('onUnload');
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
