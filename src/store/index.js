import { createStore, compose, applyMiddleware } from 'redux';
import reducer from './reducer'; // 引入笔记本
import createSagaMiddleware from 'redux-saga'
// import thunk from 'redux-thunk';
import TodoSagas from './sagas';
const sagaMiddleware = createSagaMiddleware();


const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware)
);

// 把笔记本传递给管理员
const store = createStore(
  reducer,
  enhancer,//redux的中间件
);

sagaMiddleware.run(TodoSagas);
export default store;//图书管理员


// redux 基础知识
// store 唯一值
// store只有值才能改变自己
// reducer必须是纯函数，给定输入，一定是固定的输出，不能对传入的参数进行修改
// createStore 创建一个store
// store.dispatch(action),传递给store
// store.getState // 获取store
// store.subscribe(storeChange()),订阅store的改变，只要发生改变，就会重新获取store
// storeChange() {
//   this.setState(store.getState());// 重新获取store的数据
// }
