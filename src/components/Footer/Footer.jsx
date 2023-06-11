import React from 'react';
import './Footer.css';

export default function Footer({brandData,socialData}) {

  return (
    <footer className='footer'>
      <section className='social-networks'>
        <div className='social-networks-title'>
          <span>Get connected with us on social networks:</span>
        </div>
        <div className='socialdata'>
              {socialData.map((social) => {
                return (
                  <div className='socialdataitem' key={social.id} to={social.link}>
                    <img src={social.image} alt={social.title}></img>
                  </div>
                );
              })}
            </div>
      </section>


      <section className='footer-content'>
        
        <div className='container'>
          
          <div className='row'>
          <img  src={brandData.logo1} alt={brandData.name}></img>
            <div className='col-md-3 col-lg-4 col-xl-3'>
          
              <p className='tagline'>
                Where Logistics Meet innovation
              </p>
            </div>

            <div className='col-md-2 col-lg-2 col-xl-2'>
              <h4 className='footer-title'>Company</h4>
              <p>
                <a href='#!' className='footer-link'>
                  Services
                </a>
              </p>
              <p>
                <a href='#!' className='footer-link'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='footer-link'>
                  Contact
                </a>
              </p>
            </div>

            <div className='col-md-3 col-lg-2 col-xl-2'>
              <h4 className='footer-title'>Useful links</h4>
              <p>
                <a href='#!' className='footer-link'>
                  Get quote
                </a>
              </p>
              <p>
                <a href='#!' className='footer-link'>
                  feedback
                </a>
              </p>
              <p>
                <a href='#!' className='footer-link'>
                  complaint
                </a>
              </p>
            </div>

            <div className='col-md-4 col-lg-3 col-xl-3'>
              <h4 className='footer-title'>Contact</h4>
              <p>
                <i className='icon-home'></i>
                Gomtinagar, Lucknow, uttar pradesh, India
              </p>
              <p>
                <i className='icon-envelope'></i>
                gatividhits@gmail.com
              </p>
              <p>
                <i className='icon-phone'></i>
                +919026003602
              </p>
              <p>
                <i className='icon-print'></i>
                +919026003602
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className='footer-bottom'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 text-center'>
              <h3 className='footer-bottom-text'>
                © 2023 Gatividhi transsolutions pvt. ltd. All rights reserved.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

