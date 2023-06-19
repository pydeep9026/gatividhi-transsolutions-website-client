import React, { useState, useEffect } from "react";
import Button from "../../components/Button/Button";
import "./faq.css"

const FaqSection = ({ faqData }) => {
  const [clicked, setClicked] = useState(false);

  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };

  useEffect(() => {
    const getLocalAccordion = localStorage.getItem("localAccordion");
    setClicked(JSON.parse(getLocalAccordion));
  }, []);

  useEffect(() => {
    localStorage.setItem("localAccordion", JSON.stringify(clicked));
  });

  return (
    <>
      <section className="FaqContainer">
        <div className="FaqWrap">
          <h2 className="FaqHeader">{faqData.heading}</h2>
          <p className="FaqSubHeader">{faqData.subHeading}</p>
          <div className="Faq">
            {faqData.faqs.map((faq, index) => {
              const iconColor = clicked === index ? "#0154A0" : "#D52D27";
              return (
                <div className="FaqItemWrap" key={index} id={index}>
                  <div
                    className="FaqQuestionWrap"
                    onClick={() => {
                      handleToggle(index);
                    }}
                  >
                    <h5 className="FaqQuestion">{faq.question}</h5>
                    <div
                      className="FaqIcon"
                      index={index}
                      clicked={clicked}
                      style={{ color: iconColor }}
                    >
                      {clicked === index ? (
                        <i className="fas fa-chevron-up"></i>
                      ) : (
                        <i className="fas fa-chevron-down"></i>
                      )}
                    </div>
                  </div>
                  {clicked === index ? (
                    <div className="FaqAnswerWrap" clicked index>
                      <p className="FaqAnswer">{faq.answer}</p>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqSection;
