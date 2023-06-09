import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  max-width: 100%;
  min-height: 0rem;
  margin: -2.7em 1rem 0rem 1rem;
`;

export const HeaderWrap = styled.div`
  background-color: var(--color-pry-100);
  max-width: var(--max-container);
  min-height: 3.125rem;
  margin: var(--center-container);
  display: flex;
  align-items: center;
`;

export const HeaderLogo = styled(Link)`
  img {
    max-width: 7.3125rem;
    height: auto;
    position: relative;
    z-index: 1000;
  }
`;

export const Logo = styled.img``;

export const MobileNav = styled.div`
  display: none;

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    position: relative;
    z-index: 1000;
  }
  i {
    font-size: 1.4rem;
    color: ${({ navToggle }) => (navToggle ? "var(--color-pry-100)" : "black")};
  }

  @media screen and (max-width: 786px) {
    flex: 1;
    display: flex;
    justify-content: flex-end;
  }
`;

export const HeaderNav = styled.nav`
  flex: 10;
  display: flex;
  align-items: center;

  & > * {
    flex: 1;
  }

  @media screen and (max-width: 786px) {
    flex-direction: column;
    background-color: hsla(229, 31%, 21%, 0.951);
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 100vh;
    display: ${({ navToggle }) => (navToggle ? "flex" : "none")};
  }
`;

export const NavItems = styled.div`
  flex: 10;
  display: flex;
  justify-content: flex-end;

  @media screen and (max-width: 786px) {
    flex: 1;
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 7rem;
  }
`;

export const NavItem = styled(Link)`
  margin-right: 3rem;
  text-transform: uppercase;

  @media screen and (max-width: 786px) {
    margin-right: 0rem;
    text-align: center;
    border-top: 0.1rem solid hsl(0, 0%, 59%);
    padding: 1rem 0rem;
    margin: 0rem 1rem;
    color: var(--color-pry-100);
  }
`;

export const NavCtaDesktop = styled.div`
  text-transform: uppercase;
  button {
    width: 100%;
    margin-right: 1.8rem;
    background-color: #D52D27;
    border: 2px solid #D52D27;
  }
  @media screen and (max-width: 786px) {
    display: none;
  }
`;

export const NavCtaMobile = styled.div`
  display: none;
  button {
    text-transform: uppercase;
  }

  @media screen and (max-width: 786px) {
    flex: 10;
    margin: 1rem;
    width: 100%;
    display: block;
    padding: 0rem 1rem;
  }
`;

export const HeaderSocial = styled.div`
  display: none;
  @media screen and (max-width: 786px) {
    display: flex;
  }
`;

export const HeaderSocialItem = styled(Link)`
  margin: 1rem;
`;

export const Social = styled.img``;
