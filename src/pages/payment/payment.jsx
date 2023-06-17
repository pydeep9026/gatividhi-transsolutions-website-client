import React, { useState } from 'react'
import { brandData } from '../../data/global/brandData'
import { btnData, menuData, socialData } from '../../data/global/menuData'
import { FooterData, Usefullinks } from '../../data/Home/footerSectiondata'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { useNavigate } from 'react-router'
import './payment.css'
import Button from '../../components/Button/Button'
import paymentData from '../../data/Home/paymentdata'
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import logoPrimary from "../../assets/images/gatividhi.png";
import paymentprocess from "../../assets/images/paymentprocess.png";



function Payment() {

  const navigate = useNavigate();
  const [numberType, setNumberType] = useState('');
  const [number, setNumber] = useState('');

  const handleNumberTypeChange = (event) => {
    setNumberType(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Redirect to payment gateway using the submitted number
    /*navigate(`/payment?numberType=${numberType}&number=${number}`);*/
  };




  return (
    <>
        <Header 
    brandData={brandData}
    menuData={menuData}
    btnData={btnData}
    socialData={socialData}
    style={{top:"10rem"}}
    />
        <div className="container">

        <h2 className="HeroContentHeader">Seamless Payment Experience</h2>
        <p className="HeroContentText">Swiftly complete your payment on our transport solutions website by entering your Goods Consignment Number, Goods Receipt Number, or E-Way Bill Number. Follow our simple steps to ensure a smooth payment experience.</p>
        <ProgressBar
  filledBackground="linear-gradient(to right, #0154A0, #D52D27)"
  percent={25}
>
  <Step transition="scale">
    {({ accomplished, index }) => (
      <div
        className={`transitionStep ${accomplished ? "accomplished" : null}`}
      >
      </div>
    )}
  </Step>
  <Step transition="scale">
    {({ accomplished, index }) => (
      <div
        className={`transitionStep ${accomplished ? "accomplished" : null}`}
      >
        <img src={logoPrimary} alt="logo" style={{width:"4rem"}}/>
      </div>
    )}
  </Step>
  <Step transition="scale">
    {({ accomplished, index }) => (
      <div
        className={`transitionStep ${accomplished ? "accomplished" : null}`}
      >
        <img src={logoPrimary} alt="logo" style={{width:"4rem"}}/>
      </div>
    )}
  </Step>
  <Step transition="scale">
    {({ accomplished, index }) => (
      <div
        className={`transitionStep ${accomplished ? "accomplished" : null}`}
      >
       <img src={logoPrimary} alt="logo" style={{width:"4rem"}}/>
      </div>
    )}
  </Step>
  <Step transition="scale">
    {({ accomplished, index }) => (
      <div
        className={`transitionStep ${accomplished ? "accomplished" : null}`}
      >
       <img src={logoPrimary} alt="logo" style={{width:"4rem"}}/>
      </div>
    )}
  </Step>
</ProgressBar>
      <form onSubmit={handleSubmit} style={{marginTop:"4rem"}}>
        <label htmlFor="numberType">Number Type:</label>
        <select id="numberType" value={numberType} onChange={handleNumberTypeChange}>
          <option value="">Select Number Type</option>
          <option value="consignment">Consignment No</option>
          <option value="goodsreceipt">Goods Receipt No</option>
          <option value="waybill">Waybill No</option>
        </select>
        <label htmlFor="number">Number:</label>
        <input type="text" id="number" value={number} onChange={handleNumberChange} />
        <Button type="submit">Submit</Button>
      </form>
      <img src={paymentprocess} alt="paymentprocess" style={{width:"100%",marginTop:"4rem"}}/>
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

export default Payment