import React from "react";
import "./ev_page.css";
import Img1 from "./assets/Img1.webp";
import Navbar from "./Navbar";
import Footer from "./Footer";
import brochure from "./assets/VOCATIONS 8.0 By SARGAM Brochure 2024 (1).pdf";
import { eventData } from "./dataSetEvent";
import { useParams, Link } from "react-router-dom";

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
            <h2 style={{ fontSize: "30px" }} className="font-font5">
              COORDINATORS
            </h2>
            <p className="font-font3">
              {eventData[id.id - 1].cdName1} - {eventData[id.id - 1].cdNumber1}
            </p>
            <p className="font-font3">
              {eventData[id.id - 1].cdName2} - {eventData[id.id - 1].cdNumber2}
            </p>
            <h3 style={{ fontSize: "24px" }} className="font-font5">
              DEADLINE
            </h3>
            <p className="font-font3">{eventData[id.id - 1].deadline}</p>
            
              <Link to={eventData[id.id - 1].formUrl}>
                <button className="btn bg-white text-black rounded-md font-bold px-4 py-2 font-font1 ">
                {eventData[id.id - 1].btnName}
                </button>
              </Link>
            
            <a href={brochure} download="Vocation_brochure"><button className="btn_2 bg-black text-white rounded-md font-bold px-4 py-2 font-font1">
              DOWNLOAD BROCHURE
            </button> </a> 
          </div>
        </div>
        <h1
          style={{ textAlign: "center", fontSize: "50px", marginTop: "20px" }}
          className="font-font2">
          {eventData[id.id - 1].headline}
        </h1>
        <div className="ev_bottom">
          <div className="ev_bottomLeft">
            <h1 style={{ fontSize: "30px" }} className="font-font4">
              Guideline
            </h1>
            <p className="font-font3"> {eventData[id.id - 1].guide} </p>
          </div>
          <div className="finals">
            <h2 style={{ fontSize: "30px" }} className="font-font4">
              Time
            </h2>
            <span className="font-font3">
              DATE :{" "}
              <span className="font-font3">
                {eventData[id.id - 1].finalDate}
              </span>{" "}
            </span>
            <span className="font-font3">
              TIME :{" "}
              <span className="font-font3">
                {eventData[id.id - 1].finalTime}
              </span>{" "}
            </span>
            <span className="font-font3">
              VENUE :{" "}
              <span className="font-font3">
                {eventData[id.id - 1].finalVenue}
              </span>{" "}
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
