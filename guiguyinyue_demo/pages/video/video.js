import request from '../../utils/request'
Page({
  data: {
    videoGroupList:[], // 导航列表
    navId: '', // 视频标签id标识
    videoList: [], // 视频列表数据
    triggered: false, // 标识下拉刷新是否被触发
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
    // 关闭消息提示
    wx.hideLoading();
    // console.log(videoListData);
    // 更新至data中的videoList
    this.setData({
      videoList: videoListData.datas,
      triggered: false,  // 关闭下拉刷新
    })
    
    
  },
  
  // 修改导航id值
  changeNavId(event){
    this.setData({
      navId: event.currentTarget.id>>>0,
      videoList: [], // 清空原有数据
    })
    
    wx.showLoading({
      title: '正在加载',
      mask: true
    })
    
    this.getVideoList(this.data.navId)
  },
  // 下拉刷新的回调
  handleRefresher(){
    console.log('下拉刷新');
    // 发送请求，更新数据
    this.getVideoList(this.data.navId);
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
    console.log('用户转发分享');
    // 自定义转发内容
    return {
      title: '这是我自定义的转发内容',
      path: '/pages/video/video',
      imageUrl: '/static/images/nvsheng.jpg'
    }
  }
})
