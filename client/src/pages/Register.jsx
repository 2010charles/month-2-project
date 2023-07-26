import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import img3 from '../projectImages/image3.jpg'
import Login from './Login'
import {useNavigate} from 'react-router-dom'
import Axios from 'axios'
import './register.css'
import Header from "../components/Header";

function Register() {
  const navigate = useNavigate();
  const schema = yup.object().shape({
    Fullname: yup.string().required("Fullname is required"),
    username: yup.string().required("username is required"),
    email: yup.string().email().required("Email is required"),
    password: yup.string()/*.matches(
     /* /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{4,}$/*/
      
      .required("Password is required"),
  });
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

 
const onSubmit = async(data) => {
  const res = await fetch("http://localhost:8081/auth/register",{
    method: "POST",
    headers:{
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  // console.log(data);
  const dataFromServer = await res.json()
  alert(dataFromServer.message)
  navigate('/Login')
  // if(dataFromServer.token){
    // localStorage.setItem('user',JSON.stringify(dataFromServer.token))
    // dispatch({type:"LOGIN_SUCCESS",payload:data})
  // }

};
  return (
    <>
    <Header/>
   
    <div className="registerPage">
    <img src={img3} height={700} style={{width:"100%" }}/>
      <form className="formRegister"
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
      <div className="registerPart">
      <h3 className="registerContent">Register</h3>
      </div>
      <div className="fullnameInput" >
      <input type="text" placeholder="Full name" {...register("Fullname")} />
      <p>{errors.Fullname?.message}</p>
    </div>
        <div className="username" >
          <input type="text" placeholder="username" {...register("username")} />
          <p>{errors.username?.message}</p>
        </div>
        <div className="emailInput">
          <input type="text" placeholder="Email..." {...register("email")} />
          <p>{errors.email?.message}</p>
        </div>

        <div className="passwordInput">
          <input type="password" placeholder="Password..." {...register("password")} />
          <p>{errors.password?.message}</p>
        </div>

        <input type="submit" value="Submit" style={{ width: "50%" }} />
      </form>
    </div>
    </>
  );
}

export default Register;