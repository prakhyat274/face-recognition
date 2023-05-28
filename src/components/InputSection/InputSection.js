import React from 'react'
import './inputSection.css'

export default function InputSection({onInputChange, onButtonClick}) {
  return (
    <div>
        <p>
            This will detect faces in your picture. Give it a chance.
        </p>
        <div className='center'>
          <div className='inputSection center'>
              <input onChange={onInputChange} placeholder="Enter Image URL Here" type="text" />
              <button onClick={onButtonClick}>Detect</button>
          </div>
        </div>
    </div>
  )
}
