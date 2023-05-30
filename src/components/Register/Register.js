import React from 'react'
import './register.css'

export default function Register(props) {
  return (
    <div className='center' style={{height:"80vh", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
        <div className='form'>
            <h2>Register</h2>
            <div className='formInput'>
                <label>Full Name</label>
                <input type="text" placeholder='Enter Your Name'/>
            </div>
            <div className='formInput'>
                <label>Email</label>
                <input type="text" placeholder='Enter Email'/>
            </div>
            <div className='formInput'>
                <label>Password</label>
                <input type="password" placeholder='Enter Password'/>
            </div>
            <div>
                <button onClick={()=> props.changeRoute("home")} className='formbutton'>Register</button>
                <p onClick={()=> props.changeRoute("signin")} style={{margin:"10px", cursor:"pointer"}}>Already have an account?</p>
            </div>
        </div>
    </div>
  )
}
