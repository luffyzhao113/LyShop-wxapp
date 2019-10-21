// components/lyshop/fixed-box/index.js
import { basic } from '../mixins/basic.js';
const app = getApp();

Component({
  behaviors: [basic],
  /**
   * 组件的属性列表
   */
  properties: {
    offsetTop: {
      type: Number,
      default: 0
    },
    navHeight: {
      type: Number,
      default: 50
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    wrapStyle: '',
    offsetTopPx: 0,
    navHeightPx: 0,
  },

  ready() {
    this.observerContentScroll();
  },

  /**
   * 组件的方法列表
   */
  methods: {
    observerContentScroll() {
      const { navHeightPx, offsetTopPx } = this.data;
      const { windowHeight, windowWidth } = wx.getSystemInfoSync();
   
      this.createIntersectionObserver().disconnect();
      this.createIntersectionObserver().relativeToViewport({
        top: -(navHeightPx + offsetTopPx)
      })
        .observe('.scroll-fixed-box', (res) => {
          const { top } = res.boundingClientRect;
          if (top > offsetTopPx) {
            this.setWrapStyle();
          } else {
            this.setWrapStyle(res.intersectionRatio > 0 ? 'bottom' : 'top');
          }
        });

    },
    setWrapStyle(position) {
      const { offsetTopPx } = this.data;
      
      let wrapStyle;
      switch (position) {
        case 'top':
          wrapStyle = `
            top: ${offsetTopPx}px;
            position: fixed;
          `;
          break;
        case 'bottom':
          wrapStyle = `
            bottom: ${offsetTopPx}px;
            position: fixed;
          `;
          break;
        default:
          wrapStyle = '';
      }
      // cut down `set`
      if (wrapStyle === this.data.wrapStyle)
        return;
      this.setData({ wrapStyle });
    },
    rpx2px(number) {
      return number / (750 / app.globalData.SystemInfo.screenWidth);
    }
  },
  observers: {
    offsetTop(e){
      this.setData({
        offsetTopPx: this.rpx2px(e)
      });
      this.observerContentScroll()
    },
    navHeight(e){
      this.setData({
        navHeightPx: this.rpx2px(e)
      });
      this.observerContentScroll()
    }
  }
})