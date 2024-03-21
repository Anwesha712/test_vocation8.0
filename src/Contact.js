import React from 'react'
import Navbar from './Navbar'
import Logo1 from "./assets/logo1.png"
import FB from "./assets/fb1.png"
import Insta from "./assets/insta1.png"
import YT from "./assets/youtube_1.png"
import Gmail from "./assets/gmail1.png"
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <>
    <Navbar />
    <div className=' bg-bg2 h-screen w-screen items-center justify-center text-white flex'>
      <div className='p-4 bg-bg1 h-4/5 w-3/4 rounded-2xl shadow-2xl items-center justify-center '>
        <div className='flex items-center'><div className='h-20 w-20 drop-shadow-2xl flex items-center justify-center'>
              <img src={Logo1} alt='logo' />
              
          </div>
          <div><h1 className=' font-bold text-3xl font-font1'>Connect With Us</h1></div>
          

        </div>
        <div className='p-4 flex justify-center items-center'><img src={FB} alt='' className=' h-10 w-10' /><Link to = 'https://www.facebook.com/sargam2016msit'><p className='p-2 font-bold text-2xl '>Sargam - The MUSIC CLUB of MSIT</p></Link></div>
        <div className='p-4 flex justify-center items-center'><img src={Insta} alt='' className=' h-10 w-10' /><Link to = 'https://www.instagram.com/sargam_msit/'><p className='p-2 font-bold text-2xl '>@sargam_msit</p></Link></div>
        <div className='p-4 flex justify-center items-center'><img src={YT} alt='' className=' h-7 w-10' /><Link to = 'https://www.youtube.com/@sargam_msit'><p className='p-2 font-bold text-2xl '>@sargam_msit</p></Link></div>
        <div className='p-4 flex justify-center items-center'><img src={Gmail} alt='' className=' h-10 w-10' /><p className='p-2 font-bold text-2xl '>sargammsit2018@gmail.com</p></div>
      </div>
    </div>
    </>
  )
}

export default Contact