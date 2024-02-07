import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export const Protected = ({ Component }) => {

    const navigate = useNavigate();
    useEffect(() => {
        let login = JSON.parse(localStorage.getItem('Login'));
        console.log(login)

        if (!login) {
            navigate('/Login');
        } else if ((login.user === "Admin" && login.password === "1234")) {
            navigate('/');
        } else if (!(login.user === "User" && login.password ==="123")){
            navigate('/Login');
        }
    }, []);
    return (
        <div>
            <Component />
        </div>
    )
}
