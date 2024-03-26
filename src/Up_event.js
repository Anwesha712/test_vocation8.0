import React from 'react'
import "./up_event.css"
import Img1 from "./assets/Img1.jpeg"
import mainpos from "./assets/mpos.jpg"
import Icon_arrow from './assets/icon_arrow.png'

const Up_event = () => {

    let data=[
    {
        id: 1,
        imgSrc: mainpos,
        head: "Vocations 8.0",
        body: "The ultimate music extravaganza, is an annual event dedicated to showcasing the rich diversity of musical talent from around the region. From soul-stirring melodies to electrifying beats, this festival offers something for every music lover, regardless of age or background.",
        date: "07.04.24",
        venue: "MSIT Campus",
    }
    ]
    return(
        <>
        <div className="main_head font-font3 text-5xl text-white my-4 mx-auto center">
          Upcoming Events
        </div>
         <div className="up inline-flex flex-wrap justify-center gap-2 w-full">
         {data.map((item)=>{
                return(
                    <>
                    <div className="up_main">
                    <div className="up_pic" key={item.id}>
                        <img src={item.imgSrc} style={{width:'100%', height:"100%" }}/>
                    </div>
                    <div className="up_write">
                        <div className="head font-font3 text-3xl " style={{background:"transparent"}}>{item.head} <hr /></div>
                        <div className="body leading-tight" style={{background:"transparent"}}>{item.body}</div>
                        <div className=' inline-flex w-full justify-between'>
                            <div className="date_ven" style={{background:"transparent"}}>
                                <div className="date font-bold"style={{background:"transparent"}}><span style={{background:"transparent"}} >DATE : </span>{item.date}</div>
                                <div className="venue font-bold" style={{background:"transparent"}}><span style={{background:"transparent"}}>VENUE : </span>{item.venue}</div>
                            </div>
                            <div className="arrow w-10 h-10 hover:drop-shadow-xl hover:bg-white " style={{background:"transparent"}}> <img className='w-full h-full object-cover ' src={Icon_arrow}style={{background:"transparent"}}/></div>
                        </div>
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
