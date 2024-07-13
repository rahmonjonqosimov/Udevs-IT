'use client'
import React, { useEffect, useState } from 'react'

// images
import { logo, mobile_application, consulting, design , erp, optimization,delever, goodzone, iman, sms } from '@/assets/index' 
import Link from 'next/link'
import Image from 'next/image'

// react-icons
import { IoIosArrowDown } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";




const Navbar:React.FC = () => {

  const [open, setOpen] = useState<boolean>(false)

  useEffect(() => {

   document.body.style.overflow  = open ? 'hidden' : 'auto'
   
  }, [open])



  return (

    <>
    <div className='navbar-section'>

        <div className="container">

          <nav className='navbar'>

            <Link href='#' className='nav__logo'>
                    <Image alt='Logo' src={logo} width={96} height={32}/>
            </Link>

            <ul className={`nav__items ${open ? 'navbar__open' : ''}`}>
                 <li  className='nav__item'>
                      <Link href='#direction'>Direction</Link>
                 </li>
                 <li onClick={() => setOpen(false)} className='nav__item'>
                      <Link href='#command'>Command</Link>
                 </li>
                 <li onClick={() => setOpen(false)} className='nav__item nav__item-service'>
                      <Link href='#mobile-application'>Services  <IoIosArrowDown/> </Link>
                      <div className="nav__service-wrapper">
                        <h2 className='nav__service-title'>Services</h2>
                        <Link href='#mobile-application' className="nav__service-box">
                            <Image alt='Logo' src={mobile_application} width={24} height={24}/>
                            <p>Development of mobile applications</p>
                        </Link>
                        <Link href='#erp' className="nav__service-box">
                            <Image alt='Logo' src={erp} width={24} height={24}/>
                            <p>Development and implementation ERP systems</p>
                        </Link>
                        <Link href='#design' className="nav__service-box">
                            <Image alt='Logo' src={design} width={24} height={24}/>
                            <p>User interface, User experience design</p>
                        </Link>
                        <Link href='#consulting' className="nav__service-box">
                            <Image alt='Logo' src={consulting} width={24} height={24}/>
                            <p>IT consulting</p>
                        </Link>
                        <Link href='#optimization' className="nav__service-box">
                        <Image alt='Logo' src={optimization} width={24} height={24}/>
                            <p>Optimization IT consulting infrastructure</p>
                        </Link>
                      </div>
                 </li>
                 <li className='nav__item'>
                      <Link href='#tools'>Tools</Link>
                 </li>
                 <li onClick={() => setOpen(false)} className='nav__item'>
                      <Link href='#clients'>Clilents</Link>
                 </li>
                 <li className='nav__item nav__item-portfolio' >
                      <Link href='#portfolio' >Portfolio <IoIosArrowDown/> </Link>
                      <div className="nav__service-wrapper">
                        <h2 className='nav__service-title'>Portfolio</h2>
                        <Link href='#delever' className="nav__service-box">
                            <Image alt='Logo' src={delever} width={24} height={24}/>
                            <p>Delever</p>
                        </Link>
                        <Link href='#sms' className="nav__service-box">
                            <Image alt='Logo' src={sms} width={24} height={24}/>
                            <p>Sms.uz</p>
                        </Link>
                        <Link href='#goodzone' className="nav__service-box">
                            <Image alt='Logo' src={goodzone} width={24} height={24}/>
                            <p>Goodzone</p>
                        </Link>
                        <Link href='#iman' className="nav__service-box">
                            <Image alt='Logo' src={iman} width={24} height={24}/>
                            <p>Iman</p>
                        </Link>
                        
                      </div>
                 </li>
                 <li className='nav__item nav__item-language'>
                      <Link href='#language'>Language <IoIosArrowDown/> </Link>
                 </li>
                 <li onClick={() => setOpen(false)} className='nav__item nav__item-contact'>
                      <Link href='#contact'>Contact</Link>
                 </li>
            </ul>

            <div onClick={() => setOpen(( p:boolean ) => !p )}  className="menu">
              {
                open ? <AiOutlineClose/> :     <FiMenu/>
              }
          
            </div>

          </nav>

        </div>

    </div>
    {
      open && <div onClick={() => setOpen(false)} className="owerlay"></div>
    }
    </>

  )
}

export default Navbar