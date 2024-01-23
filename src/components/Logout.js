import React from 'react';
import { useNavigate } from "react-router-dom";

export const Logout = () => {

  const logout = () => {
    localStorage.removeItem('Login');
    navigate('/Login')
  }

  const navigate = useNavigate();

  return (
    <div className='container1'>
      <h3>Do you want to Logout ? </h3>
      <button type="submit" onClick={logout} >Logout</button>
    </div>

  )
}
