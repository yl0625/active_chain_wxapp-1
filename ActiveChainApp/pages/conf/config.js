// pages/conf/config.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    isUserAuth: false,
    genders: [{
        'name': '男',
        'value': 1
      },
      {
        'name': '女',
        'value': 2
      }
    ],
    inputDisabled: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    this.setData({
      userInfo: app.globalData.userInfo,
      isUserAuth: app.globalData.isUserAuth
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  returnMainUI: function(e) {
    wx.switchTab({
      url: '../main/mainui',
    })
  },
  // 性别设置
  radioChange: function(e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value);

    var radioItems = this.data.radioItems;
    for (var i = 0, len = radioItems.length; i < len; ++i) {
      radioItems[i].checked = radioItems[i].value == e.detail.value;
    }

    this.setData({
      radioItems: radioItems
    });
  },
  // 点击修改
  onTapEdit: function(e){
      this.setData({
      inputDisabled: false
      })
  },
  // 点击保存
  onTapSave: function (e) {
    this.setData({
      inputDisabled: true
    })
  },
})