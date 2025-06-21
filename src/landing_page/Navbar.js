import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  // Check auth on mount
 useEffect(() => {
  const checkAuth = async () => {
    try {
      axios.defaults.withCredentials = true;
      const res = await axios.get("https://zerodha-clone-backend-2y8c.onrender.com/verify", {
        withCredentials: true,
      });

      console.log("Verify response:", res.data); // 👈 Add this

      if (res.data.success) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    } catch (err) {
      console.log("Verify failed:", err); // 👈 Add this
      setIsAuthenticated(false);
    }
  };

  checkAuth();
}, []);


  const handleLogout = async () => {
   try {
    await axios.get("https://zerodha-clone-backend-2y8c.onrender.com/logout", { withCredentials: true }); // server clears cookie
  } catch (err) {
    console.log("Logout error (optional):", err);
  }
    setIsAuthenticated(false);
    navigate("/login");
  };

  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#FFF" }}
    >
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src="/media/logo.svg" alt="logo" style={{ width: "25%" }} />
        </Link>
        <div>
          {isAuthenticated && (
                <li className="nav-item">
                  <button
                    className="btn btn-outline-danger"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              )}
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex" role="search">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {!isAuthenticated && (
                <li className="nav-item">
                  <Link className="nav-link active" to="/signup">
                    Signup
                  </Link>
                </li>
              )}
              <li className="nav-item">
                <Link className="nav-link active" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/product">
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/support">
                  Support
                </Link>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
