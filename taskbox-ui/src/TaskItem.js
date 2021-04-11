import axios from 'axios'
import React, { useState } from 'react'
import EditTask from './EditTask'

const TaskItem = (props) =>{
    const [toggle, setToggle] = useState(false)
    const { id, title,status, removeItem, editItem } = props

    const handleRemove = () => {
        const confirmRemove = window.confirm('Are you Sure !?')
        if(confirmRemove){
            axios.delete(`http://localhost:3033/api/tasks/${id}`)
                .then((response)=>{
                    const result = response.data
                    removeItem(result.id)
                }) //success
                .catch((err)=>{
                    alert(err.message)
                }) //failure
        }
    }

    const handleToggle = () =>{
        const result = !toggle
        setToggle(result)
    }

    return (
        <div>
            {toggle ? (
                <div>
                    <EditTask id={id} title={title} status={status} editItem={editItem} handleToggle={handleToggle} />
                    <button onClick={handleToggle}>cancel</button>
                </div>   
            ) : (
                <div>
                    <h3> {title} </h3> 
                    <button onClick={handleToggle}>edit</button>
                    <button onClick={handleRemove}>remove</button>
                </div>
            )}
           
        </div>
    )
}

export default TaskItem