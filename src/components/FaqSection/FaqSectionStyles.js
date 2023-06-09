import styled from "styled-components";
import { QUERIES } from "../../helpers/MediaQueries";

export const FaqContainer = styled.section`
  max-width: 100%;
  min-height: 0rem;
  margin: 4rem 0rem;
  padding: 0rem 1rem;
`;

export const FaqWrap = styled.div`
  max-width: var(--max-container);
  min-height: 20rem;
  margin: var(--center-container);
  text-align: center;
`;

export const FaqHeader = styled.h2`
  margin: 1rem;
`;

export const FaqSubHeader = styled.p`
  max-width: 33.8125rem;
  margin: var(--center-container);
`;

export const Faq = styled.div`
  max-width: 33.8125rem;
  margin: var(--center-container);
  margin-top: 2rem;
  margin-bottom: 2rem;
  text-align: left;
  border-top: 0.1rem solid var(--color-sec-400);

  @media ${QUERIES.tabletMini} {
    margin-top: 4rem;
    margin-bottom: 4rem;
  }
`;

export const FaqItemWrap = styled.div`
  min-height: 4.6875rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 0.1rem solid var(--color-sec-400);
`;

export const FaqQuestionWrap = styled.div`
  min-height: 4.6875rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  & > * {
    flex: 1;
  }
`;

export const FaqQuestion = styled.h5`
  flex: 10;
`;

export const FaqIcon = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  i {
    color: ${({ clicked, index }) =>
      clicked === index ? "#0154A0" : "#D52D27"};
  }
`;

export const FaqAnswerWrap = styled.div`
  margin: 1rem 0rem;
`;

export const FaqAnswer = styled.p``;

export const FaqButton = styled.div``;
