import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home/Home";
import Getquote from "./pages/getquote/Getquote";
import { GlobalStyles } from "./styles/GlobalStyles";
import Payment from "./pages/payment/payment";
import Services from "./pages/services/services";
import Contact from "./pages/contact/contact";
import { Toaster,toast } from "react-hot-toast";
import { AiOutlineComment } from "react-icons/ai";

const App = () => {

  const handleClick = () => {
    window.open('https://form.typeform.com/to/DDBKQLyv', '_blank');
  };

  useEffect(() => {
    document.addEventListener('contextmenu', handleContextMenu);
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    }
  }, []);
  const handleContextMenu = (event) => {
    event.preventDefault();
    toast.error("right click disabled due to security reasons");
  }

  return (<>
  <Toaster/>
  <button onClick={handleClick} className="feedback-button">
      feedback
      <AiOutlineComment />
    </button>
          <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/getquote" element={<Getquote/>} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
     
      </>
  );
};

export default App;

