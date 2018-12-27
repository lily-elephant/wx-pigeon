import {toast} from '../../utils/util.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    startNum: null,
    countNum: null,
    endNum: null,
  },
  // 获取input的值
  start(e) {
    this.setData({
      startNum: e.detail.value
    })
  },
  end(e) {
    this.setData({
      endNum: e.detail.value
    })
  },
  count(e) {
    this.setData({
      countNum: e.detail.value
    })
  },
  // 提交数据不可为空校验
  _isNull(){
    if (!this.data.startNum) {
      toast('起始号码不可为空')
      return false
    }
    if (!this.data.countNum) {
      toast('足环数量不可为空')
      return false
    }
    if (!this.data.endNum) {
      toast('足环截止号码不可为空')
      return false
    }
    return true
  },
  // 保存
  save(){
    if(this._isNull()){
      wx.navigateBack({
        delta: 1
      })
    }else{

    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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