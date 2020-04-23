// pages/index/index.js
// 注册页面
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg: '页面初始化测试数据',
    userInfo: {}, // 用户信息
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(window) undefined
    // 修改状态数据
    // React： 
      // 修改状态： setState() 1. 自身的钩子函数(componentDidMount)中是异步， 2. 非自身的钩子函数(setTimeout)中是同步
      // 获取数据： this.state.xxx
    // Vue: this.xxx = value 同步
    // 小程序: this.setData() 同步

    // this.setData({
    //   msg: '修改之后的数据'
    // })
    // console.log(this.data.msg)
    // setTimeout(() => {
    //   this.setData({
    //     msg: '修改之后的数据'
    //   })
    //   console.log(this.data.msg);
    // }, 2000)


    // 获取用户的登录信息 需要授权之后使用
    wx.getUserInfo({
      success: (res) => {
        console.log(res.userInfo);
        // 更新userInfo的状态数据
        this.setData({
          userInfo: res.userInfo
        })
      },
      fail: () => {
        console.log('获取用户信息失败, 没有授权');
      }
    })

  },
  handleParent(){
    console.log('parent');
  },
  handleChild(){
    console.log('child');
  },

  toLog(){
    // 跳转至log页面
    wx.redirectTo({
      url: '/pages/log/log', // 注意： 路径前边加根路径 /
    })
  },
  handleGetUserInfo(res){
    console.log(res);
    // 用户授权了
    if(res.detail.userInfo){
      // 更新userInfo的状态数据
      this.setData({
        userInfo: res.detail.userInfo
      })
    }
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
    console.log('index onHide 页面隐藏');
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('index onUnload 页面卸载');
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