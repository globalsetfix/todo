import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Context from '../../context'
 
const styles = {
   li: {
      padding: '10px'
   },
   button : {
      padding: '5px',
      marginLeft: '5px'
   }
}

function TodoItem({todo, index, changeCheck, openModal}){
   
   const { removeTodo } = useContext(Context)
   const classes = []

   if(todo.flag){
      classes.push('yes')
   }

   return (
   <li style={styles.li}>
        <span className={classes.join(' ')}>
            <input type="checkbox" onChange={() => changeCheck(todo.id)} checked={todo.flag} />
            <b>{index + 1}.</b> 
            {todo.name}
        </span>
        <button style={styles.button} onClick={() => removeTodo(todo.id)}> X </button>
        <button style={styles.button} onClick={() => openModal(todo.id, todo.name, true)}> Open Modal </button>
    </li>
   )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    changeCheck: PropTypes.func.isRequired
}

export default TodoItem