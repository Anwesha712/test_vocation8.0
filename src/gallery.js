import React, { useState } from "react";
import "./gallery.css";
import Close from "./assets/closeImg.webp";
import Img1 from "./assets/Img1.webp";
import Img2 from "./assets/Img2.webp";
import Img3 from "./assets/Img3.webp";
import Img4 from "./assets/Img4.webp";
import Img5 from "./assets/Img5.webp";
import Img6 from "./assets/Img6.webp";
import Img7 from "./assets/Img7.webp";
import Img8 from "./assets/Img8.webp";
import Img9 from "./assets/Img9.webp";
import Img10 from "./assets/Img10.webp";
import Img11 from "./assets/Img11.webp";
import Img12 from "./assets/Img12.webp";
import Img13 from "./assets/Img13.webp";
import Img14 from "./assets/Img14.webp";

const Gallery = () => {
  const route = "/Gallery";
  let data = [
    {
      id: 1,
      imgSrc: Img1,
    },
    {
      id: 2,
      imgSrc: Img2,
    },
    {
      id: 3,
      imgSrc: Img3,
    },
    {
      id: 4,
      imgSrc: Img4,
    },
    {
      id: 5,
      imgSrc: Img5,
    },
    {
      id: 6,
      imgSrc: Img6,
    },
    {
      id: 7,
      imgSrc: Img7,
    },
    {
      id: 8,
      imgSrc: Img8,
    },
    {
      id: 9,
      imgSrc: Img9,
    },
    {
      id: 10,
      imgSrc: Img10,
    },
    {
      id: 11,
      imgSrc: Img11,
    },
    {
      id: 12,
      imgSrc: Img12,
    },
    {
      id: 13,
      imgSrc: Img13,
    },
    {
      id: 14,
      imgSrc: Img14,
    }
  ];

  const [model, setModel] = useState(false);
  const [temp, setTemp] = useState("");
  const getImg = (imgSrc) => {
    setTemp(imgSrc);
    setModel(true);
  };
  const [visible, setVisible] = useState(10);
  const showMore = () => {
    setVisible((prevValue) => prevValue + 4);
  };

  return (
    <>
      <div className={model ? "model open" : "model"}>
        <img src={temp} />
        <img
          src={Close}
          onClick={() => setModel(false)}
          className="close"
          style={{ width: "30px" }}
        />
      </div>
      <div className="gallery">
        {data.slice(0, visible).map((item) => {
          return (
            <div
              className="pics"
              key={item.id}
              onClick={() => getImg(item.imgSrc)}>
              <img src={item.imgSrc} style={{ width: "100%" }} />
            </div>
          );
        })}
      </div>
      <div className="btn_show">
        <button
          onClick={showMore}
          className="bg-gradient-to-r from-[#3e3b92] to-[#f44369]">
          Show More
        </button>
      </div>
    </>
  );
};
export default Gallery;
