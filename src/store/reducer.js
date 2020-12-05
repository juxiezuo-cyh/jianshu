import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM,GET_TODO_LIST} from './actionTypes.js';

const defaultState = {//默认数据
  inputValue: '123',
  list: []
};
// 默认什么都没存储
// reducer 可以接受state ，但是不能修改state 所以需要做一个深拷贝
export default (state = defaultState, action) => {
  if (action.type === CHANGE_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state)); // 深拷贝
    newState.inputValue = action.value;
    return newState;// 返回给store
  }
  if (action.type === ADD_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state)); // 深拷贝
    newState.list.push(newState.inputValue);
    newState.inputValue = '';
    console.log(newState);
    return newState;
  }
  if (action.type === DELETE_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state)); // 深拷贝
    newState.list.splice(action.index, 1);
    return newState;
  }
  if (action.type === GET_TODO_LIST) {
    const newState = JSON.parse(JSON.stringify(state)); // 深拷贝
    newState.list = action.list;
    return newState;
  }
  return state;
}
// state整个图书的信息 ==  全部的数据
// 笔记本，图书小本，记录每本书的位置