import React from "react";
import "./event.css";
import Img1 from "./assets/Img1.jpeg";
import ekant from "./assets/EKANT.png";
import sync from "./assets/SYNC.png";
import amplify from "./assets/AMPLIFY.png";
import wow from "./assets/wow.png";
import rap from "./assets/RAP.jpeg";
export default function Event() {
  let data = [
    {
      id: 1,
      imgSrc: ekant,
    },
    {
      id: 2,
      imgSrc: sync,
    },
    {
      id: 3,
      imgSrc: amplify,
    },
    {
      id: 4,
      imgSrc: wow,
    },
    {
      id: 5,
      imgSrc: rap,
    },
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
              <div className="inline-flex flex-col w-80 h-96" key={item.id}>
                <div className="w-full h-full">
                  <img
                    src={item.imgSrc}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="btn">
                  {" "}
                  <button className="w-full"> REGISTER </button>{" "}
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
