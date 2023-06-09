import React from "react";
import Header from "../../components/Header/Header";
import HeroSection from "../../components/HeroSection/HeroSection";
import FeatureSection from "../../components/FeatureSection/FeatureSection";
import FaqSection from "../../components/FaqSection/FaqSection";
import Footer from "../../components/Footer/Footer";
import { Main } from "../../styles/GlobalStyles";
import { heroData } from "../../data/Home/HeroSectionData";
import { brandData } from "../../data/global/brandData";
import { menuData, btnData, socialData } from "../../data/global/menuData";
import { faqData } from "../../data/Home/FaqSectionData";
import { featureData } from "../../data/Home/FeatureSectionData";

const Home = () => {
  return (
    <>
      <Header
        brandData={brandData}
        menuData={menuData}
        btnData={btnData}
        socialData={socialData}
      />
      <Main>
        <HeroSection heroData={heroData} />
        <FeatureSection featureData={featureData} />
        <FaqSection faqData={faqData} />
      </Main>
      <Footer
        brandData={brandData}
        menuData={menuData}
        btnData={btnData}
        socialData={socialData}
      />
    </>
  )
}

export default Home;