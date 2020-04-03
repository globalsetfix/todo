import React, { useContext } from 'react'
import './Modal.css'
import Context from '../../context'

export default function Modal(props){

    const { removeTodo } = useContext(Context)
    
    const { isOpen, id, name, setStateModal } = props;

    return (
       <>
        {isOpen && (<div className='mod-window'>
            <div className='mod-content'>
               <h1>Do you want to delete task</h1>
               <h2>{id}. {name}</h2>
               <button onClick={() => setStateModal(undefined,undefined,false)}>Close</button>
               <button onClick={() => removeTodo(id)}>Delete</button>
            </div>
        </div>)}
       </>
    )
}