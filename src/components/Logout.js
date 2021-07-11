import React from 'react';
import { Redirect } from "react-router-dom";

function Logout() {
  let authuser = sessionStorage.getItem('Key_Variable')
  console.log(authuser)
  if (authuser === 'ADMIN' || authuser === 'USER') {
    sessionStorage.removeItem('Key_Variable')  
  }
  return (<Redirect to="/" />)
}


export default Logout
