// Modules
import { all, call, takeEvery, put } from 'redux-saga/effects';

// Types
import * as asyncTypes from './asyncTypes'
import { setIsLoading, setTodoListData } from '../actions'

function* callGetTodoListWorker () {
  yield put(setIsLoading(true)); // <-- Dispatch

  try {
    const response = yield fetch('http://localhost:3001/posts')
      .then(response => response.json());

    const action = setTodoListData(response);
    yield put(action); // <-- Dispatch

  } catch (err) {
    // TODO: Handle error
    console.error(err)
  }

  yield put(setIsLoading(false)); // <-- Dispatch
}

function* callDeleteTodoItemWorker({ payload }) {
  try {
    yield fetch(`http://localhost:3001/posts/${payload}`, { method: 'DELETE' });
    yield call(callGetTodoListWorker);

  } catch (err) {
    // TODO: Handle error
    console.error(err)
  }
}

function* callAddTodoItemWorker({ payload }) {
  try {
    yield fetch('http://localhost:3001/posts', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    yield call(callGetTodoListWorker);

  } catch (err) {
    // TODO: Handle error
    console.error(err)
  }
}

function* watchGetTodoList() {
  yield takeEvery(asyncTypes.GET_TODO_LIST_ASYNC, callGetTodoListWorker)
}

function* watchDeleteTodoItem() {
  yield takeEvery(asyncTypes.DELETE_TODO_LIST_ITEM_ASYNC, callDeleteTodoItemWorker);
}

function* watchAddTodoListItem() {
  yield takeEvery(asyncTypes.ADD_TODO_LIST_ITEM_ASYNC, callAddTodoItemWorker);
}

export function* todoWatcher() {
  yield all([
    call(watchGetTodoList),
    call(watchDeleteTodoItem),
    call(watchAddTodoListItem)
  ]);
}
