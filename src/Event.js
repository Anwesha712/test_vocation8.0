import React from 'react'
import './event.css';
import Img1 from './assets/Img1.jpeg';
import rap from './assets/rap.jpg'
import Wow from './assets/wow.png'
import ekant from './assets/ekant.png'
import amp from './assets/amp.png'
import sync from './assets/sync.png'
import come from './assets/comings.png'
import ant from './assets/ant.jpeg'

export default function Event() {
    let data=[
        {
            id: 1,
            imgSrc: rap,
        },
        {
            id: 2,
            imgSrc: Wow,
        },
        {
            id: 3,
            imgSrc: ekant,
        },
        {
            id: 4,
            imgSrc: amp,
        },
        {
            id: 5,
            imgSrc: sync,
        },
        {
            id: 6,
            imgSrc: amp,
        }
        ]
  return (
    <>
      <div className="inline-flex flex-col px-4 md:px-10 lg:px-24 w-full box-border h-fit bg-black">
        <div className="font-black text-5xl text-white my-4 mx-auto">
          EVENTS
        </div>
        <div className="inline-flex flex-wrap w-full justify-center gap-4">
          {data.map((item) => {
            return (
              <div className="inline-flex flex-col w-80 h-96" key={item.id}>
                <div className="w-full h-full">
                  <img
                    src={item.imgSrc}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="btn">
                  {" "}
                  <button className="w-full bg-[#DAFFED] text-black rounded-xl  hover:cursor-pointer hover:bg-gradient-to-r hover:font-bold from-[#3e3b92] to-[#f44369] hover:text-transparent hover:bg-clip-text"> REGISTER </button>{" "}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
// style={{width:'100%' , height:'400px' }}
// style={{width:'100%' , height:'35px' }}
