import React from "react";
import Button from "../Button/Button";
import heroBackground from "../../assets/images/bg-pattern.svg";
import { QUERIES } from "../../helpers/MediaQueries";
import "./HeroSection.css";

const HeroSection = ({ heroData }) => {
  return (
    <>
      <section className="HeroContainer">
        <div className="HeroWrap">
          <div className="HeroContent">
            <h1 className="HeroContentHeader">{heroData.header}</h1>
            <p className="HeroContentText">{heroData.subheader}</p>
            <div className="HeroButton">
              <Button blocked spaced>{heroData.button1.text}</Button>
              <Button blocked spaced secondary>{heroData.button2.text}</Button>
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
