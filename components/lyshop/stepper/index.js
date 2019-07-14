// components/lyshop/stepper/index.js
Component({
  options: {
    addGlobalClass: true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    value: {
      type: Number,
      value: 1
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**减 */
    minus() {
      const { value } = this.data;
      let stepper = value > 1 ? value - 1 : 1;
      this.setData({
        value: stepper
      });
      this.input(stepper);
    },
    plus(){
      const { value } = this.data;
      let stepper = (value + 1) > 0 ? value + 1 : 0;
      this.setData({
        value: stepper
      });
      this.input(stepper);
    },
    input(value){
      this.triggerEvent('input', value, {})
    }
  }
})
