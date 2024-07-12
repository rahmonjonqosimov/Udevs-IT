import React from 'react'

// components
import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import Services from '@/components/services'
import Team from '@/components/team'
import MobileApp from '@/components/mobile-application'
import Tools from '@/components/tools'

// data
import { mobil_data, erp_data, design_data, optimization_data, consulting_data } from '@/static'

const Home:React.FC = () => {
  return (
    <>
         <Navbar/>
         <Hero/>
         <Services/>
         <Team/>
         <MobileApp mobil_data = { mobil_data }/>
         <MobileApp mobil_data = { erp_data }/>
         <MobileApp mobil_data = { design_data }/>
         <MobileApp mobil_data = { optimization_data }/>
         <MobileApp mobil_data = { consulting_data }/>
         <Tools/>
    </>
  )
}

export default Home