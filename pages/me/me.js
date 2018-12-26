//获取应用实例
const app = getApp()

Page({
  data: {
    avatar: '../../icon/avatar.png',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getInfo: function () {
    wx.getUserInfo({
      success: (res) => {
        app.globalData.userInfo = res.userInfo
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      },
    })
  },
  // 收货地址
  address(){
    wx.navigateTo({
      url: '../address/address',
    })
  },
  // 鸽会会员
  member(){
    wx.navigateTo({
      url: '../review/review?show=1',
    })
  },
  // 鸽子足环
  ring(){
    wx.navigateTo({
      url: '../ring/ring',
    })
  },
  // 我的比赛
  match(){
    wx.navigateTo({
      url: '../match/match',
    })
  }
})
