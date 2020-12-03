import PropTypes from 'prop-types';
import React, { Component } from 'react';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    // 函数的this绑定，只会执行一次，并且保证子组件的无畏渲染
    this.handleClick = this.handleClick.bind(this);
  }
  render() {
    const { content, test } = this.props;
    return (
    <li onClick={this.handleClick}>{test}-{content}</li>
    )
  }
  shouldComponentUpdate(nextProps,nextState) {
    if (nextProps.content !== this.props.content) {
      return true;
    } else {
      return false
    }
  }
  // UNSAFE_componentWillReceiveProps执行的条件：
  // 1，一个组件从父组件中接收props，
  // 2，如果这个组件第一次存在于父组件中，不会执行，
  //   如果这个组件已经存在于父组件中，则执行
  UNSAFE_componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  handleClick() {
    const { deleteItem, index } = this.props;
    deleteItem(index);
  }
}

TodoItem.propTypes = {
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  deleteItem: PropTypes.func,
  index: PropTypes.number,
  test: PropTypes.string.isRequired
}

TodoItem.defaultProps = {
  test: 'A'
}
export default TodoItem;