import React from 'react'

// components
import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import Services from '@/components/services'
import Team from '@/components/team'
import MobileApp from '@/components/mobile-application'
import Tools from '@/components/tools'
import Clients from '@/components/clients'
import Portfolio from '@/components/portfolio'
import HowWeWork from '@/components/how-we-work'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

// data
import { mobil_data, erp_data, design_data, optimization_data, consulting_data, delever_data, sms_uz_data, goodzone_data, iman_data } from '@/static'
import Chat from '@/components/chat'



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
         <Clients/>
         <Portfolio data = { delever_data }/>
         <Portfolio data = { sms_uz_data }/>
         <Portfolio data = { goodzone_data }/>
         <Portfolio data = { iman_data }/>
         <HowWeWork/>
         <Contact/>
         <Footer/>
         <Chat/>
    </>
  )
}

export default Home