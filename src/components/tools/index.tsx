'use client'
import React, { useState } from 'react'

// data
import { tools_data } from '@/static'
import Image from 'next/image';
import { ToolsSchema } from '@/static/types';

const Tools:React.FC = () => {
    const [value, setValue] = useState<string>("")

    const toolsItem = tools_data?.map((item: ToolsSchema) => (

        <div
         className={`tools__card ${item.category.split("/").join("")} ${value.trim() ?  value !== item.category ? "no-active" : "":""}`}
         key={item.id}>

             <Image src={item.img} alt={item.title} width={24} height={24}/>
             <span>{item.title}</span>

        </div>

    ))

    const handleChange:(e: React.ChangeEvent<HTMLInputElement>) => void = (e) => {
        setValue(e.target.value)
    }

    console.log(value);
    
    
  return (
    <div className='tools-section' id='tools'>
        <div className="container">

                <h1 className='tools__title'>Tools</h1>

                <div className="tools__radio__wrapper">

                    <label htmlFor="radio-1">

                        <input type="radio" id='radio-1' name='tools' value={"Frontend"}  checked={value === 'Frontend'} onChange={handleChange}/>
                        <span>Frontend</span>
                        
                    </label>

                    <label htmlFor="radio-2">

                        <input value={"Backend"}  checked={value === 'Backend'} onChange={handleChange} type="radio" id='radio-2'  name='tools'/>
                        <span>Backend</span>

                    </label>

                    <label htmlFor="radio-3">

                        <input value={"Devops"}  checked={value === 'Devops'} onChange={handleChange} type="radio" id='radio-3' name='tools' />
                        <span>Devops</span>

                    </label>

                    <label htmlFor="radio-4">

                        <input value={"Testing"}  checked={value === 'Testing'} onChange={handleChange} type="radio" id='radio-4' name='tools' />
                        <span>Testing</span>

                    </label>

                    <label htmlFor="radio-5">

                        <input value={"UX/UI"}  checked={value === 'UX/UI'} onChange={handleChange} type="radio" id='radio-5' name='tools' />
                        <span>UX/UI</span>

                    </label>

                    <label htmlFor="radio-6">

                        <input value={"Infrastructure"}  checked={value === 'Infrastructure'} onChange={handleChange} type="radio" id='radio-6' name='tools' />
                        <span>Infrastructure</span>

                    </label>

                    <label htmlFor="radio-7">

                        <input value={"Mobile"}  checked={value === 'Mobile'} onChange={handleChange} type="radio" id='radio-7' name='tools' />
                        <span>Mobile</span>

                    </label>

                </div>

                <div className="tools__wrapper"> { toolsItem } </div>

        </div>
    </div>
  )
}

export default Tools