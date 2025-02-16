import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { Context } from "../main";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from 'react-icons/fa'; 


const Login = () => {
  const { setIsAuthenticated, setUser } = useContext(Context);
  const navigateTo = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleLogin = async (data) => {
    await axios
      .post("http://localhost:4000/api/v1/user/login", data, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        toast.success(res.data.message);
        setIsAuthenticated(true);
        setUser(res.data.user);
        navigateTo("/");
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };
  return (
    <div className="login-container">
      <div className="login-pic">
      </div>
      <div className="login-form">
        <form
          className="auth-form"
          onSubmit={handleSubmit((data) => handleLogin(data))}
        >
          <h2>Login</h2>
          <div className="input-group">
            <input
              type="email"
              placeholder="Email"
              required
              {...register("email")}
              style={{paddingLeft: '40px'}}
            />
            <FaEnvelope className="icon" style={{position: 'absolute', left: '10px', top: '40%', transform: 'translateY(-50%)'}} />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              required
              {...register("password")}
              style={{paddingLeft: '40px'}}
            />
            <FaLock className="icon" style={{position: 'absolute', left: '10px', top: '40%', transform: 'translateY(-50%)'}} />
          </div>
          <p className="forgot-password">
            <Link to={"/password/forgot"}>Forgot your password?</Link>
          </p>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
