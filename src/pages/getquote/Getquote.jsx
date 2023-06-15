import React from 'react'
import Forms from '../../components/quoteforms/forms'
import Header from '../../components/Header/Header'
import { brandData } from "../../data/global/brandData";
import {menuData, btnData, socialData } from "../../data/global/menuData";
import Footer from '../../components/Footer/Footer';
import { FooterData } from "../../data/Home/footerSectiondata";
import { Usefullinks } from "../../data/Home/footerSectiondata";

function Getquote() {
  return (<>
    <Header 
    brandData={brandData}
    menuData={menuData}
    btnData={btnData}
    socialData={socialData}
    style={{top:"10rem"}}
    />
    <Forms />
    <div style={{height:"9vh"}}></div>
    <Footer
    brandData={brandData}
    menuData={menuData}
    btnData={btnData}
    socialData={socialData}
    footerData={FooterData}
    Usefullinks={Usefullinks}
    />
    </>
  )
}

export default Getquote