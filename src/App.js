import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home/Home";
import Getquote from "./pages/getquote/Getquote";
import { GlobalStyles } from "./styles/GlobalStyles";
import Payment from "./pages/payment/payment";
import Services from "./pages/services/services";
import Contact from "./pages/contact/contact";

const App = () => {
  return (<>
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

