Component({
  options: {
    addGlobalClass: true
  },
  data: {
    selected: 0,
    list: [{
        icon: "cuIcon-home",
        path: "/pages/index/index",
        name: "首页"
      },
      {
        icon: "cuIcon-similar",
        path: "/pages/category/index",
        name: "分类"
      },
      {
        icon: "cuIcon-cart",
        path: "/pages/shipping-car/index",
        name: "购物车"
      },
      {
        icon: "cuIcon-my",
        path: "/pages/member/index",
        name: "我的"
      },
    ]
  },
  methods: {
    switchTab(e) {
      const {item, index} = e.target.dataset;
      console.log(item, index)
      try {
        wx.switchTab({ url: item.path})
        this.setData({selected: index});
      } catch(e){
        console.error(e)
      }
    }
  }
})