import { ERR_OK } from '../../config.js'
import { UnionModel } from '../../models/union.js'

const unionModel = new UnionModel()

const app = getApp()

Page({
  data: {
    userInfo: null,
    union: [
      { imgSrc: "../../icon/game.png", title: "北京市房山区信鸽协会", memberCount: 2008, isMember: 0, unionId: 'u2'}, //0表示不是会员，1表示是会员
      { imgSrc: "../../icon/game.png", title: "北京市大兴区信鸽协会", memberCount: 2008, isMember: 1, unionId: 'u1' }
    ]
  },
  // 页面加载时触发
  onLoad: function () {
    // 判断用户信息
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
      })
    } else {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        console.log(res, 'app res')
        this.setData({
          userInfo: res.userInfo,
        })
      }
    }
  },
  // 页面显示/切入前台时触发
  onShow: function () {
    
  },
  // 已经注册过，去加入协会
  join(e){
    wx.navigateTo({
      url: '../join/join?unionid='+ e.detail.unionId,
    })
  },
  // 没有注册点击去获取用户信息
  getInfo(e){
    wx.getUserInfo({
      success: (res) => {
        this.setData({
          userInfo: res.userInfo,
        })
      },
    })
  },
  // 栗子🌰  获取协会列表
  _getUnionList() {
    unionModel.getUnionList().then((res) => {
      if (res.data.code == ERR_OK) {
        this.setData({
          union: res.data.data
        })
      }
    })
  },
})
