import PubSub from 'pubsub-js'

import request from '../../utils/request'
// 获取页面的实例
let appInstance = getApp();
console.log(appInstance);
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isPlay: false, // 标识音乐是否在播放
    song: {}, // 音乐数据
    musicId: '', // 音乐的id
    musicLink: '',// 音乐播放链接
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    console.log(options);
    // options ： 用来获取路由跳转的参数， 默认值是空对象
    // console.log(options.song);
    // 路由跳转参数不能传入数量大的参数，因为大小限制的问题导致不能获取全部的参数内容
    // let song = JSON.parse(options.song);
    let musicId = options.id;
    // 通过音乐id获取音乐的数据
    let songData = await request(`/song/detail?ids=${musicId}`)
    this.setData({
      song: songData.songs[0],
      musicId
    })
    
    // 动态修改窗口标题
    wx.setNavigationBarTitle({
      title: this.data.song.name
    })
    
    // 判断当前页面的音乐是否在播放
    if(appInstance.globalData.isMusicPlay && appInstance.globalData.musicId === musicId){
      // 当前页面音乐在播放
      this.setData({
        isPlay: true
      })
    }
  
  
    // 生成音乐播放的实例
    this.backgroundAudioManager = wx.getBackgroundAudioManager();
    // 监听音乐播放/暂停/停止
   
    this.backgroundAudioManager.onPlay(() => {
      console.log('音乐播放');
      // 修改播放的状态
      this.setData({
        isPlay: true
      })
  
      appInstance.globalData.isMusicPlay = true;
  
    })
  
    this.backgroundAudioManager.onPause(() => {
      console.log('音乐暂停');
      // 修改播放的状态
      this.setData({
        isPlay: false
      })
    
      appInstance.globalData.isMusicPlay = false;
    })
  
    this.backgroundAudioManager.onStop(() => {
      console.log('音乐停止');
      // 修改播放的状态
      this.setData({
        isPlay: false
      })
      // 真正意义上停止音乐
      this.backgroundAudioManager.stop();
      appInstance.globalData.isMusicPlay = false;
  
    })
    
    
    
    // 订阅消息： recommendList页面发送的musicId数据
    PubSub.subscribe('musicId', async (msg, musicId) => {
      console.log('recommendList发送的musicId: ', musicId);
      // 通过音乐id获取音乐的数据
      let songData = await request(`/song/detail?ids=${musicId}`)
      this.setData({
        song: songData.songs[0],
        musicId
      })
      
      // 自动播放当前音乐, 注意点： 此处不应该传musicLink，否则播放的是上一首音乐
      let musicLink = this.data.musicLink; // 当前的歌曲
      this.musicControl(true, musicId);
    })
  },
  // 播放音乐的回调
  musicPlay(){
    let isPlay = !this.data.isPlay
    // 修改是否播放的状态
    this.setData({
      isPlay
    })
    
    // 播放/暂停音乐
    let {musicId, musicLink} = this.data;
    
    // musicLink: 空串 || 音乐链接
    this.musicControl(isPlay, musicId, musicLink);
  },
  // 封装控制音乐播放的功能函数
  async musicControl(isPlay, musicId, musicLink){
    // 全局声明音乐在播放
    appInstance.globalData.isMusicPlay = isPlay;
    // 播放
    if(isPlay){
      // 判断之前是否有音乐链接
      if(!musicLink){
        // 通过音乐musicId获取音乐播放链接
        let musicLinkData = await request(`/song/url?id=${musicId}`);
        musicLink = musicLinkData.data[0].url;
        console.log(musicLinkData);
        // 更新data中的音乐链接musicLink
        this.setData({
          musicLink
        })
      }
      
      this.backgroundAudioManager.src = musicLink;
      this.backgroundAudioManager.title = this.data.song.name;
      
      
      // 修改全局播放的状态，声明当前页面音乐在播放
      // appInstance.globalData.isMusicPlay = true;
      // 全局声明播放音乐的musicId
      appInstance.globalData.musicId = musicId;
      
    }else {// 暂停
      this.backgroundAudioManager.pause();
      // 修改全局播放的状态，声明当前页面音乐在播放
      // appInstance.globalData.isMusicPlay = false;
    }
  },
  // 切换歌曲的回调
  switchMusic(event){
    let type = event.currentTarget.id;
    // 停掉当前正在播放的音乐，然后切换下一首
    this.backgroundAudioManager.stop();
    this.handleSwitch(type);
  },
  // 切换歌曲的功能函数
  handleSwitch(type){
    PubSub.publish('switchType', type)
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
