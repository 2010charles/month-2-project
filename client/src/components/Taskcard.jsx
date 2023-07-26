import React from 'react'
import { useNavigate } from 'react-router-dom'
function Taskcard({pending}) {
    const navigate = useNavigate()
    const handleUpdate = (id) => {
        navigate('/dashboard/assign/'+ id)
      }
    
  return (
    <div className='ProjectsStatus'>
    <p>ProjectName:{pending.TaskName}</p>
    <p>Name:{pending.user_id}</p>
    <p>Name:{pending.Fullname}</p>
    <p>Status: {pending.Status}</p>
    <p>Date:{pending.StartDate}</p>
    <button onClick={(() => handleUpdate(pending.ProjectId))} className='assingTaskFunction'>assign Task + </button>
  </div>
  )
}

export default Taskcard
