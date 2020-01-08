// pages/list-test/list-test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList: new Array,
    windoww: wx.getSystemInfoSync().windowWidth
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.formatData()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.setData({
      dataList :this.data.dataList
    })
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
  onShareAppMessage: function () {

  },

  formatData:function () {
      for(var i= 0; i< 10; i++) {
        this.data.dataList.push({
          "id" : i,
          "message": "hhhhellllkkkk" + i.toString(),
          "image_url": "http://image.biaobaiju.com/uploads/20180802/01/1533144547-HjKwoGUqyr.jpg"
        })
      }
  }
})