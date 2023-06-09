import React, { useState, useEffect } from "react";
import {
  HeaderContainer,
  HeaderWrap,
  HeaderLogo,
  Logo,
  MobileNav,
  HeaderNav,
  NavItems,
  NavItem,
  NavCtaDesktop,
  NavCtaMobile,
  HeaderSocial,
  HeaderSocialItem,
  Social
} from "./HeaderStyles";
import Button from "../Button/Button";

const Header = ({brandData, menuData, btnData, socialData}) => {
  const [navToggle, setNavToggle] = useState(false);

  //TODO: Handle mobile nav toggle
  const handleNavToggle = () => {
    setNavToggle(!navToggle);
  };

  //TODO: Prevent page scroll when mobile nav is open (true)
  useEffect(() => {
    if (navToggle === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  });

  return (
    <>
      <HeaderContainer>
        <HeaderWrap>
          <HeaderLogo to="/">
            <Logo
              src={brandData.logo1}
              alt={brandData.name}
            ></Logo>
          </HeaderLogo>
          <MobileNav navToggle={navToggle}>
            <button onClick={handleNavToggle}>
              {navToggle ? (
                <i className="fas fa-times"></i>
              ) : (
                <i className="fas fa-bars"></i>
              )}
            </button>
          </MobileNav>
          <HeaderNav navToggle={navToggle}>
            <NavItems>
              {menuData.map((menu) => {
                return (
                  <NavItem to={menu.link} key={menu.id}>
                    {menu.title}
                  </NavItem>
                );
              })}
            </NavItems>
            <NavCtaDesktop>
              <Button primary>{btnData.title}</Button>
            </NavCtaDesktop>
            <NavCtaMobile>
              <Button outline blocked>
                {btnData.title}
              </Button>
            </NavCtaMobile>
            <HeaderSocial>
              {socialData.map((social) => {
                return (
                  <HeaderSocialItem key={social.id} to={social.link}>
                    <Social src={social.image} alt={social.title}></Social>
                  </HeaderSocialItem>
                );
              })}
            </HeaderSocial>
          </HeaderNav>
        </HeaderWrap>
      </HeaderContainer>
    </>
  );
};

export default Header;
