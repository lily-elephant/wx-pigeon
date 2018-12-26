// component/region/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    province: String,
    city: String,
    county: String
  },
  lifetimes: {
    attached(){
         
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    region: [],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 地区变动
    bindRegionChange: function (e) {
      // console.log(e) //中文省市县
      let address = e.detail.value;
      this.triggerEvent('region', address)
    },
  }
})
