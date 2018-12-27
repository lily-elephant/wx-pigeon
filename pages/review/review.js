// pages/review/review.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addFlag: false,
    detailFlag: false,
    audioItem: null,
    audio: [
      { imgSrc: "../../icon/game.png", title: "北京市房山区信鸽协会", name: '李四', isReview: 0, memberNum: '2010181119', rId: 'u2'},
      // { imgSrc: "../../icon/game.png", title: "北京市大兴区信鸽协会", name: '李四', isReview: 0, rId: 'u2' }
    ]
  },
  // 进入年审详情
  audio(e){
    this.setData({
      detailFlag:true,
      audioItem: e.detail
    })
  },
  // 关闭年审详情
  close(){
    this.setData({
      detailFlag: false
    })
  },
  // 去年审
  goReview(){
    wx.navigateTo({
      url: '../pay/pay',
    })
  },
  // 添加新年审
  add(){
    if(this.data.addFlag){
      wx.navigateTo({
        url: '../join/join',
      })
    }else{
      let pages = getCurrentPages();//当前页面
      let prevPage = pages[pages.length - 2];//上一页面
      //直接给上一页面赋值
      prevPage.setData({
        //unionId: null,
        name: null,
        memberNum: null,
        iconFlag1: false,
        iconFlag2: false,
        pic1: null,
        pic2: null
      })
      wx.navigateBack({
        delta: 1
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(options.show==1){ //show==1表示从个人中心进入
      this.setData({
        addFlag: true
      })
    }else{
      this.setData({
        addFlag: false
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