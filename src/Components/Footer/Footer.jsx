import React from 'react'
import './Footer.css'
import user_icon from '../../assets/assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
    {/*
        <div className="footer-top">
            <div className="footer-top-left">
                <img src="" alt="footer_logo" />
                <p>I'm a Aspiring Fullstack Developer</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder="Enter your email address" />
                </div>
                <div className="footer-subscribe">Subscribe</div>

            </div>
        </div> 
        */}
        <hr />
        <div className="footer-bottom">
            <p className='footer-bottom-left'>&#169; 2025 Pakanati Vishnuvardhan Reddy. All rights reserved.</p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
