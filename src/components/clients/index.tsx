import Image from 'next/image'
import React from 'react'
import {akfa, space, delever_client, fonon, hamkorbank, hoshimov, maxtrack, shef, my_taxt, workley, z, good, sms_uz} from '@/assets'

const Clients: React.FC = () => {

  return (
    <div className='clients-section' id='clients'>
       <div className="container">

            <h1 className='clients__title'>Our clients</h1>

       </div>


            <div className="animate">

                     <div className="anim__wrapper">

                         <div className="anim__item">
                              <Image alt='Akfa' src={akfa} width={213} height={126} className='anim__img'/>
                         </div>
                         <div className="anim__item">
                                <Image alt='Space' src={space} width={213} height={126} className='anim__img'/>
                         </div>
                         <div className="anim__item">
                                <Image alt='Delever' src={delever_client} width={213} height={126} className='anim__img'/>
                         </div>
                         <div className="anim__item">
                                <Image alt='Fonon' src={fonon} width={213} height={126} className='anim__img'/>
                         </div>
                         <div className="anim__item">
                                <Image alt='Hamkorbank' src={hamkorbank} width={213} height={126} className='anim__img'/>
                         </div>
                         <div className="anim__item">
                                <Image alt='Hoshimov' src={hoshimov} width={213} height={126} className='anim__img'/>
                         </div>


                     </div>
                     

            </div>

            <div className="animate animate2">

                     <div className="anim__wrapper">

                        <div className="anim__item">
                             <Image alt='maxtrack' src={maxtrack} width={213} height={126} className='anim__img'/>
                        </div>
                        <div className="anim__item">
                             <Image alt='shef' src={shef} width={213} height={126} className='anim__img'/>
                        </div>
                        <div className="anim__item">
                              <Image alt='my_taxi' src={my_taxt} width={213} height={126} className='anim__img'/>
                        </div>
                        <div className="anim__item">
                               <Image alt='workley' src={workley} width={213} height={126} className='anim__img'/>
                        </div>
                        <div className="anim__item">
                                <Image alt='z' src={z} width={213} height={126} className='anim__img'/>
                        </div>
                        <div className="anim__item">
                                <Image alt='goodzone' src={good} width={213} height={126} className='anim__img'/>
                        </div>
                        <div className="anim__item">
                                <Image alt='smsuz' src={sms_uz} width={213} height={126} className='anim__img'/>
                        </div>
                        

                     </div>

            </div>

    </div>
  )
}

export default Clients