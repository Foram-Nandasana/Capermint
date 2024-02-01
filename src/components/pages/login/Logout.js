import React from 'react';
import { useNavigate } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container1: {
    flexWrap: 'wrap',
    padding: '16px',
    backgroundColor: '#f1f1f1'
  },

});

export const Logout = () => {

  const classes = useStyles();

  const logout = () => {
    localStorage.removeItem('Login');
    navigate('/Login')
  }

  const navigate = useNavigate();

  return (
    <div className={classes.container1}>
      <h3>Do you want to Logout ? </h3>
      <button type="submit" onClick={logout} >Logout</button>
    </div>

  )
}
