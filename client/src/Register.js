import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Register } from './axios/usersApi';
import { User } from './classes/ClassUsers';
import './LogReg.css';


const Register2 = () => {
    const [userId, setuserId] = useState('');
    const [f_name, setFirstName] = useState('');
    const [l_name, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [Email, setEmail] = useState('');
    const [phone, setphone] = useState('');
    const navigate = useNavigate();

    const update = () => {
        const user = new User();
        user.userId = userId;
        user.firstName = f_name
        user.lastName = l_name
        user.password = password
        user.email = Email
        user.phone = phone
        if (user.userId !== "") {
            Register(user)
            console.log("whare are you?");
            navigate("../CalenderWeekly", { replace: false });
            console.log("after calender");
        }
        else { alert("insert details") }
    }
    return (
        <>
            <h1 className='title'>register</h1>
            <div className='celander'><div className='con'>
                <input type="text" placeholder="userId" required onBlur={(e) => setuserId(e.target.value)} />
                <input type="text" placeholder="first name" required onBlur={(e) => setFirstName(e.target.value)} />
                <input type="text" placeholder="last name" required  onBlur={(e) => setLastName(e.target.value)} />
                <input type="password" placeholder="password" required  onBlur={(e) => setPassword(e.target.value)} />
                <input type="text" placeholder="Email" onBlur={(e) => setEmail(e.target.value)} />
                <input type="text" placeholder="phone number" required onBlur={(e) => setphone(e.target.value)} />
                <button onClick={update}>Sign up</button></div></div>

        </>)

}
export default Register2