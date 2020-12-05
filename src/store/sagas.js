import { takeEvery, put } from 'redux-saga/effects';
import { GET_INIT_LIST } from './actionTypes';
import { initTodoListAction } from './actionCreators.js';
import axios from 'axios';
function* getInitList() {
  try {
    const res = yield axios.get('http://rap.koolearn-inc.com/mockjsdata/431/api/getList');
    const action = initTodoListAction([1,2,3,4,5]);
    console.log(action)
    yield put(action);
  } catch (error) {
    console.log('请求失败接口')
  }
  

  // axios.get('http://rap.koolearn-inc.com/mockjsdata/431/api/getList').then((res) => {
  //   console.log(res.data)
  //   const action = initTodoListAction([1,2,3,4,5]);
  //   console.log(action)
  //   store.dispatch(action);
  // }).catch((err) => {
  //   console.log(err);
  // })
}
function* mySaga() {
  yield takeEvery(GET_INIT_LIST,getInitList);
}

export default mySaga; 