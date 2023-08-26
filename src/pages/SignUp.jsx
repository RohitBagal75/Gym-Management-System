import React from 'react'
import NavBar from '../component/NavBar'

export default function SignUp() {
  return (
    <>
    <NavBar/>
    <div className="body-container">
    <div className="sign-contaienr">
        <div className="info-text">
            <p>Sign Up</p>
        </div>
        <div className="divider"></div>
        <div className="login-box">
            <form >
                <div className="inputbox-1">
                    <input type="text" id='name' required/>
                    <label>Name</label>
                </div>
                <div className="inputbox-1">
                    <input type="text" id='username' required/>
                    <label>UseName</label>
                </div>
                <div className="input-grp">
                    <div className="inputbox-1">
                        <input type="text" id='password' required/>
                        <label>Password</label>
                    </div>
                    <div className="inputbox-1">
                        <input type="text" id='cpassword' required/>
                        <label>Confirm Password</label>
                    </div>
                </div>
                <div className="input-grp">
                    <div className="inputbox-1">
                        <input type="date" id='dob' placeholder="" required/>
                        <label>Date of Birth</label>
                    </div>
                    <div className="inputbox-1">
                        <input type="text" id='gender' required/>
                        <label>Gender</label>
                    </div>
                </div>
                
                <div className="inputbox-1">
                    <input type="text" id='contact' required/>
                    <label>Contact No</label>
                </div>
                <div className="inputbox-1">
                    <input type="text" id='address' required/>
                    <label>Address</label>
                </div>
                <div className="input-grp">
                    <div className="inputbox-1">
                        <input type="text" id='weight' required/>
                        <label>Weight</label>
                    </div>
                    <div className="inputbox-1">
                        <input type="text" id='height' required/>
                        <label>height</label>
                    </div>
                </div>  
                <input type="submit" value="Submit"/>
            </form>
        </div>
    </div>
</div>
</>
  )
}
