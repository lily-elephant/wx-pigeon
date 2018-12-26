// component/union/union/index.js
const app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    unionItem: Object,
    userInfo: {
      type: Object,
      observer: function(newVal, oldVal){
        this.setData({
          _userInfo: newVal
        })
      }
    }
  },
  lifetimes:{
    attached(){
      
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    getUserInfo: 'getUserInfo',
    _userInfo: {}
  },
  
  /**
   * 组件的方法列表
   */
  methods: {
    getInfo(){
      this.triggerEvent('getinfo', {})
    },
    join(){
      if (this.properties.unionItem.isMember == 1){
        return
      }
      this.triggerEvent('join', this.properties.unionItem)
    },
  }
})
