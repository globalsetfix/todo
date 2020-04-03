// Types
import * as asyncTypes from './asyncTypes';

export const getTodoListDataAsync = () => ({
  type: asyncTypes.GET_TODO_LIST_ASYNC
});

export const deleteTodoListItemAsync = (id) => ({
  type: asyncTypes.DELETE_TODO_LIST_ITEM_ASYNC,
  payload: id
});

export const addTodoListItemAsync = (data) => ({
  type: asyncTypes.ADD_TODO_LIST_ITEM_ASYNC,
  payload: data
});
