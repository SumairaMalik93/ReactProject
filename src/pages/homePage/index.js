import React from 'react'
import './style.css'
import HeroSection from './Features/heroSection'
import OurServices from './Features/ourServices'
import WhoAreWe from './Features/whoAreWe'
import CompanyAuthority from './Features/companyAuthority'

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <OurServices />
      <WhoAreWe />
      <CompanyAuthority />
    </div>
  )
}

export default HomePage