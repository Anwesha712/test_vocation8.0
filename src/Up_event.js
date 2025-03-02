import React, { useRef, useEffect } from "react";
import "./up_event.css";
import mainpos from "./assets/mpos.jpg";
import Guest from "./assets/guestPoster.jpeg";
import Timer from "./Timer.js";
import GuestVid from "./assets/guest_video.mp4";

const Up_event = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const carousel = document.getElementById("carouselExampleIndicators");

    const handleSlide = (event) => {
      const activeIndex = event.to; // Bootstrap provides the index of the new active slide

      if (activeIndex === 1) {
        videoRef.current?.play();
      } else {
        videoRef.current?.pause();
      }
    };

    carousel.addEventListener("slid.bs.carousel", handleSlide);

    return () => {
      carousel.removeEventListener("slid.bs.carousel", handleSlide);
    };
  }, []);

  let data = [
    {
      id: 1,
      imgSrc: mainpos,
      head: "Vocations 9.0",
      body: "The ultimate music extravaganza, is an annual event dedicated to showcasing the rich diversity of musical talent from around the region. From soul-stirring melodies to electrifying beats, this festival offers something for every music lover, regardless of age or background.",
      date: "12.04.25",
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
              <div className="up_pic">
                <img
                  src={item.imgSrc}
                  style={{ width: "100%", height: "100%" }}
                  alt=""
                />
              </div>
              <div className="up_write">
                <div className="head font-font3 text-3xl">
                  {item.head} <hr />
                </div>
                <div className="body leading-tight">{item.body}</div>
                <div className="inline-flex w-full justify-between">
                  <div className="date_ven">
                    <div className="date font-bold">
                      <span>DATE: </span>
                      {item.date}
                    </div>
                    <div className="venue font-bold">
                      <span>VENUE: </span>
                      {item.venue}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="carousel">
          <div className="carousel_top" style={{ height: "80%" }}>
            <div id="carouselExampleIndicators" className="carousel slide" style={{ height: "100%" }}>
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={Guest} className="d-block w-100" style={{ objectFit: "cover", padding: "10px", borderRadius: "20px" }} alt="Guest Poster"/>
                </div>

                <div className="carousel-item">
                  <video ref={videoRef} width="200" className="guest_vid" controls>
                    <source src={GuestVid} type="video/mp4"/>
                  </video>
                </div>
              </div>

              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon bg-black" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon bg-black" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="carousel_bottom">
            <Timer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Up_event;
