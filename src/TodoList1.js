import React, { Component } from 'react'
import 'antd/dist/antd.css';
import store from './store/index';
import { initTodoListAction, getInitList, getInputChangeAction, addTodoItemAction, delteTodoItemAction } from './store/actionCreators';
import TodoListUI from './TodoListUI';


export default class TodoList1 extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.storeChange = this.storeChange.bind(this);
    store.subscribe(this.storeChange); // store 发生变化以后自动调用该方法，重新获取store的值
    this.submit = this.submit.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  render() {
    return (
      <TodoListUI
        deleteItem={this.deleteItem}
        list={this.state.list}
        submit={this.submit}
        inputChange={this.inputChange}
        inputValue={this.state.inputValue} />
    )
  }
  
  componentDidMount() {
    const action = getInitList();
    store.dispatch(action);
  }

  inputChange(e) {
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action);
  }

  storeChange() {
    this.setState(store.getState());// 重新获取store的数据
  }

  submit() {
    const action = addTodoItemAction();
    store.dispatch(action);
  }

  deleteItem(index) {
    const action = delteTodoItemAction(index);
    store.dispatch(action);
  }
}
