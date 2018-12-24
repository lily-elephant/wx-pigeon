// component/review/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    audioItem: Object
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
    audio(){
      this.triggerEvent('audio', this.properties.audioItem)
    }
  }
})
