import React from 'react'
import { brandData } from '../../data/global/brandData'
import { btnData, menuData, socialData } from '../../data/global/menuData'
import { FooterData, Usefullinks } from '../../data/Home/footerSectiondata'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import './services.css'
import  Servicesdata  from '../../data/Home/servicesdata'
import { heroData } from '../../data/Home/HeroSectionData'
import Button from '../../components/Button/Button'
import { Link } from 'react-router-dom'

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
  <h2 style={{ textAlign: 'center' }}>Gatividhi Transport Solutions Services</h2>
  <p className="HeroContentText">Our company provides a range of transport solutions services to cater to the diverse needs of our clients.</p>
  {Servicesdata.map(service => (
    <div className="service-indivisual" key={service.title} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h4 style={{ textAlign: 'center',marginTop:"3rem",fontSize:"1.7rem" }}>{service.title}</h4>
      <img src={service.image} alt={service.title} />
      <p className="centered-text" style={{ textAlign: 'center' }}>{service.description}</p>
      <Link to="/getquote">
      <Button>Get Quote</Button>
        </Link>
      <h5 style={{ textAlign: 'center',marginTop:"1rem" }}>Key Features</h5>
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