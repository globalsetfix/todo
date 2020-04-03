import React, { useState } from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'
import Modal from '../../components/Modal/Modal'
 
const styles = {
    ul: {
        listStyle: 'none' 
    }
}

function TodoList(props){

    const defDataAlert = {
        isOpen: false,
        name: '',
        id: ''
    }

    const [dataAlert, setDataAlert] = useState(defDataAlert);

    const openModal = (rowId, rowTitle, flag) => {
        const objDataAlert = {
          isOpen: flag,
          name: rowTitle,
          id: rowId
        };
        setDataAlert(objDataAlert);
    };

    return (
      <>
        <Modal isOpen={dataAlert.isOpen} id={dataAlert.id} name={dataAlert.name} setStateModal={openModal} />
        <ul style={styles.ul}>
         {props.todolist.map((item, index)=> {
            return <TodoItem todo={item} key={item.id} index={index} openModal={openModal} changeCheck={props.handleTogle} />
         })}
        </ul>
      </>
    )
}

TodoList.propTypes = {
    todolist: PropTypes.arrayOf(PropTypes.object).isRequired,
    handleTogle: PropTypes.func.isRequired
}

export default TodoList