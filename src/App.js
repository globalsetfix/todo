import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import TodoList from './components/Todo/TodoList'
import Context from './context'
import Loader from './Loader'

import {
  getTodoListDataAsync,
  deleteTodoListItemAsync,
  addTodoListItemAsync,
} from './engine/core/todo/saga/asyncActions'

import { isLoadingSelector, todoListSelector } from './engine/core/todo/selectors'

const AddTodo = React.lazy(() => import('./components/Todo/AddTodo'))

function App() {
  const data = useSelector(todoListSelector);
  const loading = useSelector(isLoadingSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodoListDataAsync());
  }, [dispatch]);

  /* ХУКИ */
  const removeTodo = useCallback((id) => {
    dispatch(deleteTodoListItemAsync(id));
  }, [dispatch]);

  const addTodo = useCallback((name) => {
    dispatch(addTodoListItemAsync({ name, flag: false }));
  }, [dispatch]);

  function togleTodo(id) {
    // setData(
    //     data.map(todo => {
    //        if(todo.id === id){
    //           todo.flag = !todo.flag
    //        }
    //        return todo
    //     })
    //  )
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="container">
        <h1>TODO List</h1>
        <React.Suspense fallback={<p>...Loading</p>}>
          <AddTodo createTask={addTodo} />
        </React.Suspense>
        {loading && <Loader />}
        {data.length ? (
           <TodoList todolist={data} handleTogle={togleTodo} />
        ) : loading ? null : (
          <p>TODO LIST IS EMPTY</p>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
