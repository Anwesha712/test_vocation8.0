import React from 'react'
import Logo4 from "./assets/logo3.1.png"
import Logo1 from "./assets/logo1.png"
import Gallery from './gallery'

const Hero2 = () => {
  return (
    <div className=' bg-bg1 h-screen w-full items-center justify-center text-white flex'>
     <div className='p-4 bg-black h-5/5 w-4/4 shadow-2xl items-center justify-center '>
      <Gallery/>
    </div> 
    </div>
  )
}

export default Hero2