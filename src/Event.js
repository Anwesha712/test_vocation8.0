import React from "react";
import "./event.css";
import rap from "./assets/hip hop havoc-min.png";
import Wow from "./assets/wings of words-min.png";
import ekant from "./assets/ekant-min.png";
import amp from "./assets/amplify-min.png";
import sync from "./assets/SYNC (3)-min.png";
import ant from "./assets/antakshari-min.png";
import art from "./assets/artractive-min.png";
import cb from "./assets/camera bondi final-min.png";
import cs from "./assets/corral scribbles final-min.png";
import lc from "./assets/Lights Camera Action - Poster-min.png";
import re from "./assets/REELVERSE - Poster-min.png";


import { useNavigate, Link } from "react-router-dom";
export default function Event() {
  let data = [
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
      id: 5,
      imgSrc: amp,
    },
    {
      id: 4,
      imgSrc: sync,
    },
    {
      id: 6,
      imgSrc: ant,
    },
    {
      id:7,
      imgSrc:art,
    },
    {
      id:8,
      imgSrc:cb,
    },
    {
      id:9,
      imgSrc:cs,
    },
    {
      id:10,
      imgSrc:lc,
    },
    {
      id:11,
      imgSrc:re,
    }
  ];
  return (
    <>
      <div className="inline-flex flex-col px-4 md:px-10 lg:px-24 w-full box-border h-fit bg-black">
        <div className="font-black text-5xl text-white my-4 mx-auto">
          EVENTS
        </div>
        <div className="inline-flex flex-wrap w-full justify-center gap-4">
          {data.map((item) => {
            return ( 
              <div className="inline-flex flex-col w-80 h-120" key={item.id}>
                <div className="w-full h-full">
                  <img
                    src={item.imgSrc}
                    className="object-scale-down w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="btn">
                  <Link to={`/event/${item.id}`}>
                  <button className="w-full bg-[#DAFFED] py-2 font-bold text-black rounded-xl transition-all duration-300 ease-in-out hover:cursor-pointer hover:bg-gradient-to-r hover:from-[#3e3b92] hover:via-[#6b50e6] hover:to-[#f44369] hover:shadow-lg hover:scale-105 hover:bg-opacity-100">
                    REGISTER
                  </button>
                  </Link>
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
