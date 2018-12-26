import { toast } from '../../utils/util.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: null,
    phonenumber: null,
    province: null,
    city: null,
    county: null,
    address: null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(options.add){
      return
    }
    this.setData({
      name: options.name,
      phonenumber: options.phonenumber,
      province: options.province,
      city: options.city,
      county: options.county,
      address: options.address
    })
  },
  // 子组件触发来的事件及数据
  regionChange(e){
    console.log(e.detail)
    let address = e.detail
    this.setData({
      province: address[0],
      city: address[1],
      county: address[2]
    })
  },
  // 数据不为空的校验
  _isNull() {
    if (!this.data.name) {
      toast('姓名不可为空')
      return false
    }
    if (!this.data.phonenumber) {
      toast('手机号码不可为空')
      return false
    }
    if (!this.data.province) {
      toast('请选择地区')
      return false
    }
    if (!this.data.address) {
      toast('地址不可为空')
      return false
    }
    return true
  },

  // 保存
  save(){
    wx.navigateBack({
      url: '../address/address',
    })
    if (this._isNull()) {
      wx.showToast({
        title: '保存成功',
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