import styled, { css } from "styled-components";

export const CustomButton = styled.button`
  background-color:  #0154A0;
  color: var(--color-pry-100);
  border-radius: var(--border-radius);
  cursor: pointer;
  font-size: 0.8125rem;
  font-weight: 500;
  font-family: var(--font-pry-100);
  line-height: 0rem;
  padding: 1.1rem 2.1rem;
  border: 0.15rem solid  #0154A0;
  box-shadow: 0rem 0rem 0.5rem hsla(0, 0%, 0%, 0.247);

  &:hover {
    transition: 0.25s ease-in-out;
    background-color: transparent;
    color:  #0154A0;
  }

  ${({ primary }) =>
    primary &&
    css`
      background-color: var(--color-pry-300);
      border-color: var(--color-pry-300);

      &:hover {
        color: var(--color-pry-300);
      }
    `}

  ${({ blocked }) =>
    blocked &&
    css`
      display: block;
      width: 100%;
    `}

    ${({ outline }) =>
    outline &&
    css`
      background-color: transparent;
      border-color: var(--color-pry-100);
      color: var(--color-pry-100);
      font-size: 0.9rem;

      &:hover {
        transition: 0.25s ease-in-out;
        background-color: var(--color-pry-100);
        color: hsla(229, 31%, 21%, 0.951);
      }
    `}

    ${({ hoverPrimary }) =>
    hoverPrimary &&
    css`
      &:hover {
        background-color: var(--color-pry-100);
        border-color: var(--color-pry-300);
        color: var(--color-pry-300);
      }
    `}

    ${({ spaced }) =>
    spaced &&
    css`
      padding: 1.1rem 0rem;
    `}

    ${({ secondary }) =>
    secondary &&
    css`
      background-color: var(--color-pry-100);
      color: var(--color-sec-100);
      border-color: var(--color-pry-100);

      &:hover {
        background-color: var(--color-pry-100);
        border-color:  #0154A0;
        color:  #0154A0;
      }
    `}
`;
