import React, { useState } from "react";
import "./member.css";
import Img1 from "./assets/Img1.jpeg";
import Icon_fb from "./assets/fb1.png";
import Icon_insta from "./assets/insta1.png";
import { Link } from "react-router-dom";
import Srinjoy from "./assets/SrinjoyGhosh.jpg";
import Sourish from "./assets/SourishGuha.jpeg";
const Member = () => {
  let data = [
    {
      id: 1,
      imgSrc: Srinjoy,
      about:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste dolore exercitationem repudiandae!",
      name: "Abc Abc",
      fb: "https://www.facebook.com/srinjoy.ghosh.92",
      insta: "https://www.instagram.com/_srinjoy_ghosh_/",
    },
    {
      id: 2,
      imgSrc: Sourish,
      about:
        "This is Sourish Guha speaking as the Cultural Advisor of SARGAM. Being a part of the SARGAM fam has been one of the most exciting happenings for me. The bond, the affection and the love for the art that this club shows in a rare find. ",
      name: "Sourish Guha",
      fb: "",
      insta: "https://www.instagram.com/_the6stringguy",
    },
    {
      id: 3,
      imgSrc: Img1,
      about:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste dolore exercitationem repudiandae!",
      name: "Abc Abc",
      fb: "https://www.facebook.com/",
      insta: "https://www.facebook.com/",
    },
    {
      id: 4,
      imgSrc: Img1,
      about:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste dolore exercitationem repudiandae!",
      name: "Abc Abc",
      fb: "https://www.facebook.com/",
      insta: "https://www.facebook.com/",
    },
    {
      id: 5,
      imgSrc: Img1,
      about:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste dolore exercitationem repudiandae!",
      name: "Abc Abc",
      fb: "https://www.facebook.com/",
      insta: "https://www.facebook.com/",
    },
    {
      id: 6,
      imgSrc: Img1,
      about:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste dolore exercitationem repudiandae!",
      name: "Abc Abc",
      fb: "https://www.facebook.com/",
      insta: "https://www.facebook.com/",
    },
    {
      id: 7,
      imgSrc: Img1,
      about:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste dolore exercitationem repudiandae!",
      name: "Abc Abc",
      fb: "https://www.facebook.com/",
      insta: "https://www.facebook.com/",
    },
    {
      id: 8,
      imgSrc: Img1,
      about:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste dolore exercitationem repudiandae!",
      name: "Abc Abc",
      fb: "https://www.facebook.com/",
      insta: "https://www.facebook.com/",
    },
    {
      id: 9,
      imgSrc: Img1,
      about:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste dolore exercitationem repudiandae!",
      name: "Abc Abc",
      fb: "https://www.facebook.com/",
      insta: "https://www.facebook.com/",
    },
    {
      id: 10,
      imgSrc: Img1,
      about:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste dolore exercitationem repudiandae!",
      name: "Abc Abc",
      fb: "https://www.facebook.com/",
      insta: "https://www.facebook.com/",
    },
    {
      id: 11,
      imgSrc: Img1,
      about:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste dolore exercitationem repudiandae!",
      name: "Abc Abc",
      fb: "https://www.facebook.com/",
      insta: "https://www.facebook.com/",
    },
  ];
  const [visible, setVisible] = useState(7);
  const others = () => {
    setVisible((prevValue) => prevValue + 4);
  };

  return (
    <>
      <div className="inline-flex flex-col px-2 md:px-10 lg:px-48 w-full box-border h-fit bg-black">
        <div className="font-black text-5xl text-white my-4 mx-auto center">
          MEMBERS
        </div>
        <div className="member inline-flex flex-wrap justify-center gap-2 w-full">
          {data.slice(0, visible).map((item) => {
            return (
              <div className="photo w-[45%] h-72 md:w-60 md:h-64" key={item.id}>
                <img
                  src={item.imgSrc}
                  className="image object-cover h-full w-full"
                />
                <div className="write text-white w-full h-full box-border px-2">
                  <div className="about">{item.about}</div>
                  <div className="name">{item.name}</div>
                  <div className="link inline-flex">
                    {item.fb.length > 5 && (
                      <div className="fb" style={{ background: "transparent" }}>
                        <Link
                          to={item.fb}
                          style={{ background: "transparent" }}>
                          <img src={Icon_fb} style={{ width: "20%" }} alt="" />
                        </Link>
                      </div>
                    )}

                    {item.insta.length > 5 && (
                      <div
                        className="insta"
                        style={{ background: "transparent" }}>
                        <Link
                          className=" mx-auto p-0 inline-flex"
                          to={item.insta}
                          style={{ background: "transparent" }}>
                          <img
                            src={Icon_insta}
                            style={{ width: "25%" }}
                            alt=""
                          />
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
          {/* <div
            onClick={others}
            className="inline-flex w-full  h-32 bg-gray-900 transition duration-500 transform hover:bg-gray-950  z-0 rounded-md text-white font-semibold text-3xl  flex-col justify-center px-4 font-font3 cursor-pointer others">
            See Others
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Member;
