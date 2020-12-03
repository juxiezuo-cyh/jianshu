import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from './store/index';
import {getInputChangeAction,addTodoItemAction,delteTodoItemAction} from './store/actionCreators';

export default class TodoList1 extends Component {
  constructor (props) {
    super(props);
    this.state = store.getState();
    this.storeChange = this.storeChange.bind(this);
    store.subscribe(this.storeChange); // store 发生变化以后自动调用该方法，重新获取store的值
    this.submit = this.submit.bind(this);
    // this.deleteItem = this.deleteItem.bind(this);
  }
  
  render() {
    return (
      <div style={{margin: '10px'}}>
        <div>
          <Input onChange={(e) => {
            this.inputChange(e)
          }} value={this.state.inputValue} style={{width: '300px',marginRight: '10px'}} placeholder="todo info" />
          <Button onClick={this.submit} type="primary">提交</Button>
        </div>
        <List
          style={{marginTop: '10px',width: '300px'}}
          size="large"
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => <List.Item onClick={this.deleteItem.bind(this,index)}>{item}</List.Item>}
        />
      </div>
    )
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
