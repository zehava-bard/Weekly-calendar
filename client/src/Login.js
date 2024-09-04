import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from './axios/usersApi'
import './LogReg.css';
const Login = () => {
    const [userID, setuserID] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const CheckUser = async() => {
        login(userID, password).then(response => {
            console.log("response in login",response);
            localStorage.setItem('UserID', userID);
            if (response.data.statusCode === 200) {
                navigate("./CalenderWeekly", { replace: false });
            }
            else {
                alert("you are not unknown user, Sign up now")
                navigate("./Register", { replace: false });
            }
        })
    }
    return (<div>
        <h1 className='title'>login</h1>
        <div className='celander'><div className='con'><input type="text" placeholder="userID" required onBlur={(e) => setuserID(e.target.value)} />
        <br></br><br></br><br></br>
        <input type="password" placeholder="password" required onBlur={(e) => setPassword(e.target.value)} />
        <br></br><br></br><br></br>
        <button onClick={CheckUser}>Login</button></div></div>
    </div>
    )

}

export default Login
