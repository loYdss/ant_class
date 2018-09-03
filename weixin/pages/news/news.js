var app = getApp()
Page({
  data: {
    navbar: ['听力', '选择', '阅读'],
    friends: [{
      id: 1,
      name: "18年六级真题",
      photo: "/../images/听力.png",
      group: 1
    }, {
      id: 2,
      name: "18年四级真题",
      photo: "/../images/听力.png",
      group: 1
    }, {
      id: 3,
      name: "18年雅思真题",
      photo: "/../images/听力.png",
      group: 2
    }, {
      id: 4,
      name: "17年雅思真题",
      photo: "/../images/听力.png",
      group: 2
    }, {
      id: 5,
      name: "18年托福真题",
      photo: "/../images/听力.png",
      group: 3
    }, {
      id: 6,
      name: "17年托福真题",
      photo: "/../images/听力.png",
      group: 3
    }
    ],


    choose: [{
      id: 1,
      name: "18年六级真题2",
      photo: "/../images/听力.png",
      group: 1
    }, {
      id: 2,
      name: "18年四级真题2",
      photo: "/../images/听力.png",
      group: 1
    }, {
      id: 3,
      name: "18年雅思真题2",
      photo: "/../images/听力.png",
      group: 2
    }, {
      id: 4,
      name: "17年雅思真题2",
      photo: "/../images/听力.png",
      group: 2
    }, {
      id: 5,
      name: "18年托福真题2",
      photo: "/../images/听力.png",
      group: 3
    }, {
      id: 6,
      name: "17年托福真题2",
      photo: "/../images/听力.png",
      group: 3
    }
    ],

    groups: [{
      id: 1,
      name: "四六级",
      hidden: true,
      count: 2
    }, {
      id: 2,
      name: "雅思",
      hidden: true,
      count: 2
    }, {
      id: 3,
      name: "托福",
      hidden: true,
      count: 2
    },
    ],

    expanded: false,
  },
  groupclick: function (e) {
    var id = e.currentTarget.id, groups = this.data.groups;

    for (var i = 0, len = groups.length; i < len; ++i) {
      if (groups[i].id == id) {
        groups[i].hidden = !groups[i].hidden;

      }

    }
    this.setData({
      groups: groups

    })
    currentTab: 0
  },
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  }
}) 