import React from 'react'
import { brandData } from '../../data/global/brandData'
import { btnData, menuData, socialData } from '../../data/global/menuData'
import { FooterData, Usefullinks } from '../../data/Home/footerSectiondata'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import './contact.css'
import Button from '../../components/Button/Button'

function Contact() {
  return (
    <>
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
            <h3 className="box-heading">Address</h3>
            <p>{FooterData.address}</p>
          </div>
          <div className="contact-box">
            <h3 className="box-heading">Phone</h3>
            <p>{FooterData.phone1}</p>
          </div>
          <div className="contact-box">
            <h3 className="box-heading">Email</h3>
            <p>{FooterData.email}</p>
          </div>
          <div className="contact-box">
            <h3 className="box-heading">Customer Support</h3>
            <p>{FooterData.phone2}</p>
          </div>
        </div>
      </div>
      <div className="contact-form">
        <h2 className="subheader">Contact Us</h2>
        <p className="HeroContentText">Provide your name, email address, and a message, and we will respond to you as soon as possible.</p>
        <form>
          <div className="form-group">
            <label htmlFor="fullname">Full Name</label>
            <input type="text" id="fullname" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message"></textarea>
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
        <Button primary blocked spaced className="complaint-button">Complaint</Button>
        <Button blocked  secondary spaced className="feedback-button">Provide Feedback</Button>
        <Button blocked  secondary spaced className="enquiry-button">General Inquiry</Button>
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