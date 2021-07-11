import React from 'react'
import { Redirect } from "react-router-dom";
import Navbar from './Navbar';

function UserDashboard() {
  let authuser = sessionStorage.getItem('Key_Variable')
  console.log(authuser)
  if (authuser == null) {
    return (<Redirect to="/UserLogin" />)
  }
  else {
    let name = sessionStorage.getItem('username')
    console.log(name)
    return (
      <div>
        <Navbar />
        <br />
        <h3>WELCOME {name}</h3>
       
      </div>
    )
  }
}

export default UserDashboard
