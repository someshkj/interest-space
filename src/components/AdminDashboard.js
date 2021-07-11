import React from 'react'
import { Redirect } from "react-router-dom";
import Navbar from './Navbar';

function AdminDashboard() {
  let authuser = sessionStorage.getItem('Key_Variable')
  console.log(authuser)
  if (authuser == null) {
    return (<Redirect to="/AdminLogin" />)
  }
  else {
    return (
      <div>
        <Navbar/>
        <br />
        <h3>WELCOME ADMIN</h3>
      </div>
    )
  }
}

export default AdminDashboard
