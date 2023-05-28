import React from 'react'
import Tilt from 'react-parallax-tilt';
import './logo.css'
import brain from './brain.png'

export default function Logo() {
  return (
    <div>
        <Tilt className="tilt">
            <div className='logo' style={{margin:"10px 30px", height: '100px', width:"100px"}}>
                <img style={{padding:"10px",height: '80px', width:"80px"}}src={brain} alt="logo" />
            </div>
        </Tilt>
    </div>
  )
}
