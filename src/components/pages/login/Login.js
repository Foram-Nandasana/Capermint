import { useState } from "react";
import "../login/login.css";
import { useNavigate } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
   
    container1: {
      // display: 'flex',
      flexWrap: 'wrap',
      padding: '16px',
      backgroundColor: '#f1f1f1',
      width: '450px',
      alignItems: 'center',
      // justifyContent: 'center',
      // border: 'none',
      // marginLeft: '40%',
      // flex: 1,
    //   [theme.breakpoints.down('sm')]: {
    //     marginLeft: '180px',
    //   },
    //   [theme.breakpoints.down('md')]: {
    //     marginLeft: '200px',
    //   },
    },
    // psw: {
    //   float: 'right',
    //   paddingTop: '16px',
    // },
    // main: {
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   minHeight: '50vh',
    //   // width: '70%',
    // },
    // '@media only screen and (max-width: 1000px)': {
    //     container1:{
    //         marginLeft: '30%',
    //     },
    // },
    // '@media only screen and (max-width: 800px)': {
    //     container1:{
    //         marginLeft: '20%',
    //     },
    // },
  }));
export const Login = () => {

    const classes = useStyles();

    const [uid, setUid] = useState('');
    const [pass, setPsw] = useState('');

    const obj = {
        user: uid,
        password: pass,
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log([uid, pass])
        login(obj);
        console.log([obj])
    }

    const login = (data) => {
        localStorage.setItem('Login', JSON.stringify(data));
        navigate('/')
    }

    const navigate = useNavigate();

    return (
        <main>
        <form onSubmit={handleSubmit}>
            <div className={classes.container1}>
                <label for="uname"><b>Username</b></label>
                <input type="text"
                    placeholder="Enter Username"
                    name="uname"
                    onChange={(e) => { setUid(e.target.value) }}
                    value={uid}
                    required
                />
                <label for="psw"><b>Password</b></label>
                <input type="password"
                    placeholder="Enter Password"
                    name="psw"
                    onChange={(e) => { setPsw(e.target.value) }}
                    value={pass}
                    required
                />
                <button type="submit"  >Login</button>
            </div>
            {/* <div className="container" >
                    <button type="button" className="cancelbtn">Cancel</button>
                    {/* <span className="psw">Forgot <a href="#">password?</a></span> }
                </div> */}

        </form>
        </main>
    )
}
