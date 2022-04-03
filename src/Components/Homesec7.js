import React from 'react'
import '../Style/Homesec7.css'
import Sample from './Sample'

const Homesec7 = () => {
  return (
    <div className='homesec7'>
        <div className='homesec7_content'>
            <div className='hs7_content_left'>
                <h1>Interested in what you’ll learn<br /> during the course of this program?</h1>
            </div>
            <div className='hs7_content_right' >
              <Sample />
            </div>
        </div>
    </div>
  )
}

export default Homesec7