import React, { useState } from "react";
import {
  FeatureContainer,
  FeatureWrap,
  FeatureHeader,
  FeatureSubHeader,
  FeatureTabs,
  FeatureTab,
  FeatureContentWrap,
  FeatureImageWrap,
  FeatureImage,
  FeatureContent,
  FeatureContentInner,
  FeatureContentHeader,
  FeatureContentSubHeader,
} from "./FeatureSectionStyles";
import Button from "../Button/Button";

const FeatureSection = ({ featureData }) => {
  const [clicked, setClicked] = useState(0);

  //TODO: Handle tab click event to extract index and update state
  const handleClick = (index) => {
    setClicked(index);
  };

  return (
    <>
      <FeatureContainer>
        <FeatureWrap>
          <FeatureHeader>{featureData.header}</FeatureHeader>
          <FeatureSubHeader>{featureData.subHeader}</FeatureSubHeader>
          <FeatureTabs>
            {featureData.featureTitles.map((title, index) => {
              return (
                <FeatureTab
                  key={index}
                  onClick={() => {
                    handleClick(index);
                  }}
                  clicked={clicked}
                  index={index}
                >
                  {title}
                </FeatureTab>
              );
            })}
          </FeatureTabs>

          {featureData.featureContent.map((feature, index) => {
            return (
              <FeatureContentWrap key={index} index={index} clicked={clicked}>
                <FeatureImageWrap>
                  <FeatureImage
                    src={feature.image}
                    alt={feature.imageAlt}
                  ></FeatureImage>
                </FeatureImageWrap>
                <FeatureContent>
                  <FeatureContentInner>
                    <FeatureContentHeader>{feature.title}</FeatureContentHeader>
                    <FeatureContentSubHeader>
                      {feature.description}
                    </FeatureContentSubHeader>
                    <Button>{feature.btnText}</Button>
                  </FeatureContentInner>
                </FeatureContent>
              </FeatureContentWrap>
            );
          })}
        </FeatureWrap>
      </FeatureContainer>
    </>
  );
};

export default FeatureSection;
