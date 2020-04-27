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
  // scroll-view滑动到底部的事件回调
  handleScrollLower(){
    console.log('滑动到scroll-view的底部了。。。');
    
    wx.showLoading({
      title: '正在努力加载'
    })
    // 1. 发送请求获取数据
    let newVideoList = [
      {
        "type": 1,
        "displayed": false,
        "alg": "onlineHotGroup",
        "extAlg": null,
        "data": {
          "alg": "onlineHotGroup",
          "scm": "1.music-video-timeline.video_timeline.video.181017.-295043608",
          "threadId": "R_VI_62_6158A2C7F9ACB3AA88B38F8FACCF7141",
          "coverUrl": "https://p2.music.126.net/VqWcTLuJB1yL0molu3Gy0w==/109951164837573381.jpg",
          "height": 720,
          "width": 1280,
          "title": "吉克隽逸《直来直往（Live）》",
          "description": null,
          "commentCount": 27,
          "shareCount": 16,
          "resolutions": [
            {
              "resolution": 240,
              "size": 21669647
            },
            {
              "resolution": 480,
              "size": 35126985
            },
            {
              "resolution": 720,
              "size": 53333400
            }
          ],
          "creator": {
            "defaultAvatar": false,
            "province": 440000,
            "authStatus": 0,
            "followed": false,
            "avatarUrl": "http://p1.music.126.net/lnEzCAoKMbo5E_AXe3O6CQ==/109951164839549263.jpg",
            "accountStatus": 0,
            "gender": 0,
            "city": 440100,
            "birthday": 4123065600000,
            "userId": 480785566,
            "userType": 204,
            "nickname": "柚橘耶",
            "signature": "",
            "description": "",
            "detailDescription": "",
            "avatarImgId": 109951164839549260,
            "backgroundImgId": 109951163321303200,
            "backgroundUrl": "http://p1.music.126.net/jQKZtNOJrb0mnZY433i1YQ==/109951163321303199.jpg",
            "authority": 0,
            "mutual": false,
            "expertTags": null,
            "experts": null,
            "djStatus": 10,
            "vipType": 11,
            "remarkName": null,
            "avatarImgIdStr": "109951164839549263",
            "backgroundImgIdStr": "109951163321303199",
            "avatarImgId_str": "109951164839549263"
          },
          "urlInfo": {
            "id": "6158A2C7F9ACB3AA88B38F8FACCF7141",
            "url": "http://vodkgeyttp9.vod.126.net/cloudmusic/apPbIzDu_2950240881_shd.mp4?ts=1587961804&rid=3009063014E119FC636C42FBC02D0085&rl=3&rs=gzRmUrlFqhDigYTcPBhiLYBEdfHQArRX&sign=c8344c1cadd363885cb7cbb5e4e8f700&ext=f0xw0mOJqGcf8yfMQn4khLo0vOAZ2Oret6FDS9VvANIOB778zOa0GNkWKbpJigsURxHeKkjxMwPl4Dd9GP8FQWDV4PrX7fU+KKM45nSSfTOiZgT9dBCMc2ojQa8AExCCm8V03ZwD/aam5XtXwuE9QpmoYIw2MobubC/4AsfPa9ma9R82duShXvwVl1YQX1d0eNrwvMyt4I3kZ/NsDh5UDH9Db32xjalk11Tu9tnYjv+7XFxNf1TCmuOxNCw/eEjP",
            "size": 53333400,
            "validityTime": 1200,
            "needPay": false,
            "payInfo": null,
            "r": 720
          },
          "videoGroup": [
            {
              "id": 243125,
              "name": "#歌手#",
              "alg": "groupTagRank"
            },
            {
              "id": 12100,
              "name": "流行",
              "alg": "groupTagRank"
            },
            {
              "id": 5100,
              "name": "音乐",
              "alg": "groupTagRank"
            }
          ],
          "previewUrl": null,
          "previewDurationms": 0,
          "hasRelatedGameAd": false,
          "markTypes": null,
          "relateSong": [
            {
              "name": "直来直往 (Live)",
              "id": 1432427917,
              "pst": 0,
              "t": 0,
              "ar": [
                {
                  "id": 166018,
                  "name": "吉克隽逸",
                  "tns": [],
                  "alias": []
                }
              ],
              "alia": [],
              "pop": 100,
              "st": 0,
              "rt": "",
              "fee": 8,
              "v": 1,
              "crbt": null,
              "cf": "",
              "al": {
                "id": 86670457,
                "name": "歌手·当打之年 第7期",
                "picUrl": "http://p2.music.126.net/-EV4XhJEJn_Ib7ebS1OHhg==/109951164820593469.jpg",
                "tns": [],
                "pic_str": "109951164820593469",
                "pic": 109951164820593470
              },
              "dt": 298561,
              "h": {
                "br": 320000,
                "fid": 0,
                "size": 11945325,
                "vd": -25943
              },
              "m": {
                "br": 192000,
                "fid": 0,
                "size": 7167213,
                "vd": -23358
              },
              "l": {
                "br": 128000,
                "fid": 0,
                "size": 4778157,
                "vd": -21728
              },
              "a": null,
              "cd": "01",
              "no": 8,
              "rtUrl": null,
              "ftype": 0,
              "rtUrls": [],
              "djId": 0,
              "copyright": 0,
              "s_id": 0,
              "rtype": 0,
              "rurl": null,
              "mst": 9,
              "cp": 1416682,
              "mv": 0,
              "publishTime": 0,
              "privilege": {
                "id": 1432427917,
                "fee": 8,
                "payed": 0,
                "st": 0,
                "pl": 128000,
                "dl": 0,
                "sp": 7,
                "cp": 1,
                "subp": 1,
                "cs": false,
                "maxbr": 999000,
                "fl": 128000,
                "toast": false,
                "flag": 68,
                "preSell": false
              }
            }
          ],
          "relatedInfo": null,
          "videoUserLiveInfo": null,
          "vid": "6158A2C7F9ACB3AA88B38F8FACCF7141",
          "durationms": 295000,
          "playTime": 55410,
          "praisedCount": 175,
          "praised": false,
          "subscribed": false
        }
      },
      {
        "type": 1,
        "displayed": false,
        "alg": "onlineHotGroup",
        "extAlg": null,
        "data": {
          "alg": "onlineHotGroup",
          "scm": "1.music-video-timeline.video_timeline.video.181017.-295043608",
          "threadId": "R_VI_62_0C7A78E9E413B6C009AE4C76EB0AF021",
          "coverUrl": "https://p1.music.126.net/EIyEA-bSJGad-DI82VSbRw==/109951164135540016.jpg",
          "height": 1080,
          "width": 1920,
          "title": "魏如萱与茄子蛋合唱《你啊你啊》《浪流连》",
          "description": "\n魏如萱与茄子蛋合唱《你啊你啊》《浪流连》，动人旋律让全场沉醉",
          "commentCount": 22,
          "shareCount": 55,
          "resolutions": [
            {
              "resolution": 240,
              "size": 106085535
            },
            {
              "resolution": 480,
              "size": 202401771
            },
            {
              "resolution": 720,
              "size": 314936658
            },
            {
              "resolution": 1080,
              "size": 507993328
            }
          ],
          "creator": {
            "defaultAvatar": false,
            "province": 710000,
            "authStatus": 0,
            "followed": false,
            "avatarUrl": "http://p1.music.126.net/5o854xH3bkGHwLpa0AOuRA==/109951163650074554.jpg",
            "accountStatus": 0,
            "gender": 1,
            "city": 710100,
            "birthday": -2209017600000,
            "userId": 1664328643,
            "userType": 201,
            "nickname": "台灣音樂風雲榜",
            "signature": "權威音樂榜單持續即時更新，最新發片動態，歌曲MV，及時更新。合作投稿請私訊！",
            "description": "",
            "detailDescription": "",
            "avatarImgId": 109951163650074560,
            "backgroundImgId": 109951164316932430,
            "backgroundUrl": "http://p1.music.126.net/-So6gvMBSiEWeBnPii7QDg==/109951164316932439.jpg",
            "authority": 0,
            "mutual": false,
            "expertTags": null,
            "experts": {
              "1": "视频达人(华语、音乐现场)"
            },
            "djStatus": 0,
            "vipType": 0,
            "remarkName": null,
            "avatarImgIdStr": "109951163650074554",
            "backgroundImgIdStr": "109951164316932439",
            "avatarImgId_str": "109951163650074554"
          },
          "urlInfo": {
            "id": "0C7A78E9E413B6C009AE4C76EB0AF021",
            "url": "http://vodkgeyttp9.vod.126.net/vodkgeyttp8/XFD32YdU_2538558833_uhd.mp4?ts=1587961804&rid=3009063014E119FC636C42FBC02D0085&rl=3&rs=VpSNDFdYLctuquKLluKcnwHBxFyuZcJe&sign=3feef7595450e2a0b013710ecc82467a&ext=f0xw0mOJqGcf8yfMQn4khLo0vOAZ2Oret6FDS9VvANIOB778zOa0GNkWKbpJigsURxHeKkjxMwPl4Dd9GP8FQWDV4PrX7fU+KKM45nSSfTOiZgT9dBCMc2ojQa8AExCCm8V03ZwD/aam5XtXwuE9QpmoYIw2MobubC/4AsfPa9ma9R82duShXvwVl1YQX1d0eNrwvMyt4I3kZ/NsDh5UDH9Db32xjalk11Tu9tnYjv+7XFxNf1TCmuOxNCw/eEjP",
            "size": 507993328,
            "validityTime": 1200,
            "needPay": false,
            "payInfo": null,
            "r": 1080
          },
          "videoGroup": [
            {
              "id": -33241,
              "name": "#欧阳娜娜の歌单♡♪♬ ↓#",
              "alg": "groupTagRank"
            },
            {
              "id": 243125,
              "name": "#歌手#",
              "alg": "groupTagRank"
            },
            {
              "id": 9102,
              "name": "演唱会",
              "alg": "groupTagRank"
            },
            {
              "id": 59101,
              "name": "华语现场",
              "alg": "groupTagRank"
            },
            {
              "id": 57108,
              "name": "流行现场",
              "alg": "groupTagRank"
            },
            {
              "id": 1100,
              "name": "音乐现场",
              "alg": "groupTagRank"
            },
            {
              "id": 58100,
              "name": "现场",
              "alg": "groupTagRank"
            },
            {
              "id": 5100,
              "name": "音乐",
              "alg": "groupTagRank"
            }
          ],
          "previewUrl": null,
          "previewDurationms": 0,
          "hasRelatedGameAd": false,
          "markTypes": null,
          "relateSong": [
            {
              "name": "你啊你啊 (电视剧「用九柑仔店」插曲)",
              "id": 440208470,
              "pst": 0,
              "t": 0,
              "ar": [
                {
                  "id": 9609,
                  "name": "魏如萱",
                  "tns": [],
                  "alias": []
                }
              ],
              "alia": [],
              "pop": 100,
              "st": 0,
              "rt": null,
              "fee": 8,
              "v": 15,
              "crbt": null,
              "cf": "",
              "al": {
                "id": 35016103,
                "name": "末路狂花",
                "picUrl": "http://p2.music.126.net/VA3kAvrg2YRrxCgDMJzHnw==/3265549618941178.jpg",
                "tns": [],
                "pic": 3265549618941178
              },
              "dt": 326269,
              "h": {
                "br": 320000,
                "fid": 0,
                "size": 13051864,
                "vd": -6347
              },
              "m": {
                "br": 192000,
                "fid": 0,
                "size": 7831136,
                "vd": -3721
              },
              "l": {
                "br": 128000,
                "fid": 0,
                "size": 5220772,
                "vd": -1944
              },
              "a": null,
              "cd": "1",
              "no": 8,
              "rtUrl": null,
              "ftype": 0,
              "rtUrls": [],
              "djId": 0,
              "copyright": 0,
              "s_id": 0,
              "rtype": 0,
              "rurl": null,
              "mst": 9,
              "cp": 7001,
              "mv": 5391085,
              "publishTime": 1478793600000,
              "privilege": {
                "id": 440208470,
                "fee": 8,
                "payed": 0,
                "st": 0,
                "pl": 128000,
                "dl": 0,
                "sp": 7,
                "cp": 1,
                "subp": 1,
                "cs": false,
                "maxbr": 320000,
                "fl": 128000,
                "toast": false,
                "flag": 4,
                "preSell": false
              }
            }
          ],
          "relatedInfo": null,
          "videoUserLiveInfo": null,
          "vid": "0C7A78E9E413B6C009AE4C76EB0AF021",
          "durationms": 698805,
          "playTime": 94344,
          "praisedCount": 422,
          "praised": false,
          "subscribed": false
        }
      },
      {
        "type": 1,
        "displayed": false,
        "alg": "onlineHotGroup",
        "extAlg": null,
        "data": {
          "alg": "onlineHotGroup",
          "scm": "1.music-video-timeline.video_timeline.video.181017.-295043608",
          "threadId": "R_VI_62_A74CCBE12453A93400AAB898A7ED45F9",
          "coverUrl": "https://p2.music.126.net/-K6QylZ7oeyt4O_QnBQi7w==/109951164774927345.jpg",
          "height": 720,
          "width": 1280,
          "title": "华晨宇：“就怪你，怪你” 撒娇也太萌啦！歌手第四期花絮",
          "description": "大哥撒娇也超级可爱[大哭]",
          "commentCount": 75,
          "shareCount": 64,
          "resolutions": [
            {
              "resolution": 240,
              "size": 3919345
            },
            {
              "resolution": 480,
              "size": 7335402
            },
            {
              "resolution": 720,
              "size": 9467374
            }
          ],
          "creator": {
            "defaultAvatar": false,
            "province": 510000,
            "authStatus": 0,
            "followed": false,
            "avatarUrl": "http://p1.music.126.net/cYCqsx-Qc3O1JVoabsCH3g==/109951163301591428.jpg",
            "accountStatus": 0,
            "gender": 1,
            "city": 510100,
            "birthday": 852566400000,
            "userId": 484393573,
            "userType": 202,
            "nickname": "艾黎ike",
            "signature": "B站同名ID  火星人+联盟控 云村会转载点好听好玩的视频  英雄联盟闲聊：870509276",
            "description": "",
            "detailDescription": "",
            "avatarImgId": 109951163301591420,
            "backgroundImgId": 109951164639705890,
            "backgroundUrl": "http://p1.music.126.net/Oc9-FzmaX9LwoYiLZTMg7w==/109951164639705880.jpg",
            "authority": 0,
            "mutual": false,
            "expertTags": null,
            "experts": {
              "2": "二次元资讯达人"
            },
            "djStatus": 10,
            "vipType": 10,
            "remarkName": null,
            "avatarImgIdStr": "109951163301591428",
            "backgroundImgIdStr": "109951164639705880",
            "avatarImgId_str": "109951163301591428"
          },
          "urlInfo": {
            "id": "A74CCBE12453A93400AAB898A7ED45F9",
            "url": "http://vodkgeyttp9.vod.126.net/vodkgeyttp8/vAA3sncU_2927216799_shd.mp4?ts=1587961804&rid=3009063014E119FC636C42FBC02D0085&rl=3&rs=qBFmhqXOPLWzvLHTsEferhICOBxJaGHh&sign=dcb3ce5eb33387c75cbda50ca7d0f1a8&ext=f0xw0mOJqGcf8yfMQn4khLo0vOAZ2Oret6FDS9VvANIOB778zOa0GNkWKbpJigsURxHeKkjxMwPl4Dd9GP8FQWDV4PrX7fU+KKM45nSSfTOiZgT9dBCMc2ojQa8AExCCm8V03ZwD/aam5XtXwuE9QpmoYIw2MobubC/4AsfPa9ma9R82duShXvwVl1YQX1d0eNrwvMyt4I3kZ/NsDh5UDH9Db32xjalk11Tu9tnYjv+7XFxNf1TCmuOxNCw/eEjP",
            "size": 9467374,
            "validityTime": 1200,
            "needPay": false,
            "payInfo": null,
            "r": 720
          },
          "videoGroup": [
            {
              "id": 243125,
              "name": "#歌手#",
              "alg": "groupTagRank"
            },
            {
              "id": 23118,
              "name": "华晨宇",
              "alg": "groupTagRank"
            },
            {
              "id": 1100,
              "name": "音乐现场",
              "alg": "groupTagRank"
            },
            {
              "id": 58100,
              "name": "现场",
              "alg": "groupTagRank"
            },
            {
              "id": 5100,
              "name": "音乐",
              "alg": "groupTagRank"
            }
          ],
          "previewUrl": null,
          "previewDurationms": 0,
          "hasRelatedGameAd": false,
          "markTypes": null,
          "relateSong": [],
          "relatedInfo": null,
          "videoUserLiveInfo": null,
          "vid": "A74CCBE12453A93400AAB898A7ED45F9",
          "durationms": 38705,
          "playTime": 259434,
          "praisedCount": 1536,
          "praised": false,
          "subscribed": false
        }
      },
      {
        "type": 1,
        "displayed": false,
        "alg": "onlineHotGroup",
        "extAlg": null,
        "data": {
          "alg": "onlineHotGroup",
          "scm": "1.music-video-timeline.video_timeline.video.181017.-295043608",
          "threadId": "R_VI_62_E778B0F82EED2736C7820B9DE081B93E",
          "coverUrl": "https://p2.music.126.net/r9nVz1lLUcy90KjZIR9f0A==/109951164276811524.jpg",
          "height": 1080,
          "width": 1920,
          "title": "《多想在平庸的生活拥抱你》",
          "description": "《多想在平庸的生活拥抱你》自剪MV\n素材来自黄渤&江一燕电影《假装情侣》\n灵感来自曾经美好的爱情",
          "commentCount": 60,
          "shareCount": 235,
          "resolutions": [
            {
              "resolution": 240,
              "size": 18533836
            },
            {
              "resolution": 480,
              "size": 26910855
            },
            {
              "resolution": 720,
              "size": 37956060
            },
            {
              "resolution": 1080,
              "size": 72521970
            }
          ],
          "creator": {
            "defaultAvatar": false,
            "province": 510000,
            "authStatus": 0,
            "followed": false,
            "avatarUrl": "http://p1.music.126.net/rEo4Ykr3vldgtqJqahX8Kw==/109951164659306778.jpg",
            "accountStatus": 0,
            "gender": 1,
            "city": 510100,
            "birthday": 779126400000,
            "userId": 47191135,
            "userType": 0,
            "nickname": "livelikeawarrior",
            "signature": "你为什么言无声、泪如雨",
            "description": "",
            "detailDescription": "",
            "avatarImgId": 109951164659306780,
            "backgroundImgId": 109951164659303340,
            "backgroundUrl": "http://p1.music.126.net/ciaa4dXAepxtOFywW0d0qw==/109951164659303341.jpg",
            "authority": 0,
            "mutual": false,
            "expertTags": null,
            "experts": null,
            "djStatus": 0,
            "vipType": 0,
            "remarkName": null,
            "avatarImgIdStr": "109951164659306778",
            "backgroundImgIdStr": "109951164659303341",
            "avatarImgId_str": "109951164659306778"
          },
          "urlInfo": {
            "id": "E778B0F82EED2736C7820B9DE081B93E",
            "url": "http://vodkgeyttp9.vod.126.net/vodkgeyttp8/sziIGisi_2481272476_uhd.mp4?ts=1587961804&rid=3009063014E119FC636C42FBC02D0085&rl=3&rs=QHzHKJXangrFlVfOCILhlnCdcnYTNQll&sign=0b36fddfad2e1d4afb98720760236c47&ext=f0xw0mOJqGcf8yfMQn4khLo0vOAZ2Oret6FDS9VvANIOB778zOa0GNkWKbpJigsURxHeKkjxMwPl4Dd9GP8FQWDV4PrX7fU+KKM45nSSfTOiZgT9dBCMc2ojQa8AExCCm8V03ZwD/aam5XtXwuE9QpmoYIw2MobubC/4AsfPa9ma9R82duShXvwVl1YQX1d0eNrwvMyt4I3kZ/NsDh5UDH9Db32xjalk11Tu9tnYjv/sb6d3sgyrbq5aE7nlMDS7",
            "size": 72521970,
            "validityTime": 1200,
            "needPay": false,
            "payInfo": null,
            "r": 1080
          },
          "videoGroup": [
            {
              "id": -35273,
              "name": "#隔壁老樊的孤单#",
              "alg": "groupTagRank"
            },
            {
              "id": 243125,
              "name": "#歌手#",
              "alg": "groupTagRank"
            },
            {
              "id": 24127,
              "name": "电影",
              "alg": "groupTagRank"
            },
            {
              "id": 3100,
              "name": "影视",
              "alg": "groupTagRank"
            },
            {
              "id": 23116,
              "name": "音乐推荐",
              "alg": "groupTagRank"
            },
            {
              "id": 5100,
              "name": "音乐",
              "alg": "groupTagRank"
            }
          ],
          "previewUrl": null,
          "previewDurationms": 0,
          "hasRelatedGameAd": false,
          "markTypes": null,
          "relateSong": [
            {
              "name": "多想在平庸的生活拥抱你",
              "id": 1346104327,
              "pst": 0,
              "t": 0,
              "ar": [
                {
                  "id": 12429072,
                  "name": "隔壁老樊",
                  "tns": [],
                  "alias": []
                }
              ],
              "alia": [],
              "pop": 100,
              "st": 0,
              "rt": "",
              "fee": 8,
              "v": 22,
              "crbt": null,
              "cf": "",
              "al": {
                "id": 75019098,
                "name": "我曾",
                "picUrl": "http://p2.music.126.net/gNbAlXamNjhR2j3aOukNhg==/109951164232796511.jpg",
                "tns": [],
                "pic_str": "109951164232796511",
                "pic": 109951164232796510
              },
              "dt": 269936,
              "h": {
                "br": 320000,
                "fid": 0,
                "size": 10800109,
                "vd": -25200
              },
              "m": {
                "br": 192000,
                "fid": 0,
                "size": 6480083,
                "vd": -22600
              },
              "l": {
                "br": 128000,
                "fid": 0,
                "size": 4320070,
                "vd": -21000
              },
              "a": null,
              "cd": "01",
              "no": 4,
              "rtUrl": null,
              "ftype": 0,
              "rtUrls": [],
              "djId": 0,
              "copyright": 0,
              "s_id": 0,
              "rtype": 0,
              "rurl": null,
              "mst": 9,
              "cp": 0,
              "mv": 10869713,
              "publishTime": 1552233600007,
              "privilege": {
                "id": 1346104327,
                "fee": 8,
                "payed": 0,
                "st": 0,
                "pl": 128000,
                "dl": 0,
                "sp": 7,
                "cp": 1,
                "subp": 1,
                "cs": false,
                "maxbr": 999000,
                "fl": 128000,
                "toast": false,
                "flag": 64,
                "preSell": false
              }
            }
          ],
          "relatedInfo": null,
          "videoUserLiveInfo": null,
          "vid": "E778B0F82EED2736C7820B9DE081B93E",
          "durationms": 320021,
          "playTime": 391116,
          "praisedCount": 807,
          "praised": false,
          "subscribed": false
        }
      },
      {
        "type": 1,
        "displayed": false,
        "alg": "onlineHotGroup",
        "extAlg": null,
        "data": {
          "alg": "onlineHotGroup",
          "scm": "1.music-video-timeline.video_timeline.video.181017.-295043608",
          "threadId": "R_VI_62_CB49E0D33D77BBDC4707525E56043FBB",
          "coverUrl": "https://p2.music.126.net/TuIlFhwj0salO8OanoLJCA==/109951163572786677.jpg",
          "height": 720,
          "width": 1280,
          "title": "玉置浩二 香港交响音乐会——《行かないで》（请别走）",
          "description": "玉置浩二 香港交响音乐会——《行かないで》（请别走）\n#玉置浩二#",
          "commentCount": 339,
          "shareCount": 1879,
          "resolutions": [
            {
              "resolution": 240,
              "size": 49386990
            },
            {
              "resolution": 480,
              "size": 70503728
            },
            {
              "resolution": 720,
              "size": 112423264
            }
          ],
          "creator": {
            "defaultAvatar": false,
            "province": 440000,
            "authStatus": 0,
            "followed": false,
            "avatarUrl": "http://p1.music.126.net/t3PUlsIb64E8_uidhrn5Yg==/109951164873222632.jpg",
            "accountStatus": 0,
            "gender": 1,
            "city": 441400,
            "birthday": 936802800000,
            "userId": 280584846,
            "userType": 0,
            "nickname": "化天成雨",
            "signature": "音乐是表达的出口\n深爱音乐",
            "description": "",
            "detailDescription": "",
            "avatarImgId": 109951164873222620,
            "backgroundImgId": 109951164893586050,
            "backgroundUrl": "http://p1.music.126.net/s6TrVUkWqFsn2LjJqf_lcA==/109951164893586050.jpg",
            "authority": 0,
            "mutual": false,
            "expertTags": null,
            "experts": null,
            "djStatus": 0,
            "vipType": 0,
            "remarkName": null,
            "avatarImgIdStr": "109951164873222632",
            "backgroundImgIdStr": "109951164893586050",
            "avatarImgId_str": "109951164873222632"
          },
          "urlInfo": {
            "id": "CB49E0D33D77BBDC4707525E56043FBB",
            "url": "http://vodkgeyttp9.vod.126.net/vodkgeyttp8/Qk8eE2Ta_104562161_shd.mp4?ts=1587961804&rid=3009063014E119FC636C42FBC02D0085&rl=3&rs=PfvAeFAXRCisTrnywVlqYkytEIPOEMcy&sign=be96c706e6d43cad8f9ea8530ecab05d&ext=f0xw0mOJqGcf8yfMQn4khLo0vOAZ2Oret6FDS9VvANIOB778zOa0GNkWKbpJigsURxHeKkjxMwPl4Dd9GP8FQWDV4PrX7fU+KKM45nSSfTOiZgT9dBCMc2ojQa8AExCCm8V03ZwD/aam5XtXwuE9QpmoYIw2MobubC/4AsfPa9ma9R82duShXvwVl1YQX1d0eNrwvMyt4I3kZ/NsDh5UDH9Db32xjalk11Tu9tnYjv+7XFxNf1TCmuOxNCw/eEjP",
            "size": 112423264,
            "validityTime": 1200,
            "needPay": false,
            "payInfo": null,
            "r": 720
          },
          "videoGroup": [
            {
              "id": -15299,
              "name": "#怀旧日语70 80 90s 日语怀旧，日语经典#",
              "alg": "groupTagRank"
            },
            {
              "id": 243125,
              "name": "#歌手#",
              "alg": "groupTagRank"
            },
            {
              "id": 12100,
              "name": "流行",
              "alg": "groupTagRank"
            },
            {
              "id": 1100,
              "name": "音乐现场",
              "alg": "groupTagRank"
            },
            {
              "id": 58100,
              "name": "现场",
              "alg": "groupTagRank"
            },
            {
              "id": 5100,
              "name": "音乐",
              "alg": "groupTagRank"
            }
          ],
          "previewUrl": null,
          "previewDurationms": 0,
          "hasRelatedGameAd": false,
          "markTypes": null,
          "relateSong": [
            {
              "name": "行かないで",
              "id": 524331,
              "pst": 0,
              "t": 0,
              "ar": [
                {
                  "id": 15558,
                  "name": "玉置浩二",
                  "tns": [],
                  "alias": []
                }
              ],
              "alia": [],
              "pop": 100,
              "st": 0,
              "rt": "",
              "fee": 8,
              "v": 9,
              "crbt": null,
              "cf": "",
              "al": {
                "id": 49380,
                "name": "行かないで",
                "picUrl": "http://p2.music.126.net/3wu9ZSUxcd8rW2AULcyuYQ==/647612348772362.jpg",
                "tns": [],
                "pic": 647612348772362
              },
              "dt": 382000,
              "h": {
                "br": 320000,
                "fid": 0,
                "size": 15300601,
                "vd": 3097
              },
              "m": {
                "br": 192000,
                "fid": 0,
                "size": 9180424,
                "vd": 5787
              },
              "l": {
                "br": 128000,
                "fid": 0,
                "size": 6120336,
                "vd": 3538
              },
              "a": null,
              "cd": "1",
              "no": 1,
              "rtUrl": null,
              "ftype": 0,
              "rtUrls": [],
              "djId": 0,
              "copyright": 2,
              "s_id": 0,
              "rtype": 0,
              "rurl": null,
              "mst": 9,
              "cp": 7003,
              "mv": 0,
              "publishTime": 627494400000,
              "privilege": {
                "id": 524331,
                "fee": 8,
                "payed": 0,
                "st": 0,
                "pl": 128000,
                "dl": 0,
                "sp": 7,
                "cp": 1,
                "subp": 1,
                "cs": false,
                "maxbr": 320000,
                "fl": 128000,
                "toast": false,
                "flag": 260,
                "preSell": false
              }
            }
          ],
          "relatedInfo": null,
          "videoUserLiveInfo": null,
          "vid": "CB49E0D33D77BBDC4707525E56043FBB",
          "durationms": 424809,
          "playTime": 267813,
          "praisedCount": 1623,
          "praised": false,
          "subscribed": false
        }
      },
      {
        "type": 1,
        "displayed": false,
        "alg": "onlineHotGroup",
        "extAlg": null,
        "data": {
          "alg": "onlineHotGroup",
          "scm": "1.music-video-timeline.video_timeline.video.181017.-295043608",
          "threadId": "R_VI_62_348B6DE06C83F24CBDEF8F6F6B755E85",
          "coverUrl": "https://p2.music.126.net/vQ0Zb4OI3nwOP04k2TmF5g==/109951164845016533.jpg",
          "height": 720,
          "width": 1280,
          "title": "《華晨宇 新世界》191214 音樂盛典咪咕匯",
          "description": null,
          "commentCount": 26,
          "shareCount": 27,
          "resolutions": [
            {
              "resolution": 240,
              "size": 25098215
            },
            {
              "resolution": 480,
              "size": 39797195
            },
            {
              "resolution": 720,
              "size": 54595331
            }
          ],
          "creator": {
            "defaultAvatar": false,
            "province": 810000,
            "authStatus": 0,
            "followed": false,
            "avatarUrl": "http://p1.music.126.net/s-hkAWbIqmXVFJqG5HhVAg==/109951164873335624.jpg",
            "accountStatus": 0,
            "gender": 2,
            "city": 810100,
            "birthday": -2209017600000,
            "userId": 2060020139,
            "userType": 0,
            "nickname": "華晨宇的瘋人院MadHouse",
            "signature": "別人眼中的瘋人院，是Mars宇宙裏屬於我們的小世界。",
            "description": "",
            "detailDescription": "",
            "avatarImgId": 109951164873335620,
            "backgroundImgId": 109951164531492110,
            "backgroundUrl": "http://p1.music.126.net/xvFcSEyYwJwMLVMIPG9LCw==/109951164531492111.jpg",
            "authority": 0,
            "mutual": false,
            "expertTags": null,
            "experts": null,
            "djStatus": 0,
            "vipType": 11,
            "remarkName": null,
            "avatarImgIdStr": "109951164873335624",
            "backgroundImgIdStr": "109951164531492111",
            "avatarImgId_str": "109951164873335624"
          },
          "urlInfo": {
            "id": "348B6DE06C83F24CBDEF8F6F6B755E85",
            "url": "http://vodkgeyttp9.vod.126.net/cloudmusic/uWIipNxC_2952526727_shd.mp4?ts=1587961804&rid=3009063014E119FC636C42FBC02D0085&rl=3&rs=JjbXMPNWICQVYYmunRExpiVAYrKeXwrs&sign=5d54905b11be2684794411f6d10fd294&ext=f0xw0mOJqGcf8yfMQn4khLo0vOAZ2Oret6FDS9VvANIOB778zOa0GNkWKbpJigsURxHeKkjxMwPl4Dd9GP8FQWDV4PrX7fU+KKM45nSSfTOiZgT9dBCMc2ojQa8AExCCm8V03ZwD/aam5XtXwuE9QpmoYIw2MobubC/4AsfPa9ma9R82duShXvwVl1YQX1d0eNrwvMyt4I3kZ/NsDh5UDH9Db32xjalk11Tu9tnYjv+7XFxNf1TCmuOxNCw/eEjP",
            "size": 54595331,
            "validityTime": 1200,
            "needPay": false,
            "payInfo": null,
            "r": 720
          },
          "videoGroup": [
            {
              "id": 243125,
              "name": "#歌手#",
              "alg": "groupTagRank"
            },
            {
              "id": 23118,
              "name": "华晨宇",
              "alg": "groupTagRank"
            },
            {
              "id": 1100,
              "name": "音乐现场",
              "alg": "groupTagRank"
            },
            {
              "id": 58100,
              "name": "现场",
              "alg": "groupTagRank"
            },
            {
              "id": 5100,
              "name": "音乐",
              "alg": "groupTagRank"
            }
          ],
          "previewUrl": null,
          "previewDurationms": 0,
          "hasRelatedGameAd": false,
          "markTypes": null,
          "relateSong": [],
          "relatedInfo": null,
          "videoUserLiveInfo": null,
          "vid": "348B6DE06C83F24CBDEF8F6F6B755E85",
          "durationms": 360000,
          "playTime": 59266,
          "praisedCount": 436,
          "praised": false,
          "subscribed": false
        }
      },
      {
        "type": 1,
        "displayed": false,
        "alg": "onlineHotGroup",
        "extAlg": null,
        "data": {
          "alg": "onlineHotGroup",
          "scm": "1.music-video-timeline.video_timeline.video.181017.-295043608",
          "threadId": "R_VI_62_417D6FAE3DB36A29B1CB6F71B16D1130",
          "coverUrl": "https://p2.music.126.net/vub42re6INFHM2n6SAH9cw==/109951163574128076.jpg",
          "height": 1080,
          "width": 1920,
          "title": "杂草音乐 | 男生翻唱徐佳莹《言不由衷》",
          "description": "杂草音乐 翻唱视频每周五更新",
          "commentCount": 17,
          "shareCount": 19,
          "resolutions": [
            {
              "resolution": 240,
              "size": 11198912
            },
            {
              "resolution": 480,
              "size": 19812222
            },
            {
              "resolution": 720,
              "size": 29859899
            },
            {
              "resolution": 1080,
              "size": 88568293
            }
          ],
          "creator": {
            "defaultAvatar": false,
            "province": 360000,
            "authStatus": 1,
            "followed": false,
            "avatarUrl": "http://p1.music.126.net/VyR0HVDjLAXi35zw8My7cA==/109951164766683679.jpg",
            "accountStatus": 0,
            "gender": 1,
            "city": 360100,
            "birthday": 855158400000,
            "userId": 262007446,
            "userType": 4,
            "nickname": "网综歌颂者2020",
            "signature": "原创素人翻唱音乐类综艺节目，3月15日前 每周4晚20:30准时更新。",
            "description": "",
            "detailDescription": "",
            "avatarImgId": 109951164766683680,
            "backgroundImgId": 109951164085650220,
            "backgroundUrl": "http://p1.music.126.net/6Atva3jvRyCJXDWgckLThA==/109951164085650221.jpg",
            "authority": 0,
            "mutual": false,
            "expertTags": null,
            "experts": null,
            "djStatus": 10,
            "vipType": 11,
            "remarkName": null,
            "avatarImgIdStr": "109951164766683679",
            "backgroundImgIdStr": "109951164085650221",
            "avatarImgId_str": "109951164766683679"
          },
          "urlInfo": {
            "id": "417D6FAE3DB36A29B1CB6F71B16D1130",
            "url": "http://vodkgeyttp9.vod.126.net/vodkgeyttp8/kz7UBOkZ_1857628581_uhd.mp4?ts=1587961804&rid=3009063014E119FC636C42FBC02D0085&rl=3&rs=adTxHjpNonGRktqTsVuGHINPaqgAIQLE&sign=893f12a9b880a1bc9ec8bd50667a1b19&ext=f0xw0mOJqGcf8yfMQn4khLo0vOAZ2Oret6FDS9VvANIOB778zOa0GNkWKbpJigsURxHeKkjxMwPl4Dd9GP8FQWDV4PrX7fU+KKM45nSSfTOiZgT9dBCMc2ojQa8AExCCm8V03ZwD/aam5XtXwuE9QpmoYIw2MobubC/4AsfPa9ma9R82duShXvwVl1YQX1d0eNrwvMyt4I3kZ/NsDh5UDH9Db32xjalk11Tu9tnYjv+7XFxNf1TCmuOxNCw/eEjP",
            "size": 88568293,
            "validityTime": 1200,
            "needPay": false,
            "payInfo": null,
            "r": 1080
          },
          "videoGroup": [
            {
              "id": -31780,
              "name": "#痛彻心扉地哭，然后刻骨铭心地记住#",
              "alg": "groupTagRank"
            },
            {
              "id": 16205,
              "name": "徐佳莹",
              "alg": "groupTagRank"
            },
            {
              "id": 243125,
              "name": "#歌手#",
              "alg": "groupTagRank"
            },
            {
              "id": 59110,
              "name": "国内音乐人",
              "alg": "groupTagRank"
            },
            {
              "id": 57111,
              "name": "中文翻唱",
              "alg": "groupTagRank"
            },
            {
              "id": 60100,
              "name": "翻唱",
              "alg": "groupTagRank"
            },
            {
              "id": 12100,
              "name": "流行",
              "alg": "groupTagRank"
            },
            {
              "id": 5100,
              "name": "音乐",
              "alg": "groupTagRank"
            }
          ],
          "previewUrl": null,
          "previewDurationms": 0,
          "hasRelatedGameAd": false,
          "markTypes": null,
          "relateSong": [
            {
              "name": "言不由衷",
              "id": 521749251,
              "pst": 0,
              "t": 0,
              "ar": [
                {
                  "id": 9940,
                  "name": "徐佳莹",
                  "tns": [],
                  "alias": []
                }
              ],
              "alia": [],
              "pop": 100,
              "st": 0,
              "rt": null,
              "fee": 8,
              "v": 89,
              "crbt": null,
              "cf": "",
              "al": {
                "id": 37029433,
                "name": "心里学",
                "picUrl": "http://p2.music.126.net/eLXUupsFAophg2Sx2CpAjQ==/109951163093327787.jpg",
                "tns": [],
                "pic_str": "109951163093327787",
                "pic": 109951163093327790
              },
              "dt": 261240,
              "h": {
                "br": 320000,
                "fid": 0,
                "size": 10452158,
                "vd": -31066
              },
              "m": {
                "br": 192000,
                "fid": 0,
                "size": 6271312,
                "vd": -28441
              },
              "l": {
                "br": 128000,
                "fid": 0,
                "size": 4180889,
                "vd": -26668
              },
              "a": null,
              "cd": "01",
              "no": 1,
              "rtUrl": null,
              "ftype": 0,
              "rtUrls": [],
              "djId": 0,
              "copyright": 2,
              "s_id": 0,
              "rtype": 0,
              "rurl": null,
              "mst": 9,
              "cp": 14014,
              "mv": 5763032,
              "publishTime": 1512403200007,
              "privilege": {
                "id": 521749251,
                "fee": 8,
                "payed": 0,
                "st": 0,
                "pl": 128000,
                "dl": 0,
                "sp": 7,
                "cp": 1,
                "subp": 1,
                "cs": false,
                "maxbr": 999000,
                "fl": 128000,
                "toast": false,
                "flag": 0,
                "preSell": false
              }
            }
          ],
          "relatedInfo": null,
          "videoUserLiveInfo": null,
          "vid": "417D6FAE3DB36A29B1CB6F71B16D1130",
          "durationms": 240941,
          "playTime": 21184,
          "praisedCount": 82,
          "praised": false,
          "subscribed": false
        }
      },
      {
        "type": 1,
        "displayed": false,
        "alg": "onlineHotGroup",
        "extAlg": null,
        "data": {
          "alg": "onlineHotGroup",
          "scm": "1.music-video-timeline.video_timeline.video.181017.-295043608",
          "threadId": "R_VI_62_98823B8D992E7827429894A9092CDF0C",
          "coverUrl": "https://p1.music.126.net/tp7lQQisjlLoVbjDvyhtlw==/109951163940355358.jpg",
          "height": 1920,
          "width": 1080,
          "title": "《张三的歌》吉他弹唱简单版~",
          "description": "《张三的歌》吉他弹唱简单版~",
          "commentCount": 7,
          "shareCount": 7,
          "resolutions": [
            {
              "resolution": 240,
              "size": 6988337
            },
            {
              "resolution": 480,
              "size": 13660316
            },
            {
              "resolution": 720,
              "size": 23612127
            },
            {
              "resolution": 1080,
              "size": 47215683
            }
          ],
          "creator": {
            "defaultAvatar": false,
            "province": 370000,
            "authStatus": 1,
            "followed": false,
            "avatarUrl": "http://p1.music.126.net/IUEff7TYHa6PODZQyQ48BQ==/109951163257457511.jpg",
            "accountStatus": 0,
            "gender": 2,
            "city": 370200,
            "birthday": -2209017600000,
            "userId": 105060904,
            "userType": 4,
            "nickname": "莉莉克丝Leleex",
            "signature": "关注微博/公众号：莉莉克丝Leleex 获取更多曲谱和教学哦~",
            "description": "",
            "detailDescription": "",
            "avatarImgId": 109951163257457500,
            "backgroundImgId": 2002210674180198,
            "backgroundUrl": "http://p1.music.126.net/i0qi6mibX8gq2SaLF1bYbA==/2002210674180198.jpg",
            "authority": 0,
            "mutual": false,
            "expertTags": null,
            "experts": {
              "1": "音乐原创视频达人"
            },
            "djStatus": 10,
            "vipType": 0,
            "remarkName": null,
            "avatarImgIdStr": "109951163257457511",
            "backgroundImgIdStr": "2002210674180198",
            "avatarImgId_str": "109951163257457511"
          },
          "urlInfo": {
            "id": "98823B8D992E7827429894A9092CDF0C",
            "url": "http://vodkgeyttp9.vod.126.net/vodkgeyttp8/paRKr8Uf_2389420223_uhd.mp4?ts=1587961804&rid=3009063014E119FC636C42FBC02D0085&rl=3&rs=zxiwiYEzOWvltkOfsPsaKTVqKgPxhoNc&sign=8b648fb2b24d61aecd7a61028a6d193a&ext=f0xw0mOJqGcf8yfMQn4khLo0vOAZ2Oret6FDS9VvANIOB778zOa0GNkWKbpJigsURxHeKkjxMwPl4Dd9GP8FQWDV4PrX7fU+KKM45nSSfTOiZgT9dBCMc2ojQa8AExCCm8V03ZwD/aam5XtXwuE9QpmoYIw2MobubC/4AsfPa9ma9R82duShXvwVl1YQX1d0eNrwvMyt4I3kZ/NsDh5UDH9Db32xjalk11Tu9tnYjv+7XFxNf1TCmuOxNCw/eEjP",
            "size": 47215683,
            "validityTime": 1200,
            "needPay": false,
            "payInfo": null,
            "r": 1080
          },
          "videoGroup": [
            {
              "id": -35424,
              "name": "#经典老歌500首怀旧【经典歌曲大全】#",
              "alg": "groupTagRank"
            },
            {
              "id": 243125,
              "name": "#歌手#",
              "alg": "groupTagRank"
            },
            {
              "id": 101105,
              "name": "首发",
              "alg": "groupTagRank"
            },
            {
              "id": 59110,
              "name": "国内音乐人",
              "alg": "groupTagRank"
            },
            {
              "id": 16170,
              "name": "吉他",
              "alg": "groupTagRank"
            },
            {
              "id": 57111,
              "name": "中文翻唱",
              "alg": "groupTagRank"
            },
            {
              "id": 60100,
              "name": "翻唱",
              "alg": "groupTagRank"
            },
            {
              "id": 12100,
              "name": "流行",
              "alg": "groupTagRank"
            },
            {
              "id": 5100,
              "name": "音乐",
              "alg": "groupTagRank"
            }
          ],
          "previewUrl": null,
          "previewDurationms": 0,
          "hasRelatedGameAd": false,
          "markTypes": [
            112
          ],
          "relateSong": [
            {
              "name": "张三的歌",
              "id": 210884,
              "pst": 0,
              "t": 0,
              "ar": [
                {
                  "id": 7220,
                  "name": "蔡琴",
                  "tns": [],
                  "alias": []
                }
              ],
              "alia": [],
              "pop": 100,
              "st": 0,
              "rt": "",
              "fee": 8,
              "v": 189,
              "crbt": null,
              "cf": "",
              "al": {
                "id": 21400,
                "name": "鲍比达&蔡琴  遇见",
                "picUrl": "http://p2.music.126.net/RBUlQzRcSPa43Aji3dnVmw==/109951164577862384.jpg",
                "tns": [],
                "pic_str": "109951164577862384",
                "pic": 109951164577862380
              },
              "dt": 288227,
              "h": {
                "br": 320000,
                "fid": 0,
                "size": 11531538,
                "vd": -23519
              },
              "m": {
                "br": 192000,
                "fid": 0,
                "size": 6918940,
                "vd": -20941
              },
              "l": {
                "br": 128000,
                "fid": 0,
                "size": 4612641,
                "vd": -19263
              },
              "a": null,
              "cd": "1",
              "no": 8,
              "rtUrl": null,
              "ftype": 0,
              "rtUrls": [],
              "djId": 0,
              "copyright": 2,
              "s_id": 0,
              "rtype": 0,
              "rurl": null,
              "mst": 9,
              "cp": 1416617,
              "mv": 0,
              "publishTime": 960825600000,
              "privilege": {
                "id": 210884,
                "fee": 8,
                "payed": 0,
                "st": 0,
                "pl": 128000,
                "dl": 0,
                "sp": 7,
                "cp": 1,
                "subp": 1,
                "cs": false,
                "maxbr": 999000,
                "fl": 128000,
                "toast": false,
                "flag": 68,
                "preSell": false
              }
            }
          ],
          "relatedInfo": null,
          "videoUserLiveInfo": null,
          "vid": "98823B8D992E7827429894A9092CDF0C",
          "durationms": 86400,
          "playTime": 4918,
          "praisedCount": 38,
          "praised": false,
          "subscribed": false
        }
      }
    ]
    let arr = [1,2,3,4]
    // 2. 将获取到数据同之前的数据合并
    setTimeout(() => {
      let videoList = this.data.videoList;
      videoList = videoList.concat(newVideoList)
  
      wx.hideLoading()
      // 3. 更新状态
      this.setData({
        videoList
      })
    }, 2000)
  },
  
  handlePlay(event){
    console.log(event);
    console.log('play播放');
    // 找到上一个播放video的上下文对象videoContext
    // stop()
    // 上一个video的上下文对象
    // 当本地的视频id和上一下的视频id不是同一个id的时候
    this.vid !== event.currentTarget.id && this.videoContext && this.videoContext.stop();
    
    // 判断当前视频是否和上一个视频不是同一个视频，通过vid
    // if(event.currentTarget.id !== this.vid ){
    //   if(this.videoContext){ // 判断是否有上下文对象，证明之前播放过视频
    //     this.videoContext.stop()
    //   }
    // }
    
    this.vid = event.currentTarget.id;
    this.videoContext = wx.createVideoContext(this.vid);
    // this.videoContext.stop();
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
    // 缺点： 针对于整个页面的
    console.log('页面滑到底部了。。。');
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
