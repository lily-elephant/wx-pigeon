// component/ring/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    ringItem: Object
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    add(){
      this.triggerEvent('add', {})
    }
  }
})
