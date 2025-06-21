import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [inputVal, setInputVal] = useState({ email: "", password: "" });

  const handleOnChange = (e) => {
    setInputVal({ ...inputVal, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Disable form while processing

    try {
      const response = await axios.post("https://zerodha-clone-backend-2y8c.onrender.com/login", inputVal, {
        // headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });

      toast.success("Login Successful! Redirecting...", { autoClose: 2000 });
      setTimeout(() => navigate("/"), 2000); // Redirect after 2 sec

    } catch (error) {
      console.error(error);
      if (error.response && error.response.status === 400) {
        toast.error("Incorrect Email or Password");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
      setInputVal({ email: "", password: "" }); // Clear inputs
    }
  };

  return (
    <div className="container">
      <div className="row mt-3">
        <form onSubmit={handleSubmit} method="POST">
          <div>
            <label htmlFor="email">Email</label>
            <input
              placeholder="Enter Email"
              className="form-control mb-2 mt-2"
              type="email"
              name="email"
              value={inputVal.email}
              onChange={handleOnChange}
              required
              disabled={loading}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              className="form-control mb-2 mt-2"
              placeholder="Enter Password"
              type="password"
              name="password"
              value={inputVal.password}
              onChange={handleOnChange}
              required
              disabled={loading}
            />
          </div>
          <button className="btn btn-primary m-3" type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Submit"}
          </button>
          <span>
            Don't have an account? <Link to="/signup">Signup</Link>
          </span>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}

export default Login;
