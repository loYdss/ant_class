Page({
  data: {
    x: 0,
    y: 0,
    isStop: false,
  },

  moveView: function (e) {
    var that = this;
    setTimeout(function () {
      that.move(that);
    }, 1000);
  },
  stopMove: function (e) {
    this.setData({
      isStop: true
    })
  },
  move: function (that) {
    var randowX = that.GetRandomNum(1, 200);
    var randowY = that.GetRandomNum(1, 400);

    that.setData({
      x: randowX,
      y: randowY,
    })
    if (!that.data.isStop) {
      setTimeout(function () {
        that.move(that);
      }, 100);
    }
  },
  //随机函数
  GetRandomNum: function (Min, Max) {
    var Range = Max - Min;
    var Rand = Math.random();
    return (Min + Math.round(Rand * Range));
  },
a:function(){
  wx.navigateTo({
    url: '../tingli/tingli',
  })
}

}
)