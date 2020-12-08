import React, { Component } from 'react';
import { connect } from 'react-redux'; // 某一个部分

// UI组件
const TodoList = (props) => {
  const { inputValue, list, deleteItem, changeInputValue, handleClick } = props;

  return (
    <div>
      <div>
        <input onChange={changeInputValue} value={inputValue} type="text" />
        <button onClick={handleClick}>提交</button>
      </div>
      <ul>
        {
          list.map((item, index) => {
            return <li onClick={deleteItem.bind(this, index)} key={index}>{item}</li>
          })
        }
      </ul>
    </div>
  )
}
// class TodoList extends Component {

//   render() {

//   }

// }

// 获取state里面的数据放到props里面
const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

// 定义action方法
const mapDispatchToProps = (dispatch) => {
  return {
    changeInputValue(e) {
      const action = {
        type: 'change_input_value',
        value: e.target.value
      }
      dispatch(action);
    },
    handleClick() {
      const action = {
        type: 'add_item',
      }
      dispatch(action);
    },
    deleteItem(index, e) {
      e.preventDefault();
      const action = {
        type: 'delete_item',
        index
      }
      dispatch(action);
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);