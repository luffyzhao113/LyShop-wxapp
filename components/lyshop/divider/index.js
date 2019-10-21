Component({
  options: {
    addGlobalClass: true
  },
  properties: {
    content: {
      type: String,
      value: ''
    },
    height: {
      type: Number,
      value: 48
    },
    color: {
      type: String,
      value: '#80848f'
    },
    contentClass: {
      type: String,
      value: 'bg-white'
    },
    lineClass: {
      type: String,
      value: 'solid-bottom'
    },
    size: {
      type: String,
      value: 12
    }
  }
});