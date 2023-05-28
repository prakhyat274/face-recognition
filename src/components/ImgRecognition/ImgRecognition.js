import React from 'react'
import './imgRecognition.css'

export default function ImgRecognition({imageURL, box}) {
  return (
    imageURL && <div className='center'>
        <div className='center' style={{position:"absolute"}}>
            <img id="inputimage" style={{marginTop:"10px", width:"400px", height:"300px"}}src={imageURL} alt="" />
            <div className='bounding_box' style={{top: box.top, bottom: box.bottom, left: box.left, right: box.right}}></div>
        </div>
    </div>
  )
}
