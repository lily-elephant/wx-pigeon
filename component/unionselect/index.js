// component/unionselect/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    unionId: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    array: [
      { label: '北京市大兴区信鸽协会', value: 'u1' },
      { label: '北京市房山区信鸽协会', value: 'u2' }
    ],
    index: 0,
  },
  lifetimes:{
    attached(){
      wx.nextTick(() => {
        this.getNowUnion()
      })
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    // 获取值
    bindPickerChange(e) {
      this.setData({
        index: e.detail.value
      })
      this.triggerEvent('select', this.data.array[this.data.index].value)
    },
    // 根据前一个页面得出当前值
    getNowUnion(){
      this.data.array.forEach((item, idx) => {
        if(item.value == this.properties.unionId){
          this.setData({
            index: idx
          })
        }
      })
    }
  }
})
