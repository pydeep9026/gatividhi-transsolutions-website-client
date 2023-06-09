import styled from "styled-components";
import { QUERIES } from "../../helpers/MediaQueries";

export const CtaContainer = styled.section`
  max-width: 100%;
  min-height: 0rem;
  padding: 0rem 1rem;
  background-color: var(--color-pry-200);
`;
export const CtaWrap = styled.div`
  max-width: var(--max-container);
  min-height: 22.5rem;
  margin: var(--center-container);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const CtaSubHeader = styled.h3`
  color: var(--color-pry-100);
  text-transform: uppercase;
  letter-spacing: 0.2rem;
`;
export const CtaHeader = styled.h2`
  color: var(--color-pry-100);
  margin: 1rem 0rem;
  max-width: 27.75rem;

  @media ${QUERIES.tablet} {
    margin: 1.5rem 0rem;
  }
`;
export const Form = styled.form`
  max-width: 27.75rem;
  width: 100%;
  display: flex;
  flex-direction: column;

  @media ${QUERIES.desktop} {
    flex-direction: row;

    & > * {
      flex: 1;
    }
  }
`;
export const FormInputWrap = styled.div`
  margin: 1rem 0rem;

  @media ${QUERIES.desktop} {
    margin: 0rem;
    margin-right: 1rem;
    flex: 2;
  }
`;
export const EmailInput = styled.input`
  width: 100%;
  height: 2.3rem;
  border: 0.15rem solid
    ${({ error }) => (error ? "var(--color-pry-100)" : "var(--color-pry-300)")};
  border-radius: ${({ error }) =>
    error ? "0.3125rem" : "0.3125rem 0.3125rem 0rem 0rem"};
  padding-left: 1rem;
  color: #242a45;
  position: relative;
`;

export const EmailError = styled.p`
  background-color: var(--color-pry-300);
  border-radius: 0rem 0rem 0.3125rem 0.3125rem;
  font-size: 0.625rem;
  padding: 0.5rem 1rem;
  text-align: left;
  color: var(--color-pry-100);
  display: ${({ error }) => (error ? "none" : "block")};
`;
export const FormButtonWrap = styled.div``;
