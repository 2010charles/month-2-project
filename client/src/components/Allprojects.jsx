import React from 'react'
import './allprojects.css'
import { useEffect, useContext, useState } from 'react'
import { Context } from '../context/userContext/Context'
import Axios from 'axios'
import { apiDomain } from './utils/Utils'
import { set } from 'react-hook-form'
import Updateproject from '../components/Updateproject'


function Allprojects() {
    const { user } = useContext(Context);
    const [projects, setProjects] = useState([]);
    const[showEdit,setshowEdit] = useState(false);
    const [tempProject,settemProject] = useState('');

    const getProjects = async () => {
        const res = await Axios.get(`${apiDomain}/project`, {
            headers: { "Authorization": `${user.token}` }
        })
        setProjects(res.data)
    }
    useEffect(() => {
        getProjects()
    }, [])
    const handleDelete = async (id) =>{
        await Axios.delete(`${apiDomain}/project/${id}`,
        {headers : {"Authorization":`${user.token}`}})
        .then((res)=>{
            getProjects()
            alert(res.data.message)
        }).catch(({response})=>{
            alert(response.data.error)
        })
    }
    const handleEdit = async (project)=>{
        settemProject(project)
        setshowEdit(!showEdit)
    }
    return (
        <div className='project-wrapper'>
            {
                projects && projects.map((project, index) => {
                    return (
                        <div className='card' key={index}>
                            <p>{project.description}</p>
                            <div className='iconsdiv'>
                                <p className='Icons' onClick={()=>handleEdit(project)} style={{padding:"10px 13px"}}>Edit</p>
                                <p className='Icons' onClick={()=>handleDelete(project.id)}>Delete</p>
                            </div>
                            {showEdit && <Updateproject setShowEdit={setshowEdit} project={tempProject} getProjects={getProjects} />}

                        </div>
                    )
                })
            }
        </div>
    )
}

export default Allprojects
