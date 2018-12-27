//获取应用实例
const app = getApp()

Page({
  data: {
    phoneFlag: true,
    avatar: '../../icon/avatar.png',
    userInfo: null,
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  // 判断用户是否授权&&已经登录，才显示用户名和头像
  judgeUserInfo(){
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
  // 点击获取用户信息
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
  // 获取phone
  // getUserPhone(e){
  //   console.log(e)
  //   console.log(e.detail.errMsg)
  //   console.log(e.detail.iv)
  //   console.log(e.detail.encryptedData)
  // },
  onLoad() {
    this.judgeUserInfo();
  },
  onShow(){
    // this.judgeUserInfo()
  },
  
  // 收货地址
  address(){
    if (!this.data.hasUserInfo && this.data.canIUse){
      return
    }
    wx.navigateTo({
      url: '../address/address',
    })
  },
  // 鸽会会员
  member(){
    if (!this.data.hasUserInfo && this.data.canIUse) {
      return
    }
    wx.navigateTo({
      url: '../review/review?show=1',
    })
  },
  // 鸽子足环
  ring(){
    if (!this.data.hasUserInfo && this.data.canIUse) {
      return
    }
    wx.navigateTo({
      url: '../ring/ring',
    })
  },
  // 我的比赛
  match(){
    if (!this.data.hasUserInfo && this.data.canIUse) {
      return
    }
    wx.navigateTo({
      url: '../match/match',
    })
  }
})
