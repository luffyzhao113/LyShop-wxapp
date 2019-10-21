// components/lyshop/goods-spec/index.js
Component({
  options: {
    addGlobalClass: true
  },
  /**
   * 组件的属性列表
   */
  properties: {
      id: {
        type: Number,
        value: 0
      },
      checkeds: {
        type: Object,
        value: {}
      },
      show: {
        type: Boolean,
        value: false
      }
  },

  /**
   * 组件的初始数据
   */
  data: {
    specs: [
      {
        name: '尺寸',
        values: ['SM', 'M', 'L', 'XL']
      },
      {
        name: '颜色',
        values: ['红色', '卡其色', '黑色', '大姨妈色']
      }
    ],

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onClose(){
      this.setData({
        show: false
      });
      this.triggerEvent('input', false, {})
    },
    change: function (e) {
      let { checkeds } = this.data
      checkeds[e.target.dataset.name] = e.target.dataset.value
      this.setData({checkeds})
    }
  },

  ready(){
    const { id } = this.data;
    if(id === 0){
      throw new Error("goods-spec 组件必须传id值");
    }
  }
})
