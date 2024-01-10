import React from 'react'
import './style.css'
import HeroSection from './Features/heroSection'
import OurServices from './Features/ourServices'
import WhoAreWe from './Features/whoAreWe'
import CompanyAuthority from './Features/companyAuthority'
import OurClients from './Features/ourClients'
import QuickService from './Features/QuickService'

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <OurServices />
      <WhoAreWe />
      <CompanyAuthority />
      <OurClients />
      <QuickService />
    </div>
  )
}

export default HomePage