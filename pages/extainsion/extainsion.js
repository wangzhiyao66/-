Page({

  /**
   * 页面的初始数据
   */
  data: {
    
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
   * 用户点击右上角分享
   */
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '布丁课堂',
      path: "pages/extainsion/extainsion",
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },
  /**
   * 下拉刷新
   */
  onPullDownRefresh: function () {
    wx.stopPullDownRefresh()
  },
  // 跳转详情01
  gotofined1:function(){
    wx: wx.navigateTo({
      url: '../defined01/defined01',
      success: function (res) {
        console.log('data', res)
      }
    })
  },
  // 跳转详情02
  gotofined2: function () {
    wx: wx.navigateTo({
      url: '../defined02/defined02',
      success: function (res) {
        console.log('data', res)
      }
    })
  },
  // 跳转详情03
  gotofined3: function () {
    wx: wx.navigateTo({
      url: '../defined03/defined03',
      success: function (res) {
        console.log('data', res)
      }
    })
  },
  // 跳转详情04
  gotofined4: function () {
    wx: wx.navigateTo({
      url: '../defined04/defined04',
      success: function (res) {
        console.log('data', res)
      }
    })
  },
  // 跳转详情05
  gotofined5: function () {
    wx: wx.navigateTo({
      url: '../defined05/defined05',
      success: function (res) {
        console.log('data', res)
      }
    })
  },
  getInfo:function(){
    
    wx.saveImageToPhotosAlbum({
      success(res) {
      }
    })
    
    // wx.scanCode({
    //   success: (res) => {
    //     console.log(res)
    //   }
    // })
  }
})