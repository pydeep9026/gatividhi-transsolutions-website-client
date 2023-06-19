import React, { useState, useEffect } from "react";
import Button from "../Button/Button";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = ({ brandData, menuData, btnData, socialData }) => {
  const [navToggle, setNavToggle] = useState(false);


  const handleNavToggle = () => {
    setNavToggle(!navToggle);
  };


  useEffect(() => {
    if (navToggle === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  });

  return (
    <>
      <header className="header-container">
        <div className="header-wrap">
          <Link to="/" className="header-logo">
            <img src={brandData.logo1} alt={brandData.name} className="logo" />
          </Link>
          <div className={`mobile-nav ${navToggle ? "active" : ""}`}>
            <button onClick={handleNavToggle}>
              {navToggle ? (
                <i className="fas fa-times"></i>
              ) : (
                <i className="fas fa-bars"></i>
              )}
            </button>
          </div>
          <nav className={`header-nav ${navToggle ? "active" : ""}`}>
            <div className="nav-items">
              {menuData.map((menu) => {
                return (
                  <Link to={menu.link} key={menu.id} className="nav-item">
                    {menu.title}
                  </Link>
                );
              })}
            </div>
            <div className="nav-cta-desktop">
            <Link to="/getquote">
              <Button  primary>{btnData.title}</Button>
              </Link>
            </div>
            <div className="nav-cta-mobile">
            <Link to="/getquote">
              <Button outline blocked>
                {btnData.title}
              </Button>
              </Link>
            </div>
            <div className="header-social">
              {socialData.map((social) => {
                return (
                  <Link
                    to={social.link}
                    key={social.id}
                    className="header-social-item"
                  >
                    <img src={social.image} alt={social.title} className="social" />
                  </Link>
                );
              })}
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
