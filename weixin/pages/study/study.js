//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
      yijinxing:"99",
      shengyu:"220",
      modalday:"99",
      modalHidden2:""
  },

  onLoad: function (e) {

var that = this
setTimeout(function() {
    that.setData({
        modalHidden2:"true"
    });
}, 1000);


 }
})
