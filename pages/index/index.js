//index.js

const createRecycleContext = require('miniprogram-recycle-view')


Page({
  data:{
    windowh: wx.getSystemInfoSync().windowHeight,
    windoww: wx.getSystemInfoSync().windowWidth,
    dataList: new Array()
  },
  onLoad: function (options) {
    
  },
  onReady: function () {
    console.log("this.data.windoww = " + this.data.windoww)
    var ctx = createRecycleContext({
      id: 'recycleId',
      dataKey: 'recycleList',
      page: this,
      itemSize: { // 这个参数也可以直接传下面定义的this.itemSizeFunc函数
        width: this.data.windoww,
        height: 65//这里设置65，文本和图片设置为60，刚好能正确显示列表后的内容，因为每行item之间默认有5px的间距。
      }
    })
   
    this.formatData()

    ctx.append(this.data.dataList,this.appendCallBack)
    // ctx.update(beginIndex, list)
    // ctx.destroy()
  },
  recycleItemTapped:function(event) {
    console.log(event)
    var currentTarget = event.currentTarget
    console.log(currentTarget.dataset.id)

    var pagePaths = this.getPagePaths()

    var pagePath = pagePaths[currentTarget.dataset.id]
    wx.navigateTo({
      url: pagePath
    })

  },
  appendCallBack:function() {
    console.log("appendCallBack")
  },
  formatData:function() {
    
    var itemTitles = this.getItemTitles()
    for (var i = 0; i < itemTitles.length; i++) {
      console.log(itemTitles[i]);
      this.data.dataList.push(
        {
          "idx": i,
          "title": itemTitles[i],
          "image_url": "http://pic.4j4j.cn/upload/pic/20141226/cae00c7889.jpg"
        }
      )
    }
    
  },

  getPagePaths:function() {
    return[
      "../recycle-view-test/recycle-view-test",
      "../list-test/list-test",
      "../scroll-view-test/scroll-view-test"
    ];
  },

  getItemTitles: function () {
    return [
      "recycle-view使用示例",
      "列表渲染使用示例",
      "scroll-view使用示例"
    ];
  }

})