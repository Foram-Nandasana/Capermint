import { useState } from "react";
import "../login/login.css";
import { useNavigate } from "react-router-dom";
import { Padding } from "@mui/icons-material";

export const Login = () => {

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
            <div className="container1">
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
