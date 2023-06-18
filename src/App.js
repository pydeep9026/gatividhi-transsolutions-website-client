import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home/Home";
import Getquote from "./pages/getquote/Getquote";
import { GlobalStyles } from "./styles/GlobalStyles";
import Payment from "./pages/payment/payment";
import Services from "./pages/services/services";
import Contact from "./pages/contact/contact";
import { Toaster,toast } from "react-hot-toast";

const App = () => {

  useEffect(() => {
    document.addEventListener('contextmenu', handleContextMenu);
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    }
  }, []);
  const handleContextMenu = (event) => {
    event.preventDefault();
    toast.error("right disabled due to security reasons");
  }

  return (<>
  <Toaster/>
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

