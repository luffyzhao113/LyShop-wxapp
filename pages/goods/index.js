// pages/goods/index.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom,
    TabCur: 0,
    swiperList: [{
      id: 0,
      type: 'image',
      url: '/images/g01.jpg'
    }, {
        id: 1,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84001.jpg',
      }, {
        id: 2,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
      }]
  },
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id
    })
  }
  
})