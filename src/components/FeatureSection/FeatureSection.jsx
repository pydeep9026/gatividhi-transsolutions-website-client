import React, { useState } from "react";
import Button from "../Button/Button";
import "./FeatureSection.css";
import { Link } from "react-router-dom";

const FeatureSection = ({ featureData }) => {
  const [clicked, setClicked] = useState(0);

  const handleClick = (index) => {
    setClicked(index);
  };

  return (
    <>
      <section className="feature-container">
        <div className="feature-wrap">
          <h2 className="feature-header">{featureData.header}</h2>
          <p className="feature-sub-header">{featureData.subHeader}</p>
          <div className="feature-tabs">
            {featureData.featureTitles.map((title, index) => (
              <button
                key={index}
                className={`feature-tab ${clicked === index ? "active" : ""}`}
                onClick={() => handleClick(index)}
              >
                {title}
              </button>
            ))}
          </div>

          {featureData.featureContent.map((feature, index) => (
            <div
              key={index}
              className={`feature-content-wrap ${
                clicked === index ? "active" : ""
              }`}
            >
              <div className="feature-image-wrap">
                <img
                  className="feature-image"
                  src={feature.image}
                  alt={feature.imageAlt}
                />
              </div>
              <div className="feature-content">
                <div className="feature-content-inner">
                  <h3 className="feature-content-header">{feature.title}</h3>
                  <p className="feature-content-sub-header">
                    {feature.description}
                  </p>
                  <Link to={feature.btnLink}>
                  <Button>{feature.btnText}</Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default FeatureSection;
