// pages/test/test.js
var list = require('../../vocabulary.js')
var config = require('../../config')
var util = require('../../utils/util.js')
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    da1: "",
    da2: "",
    da3: "",
    da4: "",
    daan: false,
    showDaan: false,
    complete: false,
    true_num: 0,
    score: 0,
    currentTab: 0,
   
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
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onLoad: function (options) {
    this.search()
  },

  choice(e) {
    console.log(e)
    if (e.currentTarget.id === this.data.true_word) {
      this.setData({ daan: true, true_num: this.data.true_num + 1 })
      const innerAudioContext = wx.createInnerAudioContext()
      innerAudioContext.autoplay = true
      innerAudioContext.src = 'http://media-audio1.qiniu.baydn.com/us/n/ni/nice_v3.mp3'
      innerAudioContext.onPlay(() => {
      })
    } else {
      this.setData({ daan: false })
      this.setData({ complete: false })
      const innerAudioContext = wx.createInnerAudioContext()
      innerAudioContext.autoplay = true
      innerAudioContext.src = 'https://media-audio1.baydn.com/us%2Fs%2Fsa%2Fsad_v4.mp3'
      innerAudioContext.onPlay(() => {
      })
   }
    this.setData({ showDaan: true })
  },
  search() {
    var idx = Math.floor(Math.random() * 12345) + 1
    var word = list.wordList[idx]
    var that = this
    wx.request({
      url: 'https://api.shanbay.com/bdc/search/?word=' + word,
      data: {},
      method: 'GET',
      success: function (res) {
        that.setData({
          title: res.data.data.definition.split(",")[0].split("\n")[0],
          true_word: word
        })
        var num = Math.floor(Math.random() * 400) + 1
        if (num < 100) {
          that.setData({
            da1: res.data.data.content,
            da2: list.wordList[Math.floor(Math.random() * 12345) + 1],
            da3: list.wordList[Math.floor(Math.random() * 12345) + 1],
            da4: list.wordList[Math.floor(Math.random() * 12345) + 1],
          })
        }
        if (100 < num && num < 200) {
          that.setData({
            da2: res.data.data.content,
            da1: list.wordList[Math.floor(Math.random() * 12345) + 1],
            da3: list.wordList[Math.floor(Math.random() * 12345) + 1],
            da4: list.wordList[Math.floor(Math.random() * 12345) + 1],
          })
        }
        if (num < 300 && num > 200) {
          that.setData({
            da3: res.data.data.content,
            da2: list.wordList[Math.floor(Math.random() * 12345) + 1],
            da1: list.wordList[Math.floor(Math.random() * 12345) + 1],
            da4: list.wordList[Math.floor(Math.random() * 12345) + 1],
          })
        }
        if (num > 300) {
          that.setData({
            da4: res.data.data.content,
            da2: list.wordList[Math.floor(Math.random() * 12345) + 1],
            da3: list.wordList[Math.floor(Math.random() * 12345) + 1],
            da1: list.wordList[Math.floor(Math.random() * 12345) + 1],
          })
        }
      }
    })
  },


  again() {
    this.setData({
      showDaan: false,
      complete: false,
      num: 1,
      true_num: 0
    })
    this.search()
  },


  onReachBottom: function () {//下拉加载
    const that = this
    if (that.data.currentTab) {
      that.getRankGlobalData()
    }
  },
  next() {
    this.setData({ showDaan: false })

    this.search()
  },
  complete() {

  },

  a: function () {
    wx.navigateTo({
      url: '../study/study'
    })
  }

 
})

