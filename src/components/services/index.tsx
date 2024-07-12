import Image from 'next/image'
import React from 'react'

import { service_data } from '@/static'
import { ServiceCardItemSchema } from '@/static/types'

const Services:React.FC = () => {

const cardItem = service_data.map((element:ServiceCardItemSchema) => (

     <div key={element.id} className="service__card">

            <Image alt={element.title} src={element.img} width={35} height={35} />
            <p>{element.title}</p>

     </div>

))

  return (
    <div className='services-section' id='direction'>
        <div className="container">

                <h1 className='servivce__title'>Our services</h1>

                <div className="service__wrapper"> { cardItem } </div>

        </div>
    </div>
  )
}

export default Services