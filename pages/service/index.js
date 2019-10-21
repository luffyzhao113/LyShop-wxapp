// pages/service/index.js
Page({
  data: {
    TabCur: 0
  },
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id
    })
  } 
})