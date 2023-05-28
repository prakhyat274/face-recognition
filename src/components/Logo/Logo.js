import React from 'react'
import Tilt from 'react-parallax-tilt';
import './logo.css'

export default function Logo() {
  return (
    <div>
        <Tilt className="tilt">
            <div className='logo' style={{margin:"10px 30px", height: '100px', width:"100px"}}>
                <h1>👀</h1>
            </div>
        </Tilt>
    </div>
  )
}
