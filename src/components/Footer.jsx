import React from 'react'
import './Footer.css';
import logo from '../images/logo.png';
import payment from '../images/payment.png';
import digicert from '../images/digicert.png';

const Footer = () => {
  return (
    <div className="container footer px-5 py-3">
      <div className="row">
        <div className="col-md-3 d-flex justify-content-center align-items-start flex-column">
          <img src={logo} alt="logo" className='my-4' />
          <ol className="footer-list px-0">
            <li>Home</li>
            <li>All Products</li>
            <li>Featured Products</li>
            <li>Contact</li>
            <li>About Us</li>
          </ol>
        </div>
        <div className="col-md-6 d-flex justify-content-center align-items-start flex-column">
          <p className="footer-description">We are a registered E-Commerce seller and we support a variety of Local and International payment modes</p>
          <img src={payment} alt="" className="payment-card" />
        </div>
        <div className="col-md-3 d-flex justify-content-center align-items-start flex-column">
          <p className="footer-description">Website protected by</p>
          <img src={digicert} alt="" className="digicert" />
        </div>
      </div>
    </div>
  )
}

export default Footer