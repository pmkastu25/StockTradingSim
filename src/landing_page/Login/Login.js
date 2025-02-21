import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function Login() {
  const navigate = useNavigate();
  const [inputVal, setInputVal] = useState({
    username: "",
    password: "",
  });

  const { username, password } = inputVal;

  const handleOnChange = (e) => {
    setInputVal({
      ...inputVal,
      [e.target.name]: e.target.value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // try {
        await axios.post(
        "http://localhost:3005/login",
         inputVal ,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

    //   const { success, message } = data;
    //   if (success) {
    //     handleSuccess(message);
    //     setTimeout(() => {
    //       navigate("/");
    //     }, 1000);
    //   } else {
    //     handleError(message);
    //   }
    // } catch (error) {
    //   console.log(error);
    // }

    setInputVal({
      ...inputVal,
      username: "",
      password: "",
    });
  };

  return (
    <div className="container">
      <div className="row">
        <form onSubmit={handleSubmit} method="POST">
          <div>
            <label htmlFor="username">Username</label>
            <input
              placeholder="Enter Username"
              type="text"
              name="username"
              value={username}
              onChange={handleOnChange}
            ></input>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              placeholder="Enter Password"
              type="password"
              name="password"
              value={password}
              onChange={handleOnChange}
            ></input>
          </div>
          <button type="submit">Submit</button>
          <span>
            Don't have a account? <Link to={"/signup"}>Signup</Link>
          </span>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}

export default Login;
