import React from 'react'
import { brandData } from '../../data/global/brandData'
import { btnData, menuData, socialData } from '../../data/global/menuData'
import { FooterData, Usefullinks } from '../../data/Home/footerSectiondata'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import './services.css'
import  Servicesdata  from '../../data/Home/servicesdata'
import { heroData } from '../../data/Home/HeroSectionData'

/* <div className="trans-solutions">
      <h2>Services Offered</h2>
      {Servicesdata.map((service, index) => (
        <div className="service" key={index}>
          <div className="service-icon">{service.icon}</div>
          <img src={service.image} alt={service.title} />
          <div className="service-details">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        </div>
      ))}
    </div> */


function Services() {
  return (
    <>
        <Header 
    brandData={brandData}
    menuData={menuData}
    btnData={btnData}
    socialData={socialData}
    style={{top:"10rem"}}
    />
      <div className="services-container">
  <h1 style={{ textAlign: 'center' }}>Gatividhi Transport Solutions Services</h1>
  {Servicesdata.map(service => (
    <div className="service-indivisual" key={service.title} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2 style={{ textAlign: 'center',marginTop:"3rem" }}>{service.title}</h2>
      <img src={service.image} alt={service.title} />
      <p className="centered-text" style={{ textAlign: 'center' }}>{service.description}</p>
      <h4 style={{ textAlign: 'center',marginTop:"2rem" }}>Key Features</h4>
      <div className="feature-cards" style={{ display: 'flex', justifyContent: 'center' }}>
        {service.features.map((feature, index) => (
          <div className="feature-card" key={index} style={{ textAlign: 'center', margin: '10px' }}>
            <img src={feature.image} alt={feature.description} />
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  ))}
</div>

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

export default Services