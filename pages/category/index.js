// pages/category/index.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrollLeft: 0,
    tabCur: 0,
    screenBox: false,
    imgUrls: [
      "/images/01.jpg",
      "/images/02.jpg",
    ],
    categroies: [{
      name: '全部',
      id: 0,
    }, {
        name: '衣服',
        id: 1,
      }, {
      name: '鞋子',
      id: 2,
    }, {
      name: '帽子',
      id: 3,
    }, {
      name: '内衣',
      id: 4,
    }, {
      name: '袜子',
      id: 5,
    }],
    goodsLists: {
      loading: false,
      lists: [{
        url: "/images/goods-item.jpg",
        name: '红皮绿皮香蕉福建土楼特产孕妇宝宝应季新鲜水果1/3/5斤 红皮美人蕉（火龙蕉 玫瑰蕉）发京东生鲜 红皮香蕉5斤',
        price: 1254.52
      }, {
        url: "/images/goods-item.jpg",
        name: '红皮绿皮香蕉福建土楼特产孕妇宝宝应季新鲜水果1/3/5斤 红皮美人蕉（火龙蕉 玫瑰蕉）发京东生鲜 红皮香蕉5斤',
        price: 71.46
      }, {
        url: "/images/goods-item.jpg",
        name: '红皮绿皮香蕉福建土楼特产孕妇宝宝应季新鲜水果1/3/5斤 红皮美人蕉（火龙蕉 玫瑰蕉）发京东生鲜 红皮香蕉5斤',
        price: 135.17
      }, {
        url: "/images/goods-item.jpg",
        name: '红皮绿皮香蕉福建土楼特产孕妇宝宝应季新鲜水果1/3/5斤 红皮美人蕉（火龙蕉 玫瑰蕉）发京东生鲜 红皮香蕉5斤',
        price: 135.17
      }, {
        url: "/images/goods-item.jpg",
        name: '红皮绿皮香蕉福建土楼特产孕妇宝宝应季新鲜水果1/3/5斤 红皮美人蕉（火龙蕉 玫瑰蕉）发京东生鲜 红皮香蕉5斤',
        price: 135.17
      }, {
        url: "/images/goods-item.jpg",
        name: '红皮绿皮香蕉福建土楼特产孕妇宝宝应季新鲜水果1/3/5斤 红皮美人蕉（火龙蕉 玫瑰蕉）发京东生鲜 红皮香蕉5斤',
        price: 135.17
      }, {
        url: "/images/goods-item.jpg",
        name: '红皮绿皮香蕉福建土楼特产孕妇宝宝应季新鲜水果1/3/5斤 红皮美人蕉（火龙蕉 玫瑰蕉）发京东生鲜 红皮香蕉5斤',
        price: 135.17
      }, {
        url: "/images/goods-item.jpg",
        name: '红皮绿皮香蕉福建土楼特产孕妇宝宝应季新鲜水果1/3/5斤 红皮美人蕉（火龙蕉 玫瑰蕉）发京东生鲜 红皮香蕉5斤',
        price: 135.17
      }, {
        url: "/images/goods-item.jpg",
        name: '红皮绿皮香蕉福建土楼特产孕妇宝宝应季新鲜水果1/3/5斤 红皮美人蕉（火龙蕉 玫瑰蕉）发京东生鲜 红皮香蕉5斤',
        price: 135.17
      }]
    }
  },

  /**
   * 搜索
   */
  onSearch() {

  },
  onChange({ detail }) {

  },
  tabSelect(e) {
    this.setData({
      tabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60
    })
  },
  tabScreen(e){
    this.setData({
      screenBox: !this.data.screenBox
    });
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 1
      })
    }
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

  }
})