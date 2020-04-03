// Types
import * as types from './types';

export const setTodoListData = data => ({
  type: types.SET_TODO_ITEM,
  payload: data
});

export const setIsLoading = (isLoading) => ({
  type: types.SET_IS_LOADING,
  payload: isLoading
});
