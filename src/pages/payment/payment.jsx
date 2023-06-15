import React from 'react'
import { brandData } from '../../data/global/brandData'
import { btnData, menuData, socialData } from '../../data/global/menuData'
import { FooterData, Usefullinks } from '../../data/Home/footerSectiondata'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

function Payment() {
  return (
    <>
        <Header 
    brandData={brandData}
    menuData={menuData}
    btnData={btnData}
    socialData={socialData}
    style={{top:"10rem"}}
    />
        Payment
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

export default Payment