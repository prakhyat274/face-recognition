import React from 'react'
import './signIn.css'

export default function Signin(props) {
  return (
    <div className='center' style={{height:"80vh", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
        <div className='form'>
            <h2>Sign in</h2>
            <div className='formInput'>
                <label>Email</label>
                <input type="text" placeholder='Enter Email'/>
            </div>
            <div className='formInput'>
                <label>Password</label>
                <input type="password" placeholder='Enter Password'/>
            </div>
            <div>
                <button onClick={()=>props.changeRoute("home")}className='formbutton'>SignIn</button>
                <p onClick={()=>props.changeRoute("register")} style={{margin:"10px", cursor:"pointer"}}>Don't Have an Account? Create One</p>
            </div>
        </div>
    </div>
  )
}
