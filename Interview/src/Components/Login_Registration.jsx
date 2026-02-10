import React, { useState } from 'react'

const Login_Registration = () => {
    const [useName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmData, setconfirmData] = useState('');
    const checkdata = (e) => {
        e.preventDefault();
        if (useName.length === 0 || email.length === 0 || password.length === 0) {
            setconfirmData("please enter valid data")
        }
        else {
            console.log(useName, email, password);
        }
    }
    const alertdata = () => {
        alert(confirmData)
    }
    console.log(confirmData.length)
    return (
        <div>
            {confirmData.length === 0 ? <form action="onclick">
                <h1>Login</h1>
                <h6>UserName</h6>
                <p><input type="text" value={useName} onChange={(e) => setUserName(e.target.value)} /></p>
                <h6>Email</h6>
                <p><input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /></p>
                <h6>Password</h6>
                <p><input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /></p>
                <button onClick={checkdata}>Submit</button>
            </form> : <div><p>{alertdata()}</p></div>}
        </div>
    )
}

export default Login_Registration
