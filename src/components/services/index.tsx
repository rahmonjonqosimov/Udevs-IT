'use client'
import Image from 'next/image'
import React, { useEffect } from 'react'

import { service_data } from '@/static'
import { ServiceCardItemSchema } from '@/static/types'

import AOS from 'aos';
import 'aos/dist/aos.css';

const Services:React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,     
    });
  }, []);

const cardItem = service_data.map((element:ServiceCardItemSchema) => (

     <div  data-aos="fade-up" key={element.id} className="service__card">

            <Image alt={element.title} src={element.img} width={35} height={35} />
            <p>{element.title}</p>

     </div>

))

  return (
    <div className='services-section' id='direction'>
        <div className="container">

                <h1  data-aos="fade-up" className='servivce__title'>Our services</h1>

                <div className="service__wrapper"> { cardItem } </div>

        </div>
    </div>
  )
}

export default Services