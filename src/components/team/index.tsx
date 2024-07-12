import React from 'react'

// image
import { team_img } from '@/assets'
import Image from 'next/image'

const Team:React.FC = () => {
  return (
    <div className='team-section' id='command'>
        <div className="container">

                <h1 className='team__title'>Team</h1>

                <div className="team__box">

                        <div className="box__text">

                                <p>For each project, we form a team that includes a project manager, business analyst, UI / UX designer, DevOps, QA engineer, backend and front-end developers.</p>

                                <span>100+</span>

                                <h4>Dedicated team</h4>

                        </div>

                        <div className="team-img">

                                <Image alt='Logo' src={team_img} width={500} height={419} quality={100} />

                        </div>

                </div>


        </div>
    </div>
  )
}

export default Team