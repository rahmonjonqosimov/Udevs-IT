'use client'
import Image from 'next/image'
import React, { useEffect } from 'react'

import { IconsSchema, PortfolioBoxSchema } from '@/static/types'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Portfolio:React.FC< { data:PortfolioBoxSchema } > = ( { data } ) => {

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,     
    });
  }, []);

  const iconItems:JSX.Element[] = data.icons.map((icon: IconsSchema, inx:number) => (

    <div className="icon__card" key={inx}>

        <Image alt='Logo' src={icon.img_icon} width={24} height={24}/>
        <span>{icon.title_icon}</span>

    </div>

)) 

  return (
    <div className={`portfolio-section ${data.classList}`} id={data.id}>
      <div className="container">

        <div className="portfolio__hero">
        <Image alt='Logo' width={ 200 } height={ 50 } src={data.logo}   layout="intrinsic"/>

       <span style={{ backgroundColor: data.color[0], color: data.color[1], width:data.width}}> <Image alt='icon' src={data.icon} width={25} height={25} /> {data.title}</span>
        </div>

          <div className="portfolio__box">

              <div className="portfolio-img">

                    <Image data-aos={data.aos[1]} alt='Img' width={ 547 } height={ 407 } src={data.img}/>

              </div>

              <div data-aos={data.aos[0]} className="box__content">
                
                  <p>{data.desc}</p>

                  <h4>What we did?</h4>

                  <div className="icon__wrapper"> { iconItems } </div>   

              </div>

          </div>

      </div>
    </div>
  )
}

export default Portfolio