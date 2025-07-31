import React from 'react'
import './Footer.css'
import user_icon from '../../Assets/user_icon.svg'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-top">
                <div className="footer-top-left">
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={user_icon} alt="" />
                        <input type="email" placeholder='Enter your email' />
                    </div>
                    <div className="footer-subscribe">Subscribe</div>
                </div>
            </div>
            <hr/>
            <div className="footer-bottom"></div>
            <p  className='footer-bottom-left'>© 2025 Srithi Chatterjee All rights reserved</p>
            <div className="footer-bottom-right">
                <p>Privacy Policy</p>
                <p>Terms of Use</p>
                <p>Connect with me</p>
            </div>
        </div>
    )
}

export default Footer
