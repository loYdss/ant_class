//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
      swiper: {
          indicatorDots: true,
          duration: 300
      }
  },

  onLoad: function () {
    // console.log('onLoad')

},
in:function () {
    wx.navigateTo({
        url: "../study/study"
    })
}

})
