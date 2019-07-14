// pages/shipping-car/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    stepper: 1,
    modalIsShow: false,
    carSetting: false
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 2
      })
    }
  },
  onStepper(e){
    
  },
  onModalBg(e){
    this.setData({
      modalIsShow: !this.data.modalIsShow
    });
  },
  onCarSetting(e){
    this.setData({
      carSetting: !this.data.carSetting
    });
  }
})