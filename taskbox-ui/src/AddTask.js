import React, { useState } from 'react'
import TaskForm from './TaskForm'
import axios from 'axios'

const AddTask = (props) =>{
    const { addItem } = props
    const [isSaved, setIsSaved] = useState(false)

    const formSubmit = (task) =>{
        axios.post('http://localhost:3033/api/tasks',task)
             .then((response)=>{
                 const result = response.data
                 addItem(result)
                 setIsSaved(true)
             }) //success
             .catch((err)=>{
                 alert(err.message)
             }) //error
    }

    const toggleIsSaved = () =>{
        setIsSaved(false)
    }
    return (
        <div>
            <h2>AddTask</h2>
            <TaskForm formSubmit={formSubmit} isSaved={isSaved} toggleIsSaved={toggleIsSaved} />
        </div>
    )
}

export default AddTask