import React from "react";
import Button from "../Button/Button";
import "./HeroSection.css";
import { Link,useNavigate } from "react-router-dom";

const HeroSection = ({ heroData }) => {


  return (
    <>
      <section className="HeroContainer">
        <div className="HeroWrap">
          <div className="HeroContent">
            <h1 className="HeroContentHeader">{heroData.header}</h1>
            <p className="HeroContentText">{heroData.subheader}</p>
            <div className="HeroButton">
              <Link to="/getquote">
              <Button    blocked spaced>{heroData.button1.text}</Button></Link>
              <Link to="/services">
              <Button blocked spaced secondary>{heroData.button2.text}</Button></Link>
            </div>
          </div>
          <div className="HeroImageWrap">
            <img
              className="HeroImage"
              src={heroData.image}
              alt={heroData.imageAlt}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
