//index.js

const createRecycleContext = require('miniprogram-recycle-view')


Page({
  data: {
    windowh: 0,
    windoww: 0,
    dataList: new Array()
  },
  onLoad: function (options) {
    this.setData({
      windowh: wx.getSystemInfoSync().windowHeight,
      windoww: wx.getSystemInfoSync().windowWidth,
    })
  },
  onReady: function () {
    this

    console.log("this.data.windoww = " + this.data.windoww)
    var ctx = createRecycleContext({
      id: 'recycleId',
      dataKey: 'recycleList',
      page: this,
      itemSize: { // 这个参数也可以直接传下面定义的this.itemSizeFunc函数
        width: this.data.windoww / 2.0,
        height: 85//这里设置85，文本和图片设置为80，刚好能正确显示列表后的内容，因为每行item之间默认有5px的间距。
      }
    })

    this.formatData()
    ctx.append(this.data.dataList, this.appendCallBack)
    // ctx.update(beginIndex, list)
    // ctx.destroy()
  },
  // itemSizeFunc: function (item, idx) {
  //   return {
  //     width: 375,
  //     height:80
  //   }
  // },
  appendCallBack: function () {
    console.log("appendCallBack")
  },
  formatData: function () {
    // var newList = [{
    //   "idx": 1,
    //   "title": "Hello1",
    //   "image_url": "http://file02.16sucai.com/d/file/2014/0419/d9f4710e211cd8bce6b8ef361b805fd3.jpg"
    // }, {
    //   "idx": 2,
    //   "title": "Hello2",
    //   "image_url": "http://file02.16sucai.com/d/file/2014/0419/d9f4710e211cd8bce6b8ef361b805fd3.jpg"
    // }]

    for (var i = 0; i < 20; i++) {
      
       this.data.dataList.push(
          {
            "idx": i,
            "title": "顺丰丰盛的范德萨发的发的按时发发送到发顺丰是顺丰撒大声地发顺" + i.toString(),
            "image_url": "http://file02.16sucai.com/d/file/2014/0419/d9f4710e211cd8bce6b8ef361b805fd3.jpg"
          }
        )
    
    }

  }

})