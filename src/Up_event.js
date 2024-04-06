import React from "react";
import "./up_event.css";
import mainpos from "./assets/mpos.jpg";
import Guest from "./assets/guestPoster.jpeg";
import Timer from "./Timer.js";
import GuestVid from "./assets/guest_video.mp4";

const Up_event = () => {
  let data = [
    {
      id: 1,
      imgSrc: mainpos,
      head: "Vocations 8.0",
      body: "The ultimate music extravaganza, is an annual event dedicated to showcasing the rich diversity of musical talent from around the region. From soul-stirring melodies to electrifying beats, this festival offers something for every music lover, regardless of age or background.",
      date: "07.04.24",
      venue: "MSIT Campus",
    },
  ];
  return (
    <>
      <div className="main_head font-font3 text-5xl text-white my-4 mx-auto center">
        Upcoming Events
      </div>
      <div className="upFront">
      <div className="up ">
        {data.map((item) => (
          <div className="up_main" key={item.id}>
            <div className="up_pic" >
              <img
                src={item.imgSrc}
                style={{ width: "100%", height: "100%" }}
                alt=""
              />
            </div>
            <div className="up_write">
              <div
                className="head font-font3 text-3xl "
                style={{ background: "transparent" }}
              >
                {item.head} <hr />
              </div>
              <div
                className="body leading-tight"
                style={{ background: "transparent" }}
              >
                {item.body}
              </div>
              <div className=" inline-flex w-full justify-between">
                <div
                  className="date_ven"
                  style={{ background: "transparent" }}
                >
                  <div
                    className="date font-bold"
                    style={{ background: "transparent" }}
                  >
                    <span style={{ background: "transparent" }}>
                      DATE :{" "}
                    </span>
                    {item.date}
                  </div>
                  <div
                    className="venue font-bold"
                    style={{ background: "transparent" }}
                  >
                    <span style={{ background: "transparent" }}>
                      VENUE :{" "}
                    </span>
                    {item.venue}
                  </div>
                </div>
                {/* <div className="arrow w-10 h-10 hover:drop-shadow-xl hover:bg-white " style={{background:"transparent"}}> <img className='w-full h-full object-cover ' src={Icon_arrow}style={{background:"transparent"}}/></div> */}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="carousel">
        <div className="carousel_top" style={{height:'80%'}}>
        <div id="carouselExampleIndicators" className="carousel slide" style={{height:'100%'}}>
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 0"></button>
    {/*<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>*/}
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={Guest} className="d-block w-100" style={{objectFit:'cover', padding:'10px',borderRadius:'20px'}} alt="..."/>
    </div>
    
    <div className="carousel-item">
     <video width="200" autoPlay className="guest_vid" controls >
      <source src={GuestVid} type="video/mp4"/>
     </video>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
      <div className="carousel_bottom">
        <Timer/>
      </div>
      </div>
      </div>
      </div>
    </>
  );
};
export default Up_event;
