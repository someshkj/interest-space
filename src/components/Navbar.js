import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  let authuser = sessionStorage.getItem("Key_Variable");
  if (authuser === "ADMIN") {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/AdminDashboard" className="navbar-brand">
            Interest Space
          </Link>
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
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link
                  to="/AdminDashboard"
                  className="nav-link"
                  aria-current="page"
                  active="bg-black"
                >
                  <button type="button" className="btn btn-outline-danger">
                    Dashboard
                  </button>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/AdminViewpost" className="nav-link">
                  <button type="button" className="btn btn-outline-danger">
                    View Post
                  </button>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/AdminDeletePost" className="nav-link">
                  <button type="button" className="btn btn-outline-danger">
                    Delete Post
                  </button>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Logout" className="nav-link">
                  <button type="button" className="btn btn-outline-danger">
                    Logout
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  } else if (authuser === "USER") {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/UserDashboard" className="navbar-brand">
            Interest Space
          </Link>
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
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link
                  to="/UserDashboard"
                  className="nav-link"
                  aria-current="page"
                  active="bg-black"
                >
                  <button type="button" className="btn btn-outline-success">
                    Dashboard
                  </button>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/posts" className="nav-link">
                  <button type="button" className="btn btn-outline-success">
                    Posts
                  </button>
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link to="/UpdateProfile" className="nav-link">
                  <button type="button" className="btn btn-outline-success">
                    Update Profile
                  </button>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/UserDeleteProfile" className="nav-link">
                  <button type="button" className="btn btn-outline-success">
                    Delete Profile
                  </button>
                </Link>
              </li> */}
              <li className="nav-item">
                <Link to="/Logout" className="nav-link">
                  <button type="button" className="btn btn-outline-success">
                    Logout
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            Interest Space
          </Link>
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
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link"
                  aria-current="page"
                  active="bg-black"
                >
                  <button type="button" className="btn btn-outline-success">
                    Home
                  </button>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/UserLogin" className="nav-link">
                  <button type="button" className="btn btn-outline-success">
                    Login
                  </button>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/UserSignup" className="nav-link">
                  <button type="button" className="btn btn-outline-success">
                    Signup
                  </button>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/AdminLogin" className="nav-link">
                  <button type="button" className="btn btn-outline-success">
                    AdminLogin
                  </button>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/AboutUs" className="nav-link">
                  <button type="button" className="btn btn-outline-success">
                    AboutUs
                  </button>
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/ContactUs" className="nav-link">
                  <button type="button" className="btn btn-outline-success">
                    ContactUs
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
