import React from 'react'
import Logo4 from "./assets/logo3.1.webp"
import Logo1 from "./assets/logo1.webp"


const Registration1 = () => {
  return (
    <div className=' bg-[#131515] h-auto w-screen items-center justify-center text-white flex '>
        <div class='flex items-center justify-center min-h-screen from-[bg2] to-[bg1] bg-gradient-to-br'>
    <div class='w-full max-w-lg px-10 py-8 mx-auto bg-black rounded-lg shadow-xl'>
        <div class='max-w-md mx-auto space-y-6'>
            <div className=' flex justify-between h-12'><img src={Logo4} classNmae='' /> <img src={Logo1} alt="" className='' /></div>
    
            <p class='text-gray-400'>Participate in the Biggest Music Extravanganza and win Cash Prizes!</p>
    
    <div class="border-b border-gray-900/10 pb-12">
      

      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div class="sm:col-span-3">
          <label for="first-name" class="block text-sm font-medium leading-6 text-gray-600">First name</label>
          <div class="mt-2">
            <input type="text" name="first-name" id="first-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div class="sm:col-span-3">
          <label for="last-name" class="block text-sm font-medium leading-6 text-gray-600">Last name</label>
          <div class="mt-2">
            <input type="text" name="last-name" id="last-name"  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div class="sm:col-span-4">
          <label for="email" class="block text-sm font-medium leading-6 text-gray-600">Ph/WhatsApp No.</label>
          <div class="mt-2">
            <input id="" name="text" type="text" placeholder='1234567890' class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div class="sm:col-span-4">
          <label for="email" class="block text-sm font-medium leading-6 text-gray-600">Email address</label>
          <div class="mt-2">
            <input id="" name="email" type="email" placeholder='example@gmail.com'   class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div class="sm:col-span-3">
          <label for="" class="block text-sm font-medium leading-6 text-gray-600">Event</label>
          <div class="mt-2">
            <select id="" name=""  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
              <option>Choose From Below</option>
              <option>Solo</option>
              <option>Ekant</option>
              <option>SYNC</option>
              <option>Battle of Bands</option>
            </select>
          </div>
        </div>

        <div class="col-span-full">
          <label for="street-address" class="block text-sm font-medium leading-6 text-gray-600">College Name</label>
          <div class="mt-2">
            <input type="text" name="" id="" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>

        

        
      </div>
    </div>
    
    <button className='bg-white rounded-full text-black font-bold h-10 w-24 text-xl'><p className='bg-gradient-to-r from-[#3e3b92] to-[#f44369] text-transparent bg-clip-text p-1'>Submit</p></button>
        </div>
    </div>
</div>
    </div>
  )
}

export default Registration1