import React from 'react';
import { useNavigate } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({

body: {
    fontFamily: 'Arial, Helvetica, sans - serif',
},
button: {
  backgroundColor: '#297ce2',
  color: 'white',
  padding: '14px 20px',
  margin: '8px 0',
  border: 'none',
  cursor: 'pointer',
  width: '100 %',
  '&:hover': {
    opacity: 0.8,
  },
},

container1: {
  display: 'flex',
  flexWrap: 'wrap',
  padding: '16px',
  backgroundColor: '#f1f1f1',
  width: '450px',
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: '40%',
  border: 'none',
  flex: 1,
},

main:{
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '50vh',
  // width: '70 %',
},
'@media only screen and (max-width: 1000px)': {
  container1:{
      marginLeft: '30%',
  },
},
'@media only screen and (max-width: 800px)': {
  container1:{
      marginLeft: '20%',
  },
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
    <div className= {classes.container1}>
      <h3>Do you want to Logout ? </h3>
      <button type="submit" onClick={logout} >Logout</button>
    </div>

  )
}
