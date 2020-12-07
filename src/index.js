import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import { Provider } from 'react-redux';
import store from './store/indx.js';

const App = (
  // Provider 提供器，全局的，连接store, 内部的所有子组件都能获取store的数据
  <Provider store={store}>
    <TodoList />
  </Provider>
)
ReactDOM.render(
  App,
  document.getElementById('root')
);

