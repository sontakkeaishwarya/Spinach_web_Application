import React from 'react';
import './group.css';

function DesignSystemGroup() {
  return (
   <>
    <div className="group-container">
      <div className="design-system-heading">
        <span className="line-before-heading"></span>
        <span className='big'>Design Systems are ideal for:</span>
        <span className="line-after-heading"></span>
      </div>
      <div className='line-between'></div>
      <div className='subhead1'>
        <div className='subhead2'>
      <div className="subheading1"><span className='Subhead-a'>/01</span> <span className='subhead-a1'>Websites, apps, and products</span></div>
      <div className="subheading2"><span className="subhead-b" >/02</span><span className='subehead-b1'>Product teams</span></div>
      <div className="subheading3"><span className="subhead-c">/03</span > <span className='subhead-c1'>SaaS and Enterprise start-ups</span></div>
      </div></div>
      </div>
      
      </>
  );
}

export default DesignSystemGroup;
