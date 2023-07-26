import { useForm } from "react-hook-form";
import './login.css'
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import img3 from '../projectImages/image3.jpg';
import Axios from 'axios'
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../context/userContext/Context";

function Login() {
  const {dispatch } = useContext(Context);
  const navigate = useNavigate();
  const schema = yup.object().shape({
    email: yup.string().email().required("Email is required"),
    password: yup.string().matches(
      /* /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{4,}$/*/

     /* 'password is required'*/
    ).required("Password is required"),
  });
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
 
  Axios.post("http://localhost:8081/auth/login",data)
    .then(({data})=>{
      if(data.token){
        dispatch({type:"LOGIN_SUCCESS",payload:data})
        navigate("/dashboard")
      }
    })
    .catch(({response})=>{
      alert(response.data.error)
    });
  };
  return (
    <div className="loginMainCoponent">
      <div className="loginPage1">

        <div className="LoginRight">
          <form
            onSubmit={handleSubmit(onSubmit)}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
          <div className="LoginContentOnRegister">
          <h4 className="GetStartedContent">If you do not have an account register here</h4>
          <button className="GetStartedButton">Get Started</button>
        </div>
            <div className="loginPart">
              <h2 className="loginContent">Login</h2>
            </div>
            <div className="allInputStlyle emailInput">
              <input type="text" placeholder="Email..." {...register("email")} />
              <p>{errors.email?.message}</p>
            </div>

            <div className="allInputStlyle passwordInput">
              <input type="password" placeholder="Password..." {...register("password")} />
              <p>{errors.password?.message}</p>
            </div>
            <input className="submit" type="submit" value="Submit" style={{ width: "50%" }} />
          </form>
        </div>
        <div className="LoginLeft">
          <img src={img3} height={500} style={{ marginTop: "20px", width: "60%", marginLeft: "20px" }} />
        </div>
      </div>
    </div>
  );
}

export default Login;     