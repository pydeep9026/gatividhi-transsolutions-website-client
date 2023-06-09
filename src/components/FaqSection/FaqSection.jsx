import React, { useState, useEffect } from "react";
import {
  FaqContainer,
  FaqWrap,
  FaqHeader,
  FaqSubHeader,
  Faq,
  FaqItemWrap,
  FaqQuestionWrap,
  FaqQuestion,
  FaqIcon,
  FaqAnswer,
  FaqAnswerWrap,
  FaqButton,
} from "./FaqSectionStyles";
import Button from "../../components/Button/Button";

const FaqSection = ({ faqData }) => {
  const [clicked, setClicked] = useState(false);

  //TODO: Handle accordion toggle effect (extract index and update state)
  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };

  //TODO: Get last accordion state from localStorage
  useEffect(() => {
    const getLocalAccordion = localStorage.getItem("localAccordion");
    setClicked(JSON.parse(getLocalAccordion));
  }, []);

  //TODO: push recent accordion state to localStorage
  useEffect(() => {
    localStorage.setItem("localAccordion", JSON.stringify(clicked));
  });

  return (
    <>
      <FaqContainer>
        <FaqWrap>
          <FaqHeader>{faqData.heading}</FaqHeader>
          <FaqSubHeader>{faqData.subHeading}</FaqSubHeader>
          <Faq>
            {faqData.faqs.map((faq, index) => {
              return (
                <FaqItemWrap key={index} id={index}>
                  <FaqQuestionWrap
                    onClick={() => {
                      handleToggle(index);
                    }}
                  >
                    <FaqQuestion>{faq.question}</FaqQuestion>
                    <FaqIcon index={index} clicked={clicked}>
                      {clicked === index ? (
                        <i className="fas fa-chevron-up"></i>
                      ) : (
                        <i className="fas fa-chevron-down"></i>
                      )}
                    </FaqIcon>
                  </FaqQuestionWrap>
                  {clicked === index ? (
                    <FaqAnswerWrap clicked index>
                      <FaqAnswer>{faq.answer}</FaqAnswer>
                    </FaqAnswerWrap>
                  ) : null}
                </FaqItemWrap>
              );
            })}
          </Faq>
        </FaqWrap>
      </FaqContainer>
    </>
  );
};

export default FaqSection;
