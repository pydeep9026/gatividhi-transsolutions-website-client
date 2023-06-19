import React from 'react'
import { brandData } from '../../data/global/brandData'
import { btnData, menuData, socialData } from '../../data/global/menuData'
import { FooterData, Usefullinks } from '../../data/Home/footerSectiondata'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import './contact.css'
import Button from '../../components/Button/Button'
import addresscontact from '../../assets/images/addresscontact.png'
import phonecontact from '../../assets/images/phonecontact.png'
import emailcontact from '../../assets/images/emailcontact.png'
import supportcontact from '../../assets/images/supportcontact.png'
import { color } from 'echarts'
import {toast,Toaster} from 'react-hot-toast'
import { Link } from 'react-router-dom'

function Contact() {

  const submitform = (event) => {
     event.preventDefault();
  

    const fullName = event.target.fullname.value;
    const email = event.target.email.value;
    const message = event.target.message.value;
  

    let isValid = true;
  
    if (fullName.trim() === '') {
      isValid = false;
    }
  
    if (email.trim() === '' || !validateEmail(email)) {
      isValid = false;

    }
  
    if (message.trim() === '') {
      isValid = false;
      
    }
  
    if (isValid) {
      
      toast.error('this feature is still in development');
    } else {
      toast.error('Please fill in all required fields correctly');
    }
  };
  

  const validateEmail = (email) => {
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return emailRegex.test(email);
  };
  

  return (
    <>
    <Toaster />
        <Header 
    brandData={brandData}
    menuData={menuData}
    btnData={btnData}
    socialData={socialData}
    style={{top:"10rem"}}
    />
         <div className="contact-page">
      <header className="contact-header">
        <h2>Contact Gatividhi TransSolutions pvt. ltd.</h2>
        <p className="HeroContentText">Please note that any information shared is kept confidential and used solely for communication purposes.</p>
      </header>
      <div className="contact-content">
        <h2 className="subheader">Contact Information</h2>
        <p className="HeroContentText"> Our contact information is provided to assist you in reaching out to us. We strive to respond promptly and provide the best possible assistance</p>
        <div className="contact-details">
          <div className="contact-box">
            <img src={addresscontact} alt="address" />
            <h3 className="box-heading">Address</h3>
            <a href='https://goo.gl/maps/iza3omvnL3V21LAh8'><p style={{color:"#0154A0",textDecoration:"underline"}}>{FooterData.address}</p></a>
          </div>
          <div className="contact-box">
            <img src={phonecontact} alt="phone" />
            <h3 className="box-heading">Phone</h3>
            <a href="tel:+919026003602"><p style={{color:"#0154A0",textDecoration:"underline"}}>{FooterData.phone1}</p></a>
          </div>
          <div className="contact-box">
            <img src={emailcontact} alt="email" />
            <h3 className="box-heading">Email</h3>
            <a href="mailto:support@gatividhits.com?subject=Inquiry%20about%20Transport%20Services&body=Dear%20Gatividhi%20Transsolution%20Pvt%20Ltd,%0D%0AI%20am%20reaching%20out%20to%20you%20regarding%20your%20transport%20services.%0D%0AI%20would%20like%20to%20inquire%20about%20the%20following:%0D%0A%0D%0A-%20Types%20of%20transport%20services%20you%20offer%0D%0A-%20Availability%20of%20transport%20routes%20and%20destinations%0D%0A-%20Pricing%20and%20payment%20options%0D%0A-%20Any%20additional%20services%20or%20features%20you%20provide%0D%0A%0D%0APlease%20provide%20me%20with%20the%20relevant%20information%20so%20that%20I%20can%20make%20an%20informed%20decision.%0D%0AThank%20you%20for%20your%20assistance.%0D%0A%0D%0ABest%20regards,%0D%0A[Your%20Name]"><p style={{color:"#0154A0",textDecoration:"underline"}}>{FooterData.email}</p></a>
          </div>
          <div className="contact-box">
            <img src={supportcontact} alt="support" />
            <h3 className="box-heading">Customer Support</h3>
            <a href="tel:+919026003602"><p style={{color:"#0154A0",textDecoration:"underline"}}>{FooterData.phone2}</p></a>
          </div>
        </div>
      </div>
      <div className="contact-form">
        <h2 className="subheader">Contact Us</h2>
        <p className="HeroContentText">Provide your name, email address, and a message, and we will respond to you as soon as possible.</p>
        <form  onSubmit={submitform}>
          <div className="form-group">
            <input type="text" placeholder='fullname' name="fullname" />
          </div>
          <div className="form-group">
            <input placeholder='email' type="email" name="email" />
          </div>
          <div className="form-group">
            <textarea placeholder='message' name="message"></textarea>
          </div>
          <Button type="submit" className="submit-button">
            Submit
          </Button>
        </form>
      </div>
      <h4 className="HeroContentHeader">Share Your Thoughts</h4>
            <p className="HeroContentText">Choose the Appropriate Option Below to File a Complaint, Provide Feedback, or Make a General Inquiry
</p>
      <div className="contact-buttons">
        <Link to="https://form.typeform.com/to/ThXDQ2j7">
        <Button primary blocked spaced className="complaint-button">Complaint</Button></Link>
        <Link to="https://form.typeform.com/to/DDBKQLyv">
        <Button blocked  secondary spaced className="feedback-button">Provide Feedback</Button></Link>
        <Link to="/getquote">
        <Button blocked  secondary spaced className="enquiry-button">General Inquiry</Button></Link>
      </div>
    </div>

        <Footer
    brandData={brandData}
    menuData={menuData}
    btnData={btnData}
    socialData={socialData}
    footerData={FooterData}
    Usefullinks={Usefullinks}
    />
        </>
  )
}

export default Contact