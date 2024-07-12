'use client'
import React from 'react'
import { hero_logo, hero_img } from '@/assets'
import Image from 'next/image'
import Link from 'next/link'

import { TypeAnimation } from 'react-type-animation';

const Hero:React.FC = () => {
  return (
    <div className='hero-section'>
        <div className="container">

                <div className="hero__box">

                            <div className="hero__text">

                                <Image alt='Logo' src={hero_logo} width={267} height={89}/>
                                <h1>IT-Outsourcing Company</h1>
                                
                                <TypeAnimation
                                   sequence={[ 'User interface, User experience design', 1000 , 'Optimization IT consulting infrastructure', 1000, "Development of mobile applications", 1000, "Development and implementation ERP systems", 1000 ]}
                                    wrapper="span"
                                    speed={5}
                                    style={{ fontSize: '40px', display: 'block', color: "#1B5BF7", fontWeight:"bold", marginBottom: '24px' }}
                                   repeat={Infinity}
                                />


                               <Link href='#contact'>
                                     <button>Contact </button>
                               </Link>

                            </div>

                            <Image alt='Hero img' src={hero_img} width={547} height={414} />
                        
                </div>

        </div>
    </div>
  )
}

export default Hero