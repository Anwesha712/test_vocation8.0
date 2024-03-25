import React from 'react'
import './event.css';
import Img1 from './assets/Img1.jpeg';

export default function Event() {
    let data=[
        {
            id: 1,
            imgSrc: Img1,
        },
        {
            id: 2,
            imgSrc: Img1,
        },
        {
            id: 3,
            imgSrc: Img1,
        },
        {
            id: 4,
            imgSrc: Img1,
        },
        {
            id: 5,
            imgSrc: Img1,
        },
        {
            id: 6,
            imgSrc: Img1,
        }
        ]
  return (
    <>
    <div className="inline-flex flex-col px-4 md:px-10 lg:px-24 w-full box-border h-fit bg-black">
    <div className="font-black text-5xl text-white my-4 mx-auto">EVENTS</div>
    <div className="event ">
    
         {data.map((item)=>{
                return(
                    <div className="post" key={item.id}>
                        <img src={item.imgSrc} style={{width:'100%' , height:'350px' }} />
                        <div className="btn" > <button style={{width:'100%' , height:'40px' }}> REGISTER </button> </div>
                    </div> 
                     )
                    }
                )
         }

    </div>
    </div>
    </>
  )
}
// style={{width:'100%' , height:'400px' }}
// style={{width:'100%' , height:'35px' }}