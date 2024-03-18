import React from 'react'
import Navbar from './navbar'
import './homepage.css'

function homepage() {
  return (
    <>
    <Navbar/>
    <div className='middle'>
    <div className='div'>
        <div className="head">Design Systems for scale</div>
        <div className='text'>Add consistency to the scaling up of User Experience with an organized 
                assembly of guidelines, components and documentation.
        </div>
    </div>
    <img src="images/homepage.png" id="img" alt="Logo" />
    </div>

    </>
  )
}

export default homepage