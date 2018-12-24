import {HTTP} from '../utils/http.js'

class UnionModel extends HTTP{
  getUnionList(){
    this.request({
      url: '',
      data: data
    })
  }
}

export {
  UnionModel
}