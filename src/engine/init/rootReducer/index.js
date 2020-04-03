// Modules
import { combineReducers } from 'redux'

// Reducers
import todoReducer from '../../core/todo/reducer'

export default combineReducers({
  todo: todoReducer
});
