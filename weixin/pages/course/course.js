var app = getApp()
Page({
  data: {
    navbar: ['听力', '选择', '阅读'],
    currentTab: 0
  },
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  }
}) 