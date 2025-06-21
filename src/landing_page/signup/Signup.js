import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signup() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [inputVal, setInputVal] = useState({
    email: "",
    username: "",
    password: "",
  });

  const handleOnChange = (e) => {
    setInputVal({ ...inputVal, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Disable form while processing

    try {
      const response = await axios.post("https://zerodha-clone-backend-2y8c.onrender.com/signup", inputVal, {
        // headers: { "Content-Type": "application/json" },
        withCredentials: true, 
      });

      toast.success("Signup Successful! Redirecting...", { autoClose: 2000 });
      setTimeout(() => navigate("/"), 2000); // Redirect after 2 sec

    } catch (error) {
      console.error(error);
      if (error.response && error.response.status === 400) {
        toast.error("User already exists!");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
      setInputVal({ email: "", username: "", password: "" }); // Clear inputs
    }
  };

  return (
    <div className="container">
      <div className="row mt-3">
        <form onSubmit={handleSubmit} method="POST">
          <div>
            <label htmlFor="email">Email</label>
            <input
              className="form-control mt-2 mb-2"
              placeholder="Enter Email"
              type="email"
              name="email"
              value={inputVal.email}
              onChange={handleOnChange}
              required
              disabled={loading}
            />
          </div>
          <div>
            <label htmlFor="username">Username</label>
            <input
              className="form-control mt-2 mb-2"
              placeholder="Enter Username"
              type="text"
              name="username"
              value={inputVal.username}
              onChange={handleOnChange}
              required
              disabled={loading}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              placeholder="Enter Password"
              className="form-control mt-2 mb-2"
              type="password"
              name="password"
              value={inputVal.password}
              onChange={handleOnChange}
              required
              disabled={loading}
            />
          </div>
          <button className="btn btn-primary m-3" type="submit" disabled={loading}>
            {loading ? "Signing up..." : "Submit"}
          </button>
          <span>
            Already have an account? <Link to="/login">Login</Link>
          </span>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}

export default Signup;

