"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

exports.login = () => {
  const app = getApp();
  if(app && app.globalData.Authorize === null){
    wx.login({
      success: res => {
        wx.showLoading({
          title: '加载中',
        })
      }
    })
  }  
}

