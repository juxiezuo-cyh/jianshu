import React, { Component, Fragment } from 'react';
import './style.css';
import TodoItem from './TodoItem';
import axios from 'axios';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: ['1','2',3]
    }

    this.deleteItem = this.deleteItem.bind(this);
    this.submitValue = this.submitValue.bind(this);
    this.inputChange = this.inputChange.bind(this);
  }
  // 即将被挂载到页面的时候执行
  UNSAFE_componentWillMount() {
    console.log('componentWillMount');
  }
  render() {
    // 如果在这里调用ajax，会造成死循环，数据更新调用render，render调用ajax
    return (
      <Fragment>
        {/* Fragment占位符 */}
        <label htmlFor="insert">输入内容</label>
        <input
          ref={(input) => {this.input = input}}
          id="insert"
          className='input'
          onChange={this.inputChange} 
          value={this.state.inputValue} 
          type="text"/>
        <input type="button" value="提交" onClick={this.submitValue}/>
        <ul ref={(url) => {
          this.url = url
        }}>
          {
            this.getTodoItem()
           }
        </ul>
        {/* <Test content={this.state.inputValue}/> */}
      </Fragment>
    )
  }
  // 会在组件挂载后（插入 DOM 树中）立即调用
  // ajax调用，只执行一次
  componentDidMount() {
    console.log('componentDidMount');
    axios.get('/api/todolist')
      .then(() => {
        alert('success')
      })
      .catch(err=> {
        // alert(err)
        this.setState(()=> {
          return {
            list: ["dell", "lee", "mock"]
          }
        })
      })
  }
  // 组件更新之前自动调用
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    return true;//true更新，false不更新组件
  }
  
  getTodoItem() {
    return this.state.list.map((item, index) => {
      return (
        <TodoItem
          deleteItem={this.deleteItem}  
          key={index} 
          content={item} 
          index={index}/>
      )
    })
  }
  inputChange(e) {
    const value = e.target.value;
    this.setState(() => ({
      inputValue: value
    }))
  }
  submitValue() {
    this.setState((prevState) => (
      {
        list: [...prevState.list, prevState.inputValue],
        inputValue: ''
      }
    ),() => {
      // setState为异步，所以，不会立即执行，所以下面的输出，结果少一个
      console.log(this.url.querySelectorAll('li').length);
    });
  }
  deleteItem(index) {
    this.setState(() => {
      const list = [...this.state.list];
      //拷贝一份list数据，不能直接改变数据，只能通过setState这个方法来改变
      list.splice(index,1);
      return {
        list
      }
    });
  }
}


export default TodoList;






