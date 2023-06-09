import React from 'react';
import './Footer.css';

export default function Footer({brandData}) {

  return (
    <footer className='footer'>
      <section className='social-networks'>
        <div className='social-networks-title'>
          <span>Get connected with us on social networks:</span>
        </div>

        

<div className='social-icons'>
<a href='' className='social-icon me-4 text-reset'>
  <i className='fab fa-facebook-f'></i>
</a>
<a href='' className='social-icon me-4 text-reset'>
  <i className='fab fa-twitter'></i>
</a>
<a href='' className='social-icon me-4 text-reset'>
  <i className='fab fa-google'></i>
</a>
<a href='' className='social-icon me-4 text-reset'>
  <i className='fab fa-instagram'></i>
</a>
<a href='' className='social-icon me-4 text-reset'>
  <i className='fab fa-linkedin'></i>
</a>
<a href='' className='social-icon me-4 text-reset'>
  <i className='fab fa-github'></i>
</a>

        </div>
      </section>

      {/* Footer Content Section */}
      <section className='footer-content'>
        
        <div className='container'>
          
          <div className='row'>
          <img  src={brandData.logo1} alt={brandData.name}></img>
            <div className='col-md-3 col-lg-4 col-xl-3'>
          
              <p>
                Where Logistics Meet innovation
              </p>
            </div>

            <div className='col-md-2 col-lg-2 col-xl-2'>
              <h4 className='footer-title'>Company</h4>
              <p>
                <a href='#!' className='footer-link'>
                  Angular
                </a>
              </p>
              <p>
                <a href='#!' className='footer-link'>
                  React
                </a>
              </p>
              <p>
                <a href='#!' className='footer-link'>
                  Vue
                </a>
              </p>
              <p>
                <a href='#!' className='footer-link'>
                  Laravel
                </a>
              </p>
            </div>

            <div className='col-md-3 col-lg-2 col-xl-2'>
              <h4 className='footer-title'>Useful links</h4>
              <p>
                <a href='#!' className='footer-link'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='footer-link'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='footer-link'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='footer-link'>
                  Help
                </a>
              </p>
            </div>

            <div className='col-md-4 col-lg-3 col-xl-3'>
              <h4 className='footer-title'>Contact</h4>
              <p>
                <i className='icon-home'></i>
                New York, NY 10012, US
              </p>
              <p>
                <i className='icon-envelope'></i>
                info@example.com
              </p>
              <p>
                <i className='icon-phone'></i>
                + 01 234 567 88
              </p>
              <p>
                <i className='icon-print'></i>
                + 01 234 567 89
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className='footer-bottom'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 text-center'>
              <p className='footer-bottom-text'>
                © 2023 Gatividhi transsolutions pvt. ltd. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

