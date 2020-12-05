import React from 'react'
import { Input, Button, List } from 'antd';

// 一个函数只有一个render函数的时候，就可以用无状态来定义
const TodoListUI = (props) => {
  return (
    <div style={{margin: '10px'}}>
      <div>
        <Input onChange={(e) => {
          props.inputChange(e)
        }} value={props.inputValue} style={{width: '300px',marginRight: '10px'}} placeholder="todo info" />
        <Button onClick={props.submit} type="primary">提交</Button>
      </div>
      <List
        style={{marginTop: '10px',width: '300px'}}
        size="large"
        bordered
        dataSource={props.list}
        renderItem={(item, index) => <List.Item onClick={() => {
          props.deleteItem(index)
        }}>{item}</List.Item>}
      />
    </div>
  )
}
export default TodoListUI;
