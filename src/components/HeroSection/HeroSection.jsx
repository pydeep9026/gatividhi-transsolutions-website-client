import React from "react";
import Button from "../Button/Button";
import {
  HeroContainer,
  HeroWrap,
  HeroContent,
  HeroContentHeader,
  HeroContentText,
  HeroButton,
  HeroImageWrap,
  HeroImage,
} from "./HeroSectionStyles";

const HeroSection = ({ heroData }) => {
  return (
    <>
      <HeroContainer>
        <HeroWrap>
          <HeroContent>
            <HeroContentHeader>{heroData.header}</HeroContentHeader>
            <HeroContentText>{heroData.subheader}</HeroContentText>
            <HeroButton>
              <Button blocked spaced>{heroData.button1.text}</Button>
              <Button blocked spaced secondary>{heroData.button2.text}</Button>
            </HeroButton>
          </HeroContent>
          <HeroImageWrap>
            <HeroImage src={heroData.image}  alt={heroData.imageAlt}/>
          </HeroImageWrap>
        </HeroWrap>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
