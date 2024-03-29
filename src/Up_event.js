import React from "react";
import "./up_event.css";
import Img1 from "./assets/Img1.webp";
import mainpos from "./assets/mpos.jpg";
import Icon_arrow from "./assets/icon_arrow.webp";
import Upcoming from "./Upcoming";

const Up_event = () => {
  return (
    <>
      <div className="inline-flex flex-col justify-center font-font3 bg-black text-5xl text-white px-4 md:px-24 lg:px-54 py-10 box-border">
        <div className="mx-auto w-fit">Upcoming Events</div>
        <Upcoming />
      </div>
    </>
  );
};
export default Up_event;
