
import React, { useEffect, useState } from 'react';
import './forms.css';
import Button from '../Button/Button';

const   Forms = () => {
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    setSelectedOption('commercial');
  }, []);

  const showForm = (option) => {
    setSelectedOption(option);
  };

  const renderForm = () => {
    switch (selectedOption) {
      case 'commercial':
        return (
          <form className={selectedOption === 'commercial' ? 'visible' : 'hidden'}>
            <h2>Commercial Moving quote</h2>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email" required />
            <input type="text" placeholder="From" required />
            <input type="text" placeholder="To" required />
            <input type="date" placeholder="Date" required />
            <Button blocked spaced >Submit</Button>
          </form>
        );
      case 'domestic':
        return (
          <form className={selectedOption === 'domestic' ? 'visible' : 'hidden'}>
            <h2>Domestic Moving Form</h2>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email" required />
            <input type="text" placeholder="From" required />
            <input type="text" placeholder="To" required />
            <input type="date" placeholder="Date" required />
          </form>
        );
      case 'office':
        return (
          <form className={selectedOption === 'office' ? 'visible' : 'hidden'}>
            <h2>Office Moving Form</h2>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email" required />
            <input type="text" placeholder="From" required />
            <input type="text" placeholder="To" required />
            <input type="date" placeholder="Date" required />
          </form>
        );
      default:
        return null;
    }
  };

  return (
    <div className="quotes">
      <h2 className="feature-header">Free Moving Quotes</h2>
          <p className="feature-sub-header">Take the stress out of your move. Get free quotes and find the most affordable price for your shifting needs today</p>
      <nav>
  <ul>
    <li
      className={selectedOption === 'commercial' ? 'selected' : ''}
      onClick={() => showForm('commercial')}
    >
      <a >Commercial Moving</a>
    </li>
    <li
      className={selectedOption === 'domestic' ? 'selected' : ''}
      onClick={() => showForm('domestic')}
    >
      <a >Domestic Moving</a>
    </li>
    <li
      className={selectedOption === 'office' ? 'selected' : ''}
      onClick={() => showForm('office')}
    >
      <a >Office Moving</a>
    </li>
  </ul>
</nav>
      <div id="formContainer">{renderForm()}</div>
    </div>
  );
};

export default Forms;
