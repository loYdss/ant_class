var app = getApp()
Page({
  data: {
    userInfo: {},
    rightimg: '/images/sj.png',
    userListInfo: [{
      icon: '/images/sj.png',
      text: '我的收藏',
      link: '/pages/collection/collection',
      isunread: true
    },
      {
        icon: '/images/sj.png',
        text: '我的单词本',
        link: '/pages/choice/choice',
        isunread: true
      },
    
      {
        icon: '/images/sj.png',
        text: '我的测试题',
        link: '/pages/test/test',
        isunread: true
      },
    ]
  },
  onLoad: function () {
    //onload 进入页面加载
    var that = this
    wx.getSystemInfo({
      success: function (res) {
        that.setData({ width: res.windowWidth, height: res.windowHeight })
      }
    })
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  },
  getInfoimage: function () {

  },
  setIcon: function () {
    var that = this
    wx.chooseImage({
      count: 9, // 最多可以选择的图片张数，默认9
      sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
      sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
      success: function (res) {
        // success
        var tempFilePaths = res.tempFilePaths
        that.setData({ image: tempFilePaths })
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  },
  listtouch: function (e) {

    var num = e.target.id;
    var path;

    switch (num) {
      case '0':
        path = '/pages/collection/collection';
        break;
      
      case '1':
        path = '/pages/choice/choice';
        break;

      case '2':
        path = '/pages/test/test';
        break;
      
      
      
      
   
    }

    wx.navigateTo({
      url: path

    });
  }
})