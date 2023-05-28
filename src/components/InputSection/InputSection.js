import React from 'react'
import './inputSection.css'

export default function InputSection() {
  return (
    <div>
        <p>
            This will detect faces in your picture. Give it a chance.
        </p>
        <div className='center'>
          <div className='inputSection center'>
              <input placeholder="Enter Image URL Here" type="text" />
              <button>Detect</button>
          </div>
        </div>
    </div>
  )
}
