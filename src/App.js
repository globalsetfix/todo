import React, { useEffect } from 'react';
import './App.css'
import TodoList from './components/Todo/TodoList'
import Context from './context'
import Loader from './Loader'

const AddTodo = React.lazy(() => import('./components/Todo/AddTodo'))

function App() {
 
  const [data, setData] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  useEffect(() => {
    fetch('http://localhost:3001/posts')
    .then(response => response.json())
    .then(data => {
      setTimeout(()=>{
          setData(data)
          setLoading(false)
      }, 2000)  
    })
  }, [])
  
  /* ХУКИ */


  
  function removeTodo(id) {
     setData(data.filter(todo => todo.id !== id))
  }

  function addTodo(name){
    setData(data.concat([{
      name,
      id: Date.now(),
      flag: false
    }]))
  }

  function togleTodo(id) {
    setData(
        data.map(todo => {
           if(todo.id === id){
              todo.flag = !todo.flag
           } 
           return todo
        })
     ) 
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