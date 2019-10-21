// pages/delivery-address-form/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    region: ['广东省', '广州市', '海珠区'],
    tags: ['家', '公司', '学校'],
    dataRow: {
      tag: null
    }
  },

  RegionChange: function (e) {
    this.setData({
      region: e.detail.value
    })
  },
  TagsChange(e) {
    this.setData({
      dataRow: {
        tag: e.detail.value
      }
    })
  }
})