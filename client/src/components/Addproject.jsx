/*import React from 'react';
import './addproject.css';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useContext } from 'react';
import { Context } from '../context/userContext/Context';
import { apiDomain } from './utils/Utils';
import Axios from 'axios'

const schema = yup.object().shape({
  description: yup.string().required('Description is required'),
});

function Addproject() {
   const {user} = useContext(Context);
  const {
    register,
    handleSubmit,
    formState: { errors },reset
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    // Handle form submission here
   // console.log(data);
   Axios.post(`${apiDomain}/project`,data,{
    headers:{
      "Authorization":`${user.token}`,
    }
   }).then((response)=>{
    reset();
    response.data.message && alert(response.data.message)
   }).catch((response)=>{
    alert(response.data.error)
   })
  };

  return (
    <div className='formwrapper'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <textarea  className='textArea'
          placeholder='add project'
          {...register('description')}
        ></textarea>
        <p>{errors.description?.message}</p>
        <input className='submitbtn2' type='submit' value='save' />
      </form>
    </div>
  );
}

export default Addproject;*/
