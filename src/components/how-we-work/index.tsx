'use client'
import React, { useEffect } from 'react'

// data
import { work_data } from '@/static'
import { WorkShcema } from '@/static/types'
import Image from 'next/image'

import dot from '@/assets/images/work/dot.svg'

import AOS from 'aos';
import 'aos/dist/aos.css';



const HowWeWork:React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,     
    });
  }, []);

  const item:JSX.Element[] = work_data.map((element:WorkShcema) => (
    <div data-aos="fade-up" className="card" key={element.id}>

      <Image alt={element.title} src={element.img} width={80} height={80}/>

     <div> 
      
        <h3>{element.title}</h3>

        <p>{element.desc}</p>
        
    </div>

    </div>
  ))

  return (
    <div className='how-we-work-section'>
      <div className="container">
        
        <h1 data-aos="fade-up" className='how-we-work__title'>How we work!</h1>

        <Image alt='Dot' src={dot} width={100} height={100} className='dot'/>

        <div className="wrapper"> { item } </div>

    
      </div>
    </div>
  )
}

export default HowWeWork