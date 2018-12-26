// pages/join/join.js
import { toast } from '../../utils/util.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    unionId: null,
    name: null,
    memberNum: null,
    pic1: null,
    pic2: null,
    first: null,
    second: null,
    iconFlag1: false,
    iconFlag2: false
  },
  // select下拉
  select(e){
    this.setData({
      unionId: e.detail
    })
  },
  // 获取input的值
  getName(e){
    this.setData({
      name: e.detail.value
    })
  },
  getNumber(e) { 
    this.setData({
      memberNum: e.detail.value
    })
  },
  // 上传
  upload(e){
    let _this = this;
    
    wx.chooseImage({
      count: 1, // 最多可以选择的图片张数，默认9
      sizeType: ['compressed'], // original 原图，compressed 压缩图，默认二者都有
      sourceType: ['album', 'camera'],
      success(res) {
        const tempFilePaths = res.tempFilePaths
        if (e.currentTarget.dataset.tag == 'f1') {
          _this.setData({
            pic1: tempFilePaths,
            iconFlag1: true
          })
          return
          wx.uploadFile({
            url: 'https://example.weixin.qq.com/upload', // 仅为示例，非真实的接口地址  
            method: 'POST',
            filePath: tempFilePaths[0],
            name: 'first',
            success(res) {
              const data = res.data
              _this.data.first = res.data;
              // do something
            }
          })
        }else{
          _this.setData({
            pic2: tempFilePaths,
            iconFlag2: true
          })
          return
          wx.uploadFile({
            url: 'https://example.weixin.qq.com/upload', // 仅为示例，非真实的接口地址  
            method: 'POST',
            filePath: tempFilePaths[0],
            name: 'first',
            success(res) {
              const data = res.data
              _this.data.first = res.data;
              // do something
            }
          })
        }        
      }
    })
  },
  // 数据不为空的校验
  _isNull(){
    if(!this.data.name){
      toast('姓名不可为空')
      return false
    }
    if(!this.data.memberNum){
      toast('会员证号码不可为空')
      return false
    }
    if(!this.data.first){
      toast('请上传会员本第一页')
      return false
    }
    if (!this.data.second) {
      toast('请上传会员本第二页')
      return false
    }
    return true
  },
  // 提交
  submit(){
    if(this._isNull()){
      wx.showToast({
        title: '提交成功',
      })
      wx.navigateTo({
        url: '../review/review?show=0',
      })
    }
    // 测试用
    else{
      wx.navigateTo({
        url: '../review/review',
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.unionid){
      this.setData({
        unionId: options.unionid
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