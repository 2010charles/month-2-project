import React, { useState, useEffect } from 'react'
import './assignproject.css'
import Axios from 'axios'
import { apiDomain } from './utils/Utils'
import { Context } from '../context/userContext/Context'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Taskcard from './Taskcard'
function Assignproject() {
  const [Task, setTask] = useState([]);

  const navigate = useNavigate();
  const { user } = useContext(Context);
  const getTask = async () => {
    const res = await Axios.get(`${apiDomain}/task`, {
      headers: { "Authorization": `${user.token}` }
    })
    setTask(res.data)
  }
  useEffect(() => {
    getTask()
    console.log(Task);

  }, [])


  return (
    <div className='projectMainPage'>
      <div className='projectPage'>
        <div className='To-do'>
          <h4>Pedding project</h4>
          {
            Task.filter(task => task.Status == "pending").map((pending, index) => (
              <Taskcard pending = {pending}/>
            ))
          }

        </div>
        <div className='onprogress'>
          <h4>On Progress </h4>

          {
            Task.filter(task => task.Status == "onprogress").map((onprogress, index) => (
              <div className='ProjectsStatus'>
                <p>ProjectName:{onprogress.TaskName}</p>
                <p>Name:{onprogress.Fullname}</p>
                <p>Status:{onprogress.Status}</p>
                <p>Date{onprogress.StartDate}</p>
              </div>
            ))
          }
        </div>
        <div className='complete'>
          <h4>Complete</h4>
          {
            Task.filter(task => task.Status == "completed").map((completed, index) => (
              <div className='ProjectsStatus'>
                <p>ProjectName:{completed.TaskName}</p>
                <p>Name:{completed.Fullname}</p>
                <p>Status:{completed.Status}</p>
                <p>Date:{completed.CloseDate}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Assignproject
