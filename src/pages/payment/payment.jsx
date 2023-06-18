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
import toast, { Toaster } from 'react-hot-toast';
import { AiOutlineComment } from 'react-icons/ai';



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
    if(numberType === '') {
      toast.error('Please select a payment reference number type');
      return;
    }
    else if(number === '') {
      toast.error('Please enter a payment reference number');
    }
    /*navigate(`/payment?numberType=${numberType}&number=${number}`);*/
    else{
    toast.error('this payment reference number does not exist');
    }
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
        <div className="container">

        <h2 className="HeroContentHeader">Seamless Payment Experience</h2>
        <p className="HeroContentText">Follow our simple steps to ensure a smooth payment experience.</p>
        <h4>Step 1: provide payment reference number</h4>
        <p>Enter your Goods Consignment Number, Goods Receipt Number, or E-Way Bill Number to fetch your consignment details.</p>
      <form onSubmit={handleSubmit} style={{marginTop:"2rem"}}>
        <h4 style={{marginBottom:"2rem"}}>fetch your consignment details</h4>
        <label htmlFor="numberType">Payment Reference Number Type:</label>
        <select id="numberType" value={numberType} onChange={handleNumberTypeChange}>
          <option value="">Select Number Type</option>
          <option value="consignment">Consignment No</option>
          <option value="goodsreceipt">Goods Receipt No</option>
          <option value="waybill">Waybill No</option>
        </select>
        
        <input type="text" id="number" placeholder='payment reference number' value={number} onChange={handleNumberChange} />
        <Button type="submit">Submit</Button>
      </form>
      <img src={paymentprocess} alt="paymentprocess" style={{width:"100%",marginTop:"2.5rem"}}/>
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