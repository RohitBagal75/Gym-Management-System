import React from 'react'
import NavBar from '../component/NavBar'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <>
        <NavBar/>
            <div className="body-container">
                <div className="login-contaienr">
                    <div className="info-text">
                        <p>Login</p>
                    </div>
                    <div className="divider"></div>
                    <div className="login-box">
                        <form >
                            <div className="inputbox m-3">
                                <input type="text" id='username' required />
                                <label>Username</label>
                            </div>

                            <div className="inputbox m-3">
                                <input type="password" id='password' required />
                                <label>Password</label>
                            </div><input type="submit" value="Submit" />
                        </form>
                        <p>You don't Have Accout <Link to="/signup">Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </>
    )
}
