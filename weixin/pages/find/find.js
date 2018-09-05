//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
      input_value:""
 
  },
  onLoad: function () {
    console.log('onLoad')
},


qie:function () {
    wx.navigateTo({
        url: "../news/news"
    })
},

a: function () {
    wx.navigateTo({
      url: '../choice/choice'
    })
  },

b: function () {
    wx.navigateTo({
      url: '../test/test'
    })
  },

c: function () {
    wx.navigateTo({
      url: '../read/read'
    })
  }

})
