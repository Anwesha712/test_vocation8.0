import React from "react";
import "./ev_page.css";
import Img1 from "./assets/Img1.webp";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { eventData } from "./dataSetEvent";
import { useParams } from "react-router-dom";

export default function Ev_page() {
  const id = useParams();
  console.log(id.id);
  return (
    <>
      <Navbar className="hidden lg:relative" />
      <div className="ev_page_main pt-12 bg-black text-white">
        <div className="ev_top">
          <div className="hero_pic">
            <img src={eventData[id.id - 1].imgSrc} />
          </div>
          <div className="ev_right">
            <h2 style={{ fontSize: "30px" }}>COORDINATORS</h2>
            <p>
              {eventData[id.id - 1].cdName1} - {eventData[id.id - 1].cdNumber1}
            </p>
            <p>
              {eventData[id.id - 1].cdName2} - {eventData[id.id - 1].cdNumber2}
            </p>
            <h3 style={{ fontSize: "24px" }}>DEADLINE</h3>
            <p>{eventData[id.id - 1].deadline}</p>
            <button
              className="btn_1 bg-white text-black rounded-md py-2 font-bold"
              style={{ padding: "5px 0 5px 0" }}>
              REGISTER HERE
            </button>
            <button
              className="btn_2 border-white bg-black text-white rounded-md py-2 font-bold"
              style={{ padding: "5px 0 5px 0" }}>
              DOWNLOAD BROCHURE
            </button>
          </div>
        </div>
        <h1
          style={{ textAlign: "center", fontSize: "50px", marginTop: "20px" }}>
          {eventData[id.id - 1].headline}
        </h1>
        <div className="ev_bottom">
          <div className="ev_bottomLeft">
            <h1 style={{ fontSize: "30px" }}>GUIDELINE</h1>
            <p> {eventData[id.id - 1].guide} </p>
          </div>
          <div className="finals">
            <h2 style={{ fontSize: "30px" }}>FINALS</h2>
            <span>
              DATE : <span>{eventData[id.id - 1].finalDate}</span>{" "}
            </span>
            <span>
              TIME : <span>{eventData[id.id - 1].finalTime}</span>{" "}
            </span>
            <span>
              VENUE : <span>{eventData[id.id - 1].finalVenue}</span>{" "}
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
