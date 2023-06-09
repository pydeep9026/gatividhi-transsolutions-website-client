import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home/Home";
import { GlobalStyles } from "./styles/GlobalStyles";

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Home />
    </Router>
  );
};

export default App;
