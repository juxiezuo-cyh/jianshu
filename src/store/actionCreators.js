import { GET_INIT_LIST, CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, GET_TODO_LIST} from './actionTypes.js';
import axios from 'axios';

export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
})

export const addTodoItemAction = () => ({
  type: ADD_TODO_ITEM
})

export const delteTodoItemAction = (index) => ({
  type: DELETE_TODO_ITEM,
  index
})

export const initTodoListAction = (list) => ({
  type: GET_TODO_LIST,
  list
})

export const getInitList = () => ({
  type: GET_INIT_LIST
})

// 用了thunk以后，dispatch的参数才能是函数，不然只能是对象
// export const getTodoListAxios = () => {
//   return (dispatch) => {
//     // axios.get('http://rap.koolearn-inc.com/mockjsdata/431/api/getList').then((res) => {
//     //   console.log(res.data)
//     //   const action = initTodoListAction([1,2,3,4,5]);
//     //   dispatch(action);
//     // }).catch((err) => {
//     //   console.log(err);
//     // })
//   }
// }