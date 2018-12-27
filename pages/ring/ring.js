// pages/ring/ring.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ringArr: [
      { union: '北京市大兴区信鸽协会',memberNum:'01234567', pigeonNumbers: ['18-01-1111666', '18-01-1111667', '18-01-1111668']},
      { union: '北京市房山区信鸽协会', memberNum: '01234567', pigeonNumbers: ['18-01-1111666', '18-01-1111667', '18-01-1111668'] }
    ]
  },

  // 添加新足环
  add(){
    wx.navigateTo({
      url: '../ringadd/ringadd',
    })
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