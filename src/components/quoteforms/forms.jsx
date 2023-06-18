
import React, { useEffect, useState } from 'react';
import './forms.css';
import Button from '../Button/Button';
import { Toaster,toast } from 'react-hot-toast';
import commercialmoving from "../../assets/images/commercialmoving.png";
import domesticmoving from "../../assets/images/domesticmoving.png";
import officemoving from "../../assets/images/officemoving.png";

const   Forms = () => {
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    setSelectedOption('commercial');
  }, []);

  const showForm = (option) => {
    setSelectedOption(option);
  };

  const submitform = (event) => {
    event.preventDefault(); 
    const fullName = event.target.elements.fullName.value;
    const email = event.target.elements.email.value;
    const from = event.target.elements.from.value;
    const to = event.target.elements.to.value;
    const date = event.target.elements.date.value;
  
    const currentDate = new Date();
    const selectedDate = new Date(date);
  
    if (selectedDate < currentDate) {
      toast.error("Please select a date that is today or in the future");
      return;
    }
  
    if (fullName.trim() === "") {
      toast.error("Please enter your full name");
      return;
    }
  
    if (!isValidEmail(email)) {
      toast.error("Please enter a valid email address");
      return;
    }
  
    if (from.trim() === "") {
      toast.error("Please enter the 'From' location");
      return;
    }
  
    if (to.trim() === "") {
      toast.error("Please enter the 'To' location");
      return;
    }
  
    
    toast.success("Form submitted successfully");
  };
  
  const isValidEmail = (email) => {
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  

  const renderForm = () => {
    switch (selectedOption) {
      case 'commercial':
        return (
          <form onSubmit={submitform} className={selectedOption === 'commercial' ? 'visible' : 'hidden'}>
  <h2>Commercial Moving quote</h2>
  <input type="text" name="fullName" placeholder="Full Name"  />
  <input type="email" name="email" placeholder="Email"  />
  <input type="text" name="from" placeholder="From"  />
  <input type="text" name="to" placeholder="To"  />
  <input type="date" name="date" placeholder="Date"  />
  <Button blocked spaced>Submit</Button>
</form>
        );
      case 'domestic':
        return (<>
          <h4 >Coming Soon</h4>
          <p > Stay tuned as we bring you our comprehensive domestic moving services soon.</p>
          </>
        );
      case 'office':
        return (
          <>
          <h4 >Coming Soon</h4>
          <p > Stay tuned as we bring you our comprehensive office moving services soon.</p>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div id='services' className="quotes">
      <Toaster />
      <h2 className="feature-header">Free Moving Quotes</h2>
          <p className="feature-sub-header">Take the stress out of your move. Get free quotes and find the most affordable price for your shifting needs today</p>
      <nav>
  <ul>
    <li
      className={selectedOption === 'commercial' ? 'selected' : ''}
      onClick={() => showForm('commercial')}
    >
      <a ><img src={commercialmoving} alt="fdf" ></img>Commercial Moving</a>
    </li>
    <li
      className={selectedOption === 'domestic' ? 'selected' : ''}
      onClick={() => showForm('domestic')}
    >
      <a ><img src={domesticmoving} alt="fdf"></img>Domestic Moving</a>
    </li>
    <li
      className={selectedOption === 'office' ? 'selected' : ''}
      onClick={() => showForm('office')}
    >
      <a ><img src={officemoving} alt="fdf" ></img>Office Moving</a>
    </li>
  </ul>
</nav>
      <div id="formContainer">{renderForm()}</div>
    </div>
  );
};

export default Forms;
