import React from 'react'
import Logo1 from "./assets/logo1.png"
import { useNavigate } from 'react-router-dom'
import Registration1 from './Registration1'

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className=' bg-bg1 h-20 w-full drop-shadow-xl text-3xl text-white inline-flex justify-between items-center p-2'>
        <div className='h-20 w-20 drop-shadow-2xl flex items-center'>
            <img src={Logo1} alt='logo' />
            <h1 className='text-3xl font-bold'>SARGAM</h1>
        </div>
        <div className='flex text-lg font-medium items-center'>
            <ul className='flex items-center w-full '>
                <li onClick={()=>navigate("/")} className='p-4 hover: ease-in-out hover:cursor-pointer font-font1'>Home</li>
                <li className='p-4 hover: ease-in-out hover:cursor-pointer font-font1'>About</li>
                <li onClick={()=>navigate("/Connect")} className='p-4 hover: ease-in-out hover:cursor-pointer font-font1'>Connect</li>
                <li className='p-4' ><button className=' bg-white rounded-full text-black font-bold h-10 w-24 '><p onClick={()=>navigate("/Registration")} className=' hover:cursor-pointer font-font1 hover:bg-gradient-to-r from-[#3e3b92] to-[#f44369] hover:text-transparent hover:bg-clip-text '>Register</p></button></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar