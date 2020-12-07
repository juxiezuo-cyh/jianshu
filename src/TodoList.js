import React, { Component } from 'react';
import { connect } from 'react-redux'; // 某一个部分

class TodoList extends Component {

  render() {
    return (
      <div>
        <div>
          <input onChange={this.props.changeInputValue} value={this.props.inputValue} type="text" />
          <button>提交</button>
        </div>
        <ul>
          <li>Dell</li>
        </ul>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeInputValue(e) {
      const action = {
        type: 'change_input_value',
        value: e.target.value
      }
      dispatch(action);
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);