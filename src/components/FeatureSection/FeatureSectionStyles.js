import styled from "styled-components";
import { QUERIES } from "../../helpers/MediaQueries";
import featureBackground from "../../assets/images/bg-pattern.svg";

export const FeatureContainer = styled.section`
  max-width: 100%;
  min-height: 0rem;
  padding: 4rem 1rem 2rem 1rem;
  background-image: url(${featureBackground});
  background-repeat: no-repeat;
  background-size: 55.0625rem 11.6875rem;
  background-position: -20rem 29rem;

  @media ${QUERIES.mobile} {
    background-size: 36.0625rem 12.6875rem;
    background-position: -15rem 33rem;
  }

  @media ${QUERIES.tabletMini} {
    background-size: 42.5rem auto;
    background-position: -15rem 31rem;
  }

  @media ${QUERIES.tablet} {
    background-size: 62.5rem 22rem;
    background-position: -30rem 26rem;
  }

  @media ${QUERIES.megaDesktop} {
    background-image: none;
  }
`;
export const FeatureWrap = styled.div`
  max-width: var(--max-container);
  min-height: 30rem;
  margin: var(--center-container);
  text-align: center;
`;

export const FeatureHeader = styled.h2`
  margin: 1rem;
`;
export const FeatureSubHeader = styled.p`
  max-width: 33.8125rem;
  margin: var(--center-container);
`;

export const FeatureTabs = styled.div`
  max-width: 45.62rem;
  min-height: 4rem;
  margin: var(--center-container);
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  border-bottom: 0.1rem solid transparent;
  border-top: 0.1rem solid var(--color-sec-400);

  @media ${QUERIES.mobile} {
    flex-direction: row;
    border-top: 0.1rem solid transparent;
    border-bottom: 0.1rem solid var(--color-sec-400);
  }

  & > * {
    flex: 1;
  }
`;
export const FeatureTab = styled.button`
  min-height: 3.75rem;
  background-color: transparent;
  border: none;
  border-bottom: 0.2rem solid transparent;
  cursor: pointer;
  font-size: 1rem;
  line-height: 1.5rem;
  border-bottom: ${({ clicked, index }) =>
    clicked === index
      ? "0.2rem solid var(--color-pry-300)"
      : "0.1rem solid var(--color-sec-400)"};

  @media ${QUERIES.tablet} {
    border-bottom: ${({ clicked, index }) =>
      clicked === index
        ? "0.2rem solid var(--color-pry-300)"
        : "0.1rem solid transparent"};
  }
`;

export const FeatureContentWrap = styled.div`
  max-width: 100%;
  min-height: 7rem;
  margin: 2rem 0rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  display: ${({ clicked, index }) => (clicked === index ? "flex" : "none")};

  & > * {
    flex: 1;
    padding: 1rem;
  }

  @media ${QUERIES.tablet} {
    flex-direction: row;
    text-align: left;
    margin: 4rem 0rem;
  }
`;

export const FeatureImageWrap = styled.div`
  
`
export const FeatureImage = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
`;
export const FeatureContent = styled.div`
  @media ${QUERIES.tablet} {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
`;
export const FeatureContentInner = styled.div`
  max-width: 27.8125rem;
  margin-top: 2rem;

  @media ${QUERIES.tablet} {
    margin-top: 0rem;
  }
`;
export const FeatureContentHeader = styled.h3`
  font-size: 1.5rem;
  line-height: 1.75rem;
  font-weight: var(--font-weight-200);

  @media ${QUERIES.tabletMini} {
    font-size: 2rem;
    line-height: 2.5rem;
  }
`;
export const FeatureContentSubHeader = styled.p`
  margin: 1rem 0rem;
`;
