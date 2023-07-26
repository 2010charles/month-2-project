import React from 'react'
import Axios from 'axios'
import { useState, useEffect } from 'react'
import { apiDomain } from './utils/Utils'
import { Context } from '../context/userContext/Context'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { RiH1 } from 'react-icons/ri'


function AssignTask() {
  const [Users, SetUsers] = useState([]);
  const { projectId } = useParams()
  const {userid, setUserId} = useState(null)
  const { user } = useContext(Context);
  const getUsers = async () => {
    const res = await Axios.get(`${apiDomain}/users`, {
      headers: { "Authorization": `${user.token}` }
    })
    SetUsers(res.data)
  }
  useEffect(() => {
    getUsers()
    console.log(Users)
  }, [])

  const handleAssignProject = (id) => {
    try{
     // const res = await Axios.(`${apiDomain}/task`)
    }
    catch(error){

    }
    
  }

  return (
    <div className='div'>
      {

        <div>
          <select>
            {Users && Users.map((user, index) => (

              <option value={user.user_id} onChange={(e)=>setUserId(e.target.value)}>{user.Fullname}</option>
            ))}
          </select>

          <buttton className="handleUpdatefunction" style={{ padding: "5px 15px", backgroundColor: "blue", marginTop: "70px" }} onClick={() => {handleAssignProject}} > update</buttton>
          
      </div>
        
  }
    </div >

  )
}

export default AssignTask
