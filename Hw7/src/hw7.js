import React from 'react'
import './hw7.css'
function LogIn(){
    return(
        <div className="login">
            <h1>2022webp Login</h1>
            <form>
                <label type="text">Account</label><br/>
                <input className='in' required/><br/><br/>
                <label type="text">Password</label><br/>
                <input className='in' type='password' required/><br/>
                <button id="sigin">Log In</button>
            </form>
        </div>
    );
}

export default LogIn;
