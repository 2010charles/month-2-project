import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState, useEffect } from 'react';
import axios  from 'axios';
//import { apiDomain } from '../utils/utils';
import { apiDomain } from './utils/Utils';
import { useForm } from "react-hook-form";
//*import { useContext } from 'react';
//import CreateProject from './CreateProject';

  function NewaddTask() {
   // const { user } = useContext(Context)
     //get projects and users from the database
     const [members, setMembers] = useState([])
     //const [start, setStart] = useState([])
     const [project, setProject] = useState([])

     const getMembers = async () => {
         const response = await axios.get(`${apiDomain}/users`);{
         setMembers(response.data)
         
        
     }

        //get projects
        const getProjects = async () => {
            const res = await axios.get(`${apiDomain}/project`,{
             headers: { 'Authorization': `${user.token}` },
         })
            setProject(res.data)
        }
   

   useEffect(() =>{
     
       getMembers()
   }, [])


    //create a schema to validate input fields before submission
    const schema = yup.object().shape({
        project: yup.string().required('select a project'),
        taskName: yup.string().required('Type task Name'),
        end: yup.string().required(),
        start: yup.string().required(),
        member: yup.string().required('select member'),
        
    });

    const { register, handleSubmit, formState: { errors } } = useForm({

        resolver: yupResolver(schema),
    });

        //send data to the database via the local API using axios
  const dataToServer = (data) => {

        axios.post(`${apiDomain}/tasks`, data).then((response) =>{
           console.log(response.data.message) 
            
          })
          .catch(({response}) =>{

            console.log(response.data.error)
          })
  }; 

     
  
  return (
    <>
      
      <form className="simple-form" onSubmit={handleSubmit(dataToServer)}>
    
                <div>
                  <label htmlFor="task">Task Name</label>
                    <input type="text" id="task" {...register("taskName")}/>
                    <span>{errors.taskName?.message}</span>
                </div> 

            <div>
                <label htmlFor="name">Project</label> <br />
                <select name="" id="" {...register("project")}>
                    <option > - select - </option>
                    {
                    project && project.map((item, index) => (
                        <option key={index} value={index + 1}> {item.ProjectName} </option>
                    ))}
                </select>              
                <span>{errors.project?.message}</span> 
            </div>
    
                <div>
                  <label htmlFor="task">Priority</label> 
                    <select name="" id="" {...register("priority")}>
                      <option value="">-select-</option>
                      <option value="high">High</option>
                      <option value="medium">Medium</option>
                      <option value="low">Low</option>
                    </select>
                    <span>{errors.priority?.message}</span>
                </div> 
    
            
                <div>
                    <label htmlFor="">Assign User</label>
                    <select name="" id="" {...register("member")}>
                    <option > - select - </option>
                        {
                        members && members.map((item, index) => (
                            <option key={index} value={index + 1}> {item.UserName} </option>
                        ))}
                    </select>
                  <span>{errors.member?.message}</span>
                </div>
    
                <button type="submit" className="btn-login">Create</button>
        
    
      </form>  

    </>
    
  )
}
  }
export default NewaddTask
