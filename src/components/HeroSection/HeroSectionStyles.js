import styled from "styled-components";
import heroBackground from "../../assets/images/bg-pattern.svg";
import { QUERIES } from "../../helpers/MediaQueries";

export const HeroContainer = styled.section`
  max-width: 100%;
  min-height: 0rem;
  background-image: url(${heroBackground});
  background-repeat: no-repeat;
  background-size: 30.375rem 12.6875rem;
  background-position: 3rem 6.5rem;

  @media screen and (min-width: 486px) {
    background-size: 42.5rem 22rem;
    background-position: 5rem 3.5rem;
  }

  @media ${QUERIES.mobile} {
    background-size:62.5rem 22rem;
    background-position: 5rem 6.5rem;
  }

  @media ${QUERIES.tabletMini} {
    background-position: 14rem 10.5rem;
  }

  @media ${QUERIES.tablet} {
    padding: 1rem;
    background-size: 62.5rem 22rem;
    background-position: 38rem 12.5rem;
  }

  @media ${QUERIES.desktop} {
    background-position: 50rem 12.5rem;
  }
  @media ${QUERIES.megaDesktop} {
    background-image: none;
  }
`;

export const HeroWrap = styled.div`
  max-width: var(--max-container);
  margin: var(--center-container);
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media ${QUERIES.tablet} {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    text-align: left;

    & > * {
      flex: 1;
    }
  }
`;

export const HeroContent = styled.div`
  min-height: 15.93rem;
  max-width: 33.75rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0rem 1rem;

  @media ${QUERIES.tablet} {
    padding: 0rem;
  }
`;

export const HeroContentHeader = styled.h1``;

export const HeroContentText = styled.p`
  margin: 1rem 0rem;

  @media ${QUERIES.tablet} {
    margin: 1.5rem 0rem;
  }
`;

export const HeroButton = styled.div`
  display: flex;

  & > * {
    margin: 0.3rem;
  }

  @media ${QUERIES.tablet} {
    max-width: 21.4375rem;

    & > * {
      margin: 0rem;
      margin-right: 0.3rem;
    }
  }
`;

export const HeroImageWrap = styled.div`
  min-height: 20.93rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${QUERIES.mobile} {
    min-height: 30.93rem;
  }
  @media ${QUERIES.tabletMini} {
    min-height: 35.93rem;
  }
  @media ${QUERIES.tablet} {
    min-height: 35.93rem;
    display: grid;
    place-items: center;
  }
`;

export const HeroImage = styled.img`
  @media ${QUERIES.desktop} {
    transform: translateX(3rem) translateY(2rem);
  }
`;
