Perf.start()：开始计时
Perf.stop()：结束计时
Perf.printInclusive():打印组件总的渲染时间
Perf.printWasted():打印浪费的时间



componentDidUpdate() {
    Perf.stop()
    Perf.printInclusive()
    Perf.printWasted()
  }

// 开始用的方法
  resetMultiplier() {
    Perf.start()
    this.setState({ multiplier: 2 })
  }
