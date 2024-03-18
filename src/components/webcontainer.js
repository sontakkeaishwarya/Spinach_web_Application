import React from 'react'
import './webcontainer.css'

function webcontainer() {
  return (
    <>
    <div className='web-outer'>
        <div className='web-outer-content'>
            <div className='web-heading'>/Next service</div>
            <div className='web-subhead'>Web and mobile apps</div>
            <div className='web-txt'>Design stickiness and retention for web and mobile customer apps with 
                our proven and tested  Customer Experience Design process, builds behavioural
             engagement by leveraging Design Thinking for an end-to-end view of the customer acquisition and
              retention journey.</div>
            <button className='web-btn'>know more</button>
        </div>
        <div className='web-img'><img src="/images/web.png" alt="img"></img></div>
    </div>
    </>
  )
}

export default webcontainer