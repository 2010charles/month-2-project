import React from 'react'
import { useContext, useEffect, useState } from 'react'
import { apiDomain } from './utils/Utils'
import Axios from 'axios'
import { Context } from '../context/userContext/Context'
import './updateproject.css'

const Updateproject = ({ setShowEdit, project, getProjects }) => {
    const [description, setDescription] = useState('')

    useEffect(() => {
        setDescription(project.description)
    }, [])


    const { user } = useContext(Context)
    const handleSubmit = async (e) => {
        e.preventDefault()
        await Axios.put(`${apiDomain}/project/${project.id}`, { description: description },
            { headers: { "Authorization": `${user.token}` } }
        ).then((res) => {
            getProjects()
            alert(res.data.message)

        }).catch(({ response }) => {
            alert(response.response.data.error)
        })
    }
    return (
        <div className='updateForm'>
            <form className='form'>
                <textarea
                    value={description} onChange={(e) => setDescription(e.target.value)}
                    name="description"
                    id="description"
                ></textarea>
                <div className="btn-wrapper">
                    <button onClick={() => setShowEdit(false)}>exit</button>
                    <button type='submit' onClick={handleSubmit}>Add</button>
                </div>
            </form>
        </div>
    )
}
export default Updateproject