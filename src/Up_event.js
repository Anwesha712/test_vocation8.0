import React from 'react'
import "./up_event.css"
import Img1 from "./assets/Img1.jpeg"
import Icon_arrow from './assets/icon_arrow.png'

const Up_event = () => {

    let data=[
    {
        id: 1,
        imgSrc: Img1,
        head: "Vocations 7.0",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor neque cum illo porro quidem ut laudantium facilis vel saepe beatae.",
        date: "abc",
        venue: "abc",
    },
    {
        id: 2,
        imgSrc: Img1,
        head: "Vocations 7.0",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor neque cum illo porro quidem ut laudantium facilis vel saepe beatae.",
        date: "abc",
        venue: "abc",
    },
    {
        id: 3,
        imgSrc: Img1,
        head: "Vocations 7.0",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor neque cum illo porro quidem ut laudantium facilis vel saepe beatae.",
        date: "abc",
        venue: "abc",
    }
    ]
    return(
        <>
        <div className="font-black text-5xl text-white my-4 mx-auto center ml-20">
          UPCOMING EVENTS
        </div>
         <div className="up inline-flex flex-wrap justify-center gap-2 w-full">
         {data.map((item)=>{
                return(
                    <>
                    <div className="up_main">
                    <div className="up_pic w-[40%] h-72 md:w-60 md:h-64" key={item.id}>
                        <img src={item.imgSrc} style={{width:'100%', height:"100%" }}/>
                    </div>
                    <div className="up_write">
                        <div className="head" style={{background:"transparent"}}>{item.head} <hr /></div>
                        <div className="body" style={{background:"transparent"}}>{item.body}</div>
                        <div className="date_ven" style={{background:"transparent"}}>
                            <div className="date"style={{background:"transparent"}}><span style={{background:"transparent"}} >DATE : </span>{item.date}</div>
                            <div className="venue" style={{background:"transparent"}}><span style={{background:"transparent"}}>VENUE : </span>{item.venue}</div>
                        </div>
                        <div className="arrow" style={{background:"transparent"}}> <img src={Icon_arrow}style={{background:"transparent"}}/></div>
                    </div> 
                    </div>
                    </>
                    
                    
                     )
                    }
                )
         }
        </div>
        </>
    )

        
        

}
export default Up_event;
