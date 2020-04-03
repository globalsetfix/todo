import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'

/* Пользовательский ХУК */
function useInputValue(defaultValue = ''){
    const [value, setValue] = useState(defaultValue)
    return {
        bind: {
            value,
            onChange: event => setValue(event.target.value)
        },
        clear: () => setValue(''),
        value: () => value
    }
}

function AddTodo({createTask}){
    
    const input = useInputValue('');
    const inputRef = useRef(null)

    /* Отправка формы */ 
    function submitHandler(event){
        event.preventDefault()
        if(input.value().trim()){
           createTask(input.value())
           input.clear()
           inputRef.current.focus();
        }
    }

    return (
       <form onSubmit={submitHandler}>
           <input {...input.bind} ref={inputRef} />
           <button type='submit'>Add Task</button>
       </form>
    )
}

AddTodo.propTypes = {
    createTask: PropTypes.func.isRequired
}

export default AddTodo