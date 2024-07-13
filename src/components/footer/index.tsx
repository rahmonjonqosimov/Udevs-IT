import React from 'react'
import Image from 'next/image'

// images 
import { logo } from '@/assets'
import { BiLogoInstagram, BiLogoTwitter, BiLogoYoutube } from 'react-icons/bi'

interface Schema {
    id:number,
    title:string,
    links:{
        url:string,
        title:string
    }[]
}

const Footer:React.FC = () => {
    
const footerItem:Schema[] = [
    {
        id: 1,
        links: [
            {
                url: '#direction',
                title:"Direction"
            },
            {
                url: '#command',
                title:"Command"
            },
            {
                url: '#tools',
                title:"Tools"
            },
            {
                url: '#clients',
                title:"Clients"
            },
        ],
        title: "About us"
    },
    {
        id: 2,
        links: [
            {
                url: '#mobile-application',
                title:"Development of mobile applications"
            },
            {
                url: '#erp',
                title:"Development and implementation ERP systems"
            },
            {
                url: '#design',
                title:"User interface, User experience design"
            },
            {
                url: '#consulting',
                title:"IT consulting"
            },
            {
                url: '#optimization',
                title:"Optimization IT consulting infrastructure"
            },
        ],
        title: "Services"
    },
    {
        id: 3,
        links: [
            {
                url: '#delever',
                title:"Delever"
            },
            {
                url: '#sms',
                title:"Sms.uz"
            },
            {
                url: '#goodzone',
                title:"Goodzone"
            },
            {
                url: '#iman',
                title:"Iman"
            },
        ],
        title: "Portfolio"
    },
]

const item : JSX.Element[] = footerItem.map((item) => (
    <div className="footer__item" key={item.id}>
        <h3>{item.title}</h3>
        <ul>
            {item.links.map((link) => (
                <li key={link.url}>
                    <a href={link.url}>{link.title}</a>
                </li>
            ))}
        </ul>
    </div>
))

  return (
    <div className='footer-section'>
        <div className="container">
          <Image alt='Logo' src={logo} width={106} height={36} className='footer-logo' />
          <div className="footer__wrapper"> { item } </div>
          <div className="line"></div>
          <div className="bottom__footer">
            <p>© 2024 Udevs. All rights reserved</p>
            <div className="links">
                <a href='/' className="link">
                    <BiLogoInstagram/>
                </a>
                <a href="/" className="link">
                    <BiLogoTwitter/>
                </a>
                <a href="/ " className="link">
                    <BiLogoYoutube/>
                </a>
            
            </div>
          </div>
        </div>
    </div>
  )
}

export default Footer