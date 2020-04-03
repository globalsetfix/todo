// Types
import * as types from './types'

const initialState = {
  items: [],
  isLoading: true
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_TODO_ITEM: {
      return {
        ...state,
        items: action.payload
      };
    }
    case types.SET_IS_LOADING: {
      return {
        ...state,
        isLoading: action.payload
      }
    }
    default: {
      return state;
    }
  }
}
