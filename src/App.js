import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home/Home";
import Getquote from "./pages/Home/Getquote";
import { GlobalStyles } from "./styles/GlobalStyles";

const App = () => {
  return (<>
          <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/getquote" element={<Getquote/>} />
      </Routes>
      </>
  );
};

export default App;

