class HTTP {
  request({ url, data = {}, method = 'GET' }) {  // 对象解构
    return new Promise((resolve, reject) => { //new出来的Promise需要返回
      this._request(url, resolve, reject, data, method)
    })
  }
  _request(url, resolve, reject, data, method = 'GET') {
    wx.request({
      url: config.api_base_url + url,
      data: data,
      method: method,
      header: {
        'content-type': 'application/x-www-form-urlencoded', // post请求后端获取数据
      },
      success: (res) => {
        let code = res.statusCode.toString()
        if (code.startsWith('2')) { // es6新方法startsWith endsWith
          resolve(res)
        } else {
          reject //告诉promise状态改变不要一直进行中
        }
      },
      fail: (err) => {
        reject
        wx.showToast({
          title: err
        })
      }
    })
  }
}

export {
  HTTP
}