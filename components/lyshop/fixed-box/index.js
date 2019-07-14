// components/lyshop/fixed-box/index.js
import { basic } from '../mixins/basic.js';

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
    wrapStyle: ''
  },

  ready() {
    this.observerContentScroll();
  },

  /**
   * 组件的方法列表
   */
  methods: {
    observerContentScroll() {
      const { navHeight, offsetTop } = this.data;
      const { windowHeight, windowWidth } = wx.getSystemInfoSync();

      this.createIntersectionObserver().disconnect();
      this.createIntersectionObserver().relativeToViewport({
        top: -(navHeight + offsetTop)
      })
        .observe('.scroll-fixed-box', (res) => {
          const { top } = res.boundingClientRect;
          if (top > offsetTop) {
            this.setWrapStyle();
          } else {
            this.setWrapStyle(res.intersectionRatio > 0 ? 'bottom' : 'top');
          }
        });

    },
    setWrapStyle(position) {
      const { offsetTop } = this.data;
      let wrapStyle;
      switch (position) {
        case 'top':
          wrapStyle = `
            top: ${offsetTop}px;
            position: fixed;
          `;
          break;
        case 'bottom':
          wrapStyle = `
            bottom: ${offsetTop}px;
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
  }
})