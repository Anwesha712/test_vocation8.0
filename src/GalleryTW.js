import React, { useEffect } from "react";
import { useState } from "react";
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
];
const GalleryTW = () => {
  const [image, setImage] = useState(data[0].imgSrc);
  const handleImageClick = (image) => {
    setImage(image);
  };
  const [visible, setVisible] = useState(9);
  const showMore = () => {
    setVisible((prevValue) => prevValue + 4);
  };

  return (
    <div className="inline-flex flex-col px-4 md:px-10 lg:px-24 w-full box-border h-fit bg-black">
      <div className="font-font5 text-5xl text-white my-4 mx-auto">Gallery</div>
      <div className="w-full h-[75vh] my-4">
        <img src={image} className="w-full h-full object-contain" alt="" />
      </div>
      <div className="columns-2 md:columns-3 lg:columns-4 box-border w-full md:w-4/5 mx-auto  gap-x-4 ">
        {data.slice(0, visible).map((image, index) => (
          <div
            key={index}
            className="h-fit w-fit hover:scale-110  duration-500 transform"
          >
            <img
              onClick={() => handleImageClick(image.imgSrc)}
              key={index}
              src={image.imgSrc}
              alt={`${index}`}
              className="grayscale hover:grayscale-0 transition  w-full h-full   rounded-md my-4"
            />
          </div>
        ))}
        <div
          onClick={showMore}
          className="inline-flex w-full  h-32 bg-gray-900 transition duration-500 transform hover:scale-110  z-0 rounded-md text-white font-semibold text-3xl  flex-col justify-center px-4 font-font3 cursor-pointer"
        >
          See More
        </div>
      </div>
    </div>
  );
};

export default GalleryTW;
