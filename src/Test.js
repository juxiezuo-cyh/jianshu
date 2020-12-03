import React, { Component } from 'react'

export default class Test extends Component {
  // state和props发生改变的时候，render函数都会被执行
  // 父组件的render函数被执行时，所有子组件的render的函数都会被执行
  render() {
    return (
      <div>
        {this.props.content}
      </div>
      // jsx -> createElement -> 虚拟DOM（js 对象） -> 真实的DOM
      // 等价于
      // React.createElement('div',{},this.props.content)
    )
  }
}
