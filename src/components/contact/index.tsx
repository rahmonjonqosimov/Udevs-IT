'use client'
import React from 'react'
import { Box, Button,  TextField } from '@mui/material'

// react-icons
import { HiOutlineLocationMarker, HiOutlinePhone,HiOutlineMail } from "react-icons/hi";
import { BiLogoTelegram, BiLogoYoutube, BiLogoInstagram, BiLogoFacebook, BiLogoTwitter } from "react-icons/bi";

const BOT__TOKEN:string = "7039163383:AAHAschkQDggIAsrj6Oj6R3odtcTRRPXhms";
const USER__ID:string = "5980648858";



const Contact:React.FC = () => {


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); 
        const data = new FormData(event.currentTarget);

        let text:string = "User %0A%0A";
        text += `User Name: ${data.get('name')} %0A`;
        text += `Email: ${data.get('email')} %0A`;
        text += `Comment: ${data.get('comment')} %0A%0A`;

        let url:string = `https://api.telegram.org/bot${BOT__TOKEN}/sendMessage?chat_id=${USER__ID}&text=${text}`;
        let api:XMLHttpRequest = new XMLHttpRequest();
        api.open("GET", url, true);
        api.send();
        event.currentTarget.reset();
        
      };
    

  return (
    <div className='contact-section' id='contact'>
       <div className="container">
              <h1 className='contact__title'>Contact</h1>

              <div className='contact__form'>

                    <div className="inputs">
                        <h4>Leave us a message</h4>
                        <Box component="form" onSubmit={handleSubmit}  sx={{ mt: 1 }}>
                                  <TextField
                                  margin="normal"
                                  required
                                  fullWidth
                                  id="name"
                                  label="Name"
                                  name="name"
                                  autoComplete="email"
                                  autoFocus
                                />
                                  <TextField
                                  margin="normal"
                                  required
                                  fullWidth
                                  id="email"
                                  label="Email Address"
                                  name="email"
                                  autoComplete="email"
                                  autoFocus
                                />
                                <TextField
                                  margin="normal"
                                  required
                                  fullWidth
                                  name="message"
                                  label="Briefly describe your project"
                                  type="text"
                                  id="message"
                                  sx={{ mt: 3, mb: 2 }}
                                />
                             
                                <Button
                                  type="submit"
                                  variant="contained"
                                  sx={{ mt: 3, mb: 2, backgroundColor: "#1B5BF7", py: '10px', px: "70px"}}
                                >
                                  Send
                                </Button>
                        </Box>
                    </div>

                    <div className="connection">

                            <a target='_blank' href='#'  className="rows">
                                <HiOutlineLocationMarker/>
                                <span>Ташкент,  Мирзо-Улугбекский район, 5-й пр. Курган, 32  адрес</span>
                            </a>
                            <a target='_blank' href='tel:+998 33 66 00 999' className="rows">
                                <HiOutlinePhone/>
                                <span>+998 33 66 00 999</span>
                            </a>
                            <a target='_blank' href='azizbek.b@udevs.io' className="rows">
                                <HiOutlineMail/>
                                <span>azizbek.b@udevs.io</span>
                            </a>
                            <a target='_blank' href='https://t.me/azizbekbakhodirov' className="rows">
                                <BiLogoTelegram/>
                                <span> t.me/azizbekbakhodirov</span>
                            </a>

                            <div className="rows icona">
                                <a target='_blank' href="/">
                                        <BiLogoYoutube/>
                                </a>
                                <a target='_blank' href="/">
                                        <BiLogoInstagram/>
                                </a>
                                <a target='_blank' href="/">
                                        <BiLogoFacebook/>
                                </a>
                                <a target='_blank' href="/">
                                        <BiLogoTwitter/>
                                </a>
                            </div>

                           

                    </div>

              </div>
       </div>
    </div>
  )
}

export default Contact