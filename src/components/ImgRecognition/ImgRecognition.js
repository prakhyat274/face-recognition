import React from 'react'
import './imgRecognition.css'

export default function ImgRecognition({imageURL, box}) {
  return (
    imageURL && <div className='center'>
        <div className='center' style={{position:"absolute"}}>
            <img id="inputimage" style={{marginTop:"10px", width:"400px", height:"300px"}}src={imageURL} alt="" />
            {
              box.map((obj,key)=>{
                return (<div key= {key} className='bounding_box' style={{top: obj.top, bottom: obj.bottom, left: obj.left, right: obj.right}}></div>)
              })
            }
        </div>
    </div>
  )
}
