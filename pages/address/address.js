// pages/address/address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addressList: [
      { name: '李四', phonenumber: '13839843883', province: '北京市', city: '北京市', county: '大兴区', address: '黄庄**小区'}
    ]
  },

  // 新增地址
  add(){
    wx.navigateTo({
      url: '../addressadd/addressadd?add=1', //判断是添加进入的页面
    })
  },
  // 编辑地址
  edit(e){
    let ev = e.currentTarget.dataset;
    wx.navigateTo({
      url: `../addressadd/addressadd?province=${ev.province}&city=${ev.city}&county=${ev.county}&address=${ev.address}&name=${ev.name}&phonenumber=${ev.phonenumber}`, //加参数
    })
  },
  // 删除地址
  deleteTap(){

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
    // 刷新数据
    console.log(1)
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