import React from 'react';
import './footer.css';

function footer() {
  return (
    <>
    <div className='footer-outer'>
        <div className='social-media'></div>
        <ul>
            <li className='lndl'>Linkedln</li>
            <li className='Insta'>Instagram</li>
            <li className='Drb'>Dribbble</li>
            <li className='beh'>Behance</li>
            <li className='twt'>Twitter</li>
        </ul>
        <div className='com-logo'><img src="/images/spinach.png" alt="img"></img></div>
        <div className='address'>7th floor, Corporate Park ||, Sion-Trombay Road, Chembur, Mumbai- 400071 , India.</div>
        <div className='map'>View on Google maps</div>
        <div className='footer'>
            <span className='com'>The company</span>
            <span className='ser'>Our services</span>
            <span className='exper'>Our Expertise</span>
            <span className='cln-work'>Client work</span>
            <span className='career'>Careers</span>
            <span className='policy'>Privacy policy</span>
            <span className='TnC'>Terms & conditions</span>
        </div>
        <span className='vertical'></span>
        <div className='contact-1'>
            <span className='cont-head1'>Business enquiries:</span>
            <span className='cont-body1'>eshani@spinachexperience.design</span>
            <span className='cont-end1'>+91 9821297209</span>
            </div>   
        <div className='contact-2'>
            <span className='cont-head2'>Career enquiries:</span>
            <span className='cont-body2'>fedora@spinachexperience.design</span>
            <span className='cont-end2'>+91 8097260369</span>
        </div>
        <div className='vert'></div>
    </div>
    <div className='copyright'>© 2024 Spinach Experience Design</div>
    </>
  )
}
export default footer