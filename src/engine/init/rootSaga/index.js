// Core
import { all, call } from 'redux-saga/effects';

// Watchers
import { todoWatcher } from '../../core/todo/saga/watchers';

export function* rootSaga() {
  yield all([
    call(todoWatcher)
  ]);
}
