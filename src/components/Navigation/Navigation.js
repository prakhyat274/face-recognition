import React from 'react'
import './navigation.css'

export default function Navigation(props) {
  return (
    <div className='navigation'>
        <p onClick={()=>props.changeRoute("signin")}>Sign Out</p>
    </div>
  )
}
