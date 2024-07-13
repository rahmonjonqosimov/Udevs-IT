'use client'
import React, {  FormEvent, useState } from 'react'

// icons
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { IoClose, IoSend  } from "react-icons/io5";
import { FaCircle } from "react-icons/fa";
import LocalImage from './LocalImage';
import { RiLinksFill } from "react-icons/ri";





const Chat:React.FC = () => {
    const [menu, setMenu] = useState<boolean>(false)
    const [file, setFile] = useState<any>(null)
    const [value, setValue] = useState<string>('');
    const [message , setMessage] = useState<string[]>([]);

    const handleSubmit:( e:FormEvent< HTMLFormElement > ) => void = (e) => {
        e.preventDefault()
        setMessage((p:string[]) => ([...p, value]))
        setValue("")
    }

  return (
    <div className='chat-section'>
       <div onClick={() => setMenu(true)} className="chat__logo">
          <IoChatbubbleEllipsesOutline/>
       </div>
       <div className={ `chat__wrapper ${menu ? "show" : ""}` }>
          <IoClose onClick={() => setMenu(false)} className="close__chat"/>
            <div className="chat__hero">
                <h1>Re:</h1>
                <span>
                    <p>Udevs</p>
                    <span> <FaCircle/> Welcome</span>
                </span>
            </div>
            <div className="line"></div>
           <div className="chat__body">
                  
                    {
                        message?.map((item:string, index:number) => (
                            <p className='message__text' key={index}>{item}</p>
                        ))
                    }
                      <LocalImage file={file} setFile={setFile} />
           </div>
            <div className="form">

            <form onSubmit={handleSubmit} action="" className='chat__form'>
                <textarea value={value} onChange={(e) => setValue(e.target.value)} name="" id="" placeholder='Message...'></textarea>
                <button><IoSend/></button>
            </form>

            <label htmlFor="file__input" className="file">
                        <input
                          accept="image/*"
                          id="file__input"
                          className="file__input"
                          type="file"
                          multiple
                          onChange={(e) => setFile(e.target.files)}
                           />
                        <RiLinksFill/>
            </label>

            </div>
       </div>
    </div>
  )
}

export default Chat