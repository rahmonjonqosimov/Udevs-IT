'use client'
import { IconsSchema, MobileBoxSchema } from '@/static/types'
import Image from 'next/image'
import React, { useEffect } from 'react'

import AOS from 'aos';
import 'aos/dist/aos.css';

const MobileApp:React.FC<{ mobil_data:MobileBoxSchema }> = ( { mobil_data } ) => {

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,     
    });
  }, []);


const iconItems:JSX.Element[] = mobil_data.icons.map((icon: IconsSchema, inx:number) => (

        <div className="icon__card" key={inx}>

            <Image alt='Logo' src={icon.img_icon} width={24} height={24}/>
            <span>{icon.title_icon}</span>

        </div>

)) 
const technologItems:JSX.Element[] = mobil_data.technologies_wrapper.map((technology: IconsSchema, inx:number) => (

          <div className="technologies__card" key={inx}>

               <Image alt='Logo' src={technology.img_icon} width={24} height={24}/>
               <p>{ technology.title_icon }</p>

          </div>

)) 

  return (
    <div className={`mobile-app-section ${mobil_data.className}`} id={mobil_data.url}>
        <div className="container">

                <h1 className="mobile-app__title">{mobil_data.title}</h1>

                <div className="mobile__box">

                            <div data-aos={mobil_data.aos[0]} className="box__content">

                                     <p>{mobil_data.desc}</p>

                                     <div className="icon__wrapper"> { iconItems } </div>   
                                    
                              {

                                    mobil_data.technologies && 
                                    <>
                                          <h4>Technologies</h4>

                                          <div className="technologies__wrapper"> { technologItems } </div>
                                    </>

                              }
                                    

                            </div>

                            <div   className="box-img">

                                        <Image data-aos={mobil_data.aos[1]} alt='Logo' src={mobil_data.img} width={500} height={419} />

                            </div>

                </div>

                

        </div>
    </div>
  )
}

export default MobileApp